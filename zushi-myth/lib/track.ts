export function track(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
  if (w.gtag) w.gtag("event", event, params);
}
