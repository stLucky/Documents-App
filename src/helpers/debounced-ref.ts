import { customRef, type Ref } from "vue";

export function useDebouncedRef<T>(value: T, delay = 300): Ref<T> {
  let timeout: number;

  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
