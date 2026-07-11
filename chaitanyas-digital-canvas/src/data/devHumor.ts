export const devQuotes = [
  '// 63% fewer LLM tokens — still 0% fewer meetings',
  'git commit -m "fix(prod): trust me bro"',
  '// TODO: replace TODO comments with actual fixes',
  'WARN: staging is just prod with a different URL',
  'BullMQ: 0 failed jobs · 1 failed nap schedule',
  'docker ps — all containers up, engineer container restarting',
];

export const footerQuips = [
  'Built with React, TypeScript, and one too many git stash entries.',
  'CI/CD pipeline: green. Sleep schedule: red.',
  'This site runs on Vercel. My microservices run on GCP. My coffee runs on willpower.',
  'If it compiles on the first try, something is very wrong.',
];

export const navTooltips: Record<string, string> = {
  home: 'cd ~',
  summary: 'cat README.md',
  experience: 'git log --oneline',
  projects: 'ls -la ./projects',
  achievements: 'cat trophies.txt',
  certs: 'ls ~/certificates',
  contact: 'ssh chaitanya@inbox',
};

export const trafficLightJokes = {
  close: 'SIGKILL rejected — portfolio.service is enabled (Restart=always)',
  minimize: 'SIGSTOP ignored — BullMQ workers still processing',
  maximize: 'DISPLAY=:0 already set — viewport at 100vw since deploy',
} as const;

export const stackPanelJokes = {
  close: 'rm stack.config.ts — Permission denied (file is in production)',
  minimize: 'collapse all — 5 services still running in background',
  maximize: 'zoom: 100% — entire infra already visible, nothing left to scale',
} as const;

export const hiringCheck = {
  commands: [
    {
      cmd: 'cat profile.json | jq .experienceYears',
      out: '1.5',
      tone: 'muted',
    },
    {
      cmd: 'cat profile.json | jq .buildScope',
      out: '"scratch → staging → production"',
      tone: 'accent',
    },
    {
      cmd: 'cat availability.env',
      out: 'OPEN_TO_OPPORTUNITIES=true',
      tone: 'success',
    },
    {
      cmd: 'curl -s /api/theme/light',
      out: 'HTTP 404 — dark-only on main, same as my IDE',
      tone: 'muted',
    },
  ],
  note: '// early career, production-proven — open to teams that value shipping over seniority',
} as const;

export const themeTogglePopup = {
  title: 'theme.sh',
  lines: [
    { cmd: 'git branch light-mode', out: 'fatal: branch not found', tone: 'destructive' },
    { cmd: 'git branch --show-current', out: 'main', tone: 'success' },
  ],
  status: 'HTTP 404 — dark-only on main, same as my IDE',
} as const;

export type StackPanelAction = keyof typeof stackPanelJokes;
