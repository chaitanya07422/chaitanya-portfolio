import type { ReactNode } from 'react';
import type { Components } from 'react-markdown';
import MermaidBlock from '@/components/MermaidBlock';

function getText(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(getText).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return getText((children as { props: { children?: ReactNode } }).props.children);
  }
  return '';
}

export const markdownComponents: Components = {
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    const language = match?.[1];
    const code = getText(children).replace(/\n$/, '');

    if (language === 'mermaid') {
      return <MermaidBlock chart={code} />;
    }

    const isBlock = Boolean(language) || String(children).includes('\n');
    if (isBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre({ children }) {
    const child = Array.isArray(children) ? children[0] : children;
    if (
      child &&
      typeof child === 'object' &&
      'props' in child &&
      typeof (child as { props?: { className?: string } }).props?.className === 'string' &&
      (child as { props: { className: string } }).props.className.includes('language-mermaid')
    ) {
      return <>{children}</>;
    }
    return <pre>{children}</pre>;
  },
};
