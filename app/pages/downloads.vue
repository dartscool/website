<template>
  <div>
    <PageHeader
      title="Download DARTSCOOL"
      description="One link, the right download for your device. / 一个链接，自动前往对应平台。"
    />

    <section class="section pt-0">
      <div class="container downloads-gateway">
        <div v-if="isWeChat && detectedPlatform" class="card browser-notice">
          <Icon name="material-symbols:open-in-new" class="notice-icon" />
          <div>
            <h3>请在浏览器中打开</h3>
            <p>点击微信右上角 ···，选择“在浏览器打开”，即可继续安装。</p>
          </div>
        </div>

        <div class="platform-grid">
          <a
            :href="downloadTargets.ios"
            class="card platform-card"
            :class="{ recommended: detectedPlatform === 'ios' }"
          >
            <Icon name="mdi:apple-ios" class="platform-icon" />
            <div>
              <h2>iOS</h2>
              <p>App Store</p>
            </div>
            <Icon name="material-symbols:arrow-forward" />
          </a>

          <a
            :href="downloadTargets.android"
            class="card platform-card"
            :class="{ recommended: detectedPlatform === 'android' }"
          >
            <Icon name="mdi:android" class="platform-icon" />
            <div>
              <h2>Android</h2>
              <p>APK</p>
            </div>
            <Icon name="material-symbols:arrow-forward" />
          </a>

          <div
            class="card platform-card unavailable"
            :class="{ recommended: detectedPlatform === 'harmony' }"
          >
            <Icon name="material-symbols:phone-android" class="platform-icon" />
            <div>
              <h2>HarmonyOS</h2>
              <p>下载地址待配置</p>
            </div>
            <Icon name="material-symbols:hourglass-empty" />
          </div>
        </div>

        <p v-if="isRedirecting" class="redirecting">
          正在前往 {{ platformLabel }} 下载页面…
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Download DARTSCOOL",
  description: "Download DARTSCOOL for iOS, Android, or HarmonyOS.",
});

type MobilePlatform = "ios" | "android" | "harmony";

const downloadTargets = {
  ios: "https://apps.apple.com/cn/app/dartscool/id6792442118",
  android: "https://download.dartscool.com/android/latest/DartsCool.apk",
} as const;

const detectedPlatform = ref<MobilePlatform | null>(null);
const isWeChat = ref(false);
const isRedirecting = ref(false);

const platformLabel = computed(() => {
  if (detectedPlatform.value === "ios") return "App Store";
  if (detectedPlatform.value === "android") return "Android";
  if (detectedPlatform.value === "harmony") return "HarmonyOS";
  return "";
});

function detectMobilePlatform(): MobilePlatform | null {
  const userAgent = navigator.userAgent;

  // Harmony must be checked before Android because some HarmonyOS browsers
  // also include "Android" in their user agent.
  if (/HarmonyOS|OpenHarmony|ArkWeb|HMOS/i.test(userAgent)) return "harmony";
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios";
  if (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  return null;
}

onMounted(() => {
  isWeChat.value = /MicroMessenger/i.test(navigator.userAgent);
  detectedPlatform.value = detectMobilePlatform();

  // WeChat blocks App Store schemes and often blocks APK downloads. Keep the
  // user on this page and show the system-browser instruction instead.
  if (isWeChat.value || detectedPlatform.value === "harmony" || !detectedPlatform.value) {
    return;
  }

  isRedirecting.value = true;
  window.location.replace(downloadTargets[detectedPlatform.value]);
});
</script>

<style scoped>
.downloads-gateway {
  max-width: 760px;
}

.browser-notice {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  box-shadow: inset 0 0 0 1px var(--accent-primary);
}

.browser-notice h3,
.browser-notice p,
.platform-card h2,
.platform-card p {
  margin: 0;
}

.browser-notice p,
.platform-card p,
.redirecting {
  color: var(--text-muted);
}

.notice-icon,
.platform-icon {
  flex: 0 0 auto;
  font-size: 2rem;
  color: var(--accent-primary);
}

.platform-grid {
  display: grid;
  gap: 1rem;
}

.platform-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1.25rem;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

a.platform-card:hover,
.platform-card.recommended {
  box-shadow: inset 0 0 0 1px var(--accent-primary);
  transform: translateY(-2px);
}

.platform-card.unavailable {
  cursor: default;
  opacity: 0.65;
}

.redirecting {
  margin-top: 1.5rem;
  text-align: center;
}
</style>
