<script lang="ts" setup>
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:pl-72 sm:pt-8">
    <SideBar/>
    <Router-View class="pl-5 pt-5"/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
}

</style>
