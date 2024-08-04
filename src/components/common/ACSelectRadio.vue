<script lang="ts" setup>
interface Item {
  id: number;
  name: string;
}

defineProps<{
  items: Item[];
}>();

defineEmits<{
  (e: "select", id: number): void;
}>();
</script>

<template>
  <button
    id="dropdownBgHoverButton"
    class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    data-dropdown-toggle="dropdownBgHover"
    type="button"
  >
    <slot />
    <svg
      aria-hidden="true"
      class="w-2.5 h-2.5 ms-3"
      fill="none"
      viewBox="0 0 10 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m1 1 4 4 4-4"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  </button>
  <div
    id="dropdownBgHover"
    class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700"
  >
    <ul
      aria-labelledby="dropdownBgHoverButton"
      class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
    >
      <li v-for="item of items" :key="item.id">
        <div
          class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <div class="flex items-center">
            <input
              id="default-radio-1"
              class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary/25 focus:ring-2"
              name="default-radio"
              type="radio"
              @input="$emit('select', item.id)"
            />
            <label
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="default-radio-1"
            >
              {{ item.name }}
            </label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
