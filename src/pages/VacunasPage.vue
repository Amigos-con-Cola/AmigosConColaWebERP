<script setup lang="ts">
import ACDataTable, { ColumnSpec } from "@/components/common/ACDataTable.vue";
import { useRoute, useRouter } from "vue-router";
import { useAnimal } from "@stores/animalStore.ts";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import { useVacunas } from "@/stores/vacunaStore";

const router = useRouter();
const route = useRoute();
const id = parseInt(route.params.id as string);

const animal = useAnimal(id);
const vacunas = useVacunas(id);

const columns: ColumnSpec[] = [
  {
    displayName: "ID",
    accessor: "id",
  },
  {
    displayName: "Nombre",
    accessor: "name",
  },
  {
    displayName: "Fecha",
    accessor: "date",
  },
  {
    displayName: "Examen previo",
    accessor: "examen_previo",
  },
];
</script>

<template>
  <div class="p-8">
    <div class="mb-4">
      <h1 class="text-2xl">Vacunas</h1>
      <span class="text-sm">Lista de vacunas de {{ animal.data?.nombre }}</span>
      <div class="py-2">
        <ACButtonPrimary
          @click="router.push({ name: 'new-vacuna', params: { id } })"
          class="flex items-center gap-1"
        >
          <span class="icon-[ph--plus]"></span>
          Nuevo
        </ACButtonPrimary>
      </div>
    </div>
    <ACDataTable
      :editable="false"
      :deletable="false"
      :columns="columns"
      :data="vacunas.items"
    />
  </div>
</template>
