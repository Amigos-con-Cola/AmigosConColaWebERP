<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useRouter } from "vue-router";

onMounted(() => initFlowbite());

const router = useRouter();

const logout = async () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  await router.push("/login");
};
</script>

<template>
  <aside
    id="logo-sidebar"
    aria-label="Sidebar"
    class="fixed flex flex-col top-0 left-0 z-40 w-[5rem] h-full transition-transform -translate-x-full sm:translate-x-0"
  >
    <div class="h-full bg-primary px-5 flex flex-col">
      <RouterLink
        class="flex items-center justify-center text-white"
        to="/home"
      >
        <div class="flex flex-col justify-center items-center">
          <span
            class="peer icon-[fa--paw] bg-white h-[2.3rem] w-[1.8rem] mt-8 hover:bg-black"
          ></span>
          <span class="text-[0.67rem] mt-1 font-bold peer-hover:text-black">
            Animalitos
          </span>
        </div>
      </RouterLink>
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink
            class="rounded-lg hover:text-black text-white hover:font-semibold hover:bg-sky-300/50 group"
            to="/inventario"
          >
            <div class="flex flex-col items-center pt-[1.5rem]">
              <i
                aria-hidden="true"
                class="icon-[material-symbols--inventory-2-outline] flex-shrink-0 w-[1.8rem] h-[1.8rem] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              />
              <span class="text-[0.67rem] mt-1 font-bold">Inventario</span>
            </div>
          </RouterLink>
        </li>
      </ul>
      <div class="flex-1"></div>
      <div class="flex justify-center mb-4">
        <button @click="logout">
          <span
            class="icon-[ls--logout] h-[1.6rem] w-[1.6rem] text-white hover:text-black"
          ></span>
        </button>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
