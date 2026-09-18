"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

function headerOffset() {
  const header = document.querySelector("header");
  return (header?.getBoundingClientRect().height ?? 80) + 8;
}

function withoutSmooth(run: () => void) {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  run();
  root.style.scrollBehavior = previous;
}

function jumpToTop() {
  withoutSmooth(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

function scrollToHash(hash: string, behavior: ScrollBehavior) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return false;
  const target = document.getElementById(id);
  if (!target) return false;
  const top = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - headerOffset(),
  );
  if (behavior === "auto") {
    withoutSmooth(() => {
      window.scrollTo({ top, left: 0, behavior: "auto" });
    });
  } else {
    window.scrollTo({ top, left: 0, behavior: "smooth" });
  }
  return true;
}

function alignToLocation(behavior: ScrollBehavior) {
  const hash = window.location.hash;
  if (!hash) {
    jumpToTop();
    return;
  }
  const run = () => {
    if (!scrollToHash(hash, behavior)) {
      requestAnimationFrame(() => {
        scrollToHash(hash, behavior);
      });
    }
  };
  run();
}

export function RouteScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const popped = useRef(false);

  useLayoutEffect(() => {
    const onPop = () => {
      popped.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useLayoutEffect(() => {
    const onHashChange = () => {
      alignToLocation("smooth");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useLayoutEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (event.button !== 0) return;
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      window.setTimeout(() => {
        if (url.hash) {
          scrollToHash(url.hash, url.pathname === window.location.pathname ? "smooth" : "auto");
          return;
        }
        if (url.pathname === window.location.pathname) {
          jumpToTop();
        }
      }, 0);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useLayoutEffect(() => {
    if (popped.current) {
      popped.current = false;
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      alignToLocation("auto");
      window.requestAnimationFrame(() => alignToLocation("auto"));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, searchParams]);

  return null;
}
