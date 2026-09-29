interface StatReadoutProps {
  value: string;
  label: string;
  index?: number;
}

const StatReadout = ({ value, label, index = 0 }: StatReadoutProps) => (
  <div
    className="group border border-border bg-card/50 px-4 py-3 rounded-sm hover:border-primary/40 hover:shadow-[0_0_20px_hsl(262_83%_58%_/_0.12)] transition-all duration-300"
    style={{ animationDelay: `${index * 60}ms` }}
  >
    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1 group-hover:text-primary/70 transition-colors">
      {label}
    </p>
    <p className="font-mono text-xl sm:text-2xl font-semibold text-primary tabular-nums">
      {value}
    </p>
  </div>
);

export default StatReadout;
