import { Meta, StoryObj } from "@storybook/vue3";
import PesoModal from "@/components/animal_details/PesoModal.vue";

const meta: Meta<typeof PesoModal> = {
  component: PesoModal,
};

export default meta;

type Story = StoryObj<typeof PesoModal>;

export const Primary: Story = {
  render: () => ({
    components: { PesoModal },
    template: "<PesoModal />",
  }),
};
