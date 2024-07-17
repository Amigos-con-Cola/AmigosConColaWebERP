import { apiClient } from "@/axios";
import {
  QueryFunctionContext,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/vue-query";
import { reactive } from "vue";

export interface Vaccine {
  name: string;
  date: string;
  examenPrevio?: string | undefined;
}

export interface PostVacunaParams {
  vaccine: Vaccine;
  idAnimal: number;
}

/**
 * Create a new vaccine.
 * @param idAnimal The id of the animal to create the vaccine for.
 * @param vaccine The vaccine to create.
 * @return The created vaccine.
 */
async function postVacuna(params: PostVacunaParams): Promise<Vaccine | null> {
  const vaccine = params.vaccine;
  const idAnimal = params.idAnimal;

  if (!vaccine || typeof vaccine !== "object") {
    console.error("Invalid argument: vaccine must be an object");
    return null;
  }

  try {
    const response = await apiClient.post<Vaccine>(
      `/api/animales/${idAnimal}/vacunaciones`,
      vaccine,
    );
    return response.data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

async function getVacunas({
  queryKey,
}: QueryFunctionContext): Promise<Vaccine[] | null> {
  try {
    const response = await apiClient.get(
      `/api/animales/${queryKey[1]}/vacunaciones`,
    );
    return response.data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

export const useVacunas = (idAnimal: number) => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["vacunas", idAnimal],
    queryFn: getVacunas,
    initialData: [],
  });

  const { mutateAsync, error, isError, isSuccess } = useMutation({
    mutationFn: postVacuna,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vacunas", idAnimal] });
    },
  });

  return reactive({
    items: data,
    create: mutateAsync,
    creationError: error,
    isCreationError: isError,
    isCreationSuccess: isSuccess,
  });
};
