<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import DetailPetInfo from "@/components/pet_info/DetailPetInfo.vue";
import AddButton from "@/components/AddButton.vue";
import VacunaModal from "@/components/animal_details/VacunaModal.vue";
import { Animal } from "@stores/animalStore.ts";
import { useVacunas, Vaccine } from "@stores/vacunaStore.ts";
import { useRoute } from "vue-router";
import VacunaPhoto from "@/components/vacunas/VacunaPhoto.vue";
import VacunaInfo from "@/components/vacunas/VacunaInfo.vue";
import AseoModal from "@/components/animal_details/AseoModal.vue";
import DesparasitacionModal from "@/components/animal_details/DesparasitacionModal.vue";

const vacunas = useVacunas();

const idAnimal = ref();
const route = useRoute();

idAnimal.value = route.params.id;

const props = defineProps<{
  pet: Animal | null;
}>();

let vaccines = ref<Vaccine[]>([]);

async function getAllVaccines() {
  const data = await vacunas.getVacunas(idAnimal.value);

  if (!data) {
    return;
  }
  vaccines.value = data;
}

onMounted(() => {
  initFlowbite();
  getAllVaccines();
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
            aria-controls="contacts"
            aria-selected="false"
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            data-tabs-target="#styled-contacts"
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
        <DetailPetInfo :historia="props.pet?.historia" />
      </div>
      <div
        id="styled-dashboard"
        aria-labelledby="dashboard-tab"
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        role="tabpanel"
      >
        <AddButton
          class="mb-4"
          data-modal-target="vacuna-modal"
          data-modal-toggle="vacuna-modal"
        />
        <VacunaModal @vaccineAdded="getAllVaccines" />

        <div class="max-h-96 overflow-y-auto">
          <div v-for="vaccine in vaccines" class="flex mb-4">
            <VacunaPhoto class="mr-3" />
            <VacunaInfo
              :examenPrevio="vaccine?.examenPrevio"
              :fecha="vaccine.date"
              :nombre="vaccine.name"
            />
          </div>
        </div>
      </div>
      <div
        id="styled-settings"
        aria-labelledby="settings-tab"
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        role="tabpanel"
      >
        <AddButton
          class="mb-4"
          data-modal-target="desparasitacion-modal"
          data-modal-toggle="desparasitacion-modal"
        />
        <DesparasitacionModal />
      </div>
      <div
        id="styled-contacts"
        aria-labelledby="contacts-tab"
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        role="tabpanel"
      >
        <AddButton
          class="mb-4"
          data-modal-target="aseo-modal"
          data-modal-toggle="aseo-modal"
        />
        <AseoModal />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
