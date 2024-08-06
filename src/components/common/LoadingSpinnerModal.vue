<script setup lang="ts">
import { Modal } from "flowbite";
import { onMounted, ref, watchEffect } from "vue";
import type { ModalOptions, ModalInterface } from "flowbite";
import type { InstanceOptions } from "flowbite";
import { useSpinner } from "@stores/loadingSpinnerModalStore.ts";
import { storeToRefs } from "pinia";
import loading from "@/assets/images/loading.gif";

const spinner = useSpinner();
const { open } = storeToRefs(spinner);

const modal = ref<ModalInterface | null>(null);
const modalElement = ref<HTMLElement | null>(null);

const modalOptions: ModalOptions = {
  placement: "center",
  backdrop: "static",
  closable: false,
  backdropClasses: "bg-gray-900/50 fixed inset-0 z-40",
};

const instanceOptions: InstanceOptions = {
  id: "loading-spinner-modal",
  override: true,
};

onMounted(() => {
  if (modalElement.value !== null) {
    modal.value = new Modal(modalElement.value, modalOptions, instanceOptions);
  }
});

watchEffect(() => {
  if (modal.value !== null) {
    if (open.value) {
      modal.value.show();
    } else {
      modal.value.hide();
    }
  }
});
</script>

<template>
  <div
    ref="modalElement"
    tabindex="-1"
    aria-hidden="true"
    class="fixed left-0 right-0 hidden top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
  >
    <div
      class="bg-white flex flex-col items-center justify-center rounded-lg p-8"
    >
      <div class="flex justify-end w-full">
        <!-- Icons -->
        <span
          @click="() => spinner.close()"
          class="icon-[material-symbols--close] text-xl cursor-pointer"
        ></span>
      </div>
      <img :src="loading" alt="loading gif" width="400" />
      <div class="flex justify-center flex-col gap-2">
        <div
          class="px-3 py-1 text-xs font-medium leading-none text-center text-primary bg-primary-dark/20 rounded-full animate-pulse"
        >
          Cargando...
        </div>
        <span class="text-center text-sm">Por favor, espere unos momentos</span>
      </div>
    </div>
  </div>
</template>
