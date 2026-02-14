"use client";

import { useEffect } from "react";
import { onCLS, onFCP, onLCP, onTTFB, onINP } from "web-vitals";

export default function WebVitals() {
  useEffect(() => {
    onTTFB((metric) => console.log("TTFB:", metric.value, "ms"));
    onFCP((metric) => console.log("FCP:", metric.value, "ms"));
    onLCP((metric) => console.log("LCP:", metric.value, "ms"));
    onCLS((metric) => console.log("CLS:", metric.value));
    onINP((metric) => console.log("INP:", metric.value, "ms"));
  }, []);

  return null;
}