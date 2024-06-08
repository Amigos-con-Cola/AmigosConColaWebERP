import { defineStore } from "pinia";

interface Animal {
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
   * @return A list of animals.
   */
  async function getPaginated(
    page: number = 1,
    perPage: number = 10,
  ): Promise<Animal[]> {
    if (page < 0) return [];
    if (perPage < 0) return [];

    try {
      const response = await fetch(
        `${API_BASE}/api/animals?page=${page}&perPage=${perPage}`,
      );

      if (!response.ok) {
        console.error(`Error fetching animals: ${response.statusText}`);
        return [];
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching animals:", error);
      return [];
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

  /**
   * Create a new animal.
   * @param animal The animal to create.
   * @return The created animal.
   */
  async function postAnimal(animal: Animal): Promise<Animal | null> {
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

      // Manejar los errores HTTP
      if (!response.ok) {
        console.error(`Error creating animal: ${response.statusText}`);
        return null;
      }

      return await response.json();
    } catch (error: any) {
      console.error("Error creating animal:", error);
      return null;
    }
  }

  return {
    getPaginated,
    getAnimalById,
    postAnimal,
  };
});
