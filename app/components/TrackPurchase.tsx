// app/components/TrackPurchase.tsx
"use client";

export function trackPurchase(orderId: string, value: number) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "purchase",
    ecommerce: {
      transaction_id: orderId,
      value: value,
      currency: "USD",
    },
  });
}