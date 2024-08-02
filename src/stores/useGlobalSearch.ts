import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalSearch = defineStore("globalSearch", () => {
  const currentSearch = ref("");

  const setSearch = (search: string) => {
    currentSearch.value = search;
  };

  const appendSearch = (input: string) => {
    currentSearch.value = `${currentSearch.value}${input}`;
  };

  const clearSearch = () => {
    currentSearch.value = "";
  };

  return {
    search: currentSearch,
    set: setSearch,
    append: appendSearch,
    clear: clearSearch,
  };
});
