import { apiClient } from "@/axios";
import {
  QueryFunctionContext,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/vue-query";
import { reactive } from "vue";

export interface Vacuna {
  id: number;
  name: string;
  date: string;
  examen_previo?: string | undefined;
}

export interface NewVacuna {
  name: string;
  date: string;
  examen_previo?: string | undefined;
}

async function postVacuna(id: number, vacuna: NewVacuna): Promise<Vacuna> {
  const response = await apiClient.post<Vacuna>(
    `/api/animales/${id}/vacunaciones`,
    vacuna,
  );
  return response.data;
}

async function getVacunas({
  queryKey,
}: QueryFunctionContext): Promise<Vacuna[]> {
  try {
    const response = await apiClient.get(
      `/api/animales/${queryKey[1]}/vacunaciones`,
    );
    return response.data;
  } catch (error: any) {
    console.error(error.message);
    return [];
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
    mutationFn: async (payload: NewVacuna) => postVacuna(idAnimal, payload),
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
