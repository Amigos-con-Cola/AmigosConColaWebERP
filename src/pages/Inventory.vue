<script lang="ts" setup>
import AddButton from "@/components/home_page/AddButton.vue";
import InventoryTable from "@/components/inventory_page/InventoryTable.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const onRegisterProductClicked = () => {
  router.push({
    name: "crear-producto",
  });
};
</script>

<template>
  <div class="flex flex-col justify-center h-screen">
    <section class="flex-none">
      <div
        class="flex justify-start lg:justify-end items-center gap-3 lg:mx-4 mt-5"
      >
        <AddButton @click="onRegisterProductClicked">
          <span class="hidden md:flex">Agregar al inventario</span>
        </AddButton>
      </div>
      <div class="mt-5 mb-5 flex items-center gap-3">
        <h2 class="text-2xl md:text-4xl font-bold m-0">Inventario</h2>
      </div>
    </section>
    <section
      class="flex-1 gap-x-5 flex md:gap-x-5 lg:gap-x-11 gap-y-9 flex-wrap mt-2 mb-2"
    >
      <InventoryTable />
    </section>
  </div>
</template>

<style scoped></style>
