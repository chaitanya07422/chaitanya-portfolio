import { useEffect, useState } from 'react';
import { devQuotes } from '@/data/devHumor';

const DevQuote = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % devQuotes.length);
        setVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`font-mono text-xs text-muted-foreground/70 mt-3 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {devQuotes[index]}
    </p>
  );
};

export default DevQuote;
