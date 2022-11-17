<template>
  <div :class="$style.wrap">
    <h3 class="title title--m" :class="$style.title">Поиск документа</h3>
    <input
      type="text"
      placeholder="Введите ID документа"
      :class="$style.input"
      v-model.trim="id"
    />
  </div>
</template>
<script setup lang="ts">
import { watch } from "vue";
import { useCounterStore } from "@/stores";
import { useDebouncedRef } from "@/helpers";

const store = useCounterStore();
const { fetchDocuments, clearDocuments } = store;

const id = useDebouncedRef("");
watch(id, () => {
  if (id.value) {
    fetchDocuments(id.value);
  } else {
    clearDocuments();
  }
});
</script>

<style module lang="scss">
.wrap {
  padding: 30px 20px;
}
.title {
  margin-bottom: 14px;
}

.input {
  padding: 16px 24px;
  border: 1px solid var(--app-gray-300);
  border-radius: 8px;

  &::placeholder {
    color: var(--app-gray);
  }
}
</style>
