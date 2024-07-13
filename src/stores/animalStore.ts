import { defineStore } from "pinia";

export interface Animal {
  id?: number;
  adoptado: boolean;
  nombre: string;
  edad: number;
  genero: string;
  imagen: string;
  especie: string;
  historia: string;
  ubicacion: string;
  peso: number;
  codigo: string;
}

export interface GetResponse {
  data: Animal[];
  nextPage: number;
  totalItems: number;
  totalPages: number;
}

export const useAnimals = defineStore("animales", () => {
  const API_BASE = "http://localhost:5130";

  /**
   * Get a paginated list of all animals.
   * @param page The page number
   * @param perPage How many items per page
   * @param specie The filter to apply
   * @param name Filter by name
   * @return A list of animals.
   */
  async function getPaginated(
    page: number = 1,
    perPage: number = 12,
    specie?: string,
    name?: string,
  ): Promise<GetResponse | null> {
    if (page < 0) return null;
    if (perPage < 0) return null;

    const url = new URL(`${API_BASE}/api/animals`);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("perPage", perPage.toString());
    if (specie) {
      url.searchParams.append("species", specie);
    }
    if (name) {
      url.searchParams.append("name", name);
    }

    try {
      const response = await fetch(url.toString());

      if (!response.ok) {
        console.error(`Error fetching animals: ${response.statusText}`);
        return null;
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching animals:", error);
      return null;
    }
  }

  /**
   * Create a new animal.
   * @param animal The animal to create.
   * @param image Image file to upload
   * @return The created animal.
   */
  // En src/stores/animalStore.ts
  async function createAnimal(
    animal: Animal,
    image: File | null,
  ): Promise<Animal | null> {
    // Validar el argumento animal
    if (!animal || typeof animal !== "object") {
      console.error("Invalid argument: animal must be an object");
      return null;
    }

    const formData = new FormData();

    formData.set("nombre", animal.nombre);
    formData.set("genero", animal.genero);
    formData.set("especie", animal.especie);
    formData.set("edad", animal.edad.toString());
    formData.set("codigo", animal.codigo);
    formData.set("ubicacion", animal.ubicacion);
    formData.set("historia", animal.historia);
    formData.set("peso", animal.peso.toString());

    if (image !== null) {
      formData.set("imagen", image);
    }

    try {
      const response = await fetch(`${API_BASE}/api/animals`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error("Failed to create animal");
        return null;
      }

      return await response.json();
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  /**
   * Get a single animal by its id.
   * @param id The number that identifies the animal
   * @return An animal.
   */
  async function getAnimalById(id: number) {
    const response = await fetch(`${API_BASE}/api/animals/${id}`);

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  return {
    getPaginated,
    createAnimal,
    getAnimalById,
  };
});
