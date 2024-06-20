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
<<<<<<< HEAD
};
=======
};
>>>>>>> ab408a049197064c795c9358a2eb4a44e532a25a
