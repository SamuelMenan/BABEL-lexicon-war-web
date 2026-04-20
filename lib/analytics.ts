type EventPayload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: EventPayload }) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props: payload });
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...payload });
  }

  try {
    const key = "babel-cta-events";
    const current = window.localStorage.getItem(key);
    const parsed = current ? (JSON.parse(current) as Record<string, number>) : {};
    parsed[eventName] = (parsed[eventName] ?? 0) + 1;
    window.localStorage.setItem(key, JSON.stringify(parsed));
  } catch {
    // Ignore storage errors in private/incognito environments.
  }
}
