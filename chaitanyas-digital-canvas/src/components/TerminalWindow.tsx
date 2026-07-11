import { useEffect, useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { trafficLightJokes, type TrafficLightAction } from '@/data/devHumor';

const COMMANDS = [
  {
    cmd: 'whoami',
    output: `${portfolioData.personal.name} — ${portfolioData.personal.title}, ${portfolioData.personal.company}`,
  },
  {
    cmd: 'stack --list',
    output:
      'NestJS · gRPC · Qdrant · Vertex AI (Gemini) · MongoDB · Redis · BullMQ · GCP/OCI',
  },
  {
    cmd: 'status',
    output:
      '99.9% uptime · 63% LLM cost reduction · Top 0.1% NASA Space Apps 2024',
  },
  {
    cmd: 'git log -1 --oneline',
    output: 'a3f9c12 feat(rag): cut LLM tokens 63% — shipped to prod',
    funny: true,
  },
  {
    cmd: 'curl /health',
    output: 'status: ok · uptime: 99.9% · llm_tokens: -63% · coffee: low',
    funny: true,
  },
] as const;

const CHAR_MS = 18;
const LINE_PAUSE_MS = 120;
const CMD_PAUSE_MS = 280;

const TerminalWindow = () => {
  const [lines, setLines] = useState<{ cmd: string; output: string; typed: number; funny?: boolean }[]>([]);
  const [currentCmd, setCurrentCmd] = useState('');
  const [cmdIndex, setCmdIndex] = useState(0);
  const [phase, setPhase] = useState<'typing-cmd' | 'show-output' | 'done'>('typing-cmd');
  const [showCursor, setShowCursor] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [trafficJoke, setTrafficJoke] = useState<TrafficLightAction | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setLines(
        COMMANDS.map((c) => ({
          cmd: c.cmd,
          output: c.output,
          typed: c.output.length,
          funny: 'funny' in c ? c.funny : false,
        }))
      );
      setPhase('done');
      return;
    }

    if (phase === 'done') return;

    const cmd = COMMANDS[cmdIndex];
    if (!cmd) {
      setPhase('done');
      return;
    }

    if (phase === 'typing-cmd') {
      if (currentCmd.length < cmd.cmd.length) {
        const t = setTimeout(() => {
          setCurrentCmd(cmd.cmd.slice(0, currentCmd.length + 1));
        }, CHAR_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('show-output'), CMD_PAUSE_MS);
      return () => clearTimeout(t);
    }

    if (phase === 'show-output') {
      const existing = lines.find((l) => l.cmd === cmd.cmd);
      if (!existing) {
        setLines((prev) => [
          ...prev,
          {
            cmd: cmd.cmd,
            output: cmd.output,
            typed: 0,
            funny: 'funny' in cmd ? cmd.funny : false,
          },
        ]);
        return;
      }
      if (existing.typed < cmd.output.length) {
        const t = setTimeout(() => {
          setLines((prev) =>
            prev.map((l) =>
              l.cmd === cmd.cmd ? { ...l, typed: l.typed + 1 } : l
            )
          );
        }, CHAR_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setCmdIndex((i) => i + 1);
        setCurrentCmd('');
        setPhase('typing-cmd');
      }, LINE_PAUSE_MS + 200);
      return () => clearTimeout(t);
    }
  }, [phase, currentCmd, cmdIndex, lines, reducedMotion]);

  useEffect(() => {
    if (cmdIndex >= COMMANDS.length && phase !== 'done') {
      setPhase('done');
    }
  }, [cmdIndex, phase]);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const activeCmd = COMMANDS[cmdIndex];

  const handleTrafficLight = (action: TrafficLightAction) => {
    setTrafficJoke(action);
  };

  return (
    <div className="relative w-full">
      <div
        className="w-full rounded-sm border border-border bg-[#0D0D12] font-mono text-[13px] sm:text-sm terminal-glow"
        role="img"
        aria-label="Terminal showing engineer profile commands"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#111118]">
          <button
            type="button"
            onClick={() => handleTrafficLight('close')}
            className="h-3.5 w-3.5 rounded-full bg-[#FF5F57] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close — sends SIGKILL"
          />
          <button
            type="button"
            onClick={() => handleTrafficLight('minimize')}
            className="h-3.5 w-3.5 rounded-full bg-[#FEBC2E] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Minimize — sends SIGSTOP"
          />
          <button
            type="button"
            onClick={() => handleTrafficLight('maximize')}
            className="h-3.5 w-3.5 rounded-full bg-[#28C840] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Maximize — resize display"
          />
          <span className="ml-2 text-xs text-muted-foreground">chaitanya@infra — zsh</span>
        </div>

        {trafficJoke && (
          <div className="px-4 py-2 bg-accent/10 border-b border-accent/20 text-xs text-accent font-mono">
            {trafficLightJokes[trafficJoke]}
          </div>
        )}

        <div className="p-4 sm:p-5 space-y-3 leading-relaxed">
          {lines.map((line) => (
            <div key={line.cmd} className="space-y-1">
              <p>
                <span className="text-primary">$</span>{' '}
                <span className="text-foreground/90">{line.cmd}</span>
              </p>
              <p className={`pl-4 break-words ${line.funny ? 'text-accent/90' : 'text-muted-foreground'}`}>
                <span className="mr-1 text-accent">{line.funny ? '~' : '>'}</span>
                {line.output.slice(0, line.typed)}
              </p>
            </div>
          ))}

          {phase !== 'done' && activeCmd && phase === 'typing-cmd' && (
            <p>
              <span className="text-primary">$</span>{' '}
              <span className="text-foreground/90">{currentCmd}</span>
              <span
                className={`inline-block w-2 h-4 ml-0.5 bg-primary align-middle ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden
              />
            </p>
          )}

          {phase === 'done' && (
            <p>
              <span className="text-primary">$</span>{' '}
              <span
                className={`inline-block w-2 h-4 bg-primary align-middle ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden
              />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
