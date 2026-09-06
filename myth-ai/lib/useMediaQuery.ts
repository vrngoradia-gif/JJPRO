"use client";

import { useSyncExternalStore } from "react";

function subscribe(query: string, callback: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

/**
 * SSR-safe media query hook. Reads the browser's matchMedia state as an
 * external store rather than syncing it into state via useEffect.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => subscribe(query, callback),
    () => window.matchMedia(query).matches,
    () => false
  );
}
