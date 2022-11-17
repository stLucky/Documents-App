<template>
  <div :class="$style.wrap">
    <IconLoading width="80" />
  </div>
</template>
<script setup lang="ts">
import IconLoading from "@/components/icon/IconLoading.vue";
</script>
<style module lang="scss">
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
