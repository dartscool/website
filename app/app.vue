<template>
  <NuxtLayout>
    <NuxtPage />
    <AppFooter v-if="!isDownloadRedirect" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const isDownloadRedirect = computed(() => route.path.endsWith('/downloads'));

useHead({
  script: [
    {
      innerHTML: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark') } else { document.documentElement.classList.remove('dark') }`
    }
  ]
})
</script>
