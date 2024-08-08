<script>
export default {
  data() {
    return {
      searchQuery: "",
      itemsPerPage: 8,
      currentPage: 1,
      inventoryItems: [
        {
          id: 1,
          nombre: "Apetil",
          ingrediente: "THC 5% / CBD 3%",
          formato: "Suspensión",
          volumen: "10 ml",
          via: "Oral",
          fechaVencimiento: "01/12/2024",
          laboratorio: "Holliday",
          origen: "ARG",
          estado: "Usado",
          ubicacion: "15/08/2023",
          caja: "1",
          cantidad: "8 frascos",
          tipo: "Antiinflamatorios",
        },
        {
          id: 2,
          nombre: "Apetil",
          ingrediente: "Metanizol",
          formato: "Jarabe",
          volumen: "100 ml",
          via: "Oral",
          fechaVencimiento: "30/11/2024",
          laboratorio: "Lab",
          origen: "ECU",
          estado: "Usado",
          ubicacion: "20/08/2023",
          caja: "3b",
          cantidad: "3 frascos",
          tipo: "Antiinflamatorios",
        },
        {
          id: 3,
          nombre: "Ibuprofeno",
          ingrediente: "Ibuprofeno",
          formato: "Comprimido",
          volumen: "400 mg",
          via: "Oral",
          fechaVencimiento: "15/10/2025",
          laboratorio: "Bayer",
          origen: "USA",
          estado: "Nuevo",
          ubicacion: "01/09/2023",
          caja: "2a",
          cantidad: "100 comprimidos",
          tipo: "Antiinflamatorios",
        },
        {
          id: 4,
          nombre: "Paracetamol",
          ingrediente: "Paracetamol",
          formato: "Comprimido",
          volumen: "500 mg",
          via: "Oral",
          fechaVencimiento: "20/09/2025",
          laboratorio: "GSK",
          origen: "UK",
          estado: "Nuevo",
          ubicacion: "05/09/2023",
          caja: "2b",
          cantidad: "50 comprimidos",
          tipo: "Analgésicos",
        },
        {
          id: 5,
          nombre: "Amoxicilina",
          ingrediente: "Amoxicilina",
          formato: "Cápsula",
          volumen: "500 mg",
          via: "Oral",
          fechaVencimiento: "10/08/2025",
          laboratorio: "Pfizer",
          origen: "USA",
          estado: "Nuevo",
          ubicacion: "10/09/2023",
          caja: "4a",
          cantidad: "30 cápsulas",
          tipo: "Antibióticos",
        },
        {
          id: 6,
          nombre: "Omeprazol",
          ingrediente: "Omeprazol",
          formato: "Cápsula",
          volumen: "20 mg",
          via: "Oral",
          fechaVencimiento: "05/07/2025",
          laboratorio: "AstraZeneca",
          origen: "SWE",
          estado: "Nuevo",
          ubicacion: "15/09/2023",
          caja: "4b",
          cantidad: "28 cápsulas",
          tipo: "Antiácidos",
        },
        {
          id: 7,
          nombre: "Loratadina",
          ingrediente: "Loratadina",
          formato: "Comprimido",
          volumen: "10 mg",
          via: "Oral",
          fechaVencimiento: "25/11/2025",
          laboratorio: "Schering-Plough",
          origen: "DEU",
          estado: "Nuevo",
          ubicacion: "20/09/2023",
          caja: "5a",
          cantidad: "30 comprimidos",
          tipo: "Antihistamínicos",
        },
        {
          id: 8,
          nombre: "Aspirina",
          ingrediente: "Ácido acetilsalicílico",
          formato: "Comprimido",
          volumen: "500 mg",
          via: "Oral",
          fechaVencimiento: "30/06/2025",
          laboratorio: "Bayer",
          origen: "DEU",
          estado: "Nuevo",
          ubicacion: "25/09/2023",
          caja: "5b",
          cantidad: "20 comprimidos",
          tipo: "Analgésicos",
        },
        {
          id: 9,
          nombre: "Diazepam",
          ingrediente: "Diazepam",
          formato: "Comprimido",
          volumen: "5 mg",
          via: "Oral",
          fechaVencimiento: "15/05/2025",
          laboratorio: "Roche",
          origen: "CHE",
          estado: "Controlado",
          ubicacion: "01/10/2023",
          caja: "6a",
          cantidad: "30 comprimidos",
          tipo: "Ansiolíticos",
        },
        {
          id: 10,
          nombre: "Metformina",
          ingrediente: "Metformina",
          formato: "Comprimido",
          volumen: "850 mg",
          via: "Oral",
          fechaVencimiento: "20/04/2025",
          laboratorio: "Merck",
          origen: "USA",
          estado: "Nuevo",
          ubicacion: "05/10/2023",
          caja: "6b",
          cantidad: "60 comprimidos",
          tipo: "Antidiabéticos",
        },
        {
          id: 11,
          nombre: "Levotiroxina",
          ingrediente: "Levotiroxina sódica",
          formato: "Comprimido",
          volumen: "100 mcg",
          via: "Oral",
          fechaVencimiento: "10/03/2025",
          laboratorio: "Abbott",
          origen: "USA",
          estado: "Nuevo",
          ubicacion: "10/10/2023",
          caja: "7a",
          cantidad: "30 comprimidos",
          tipo: "Hormonas tiroideas",
        },
        {
          id: 12,
          nombre: "Atorvastatina",
          ingrediente: "Atorvastatina",
          formato: "Comprimido",
          volumen: "20 mg",
          via: "Oral",
          fechaVencimiento: "05/02/2025",
          laboratorio: "Pfizer",
          origen: "USA",
          estado: "Nuevo",
          ubicacion: "15/10/2023",
          caja: "7b",
          cantidad: "30 comprimidos",
          tipo: "Estatinas",
        },
        {
          id: 13,
          nombre: "Escitalopram",
          ingrediente: "Escitalopram",
          formato: "Comprimido",
          volumen: "10 mg",
          via: "Oral",
          fechaVencimiento: "25/01/2025",
          laboratorio: "Lundbeck",
          origen: "DNK",
          estado: "Nuevo",
          ubicacion: "20/10/2023",
          caja: "8a",
          cantidad: "28 comprimidos",
          tipo: "Antidepresivos",
        },
        {
          id: 14,
          nombre: "Losartán",
          ingrediente: "Losartán potásico",
          formato: "Comprimido",
          volumen: "50 mg",
          via: "Oral",
          fechaVencimiento: "30/12/2024",
          laboratorio: "Merck",
          origen: "USA",
          estado: "Nuevo",
          ubicacion: "25/10/2023",
          caja: "8b",
          cantidad: "30 comprimidos",
          tipo: "Antihipertensivos",
        },
        {
          id: 15,
          nombre: "Pantoprazol",
          ingrediente: "Pantoprazol",
          formato: "Comprimido",
          volumen: "40 mg",
          via: "Oral",
          fechaVencimiento: "15/11/2024",
          laboratorio: "Takeda",
          origen: "JPN",
          estado: "Nuevo",
          ubicacion: "01/11/2023",
          caja: "9a",
          cantidad: "28 comprimidos",
          tipo: "Antiácidos",
        },
        {
          id: 16,
          nombre: "Fluoxetina",
          ingrediente: "Fluoxetina",
          formato: "Cápsula",
          volumen: "20 mg",
          via: "Oral",
          fechaVencimiento: "20/10/2024",
          laboratorio: "Eli Lilly",
          origen: "USA",
          estado: "Nuevo",
          ubicacion: "05/11/2023",
          caja: "9b",
          cantidad: "30 cápsulas",
          tipo: "Antidepresivos",
        },
      ],
      filteredItems: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredItems.slice(start, end);
    },
    paginationText() {
      const start = (this.currentPage - 1) * this.itemsPerPage + 1;
      const end = Math.min(
        this.currentPage * this.itemsPerPage,
        this.filteredItems.length,
      );
      return `${start}-${end} de ${this.filteredItems.length}`;
    },
  },
  methods: {
    filterItems() {
      const query = this.searchQuery.toLowerCase();
      this.filteredItems = this.inventoryItems.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(query),
        ),
      );
      this.currentPage = 1;
    },
    updatePagination() {
      this.currentPage = 1; // Reiniciar a la primera página al cambiar la cantidad de elementos por página
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    editItem(item) {
      // Lógica para editar el item
      alert(`Editar item con ID: ${item.id}`);
    },
  },
  created() {
    this.filteredItems = [...this.inventoryItems];
  },
};
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col">
    <div class="flex-1">
      <div class="relative">
        <div
          class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          v-model="searchQuery"
          @input="filterItems"
          class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar..."
        />
      </div>
      <table
        class="w-screen text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="p-4">ID</th>
            <th scope="col" class="px-8">Nombre</th>
            <th scope="col" class="px-8">Ingrediente principal</th>
            <th scope="col" class="px-8">Formato</th>
            <th scope="col" class="px-8">Volumen</th>
            <th scope="col" class="px-8">V/Adm</th>
            <th scope="col" class="px-8">Fecha de vencimiento</th>
            <th scope="col" class="px-8">Laboratorio</th>
            <th scope="col" class="px-8">Origen</th>
            <th scope="col" class="px-8">Estado</th>
            <th scope="col" class="px-8">f/Registro</th>
            <th scope="col" class="px-8">Caja</th>
            <th scope="col" class="px-8">Cantidad</th>
            <th scope="col" class="px-8">Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in paginatedItems"
            :key="item.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.ingrediente }}</td>
            <td>{{ item.formato }}</td>
            <td>{{ item.volumen }}</td>
            <td>{{ item.via }}</td>
            <td>{{ item.fechaVencimiento }}</td>
            <td>{{ item.laboratorio }}</td>
            <td>{{ item.origen }}</td>
            <td>{{ item.estado }}</td>
            <td>{{ item.ubicacion }}</td>
            <td>{{ item.caja }}</td>
            <td>{{ item.cantidad }}</td>
            <td>{{ item.tipo }}</td>
            <td>
              <button
                class="edit-btn p-2 text-blue-500 hover:bg-blue-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                @click="editItem(item)"
              >
                <!-- Flowbite/Icon SVG -->
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
              </button>
            </td>
            <td>
              <button
                class="edit-btn p-2 text-blue-500 hover:bg-blue-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                @click="editItem(item)"
              >
                <!-- Flowbite/Icon SVG -->
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Sección para la cantidad de resultados por página -->
    <div class="container flex justify-between items-center">
      <div class="flex justify-between items-center">
        <p class="mr-4">Mostrar resultados</p>
        <select
          v-model="itemsPerPage"
          @change="updatePagination"
          class="items-per-page-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="8">8</option>
          <option value="16">16</option>
        </select>
      </div>

      <div class="pagination flex items-center">
        <span>{{ paginationText }}</span>
        <button
          class="pagination-btn"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          &lt;
        </button>
        <button
          class="pagination-btn"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  width: 50px;
}

.items-per-page-select {
  padding: 5px;
  margin-right: 10px;
}

.pagination {
  margin-top: 20px;
}

.pagination-btn {
  margin: 0 5px;
}
</style>
