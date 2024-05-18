import SearchInput from "@/components/home_page/SearchInput.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof SearchInput> = { component: SearchInput };

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  render: () => ({
    components: { SearchInput },
    template: "<SearchInput/>",
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByPlaceholderText("Buscar"), "Deez nuts", {
      delay: 100,
    });
  },
};
