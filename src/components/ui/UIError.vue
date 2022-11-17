<template>
  <div :class="$style.wrap">
    <p :class="$style.text">Что-то пошло не так... Попробуйте в другой раз.</p>
  </div>
</template>
<style module lang="scss">
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.text {
  text-align: center;
  color: var(--app-gray);
}
</style>
