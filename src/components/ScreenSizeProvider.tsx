"use client";

import React, { useEffect } from "react";

export default function ScreenSizeProvider({ children, }: { children: React.ReactNode }) {
  useEffect(() => {
    function applySizes() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // expose 1vh unit as --vh for handling mobile address bar issues
      document.documentElement.style.setProperty("--vh", `${h * 0.01}px`);
      // scale base font-size so rem-based Tailwind utilities scale
      // clamp between 14px and 18px for stability
      const base = Math.max(14, Math.min(18, Math.round(w * 0.02)));
      document.documentElement.style.fontSize = `${base}px`;
      // expose a data attribute with breakpoint name to allow CSS targeting if needed
      let bp = "xs";
      if (w >= 1280) bp = "xl";
      else if (w >= 1024) bp = "lg";
      else if (w >= 768) bp = "md";
      else if (w >= 640) bp = "sm";
      document.documentElement.setAttribute("data-breakpoint", bp);
    }

    applySizes();
    window.addEventListener("resize", applySizes);
    window.addEventListener("orientationchange", applySizes);
    return () => {
      window.removeEventListener("resize", applySizes);
      window.removeEventListener("orientationchange", applySizes);
    };
  }, []);

  return <>{children}</>;
}
