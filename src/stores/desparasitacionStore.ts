import { apiClient } from "@/axios";
import {
  QueryFunctionContext,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/vue-query";
import { defineStore } from "pinia";

export interface Deworming {
  tipo: string;
  date: string;
  product: string;
  weight: number;
  format: string;
}

export interface PostDesparasitacionesParams {
  deworming: Deworming;
  idAnimal: number;
}

/**
 * Create a new Deworming.
 * @param idAnimal The id of the animal to create the deworming for.
 * @param deworming The deworming to create.
 * @return The created deworming.
 */

async function PostDesparasitaciones(params: PostDesparasitacionesParams): Promise<Deworming | null> {
  const deworming = params.deworming;
  const idAnimal = params.idAnimal;

  if (!deworming || typeof deworming !== "object") {
    console.error("Invalid argument: deworming must be an object");
    return null;
  }

  try {
    const response = await apiClient.post<Deworming>(
      `/api/animals/${idAnimal}/desparasitaciones`,
      deworming,
    );
    return response.data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

async function getDesparasitaciones({
  queryKey,
}: QueryFunctionContext): Promise<Deworming[] | null> {
  try {
    const response = await apiClient.get(
      `/api/animals/${queryKey[1]}/desparasitaciones`,
    );
    return response.data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

export const useDesparasitaciones = (idAnimal: number) =>
  defineStore("desparasitaciones", () => {
    const queryClient = useQueryClient();

    const { data } = useQuery({
      queryKey: ["desparasitaciones", idAnimal],
      queryFn: getDesparasitaciones,
    });

    const { mutateAsync, error, isError, isSuccess } = useMutation({
      mutationFn: PostDesparasitaciones,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["desparasitaciones", idAnimal] });
      },
    });

    return {
      items: data,
      create: mutateAsync,
      creationError: error,
      isCreationError: isError,
      isCreationSuccess: isSuccess,
    };
  })();
