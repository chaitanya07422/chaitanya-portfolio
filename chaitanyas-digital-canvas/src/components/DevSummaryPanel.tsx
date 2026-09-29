import { useState } from 'react';
import { stackPanelJokes, type StackPanelAction } from '@/data/devHumor';

const syntax = {
  comment: 'text-muted-foreground/60',
  keyword: 'text-primary',
  string: 'text-accent',
  prop: 'text-foreground/80',
  bracket: 'text-muted-foreground',
};

const services = [
  { name: 'nestjs-api', status: 'running' },
  { name: 'qdrant', status: 'running' },
  { name: 'redis', status: 'running' },
  { name: 'vertex-ai', status: 'running' },
  { name: 'bullmq-worker', status: 'running' },
];

const DevSummaryPanel = () => {
  const [trafficJoke, setTrafficJoke] = useState<StackPanelAction | null>(null);

  return (
    <div className="infra-card terminal-glow overflow-hidden font-mono text-[12px] sm:text-[13px] leading-relaxed">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-[#111118]">
        <button
          type="button"
          onClick={() => setTrafficJoke('close')}
          className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close — rm stack.config.ts"
        />
        <button
          type="button"
          onClick={() => setTrafficJoke('minimize')}
          className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Minimize — collapse all"
        />
        <button
          type="button"
          onClick={() => setTrafficJoke('maximize')}
          className="h-2.5 w-2.5 rounded-full bg-[#28C840] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Maximize — zoom to 100%"
        />
        <span className="ml-1 text-[11px] text-muted-foreground">stack.config.ts</span>
      </div>

      {trafficJoke && (
        <div className="px-4 py-2 bg-accent/10 border-b border-accent/20 text-[11px] text-accent">
          {stackPanelJokes[trafficJoke]}
        </div>
      )}

      <div className="p-4 sm:p-5 bg-[#0D0D12] space-y-4">
        <pre className="whitespace-pre-wrap break-words">
          <span className={syntax.comment}>{'// current production stack\n'}</span>
          <span className={syntax.keyword}>export const</span>
          <span className={syntax.prop}> infra </span>
          <span className={syntax.bracket}>= {'{\n'}</span>
          <span className={syntax.prop}>  backend</span>
          <span className={syntax.bracket}>: [</span>
          <span className={syntax.string}>"NestJS"</span>
          <span className={syntax.bracket}>, </span>
          <span className={syntax.string}>"gRPC"</span>
          <span className={syntax.bracket}>, </span>
          <span className={syntax.string}>"BullMQ"</span>
          <span className={syntax.bracket}>],{'\n'}</span>
          <span className={syntax.prop}>  data</span>
          <span className={syntax.bracket}>: [</span>
          <span className={syntax.string}>"MongoDB"</span>
          <span className={syntax.bracket}>, </span>
          <span className={syntax.string}>"Redis"</span>
          <span className={syntax.bracket}>, </span>
          <span className={syntax.string}>"Qdrant"</span>
          <span className={syntax.bracket}>],{'\n'}</span>
          <span className={syntax.prop}>  ai</span>
          <span className={syntax.bracket}>: [</span>
          <span className={syntax.string}>"Vertex AI"</span>
          <span className={syntax.bracket}>, </span>
          <span className={syntax.string}>"RAG"</span>
          <span className={syntax.bracket}>],{'\n'}</span>
          <span className={syntax.prop}>  cloud</span>
          <span className={syntax.bracket}>: [</span>
          <span className={syntax.string}>"GCP"</span>
          <span className={syntax.bracket}>, </span>
          <span className={syntax.string}>"OCI"</span>
          <span className={syntax.bracket}>, </span>
          <span className={syntax.string}>"Docker"</span>
          <span className={syntax.bracket}>],{'\n'}</span>
          <span className={syntax.bracket}>{'} as const;'}</span>
        </pre>

        <div className="border-t border-border pt-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            service status
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="flex items-center gap-2 px-2 py-1.5 border border-border/60 rounded-sm bg-secondary/20"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-foreground/80">{svc.name}</span>
                <span className="text-[10px] text-emerald-400/80 ml-auto">{svc.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {[
            { label: 'uptime', value: '99.9%' },
            { label: 'llm_tokens', value: '-63%' },
            { label: 'ai_latency', value: '9s→5s' },
          ].map((m) => (
            <div
              key={m.label}
              className="flex-1 min-w-[90px] border border-border px-2 py-1.5 rounded-sm bg-card/50"
            >
              <p className="text-[9px] uppercase tracking-widest text-muted-foreground">{m.label}</p>
              <p className="text-sm text-primary font-semibold">{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevSummaryPanel;
