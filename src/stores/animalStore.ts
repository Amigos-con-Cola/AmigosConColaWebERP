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

export const useAnimals = defineStore("animales", () => {
  const API_BASE = "http://localhost:5130";

  /**
   * Get a paginated list of all animals.
   * @param page The page number
   * @param perPage How many items per page
   * @param filter The filter to apply
   * @return A list of animals.
   */
  async function getPaginated(
    page: number = 1,
    perPage: number = 12,
    filter?: string,
  ): Promise<Animal[]> {
    if (page < 0) return [];
    if (perPage < 0) return [];

    const url = new URL(`${API_BASE}/api/animals`);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("perPage", perPage.toString());
    if (filter) {
      url.searchParams.append("species", filter);
    }

    try {
    const response = await fetch(url.toString());

      if (!response.ok) {
        console.error(`Error fetching animals: ${response.statusText}`);
        return [];
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching animals:", error);
      return [];
    }
  }

  /**
   * Create a new animal.
   * @param animal The animal to create.
   * @return The created animal.
   */
  // En src/stores/animalStore.ts
  async function postAnimal(animal: Animal): Promise<Animal | null> {
    // Validar el argumento animal
    if (!animal || typeof animal !== "object") {
      console.error("Invalid argument: animal must be an object");
      return null;
    }

    try {
      const response = await fetch(`${API_BASE}/api/animals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(animal),
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
    postAnimal,
    getAnimalById,
  };
});
