import { Meta, StoryObj } from "@storybook/vue3";

import NavBar from "@/components/NavBar.vue";

const meta: Meta<typeof NavBar> = { component: NavBar };

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
  render: () => ({
    components: { NavBar },
    template: "<NavBar />",
  }),
};
