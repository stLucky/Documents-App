<template>
  <TheHeader :class="$style.header" />

  <main>
    <router-view></router-view>
  </main>
</template>
<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
</script>

<style module lang="scss">
.header {
  margin-bottom: var(--header-offset);
}
</style>
