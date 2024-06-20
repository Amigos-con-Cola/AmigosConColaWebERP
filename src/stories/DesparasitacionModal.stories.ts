import { Meta, StoryObj } from "@storybook/vue3";
import DesparasitacionModal from "@/components/animal_details/DesparasitacionModal.vue";

const meta: Meta<typeof DesparasitacionModal> = {
  component: DesparasitacionModal,
};

export default meta;

type Story = StoryObj<typeof DesparasitacionModal>;

export const Primary: Story = {
  render: () => ({
    components: { DesparasitacionModal },
    template: "<DesparasitacionModal />",
  }),
};
