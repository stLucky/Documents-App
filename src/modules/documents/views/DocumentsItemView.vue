<template>
  <div v-if="!document" :class="[$style.wrap, $style.wrapEmpty]">
    <p :class="$style.desc">
      Выберите документ, чтобы посмотреть его содержимое
    </p>
  </div>

  <section v-else :class="$style.wrap">
    <div
      :class="[$style.imageWrap, $style.imageWrapStub]"
      v-if="!document.image"
    >
      <IconImageStub width="130" />
    </div>
    <div :class="$style.imageWrap" v-else>
      <img :src="document.image" :class="$style.image" height="286" />
    </div>

    <div :class="$style.textWrap">
      <h3 class="title title--m" :class="$style.title">{{ document.name }}</h3>
      <ul :class="$style.btnsWrap">
        <li :class="$style.btnsItem">
          <button type="button" class="btn btn--primary">Скачать</button>
        </li>
        <li :class="$style.btnsItem">
          <button type="button" class="btn btn--secondary">Удалить</button>
        </li>
      </ul>
      <h4 class="title title--m" :class="$style.title">Описание:</h4>
      <p>
        {{ document.description }}
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import IconImageStub from "@/components/icon/IconImageStub.vue";

import { useCounterStore } from "@/stores";

const route = useRoute();
const router = useRouter();
const store = useCounterStore();
const { getDocument } = store;

const id = computed(() => route.params.id);

const document = computed(() => getDocument(Number(id.value)));
watch(document, () => {
  if (!document.value) {
    router.replace({ name: "documents.view" });
  }
});
</script>

<style module lang="scss">
$offset: 30px;

.wrap {
  display: flex;

  &Empty {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
}

.desc {
  text-align: center;
  color: var(--app-gray);
}

.image {
  &Wrap {
    max-width: 424px;
    width: 100%;
    min-width: 224px;
    margin-right: $offset;

    &Stub {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--app-gray-400);
    }
  }
}

.textWrap {
  margin-left: $offset;
}

.title {
  margin-bottom: 14px;
}

.btns {
  &Wrap {
    display: flex;
    margin-bottom: 50px;
  }

  &Item {
    margin-right: 18px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
