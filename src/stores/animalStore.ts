import { apiClient } from "@/axios";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/vue-query";
import { reactive, Ref, watch } from "vue";

export interface Animal {
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

export interface GetResponse {
  data: Animal[];
  nextPage: number;
  totalItems: number;
  totalPages: number;
}

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
  specie?: string,
  name?: string,
): Promise<GetResponse | null> {
  if (page < 0) return null;

  let url = `/api/animals/?page=${page}&perPage=12`;

  if (specie) url += `&species=${specie}`;
  if (name) url += `&name=${name}`;

  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
}

interface NewAnimal {
  nombre: string;
  edad: number;
  imagen: File;
  genero: "Male" | "Female";
  especie: "Cat" | "Dog";
  ubicacion: string;
  peso: number;
  historia?: string;
  codigo?: string;
}

async function createAnimal(newAnimal: NewAnimal): Promise<Animal | null> {
  const formData = new FormData();

  formData.set("nombre", newAnimal.nombre);
  formData.set("genero", newAnimal.genero);
  formData.set("especie", newAnimal.especie);
  formData.set("edad", newAnimal.edad.toString());
  formData.set("ubicacion", newAnimal.ubicacion);
  formData.set("codigo", newAnimal.codigo ?? "");
  formData.set("historia", newAnimal.historia ?? "");
  formData.set("peso", newAnimal.peso.toString());
  formData.set("imagen", newAnimal.imagen);

  const response = await apiClient.post(`/api/animals`, formData);
  return await response.data;
}

/**
 * Get a single animal by its id.
 * @param id The number that identifies the animal
 * @return An animal.
 */
async function getAnimalById(id: number): Promise<Animal | null> {
  try {
    const response = await apiClient.get(`/api/animals/${id}`);
    return await response.data;
  } catch {
    return null;
  }
}

async function deleteAnimal(id: number): Promise<void> {
  await apiClient.delete(`/api/animals/${id}`);
}

export const useAnimal = (idAnimal: number) => {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["animals", idAnimal],
    queryFn: async () => await getAnimalById(idAnimal),
    initialData: null,
  });

  const {
    mutateAsync: remove,
    isError,
    isSuccess,
  } = useMutation({
    mutationKey: ["animals", idAnimal],
    mutationFn: async () => await deleteAnimal(idAnimal),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["animals", idAnimal],
      });
    },
  });

  const { mutateAsync: update } = useMutation({
    mutationKey: ["animals", idAnimal],
    mutationFn: async function (payload: any) {
      await apiClient.patch(`/api/animals/${idAnimal}`, payload);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["animals", idAnimal],
      });
    },
  });

  return reactive({
    data,
    remove,
    isSuccess,
    isError,
    loading: isFetching,
    update,
  });
};

export const useAnimals = (
  params: {
    page: Ref<number>;
    specie: Ref<string>;
    name: Ref<string>;
  } | null = null,
) => {
  const queryClient = useQueryClient();

  const emptyData = { data: [], nextPage: 0, totalItems: 0, totalPages: 0 };

  const { data, refetch, isFetching, isError } = useQuery({
    queryKey: ["animals"],
    queryFn: async () =>
      params !== null
        ? await getPaginated(
            params.page.value,
            params.specie.value,
            params.name.value,
          )
        : emptyData,
    placeholderData: keepPreviousData,
    initialData: emptyData,
  });

  const { mutateAsync: create } = useMutation({
    mutationKey: ["animals"],
    mutationFn: createAnimal,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["animals"],
      });
    },
  });

  if (params !== null) {
    watch(params.page, refetch);
    watch(params.specie, refetch);
    watch(params.name, refetch);
  }

  return reactive({
    data,
    error: isError,
    loading: isFetching,
    refetch,
    create,
  });
};
