<template>
  <div :class="$style.wrap">
    <h3 class="title title--m" :class="$style.title">Результаты</h3>
    <UiLoading v-if="isLoading" />
    <UIError v-else-if="isError" />

    <p v-else-if="!documents.length" :class="[$style.desc, $style.descEmpty]">
      Ничего не найдено
    </p>
    <ul v-else :class="$style.cards">
      <li :class="$style.card" v-for="document in documents" :key="document.id">
        <router-link
          :to="{ name: 'documents.item.view', params: { id: document.id } }"
          :class="$style.link"
          :active-class="$style.active"
          replace
        >
          <div :class="$style.imageWrap" v-if="!document.image">
            <IconImageStub width="30" />
          </div>
          <img
            :src="document.image"
            :class="$style.image"
            width="70"
            height="70"
            v-else
          />
          <div :class="$style.textWrap">
            <h4 :class="$style.subTitle">{{ document.name }}</h4>
            <p :class="[$style.desc, $style.descHidden]">
              {{ document.description }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import IconImageStub from "@/components/icon/IconImageStub.vue";
import UiLoading from "@/components/ui/UiLoading.vue";
import UIError from "@/components/ui/UIError.vue";

import { useCounterStore } from "@/stores";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { documents, isLoading, isError } = storeToRefs(store);
</script>

<style module lang="scss">
.wrap {
  padding: 0 0 30px;
}

.title {
  padding: 0 20px;
  margin-bottom: 18px;
}

.cards {
  padding: 0 20px;
  overflow: auto;
}

.card {
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
}

.link {
  display: flex;
  max-height: 70px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px var(--app-black-01);
  transition: all 200ms;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 10px var(--app-black-01);
  }
}

.image {
  object-fit: cover;

  &Wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    border-right: 1px solid var(--app-gray-400);
    flex-shrink: 0;
  }
}

.textWrap {
  padding: 15px;
  flex-grow: 1;
}

.subTitle {
  margin-bottom: 6px;
}

.desc {
  color: var(--app-gray);

  &Empty {
    padding: 0 20px;
  }

  &Hidden {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
  }
}

.active {
  .textWrap {
    background-color: var(--app-blue);
  }

  .subTitle,
  .desc {
    color: var(--app-white-300);
  }
}
</style>
