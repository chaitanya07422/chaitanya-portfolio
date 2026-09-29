interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className = '' }: SectionHeadingProps) => (
  <div className={`mb-12 md:mb-16 ${className}`}>
    <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
      <span className="text-primary font-mono text-lg sm:text-xl mr-2">$</span>
      {title.toLowerCase()}
    </h2>
    <div className="mt-2 h-px w-16 bg-primary/60" />
    {subtitle && (
      <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
