import _ from "lodash";
import {
  QueryFunctionContext,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/vue-query";
import { apiClient } from "@/axios";
import { reactive } from "vue";

export interface Aseo {
  id: number;
  id_animal: number;
  fecha: string;
  tipo: string;
}

export interface NewAseo {
  fecha: string;
  tipo: string;
}

const fetchAseos = async ({
  queryKey,
}: QueryFunctionContext): Promise<Aseo[]> => {
  const res = await apiClient.get<Aseo[]>(`/api/animales/${queryKey[1]}/aseos`);
  return res.data;
};

const postAseos = async (id: number, aseo: NewAseo): Promise<Aseo> => {
  const res = await apiClient.post(`/api/animales/${id}/aseos`, aseo);
  return res.data;
};

export const useAseos = (idAnimal: number) => {
  const queryClient = useQueryClient();

  const { isError, data, error } = useQuery({
    queryKey: ["aseos", idAnimal],
    queryFn: fetchAseos,
    initialData: [],
  });

  const {
    isError: isMutationError,
    error: mutationError,
    mutateAsync,
    isSuccess,
  } = useMutation({
    mutationFn: async (payload: NewAseo) => await postAseos(idAnimal, payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["aseos", idAnimal] });
    },
  });

  return reactive({
    isError,
    error,
    items: data,
    create: mutateAsync,
    isSuccess,
    isMutationError,
    mutationError,
  });
};
