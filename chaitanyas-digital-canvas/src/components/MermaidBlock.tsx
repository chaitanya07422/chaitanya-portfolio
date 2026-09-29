import { useEffect, useId, useState } from 'react';
import mermaid from 'mermaid';

let initialized = false;

function ensureMermaid() {
  if (initialized) return;
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: 'dark',
    darkMode: true,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    themeVariables: {
      primaryColor: '#3b1f6e',
      primaryTextColor: '#e8e6f0',
      primaryBorderColor: '#7c3aed',
      lineColor: '#94a3b8',
      secondaryColor: '#1a1a24',
      tertiaryColor: '#12121a',
      background: '#0A0A0F',
      mainBkg: '#14141c',
      nodeBorder: '#7c3aed',
      clusterBkg: '#12121a',
      titleColor: '#e8e6f0',
      edgeLabelBackground: '#0A0A0F',
    },
  });
  initialized = true;
}

type MermaidBlockProps = {
  chart: string;
};

const MermaidBlock = ({ chart }: MermaidBlockProps) => {
  const reactId = useId().replace(/:/g, '');
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        ensureMermaid();
        const id = `mermaid-${reactId}`;
        const { svg: rendered } = await mermaid.render(id, chart.trim());
        if (!cancelled) {
          setSvg(rendered);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setSvg(null);
          setError(err instanceof Error ? err.message : 'Failed to render diagram');
        }
      }
    }

    void render();
    return () => {
      cancelled = true;
    };
  }, [chart, reactId]);

  if (error) {
    return (
      <div className="border border-destructive/40 bg-secondary/40 rounded-sm p-4 mb-4 overflow-x-auto">
        <p className="font-mono text-[10px] uppercase tracking-widest text-destructive mb-2">
          mermaid error
        </p>
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">{chart}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="border border-border bg-secondary/30 rounded-sm p-6 mb-4 font-mono text-xs text-muted-foreground">
        rendering diagram…
      </div>
    );
  }

  return (
    <div
      className="mermaid-diagram border border-border bg-secondary/20 rounded-sm p-4 mb-4 overflow-x-auto [&_svg]:mx-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidBlock;
