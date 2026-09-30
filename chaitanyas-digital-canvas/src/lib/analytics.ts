import posthog from 'posthog-js';

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const POSTHOG_HOST =
  (import.meta.env.VITE_POSTHOG_HOST as string | undefined) ||
  'https://us.i.posthog.com';

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return;
  if (!POSTHOG_KEY) {
    if (import.meta.env.DEV) {
      console.info('[analytics] VITE_POSTHOG_KEY missing — tracking disabled');
    }
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: '2025-05-24',
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
    persistence: 'localStorage+cookie',
    session_recording: {
      maskAllInputs: true,
    },
  });

  initialized = true;
}

export function trackPageView(path?: string) {
  if (!initialized) return;
  posthog.capture('$pageview', {
    $current_url: path ?? window.location.href,
  });
}

export function trackEvent(
  event: string,
  properties?: Record<string, string | number | boolean | null | undefined>
) {
  if (!initialized) return;
  posthog.capture(event, properties);
}

export { posthog };
