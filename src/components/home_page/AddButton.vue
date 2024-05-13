<template>
  <button type="button"
    class=" flex md:w-auto h-8 text-sm gap-2 text-white align-middle font-semibold items-center bg-primary hover:bg-[#076285] focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-full  px-5 py-2.5 text-center  ">
    <svg class="size-5 align-middle" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
      <path fill="#ffffff" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
    </svg>
    <slot />
  </button>
</template>
