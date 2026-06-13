'use client';
import { useEffect } from 'react';

/**
 * Global in-page anchor handler.
 *
 * Native CSS `scroll-behavior: smooth` (and scrollIntoView) gets aborted on
 * this page when content above the viewport changes height mid-animation
 * (lazy images, framer-motion entrance, hero parallax). The result was that
 * clicking a nav link / "Réserver" only nudged a few pixels and stopped.
 *
 * This handler runs a requestAnimationFrame loop that RECOMPUTES the target
 * position every frame, so any layout shift simply re-targets instead of
 * cancelling the scroll. It always lands exactly on the section, offset by
 * the fixed header height.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const HEADER_OFFSET = 72; // h-16 nav + breathing room

    const targetTop = (el: Element) =>
      Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);

    const scrollToEl = (el: Element, hash: string) => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        window.scrollTo(0, targetTop(el));
        history.replaceState(null, '', hash);
        return;
      }

      const start = window.scrollY;
      const target = targetTop(el); // fixed for the duration → smooth, monotonic motion
      const distance = target - start;
      const duration = Math.min(900, Math.max(350, Math.abs(distance) * 0.5));
      const startTime = performance.now();
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        window.scrollTo(0, start + distance * easeOutCubic(t));
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          // final exact snap — corrects any layout shift that happened en route
          window.scrollTo(0, targetTop(el));
          history.replaceState(null, '', hash);
        }
      };
      requestAnimationFrame(step);
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href') || '';
      if (hash.length < 2) return; // ignore bare "#"
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      scrollToEl(el, hash);
    };

    // Honour a hash already present in the URL on load (deep link).
    if (window.location.hash.length > 1) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        // wait a tick for fonts/layout, then jump precisely
        setTimeout(() => window.scrollTo(0, targetTop(el)), 300);
      }
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
