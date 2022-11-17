<script setup lang="ts"></script>

<template>
  <header :class="$style.header">
    <h1 class="title title--l">MyApp</h1>
    <button type="button" class="btn btn--link">Username</button>
  </header>
</template>

<style module lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
}

.btn {
  font-size: 16px;
}
</style>
