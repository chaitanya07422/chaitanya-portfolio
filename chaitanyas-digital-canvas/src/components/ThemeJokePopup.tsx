import { themeTogglePopup } from '@/data/devHumor';

const toneClass = {
  destructive: 'text-destructive',
  success: 'text-emerald-400',
  muted: 'text-muted-foreground',
} as const;

type ThemeJokePopupProps = {
  className?: string;
};

const ThemeJokePopup = ({ className = '' }: ThemeJokePopupProps) => (
  <div
    className={`infra-card terminal-glow overflow-hidden font-mono animate-popup-in shadow-2xl ${className}`}
    role="status"
    aria-live="polite"
  >
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-[#111118]">
      <span className="h-2 w-2 rounded-full bg-[#FF5F57] shrink-0" />
      <span className="h-2 w-2 rounded-full bg-[#FEBC2E] shrink-0" />
      <span className="h-2 w-2 rounded-full bg-[#28C840] shrink-0" />
      <span className="ml-1 text-[10px] text-muted-foreground">{themeTogglePopup.title}</span>
    </div>

    <div className="p-3 bg-[#0D0D12] space-y-2">
      {themeTogglePopup.lines.map((line) => (
        <div key={line.cmd}>
          <p className="text-[10px] sm:text-[11px] text-foreground/80">
            <span className="text-primary">$</span> {line.cmd}
          </p>
          <p className={`pl-3 text-[10px] sm:text-[11px] ${toneClass[line.tone]}`}>
            → {line.out}
          </p>
        </div>
      ))}

      <p className="pt-2 border-t border-border/60 text-[10px] sm:text-[11px] text-accent flex items-center gap-2">
        <span className="inline-flex items-center rounded-sm border border-destructive/40 bg-destructive/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-destructive shrink-0">
          404
        </span>
        {themeTogglePopup.status.replace('HTTP 404 — ', '')}
      </p>
    </div>
  </div>
);

export default ThemeJokePopup;
