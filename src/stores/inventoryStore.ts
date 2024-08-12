import { apiClient } from "@/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { reactive, Ref, watch } from "vue";
import { InventoryItem, NewInventoryItem } from "@/types/inventory.ts";
import { emptyPaginatedData, PaginatedData } from "@/types/paginated_data.ts";

export const useInventory = (params: { page: Ref<number> } | null) => {
  const queryClient = useQueryClient();

  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["inventory"],
    queryFn: async () => {
      try {
        const response = await apiClient.get<PaginatedData<InventoryItem>>(
          "/api/inventory",
          {
            params: {
              page: params?.page?.value,
            },
          },
        );
        return response.data;
      } catch {
        return emptyPaginatedData<InventoryItem>();
      }
    },
    initialData: emptyPaginatedData<InventoryItem>(),
  });

  if (params?.page != null) {
    watch(params.page, () => refetch());
  }

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
    items,
    isLoading,
    create,
  });
};
