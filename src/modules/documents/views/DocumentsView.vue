<template>
  <section :class="$style.wrap">
    <h2 class="visually-hidden">Документы</h2>
    <div :class="$style.column">
      <DocumentsSearch />
      <DocumentsResults :class="$style.results" />
    </div>
    <div :class="$style.column">
      <router-view></router-view>
    </div>
  </section>
</template>
<script setup lang="ts">
import DocumentsSearch from "../components/DocumentsSearch.vue";
import DocumentsResults from "../components/DocumentsResults.vue";
</script>

<style module lang="scss">
.wrap {
  display: flex;
  box-shadow: 0px 0px 10px var(--app-black-01);
  border-radius: 10px;
  height: 100%;
  max-height: calc(100vh - var(--app-top-offset));
}

.column {
  width: 100%;
  display: flex;
  flex-direction: column;

  &:first-of-type {
    max-width: 280px;
    border-right: 1px solid var(--app-gray-400);
  }

  &:last-of-type {
    flex-grow: 1;
    padding: 30px 20px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

.results {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}
</style>
