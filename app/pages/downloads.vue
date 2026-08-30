<template>
  <main v-if="isWeChat" class="wechat-guide">
    <div class="wechat-arrow" aria-hidden="true">↗</div>
    <h1>请在浏览器中打开</h1>
    <p>点击右上角 <strong>···</strong></p>
    <p>选择“在浏览器打开”后继续下载</p>
  </main>
  <div v-else aria-hidden="true"></div>
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

const isWeChat = ref(false);

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
  isWeChat.value = /MicroMessenger/i.test(navigator.userAgent);
  if (isWeChat.value) return;

  const platform = detectMobilePlatform();
  const target = platform ? downloadTargets[platform] : null;

  if (target) {
    window.location.replace(target);
  }
});
</script>

<style scoped>
.wechat-guide {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #fff;
  color: #111;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.wechat-guide h1 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
}

.wechat-guide p {
  margin: 0.25rem 0;
  color: #555;
  font-size: 1rem;
}

.wechat-arrow {
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  font-size: 3rem;
  line-height: 1;
  color: #07c160;
}
</style>
