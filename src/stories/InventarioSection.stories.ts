import { Meta, StoryObj } from "@storybook/vue3";

import Inventory from "@/pages/Inventory.vue";

const meta: Meta<typeof Inventory> = { component: Inventory };

export default meta;

type Story = StoryObj<typeof Inventory>;

export const Primary: Story = {
  render: () => ({
    components: { Inventory },
    template: "<Inventory />",
  }),
};
