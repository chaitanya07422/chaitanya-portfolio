const GridBackground = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden
  >
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(262 83% 58% / 0.04) 1px, transparent 1px),
          linear-gradient(90deg, hsl(262 83% 58% / 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    />
    <div
      className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20"
      style={{ background: 'hsl(262 83% 58%)' }}
    />
    <div
      className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full blur-3xl opacity-10"
      style={{ background: 'hsl(187 85% 53%)' }}
    />
  </div>
);

export default GridBackground;
