import { apiClient } from "@/axios";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { reactive } from "vue";

export interface NewInventoryItem {
  nombre: string;
  ingrediente_principal: string;
  formato: string;
  volumen: string;
  via: string;
  fecha_vencimiento: Date;
  laboratorio: string;
  origen: string;
  estado: string;
  fecha_registro: Date;
  caja: string;
  cantidad: string;
  tipo: string;
}

export interface InventoryItem {
  id: number;
  nombre: string;
  ingrediente_principal: string;
  formato: string;
  volumen: string;
  via: string;
  fecha_vencimiento: Date;
  laboratorio: string;
  origen: string;
  estado: string;
  fecha_registro: Date;
  caja: string;
  cantidad: string;
  tipo: string;
}

/**
 * Create a new inventory item.
 * @param newInventoryItem The parameter (NewInventoryItem) to create the inventory item.
 * @return The created inventory item.
 */

async function createInventoryItem(
  newInventoryItem: NewInventoryItem,
): Promise<InventoryItem | null> {
  const response = await apiClient.post(`/api/Inventory`, newInventoryItem);
  return await response.data;
}

export const useInventory = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: create } = useMutation({
    mutationKey: ["inventory"],
    mutationFn: createInventoryItem,
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
