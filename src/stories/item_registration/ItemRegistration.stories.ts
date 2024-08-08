import { Meta, StoryObj } from "@storybook/vue3";
import CreateInventoryItem from "@/pages/item_registration/CreateInventoryItem.vue";

const meta: Meta<typeof CreateInventoryItem> = {
  component: CreateInventoryItem,
};
export default meta;
type Story = StoryObj<typeof CreateInventoryItem>;

export const Primary: Story = {
  render: () => ({
    components: { CreateInventoryItem },
    template: "<CreateInventoryItem />",
  }),

  name: "Creacion de Producto de Inventario",
};
