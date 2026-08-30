<template>
  <div aria-hidden="true"></div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  title: "Download DARTSCOOL",
  description: "Download DARTSCOOL for your device.",
});

type MobilePlatform = "ios" | "android" | "harmony";

// The QR code always points to https://dartscool.com/downloads.
// Add the HarmonyOS store URL here after the app is published; the QR code
// itself never needs to change.
const downloadTargets: Record<MobilePlatform, string | null> = {
  ios: "https://apps.apple.com/cn/app/dartscool/id6792442118",
  android: "https://dartscool.com/android/latest/DartsCool.apk",
  harmony: null,
};

function detectMobilePlatform(): MobilePlatform | null {
  const userAgent = navigator.userAgent;

  // Some HarmonyOS browsers also include "Android" in their user agent.
  if (/HarmonyOS|OpenHarmony|ArkWeb|HMOS/i.test(userAgent)) return "harmony";
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios";
  if (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  return null;
}

onMounted(() => {
  const platform = detectMobilePlatform();
  const target = platform ? downloadTargets[platform] : null;

  if (target) {
    window.location.replace(target);
  }
});
</script>
