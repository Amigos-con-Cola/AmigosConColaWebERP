import { Meta, StoryObj } from "@storybook/vue3";
import StepTwo from "@/components/animal_registration/StepTwo.vue";

const meta: Meta<typeof StepTwo> = {
  component: StepTwo,
};
export default meta;
type Story = StoryObj<typeof StepTwo>;

export const Primary: Story = {
  render: () => ({
    components: { StepTwo },
    template: "<StepTwo />",
  }),

  name: "Creacion de animal parte 2",
};
