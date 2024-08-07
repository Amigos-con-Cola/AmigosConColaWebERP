<script setup lang="ts">
import { computed } from "vue";

export interface ColumnSpec {
  displayName: string;
  accessor: string;
  mapper?: (value: any) => string;
}

export interface RowSpec {
  id: any;

  [index: string]: any;
}

const props = withDefaults(
  defineProps<{
    columns: ColumnSpec[];
    data: RowSpec[];
    deletable?: boolean;
    editable?: boolean;
  }>(),
  {
    data: () => [],
    editable: true,
    deletable: true,
  },
);

defineEmits<{
  (e: "delete", id: number): void;
  (e: "edit", id: number): void;
}>();

const totalColumns = computed(() =>
  props.deletable || props.editable
    ? props.columns.length + 1
    : props.columns.length,
);
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th v-for="column of columns" scope="col" class="px-6 py-3">
            {{ column.displayName }}
          </th>
          <th v-if="editable || deletable" scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody v-if="data && data.length > 0">
        <tr
          v-for="item of data"
          :key="item.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="px-6 py-4" v-for="j in totalColumns">
            <span v-if="j - 1 < columns.length">
              {{
                typeof columns[j - 1].mapper === "function"
                  ? columns[j - 1].mapper!(item[columns[j - 1].accessor])
                  : item[columns[j - 1].accessor]
              }}
            </span>
            <div v-else-if="editable || deletable">
              <button
                v-if="editable"
                @click="$emit('edit', item.id)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Editar
              </button>
              <button
                v-if="deletable"
                @click="$emit('delete', item.id)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
              >
                Eliminar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td class="py-8" :colspan="totalColumns" align="center">
            No hay elementos para mostrar.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
