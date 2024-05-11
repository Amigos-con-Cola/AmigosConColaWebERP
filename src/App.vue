<script lang="ts" setup>
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div>
    <SideBar/>
    <div class="sm:ml-72">
      <RouterView class="pl-5 pt-5"/>
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
