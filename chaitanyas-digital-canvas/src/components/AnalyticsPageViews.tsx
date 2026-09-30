import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';

/** Captures SPA navigations as PostHog $pageview events. */
const AnalyticsPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(window.location.origin + location.pathname + location.search + location.hash);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default AnalyticsPageViews;
