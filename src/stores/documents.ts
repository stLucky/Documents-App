import { ref } from "vue";
import { defineStore } from "pinia";

import { getDocuments, type Documents } from "@/api";

export const useCounterStore = defineStore("documents", () => {
  const isLoading = ref(false);
  const isError = ref(false);
  const documents = ref<Documents.Response>([]);

  const getDocument = (id: number): Documents.Item | undefined =>
    documents.value.find((item) => item.id === id);

  const fetchDocuments = async (search: string): Promise<void> => {
    if (isError.value) isError.value = false;
    isLoading.value = true;

    try {
      documents.value = await getDocuments(search);
    } catch (err) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const clearDocuments = (): void => {
    documents.value = [];
  };

  return {
    isLoading,
    isError,
    documents,
    getDocument,
    fetchDocuments,
    clearDocuments,
  };
});
