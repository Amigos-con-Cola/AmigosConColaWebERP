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
  idAnimal: number;
  fecha: string;
  tipo: string;
}

const fetchAseos = ({ queryKey }: QueryFunctionContext): Promise<Aseo[]> => {
  return apiClient
    .get<Aseo[]>(`/api/animales/${queryKey[1]}/aseos`)
    .then((res) => res.data);
};

const postAseos = (newAseo: NewAseo): Promise<Aseo | null> => {
  return apiClient
    .post(
      `/api/animales/${newAseo.idAnimal}/aseos`,
      _.omit(newAseo, ["idAnimal"]),
    )
    .then((res) => res.data);
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
    mutationFn: postAseos,
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
