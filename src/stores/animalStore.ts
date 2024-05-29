import { defineStore } from "pinia";

interface Animal {
  id: number;
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
   * @return A list of animals.
   */
  async function getPaginated(
    page: number = 1,
    perPage: number = 10,
  ): Promise<Animal[]> {
    if (page < 0) return [];
    if (perPage < 0) return [];

    const response = await fetch(
      `${API_BASE}/api/animals?page=${page}&perPage=${perPage}`,
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
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
    getAnimalById,
  };
});
