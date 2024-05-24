import { Meta, StoryObj } from "@storybook/vue3";
import VacunaModal from "@/components/animal_details/VacunaModal.vue";

const meta: Meta<typeof VacunaModal> = {
  component: VacunaModal,
};

export default meta;

type Story = StoryObj<typeof VacunaModal>;

export const Primary: Story = {
  render: () => ({
    components: { VacunaModal },
    template: "<VacunaModal />",
  }),
};
