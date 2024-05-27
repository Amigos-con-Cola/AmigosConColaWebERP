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
     * Create a new animal.
     * @param animal The animal to create.
     * @return The created animal.
     */
    async function postAnimal(animal: any): Promise<any> {
        const response = await fetch(`${API_BASE}/api/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(animal),
        });

        if (!response.ok) {
            throw new Error("Error creating animal");
        }

        return await response.json();
    }

  return {
    getPaginated,
      postAnimal,
  };



});
