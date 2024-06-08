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

        <!--        <button-->
        <!--          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"-->
        <!--          data-modal-target="popup-modal"-->
        <!--          data-modal-toggle="popup-modal"-->
        <!--          type="button"-->
        <!--        >-->
        <!--          Toggle modal-->
        <!--        </button>-->

        <!--        <div-->
        <!--          id="popup-modal"-->
        <!--          class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"-->
        <!--          tabindex="-1"-->
        <!--        >-->
        <!--          <div class="relative p-4 w-full max-w-md max-h-full">-->
        <!--            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">-->
        <!--              <button-->
        <!--                class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"-->
        <!--                data-modal-hide="popup-modal"-->
        <!--                type="button"-->
        <!--              >-->
        <!--                <svg-->
        <!--                  aria-hidden="true"-->
        <!--                  class="w-3 h-3"-->
        <!--                  fill="none"-->
        <!--                  viewBox="0 0 14 14"-->
        <!--                  xmlns="http://www.w3.org/2000/svg"-->
        <!--                >-->
        <!--                  <path-->
        <!--                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"-->
        <!--                    stroke="currentColor"-->
        <!--                    stroke-linecap="round"-->
        <!--                    stroke-linejoin="round"-->
        <!--                    stroke-width="2"-->
        <!--                  />-->
        <!--                </svg>-->
        <!--                <span class="sr-only">Close modal</span>-->
        <!--              </button>-->
        <!--              <div class="p-4 md:p-5 text-center">-->
        <!--                <svg-->
        <!--                  aria-hidden="true"-->
        <!--                  class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"-->
        <!--                  fill="none"-->
        <!--                  viewBox="0 0 20 20"-->
        <!--                  xmlns="http://www.w3.org/2000/svg"-->
        <!--                >-->
        <!--                  <path-->
        <!--                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"-->
        <!--                    stroke="currentColor"-->
        <!--                    stroke-linecap="round"-->
        <!--                    stroke-linejoin="round"-->
        <!--                    stroke-width="2"-->
        <!--                  />-->
        <!--                </svg>-->
        <!--                <h3-->
        <!--                  class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"-->
        <!--                >-->
        <!--                  Are you sure you want to delete this product?-->
        <!--                </h3>-->
        <!--                <button-->
        <!--                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"-->
        <!--                  data-modal-hide="popup-modal"-->
        <!--                  type="button"-->
        <!--                >-->
        <!--                  Yes, I'm sure-->
        <!--                </button>-->
        <!--                <button-->
        <!--                  class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"-->
        <!--                  data-modal-hide="popup-modal"-->
        <!--                  type="button"-->
        <!--                >-->
        <!--                  No, cancel-->
        <!--                </button>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
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
