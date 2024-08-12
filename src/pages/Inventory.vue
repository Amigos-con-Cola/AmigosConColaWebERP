<script lang="ts" setup>
import { useInventory } from "@stores/inventoryStore.ts";
import ACDataTable, { ColumnSpec } from "@/components/common/ACDataTable.vue";
import { ref } from "vue";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import { useRouter } from "vue-router";
import PaginationControls from "@/components/common/PaginationControls.vue";

const router = useRouter();
const currentPage = ref(1);

const inventory = useInventory({
  page: currentPage,
});

const columns: ColumnSpec[] = [
  {
    displayName: "ID",
    accessor: "id",
  },
  {
    displayName: "Nombre",
    accessor: "nombre",
  },
  {
    displayName: "Ingrediente principal",
    accessor: "ingrediente_principal",
  },
  {
    displayName: "Formato",
    accessor: "formato",
  },
  {
    displayName: "Volumen",
    accessor: "volumen",
  },
  {
    displayName: "V/Adm",
    accessor: "via",
  },
  {
    displayName: "Fecha de vencimiento",
    accessor: "fecha_vencimiento",
  },
  {
    displayName: "Laboratorio",
    accessor: "laboratorio",
  },
  {
    displayName: "Origen",
    accessor: "origen",
  },
  {
    displayName: "Estado",
    accessor: "estado",
  },
  {
    displayName: "Fecha de registro",
    accessor: "fecha_registro",
  },
  {
    displayName: "Ubicación",
    accessor: "caja",
  },
  {
    displayName: "Tipo",
    accessor: "tipo",
  },
];
</script>

<template>
  <div class="p-8">
    <div class="mb-4">
      <h1 class="text-2xl">Inventario</h1>
      <span class="text-sm">Lista de medicinas de animalitos</span>
      <div class="py-2">
        <ACButtonPrimary
          @click="router.push({ name: 'crear-medicina' })"
          class="flex items-center gap-1"
        >
          <span class="icon-[ph--plus]"></span>
          Nuevo
        </ACButtonPrimary>
      </div>
    </div>
    <div>
      <ACDataTable
        :columns="columns"
        :data="inventory.items.data"
        :editable="false"
        :deletable="false"
      />
    </div>
    <div class="flex justify-center mt-4">
      <PaginationControls
        :pages="inventory.items.totalPages"
        :current-page="currentPage"
        @select-page="(page) => (currentPage = page)"
      />
    </div>
  </div>
</template>

<style scoped></style>
