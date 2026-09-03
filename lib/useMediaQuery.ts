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

/** True once the component has hydrated on the client. */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

/** True on devices with 4 or fewer logical cores (used to gate heavy 3D work). */
export function useIsLowEndDevice(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => (navigator.hardwareConcurrency ?? 8) <= 4,
    () => false
  );
}
