import { Meta, StoryObj } from "@storybook/vue3";
import VacunaPhoto from "@/components/vacunas/VacunaPhoto.vue";

const meta: Meta<typeof VacunaPhoto> = {
  component: VacunaPhoto,
};

export default meta;

type Story = StoryObj<typeof VacunaPhoto>;

export const Primary: Story = {
  render: () => ({
    components: { VacunaPhoto },
    template: "<VacunaPhoto />",
  }),
};
