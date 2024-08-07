import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { apiClient } from "@/axios.ts";
import { reactive } from "vue";

interface Peso {
  id: number;
  id_animal: number;
  peso_actual: number;
  fecha: string;
}

interface NewPeso {
  peso_actual: number;
  fecha: string;
}

export const usePesos = (id: number) => {
  const queryClient = useQueryClient();

  const { data: items } = useQuery({
    queryKey: ["pesos", id],
    queryFn: async (): Promise<Peso[]> => {
      const res = await apiClient.get(`/api/animales/${id}/pesos`);
      return res.data;
    },
    initialData: [],
  });

  const { mutateAsync: create } = useMutation({
    mutationKey: ["pesos", id],
    mutationFn: async (payload: NewPeso): Promise<Peso> => {
      const res = await apiClient.post(`/api/animales/${id}/pesos`, payload);
      return res.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["pesos", id],
      });
    },
  });

  return reactive({
    items,
    create,
  });
};
