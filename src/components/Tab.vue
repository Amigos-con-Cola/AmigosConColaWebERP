<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import DetailPetInfo from "@/components/pet_info/DetailPetInfo.vue";
import AddButton from "@/components/AddButton.vue";
import VacunaModal from "@/components/animal_details/VacunaModal.vue";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div
    class="flex flex-col w-[18.5rem] sm:w-[27.5rem] md:w-[29rem] lg:w-[42.5rem] xl:w-[52.3rem] px-8 py-3 border rounded-[2rem] shadow-xl"
  >
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul
        id="default-styled-tab"
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
        data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
        data-tabs-toggle="#default-styled-tab-content"
        role="tablist"
      >
        <li class="me-2 flex items-center" role="presentation">
          <button
            id="profile-styled-tab"
            aria-controls="profile"
            aria-selected="false"
            class="inline-block pl-1 pt-4 pb-4 pr-4 border-b-2 rounded-t-lg"
            data-tabs-target="#styled-profile"
            role="tab"
            type="button"
          >
            <span class="icon-[icon-park-twotone--history-query]"></span>
            Historia de origen
          </button>
        </li>
        <li class="me-2 flex items-center" role="presentation">
          <button
            id="dashboard-styled-tab"
            aria-controls="dashboard"
            aria-selected="false"
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            data-tabs-target="#styled-dashboard"
            role="tab"
            type="button"
          >
            <span class="icon-[material-symbols--vaccines-outline]"></span>
            Vacunas
          </button>
        </li>
        <li class="me-2 flex items-center" role="presentation">
          <button
            id="settings-styled-tab"
            aria-controls="settings"
            aria-selected="false"
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            data-tabs-target="#styled-settings"
            role="tab"
            type="button"
          >
            <span class="icon-[solar--pills-outline]"></span>
            Desparasitaciones
          </button>
        </li>
        <li class="me-2 flex items-center" role="presentation">
          <button
            id="contacts-styled-tab"
            Historia
            aria-controls="contacts"
            aria-selected="false"
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            data-tabs-target="#styled-contacts"
            de
            origen
            role="tab"
            type="button"
          >
            <span class="icon-[icon-park-twotone--shower-head]"></span>

            Aseo
          </button>
        </li>
      </ul>
    </div>
    <div id="default-styled-tab-content">
      <div
        id="styled-profile"
        aria-labelledby="profile-tab"
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        role="tabpanel"
      >
        <DetailPetInfo historia="Historia de origen" />
      </div>
      <div
        id="styled-dashboard"
        aria-labelledby="dashboard-tab"
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        role="tabpanel"
      >
        <AddButton
          data-modal-target="vacuna-modal"
          data-modal-toggle="vacuna-modal"
        />
        <VacunaModal />
      </div>
      <div
        id="styled-settings"
        aria-labelledby="settings-tab"
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        role="tabpanel"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Settings tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        id="styled-contacts"
        aria-labelledby="contacts-tab"
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        role="tabpanel"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Contacts tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
