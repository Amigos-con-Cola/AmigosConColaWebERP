<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  pages: {
    type: Number,
    default: 1,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["pageChange", "nextPage", "previousPage"]);

const handleClick = (pagina: number) => {
  emit("pageChange", pagina);
};
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-8 text-sm">
      <li>
        <button
          class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="$emit('previousPage')"
        >
          <span class="sr-only">Previous</span>
          <svg
            aria-hidden="true"
            class="w-2.5 h-2.5 rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1 1 5l4 4"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </li>
      <!-- v-for 4 anchors -->
      <li v-for="pagina in props.pages" :key="pagina">
        <button
          :class="{
            'flex items-center justify-center px-3 h-8 bg-primary/70 leading-tight text-gray-500  border border-gray-300  hover:text-gray-700':
              props.currentPage === pagina,
            'flex items-center justify-center px-3 h-8 bg-white leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700':
              props.currentPage !== pagina,
          }"
          @click="handleClick(pagina)"
        >
          {{ pagina }}
        </button>
      </li>

      <li>
        <button
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          @click="$emit('nextPage')"
        >
          <span class="sr-only">Next</span>
          <svg
            aria-hidden="true"
            class="w-2.5 h-2.5 rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 9 4-4-4-4"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>
