<script lang="ts" setup>
import SideBar from "@/components/common/SideBar.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import NavBar from "@/components/common/NavBar.vue";
import SearchInput from "@/components/common/GlobalSearch.vue";

const route = useRoute();
const shouldShowSideBar = computed(
  () => route.path !== "/" && route.path !== "/login",
);
const routerViewClasses = computed(() => ({
  "sm:ml-[5rem]": shouldShowSideBar.value,
}));

const shouldShowNavbar = computed(() => {
  return route.path !== "/" && route.path !== "/login";
});
</script>

<template>
  <div>
    <SideBar v-if="shouldShowSideBar" />
    <div :class="routerViewClasses">
      <NavBar v-if="shouldShowNavbar">
        <SearchInput />
      </NavBar>
      <RouterView />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  color-scheme: light;
}
</style>
