<script setup lang="ts">
import ACDataTable, { ColumnSpec } from "@/components/common/ACDataTable.vue";
import { useAseos } from "@stores/aseoStore.ts";
import { useRoute, useRouter } from "vue-router";
import { useAnimal } from "@stores/animalStore.ts";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";

const router = useRouter();
const route = useRoute();
const id = parseInt(route.params.id as string);

const animal = useAnimal(id);
const aseos = useAseos(id);

const columns: ColumnSpec[] = [
  {
    displayName: "ID",
    accessor: "id",
  },
  {
    displayName: "Tipo",
    accessor: "tipo",
  },
  {
    displayName: "Fecha",
    accessor: "fecha",
  },
];
</script>

<template>
  <div class="p-8">
    <div class="mb-4">
      <h1 class="text-2xl">Aseos</h1>
      <span class="text-sm">Lista de aseos de {{ animal.data?.nombre }}</span>
      <div class="py-2">
        <ACButtonPrimary
          @click="router.push({ name: 'new-aseo', params: { id } })"
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
      :data="aseos.items"
    />
  </div>
</template>
