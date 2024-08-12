<script setup lang="ts">
import { useToast } from "@stores/toastStore.ts";
import { computed } from "vue";
import SuccessToast from "@/components/toast/SuccessToast.vue";
import WarningToast from "@/components/toast/WarningToast.vue";
import ErrorToast from "@/components/toast/ErrorToast.vue";

const toast = useToast();

const component = computed(() => {
  switch (toast.severity) {
    case "success":
      return SuccessToast;
    case "warning":
      return WarningToast;
    case "error":
      return ErrorToast;
  }
});
</script>

<template>
  <component
    class="fixed top-5 right-5"
    id="toast"
    v-if="toast.showing"
    :is="component"
    :message="toast.message"
  />
</template>

<style scoped>
#toast {
  z-index: 70;
}
</style>
