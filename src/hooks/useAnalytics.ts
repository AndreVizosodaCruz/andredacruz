import { useCallback } from 'react';

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean | null | undefined>;
}

let hasLoaded = false;

export const useAnalytics = () => {
  const track = useCallback(async ({ name, properties }: AnalyticsEvent) => {
    if (typeof window !== 'undefined') {
      if (!hasLoaded) {
        hasLoaded = true;
      }
      const { default: va } = await import('@vercel/analytics');
      if (va && va.track) {
        va.track(name, properties);
      }
    }
  }, []);

  const trackNavigation = useCallback((to: string) => {
    return track({ name: `nav:${to}`, properties: { to } });
  }, [track]);

  const trackCTA = useCallback((buttonName: string) => {
    return track({ name: `cta:${buttonName}`, properties: { button: buttonName } });
  }, [track]);

  const trackContact = useCallback((method: string) => {
    return track({ name: `contact:${method}`, properties: { method } });
  }, [track]);

  return { track, trackNavigation, trackCTA, trackContact };
};
