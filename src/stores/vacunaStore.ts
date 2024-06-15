import { defineStore } from "pinia";

export interface Vaccine {
  name: string;
  date: string;
  examen_previo?: string;
}

export const useVacunas = defineStore("vacunas", () => {
  const API_BASE = "http://localhost:5130";

  /**
   * Create a new vaccine.
   * @param idAnimal The id of the animal to create the vaccine for.
   * @param vaccine The vaccine to create.
   * @return The created vaccine.
   */
  async function postVacuna(
    vaccine: Vaccine,
    idAnimal: number,
  ): Promise<Vaccine | null> {
    if (!vaccine || typeof vaccine !== "object") {
      console.error("Invalid argument: vaccine must be an object");
      return null;
    }

    try {
      const response = await fetch(
        `${API_BASE}/api/animales/${idAnimal}/vacunaciones`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vaccine),
        },
      );

      if (!response.ok) {
        console.error("Failed to create vaccine");
        return null;
      }

      return await response.json();
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  return {
    postVacuna,
  };
});
