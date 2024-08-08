import { apiClient } from "@/axios";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { reactive } from "vue";

export interface NewInventoryItem {
  nombre: string;
  ingrediente_principal: string;
  formato: string;
  volumen: string;
  via: string;
  fecha_vencimiento: string;
  laboratorio: string;
  origen: string;
  estado: string;
  fecha_registro: string;
  caja: string;
  cantidad: string;
  tipo: string;
}

type InventoryItem = { id: number } & NewInventoryItem;

export const useInventory = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: create } = useMutation({
    mutationKey: ["inventory"],
    mutationFn: async (payload: NewInventoryItem): Promise<InventoryItem> => {
      const response = await apiClient.post(`/api/Inventory`, payload);
      return await response.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["inventory"],
      });
    },
  });

  return reactive({
    create,
  });
};
