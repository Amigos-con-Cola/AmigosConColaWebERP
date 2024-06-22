import { Meta, StoryObj } from "@storybook/vue3";
import VacunaInfo from "@/components/vacunas/VacunaInfo.vue";

const meta: Meta<typeof VacunaInfo> = {
  component: VacunaInfo,
};

export default meta;

type Story = StoryObj<typeof VacunaInfo>;

export const Primary: Story = {
  render: () => ({
    components: { VacunaInfo },
    template: "<VacunaInfo />",
  }),
};
