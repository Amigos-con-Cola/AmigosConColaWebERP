<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from "vue";
import { Animal } from "@stores/animalStore.ts";
import { useRoute } from "vue-router";

const route = useRoute();
const idAnimal = ref(route.params.id);

type Tab = "general" | "vacunas" | "desparasitaciones" | "aseos";

const props = defineProps<{ pet: Animal | null }>();
const emit = defineEmits(["delete"]);

const editing = ref(false);
const selected = ref<Tab>("general");

const components = {
  general: {
    props: () => ({ animal: props.pet, editing: editing.value }),
    component: defineAsyncComponent(
      () => import("@/components/pet_info/PetInfo.vue"),
    ),
  },
  desparasitaciones: {
    props: { idAnimal: idAnimal.value },
    component: defineAsyncComponent(
      () => import("@/components/desparasitaciones/Desparasitaciones.vue"),
    ),
  },
  vacunas: {
    props: { idAnimal: idAnimal.value },
    component: defineAsyncComponent(
      () => import("@/components/vacunas/Vacunas.vue"),
    ),
  },
  aseos: {
    props: { idAnimal: idAnimal.value },
    component: defineAsyncComponent(
      () => import("@/components/aseos/Aseos.vue"),
    ),
  },
};

const componentProps = computed(() =>
  typeof components[selected.value].props === "function"
    ? components[selected.value].props()
    : components[selected.value].props,
);

const component = computed(() => components[selected.value].component);
</script>

<template>
  <div class="flex flex-col px-8 w-full">
    <div id="toolbar" class="mb-4 flex items-center w-full p-2 justify-between">
      <div class="border-b w-full py-2 flex gap-2.5 items-center">
        <div>
          <select
            id="tabs"
            v-model="selected"
            class="h-fit w-fit g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="general">Información general</option>
            <option value="vacunas">Vacunas</option>
            <option value="desparasitaciones">Desparasitaciones</option>
            <option value="aseos">Aseo</option>
          </select>
        </div>
        <div
          class="border-[0.01rem] border-neutral-300 text-gray-700 px-[0.38rem] py-[0.8rem] rounded-md h-10 cursor-pointer hover:bg-primary/5 hover:text-primary hover:border-primary/50 flex items-center justify-center"
          @click="editing = !editing"
        >
          <span class="icon-[iconamoon--edit-thin] text-2xl"></span>
        </div>
        <div
          class="border-[0.01rem] border-neutral-300 text-gray-700 px-[0.56rem] py-[0.8rem] hover:border-primary/50 hover:text-red-600 rounded-md h-10 cursor-pointer hover:bg-primary/5 flex items-center justify-center"
          @click="$emit('delete')"
        >
          <span class="icon-[fluent-mdl2--delete] text-[1.15rem]"></span>
        </div>
      </div>
      <div
        class="mb-6 flex justify-center items-center border-[0.1rem] rounded-full border-primary"
      >
        <img
          :src="pet?.imagen"
          alt="pet image"
          class="rounded-full aspect-square object-cover"
          width="75"
        />
      </div>
    </div>

    <div class="p-2">
      <component :is="component" v-bind="componentProps" />
    </div>
  </div>
</template>

<style scoped></style>
