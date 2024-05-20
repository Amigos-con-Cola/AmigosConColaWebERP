import { Meta, StoryObj } from "@storybook/vue3";
import AnimalRegistration from "@/pages/AnimalRegistration/AnimalRegistration.vue";

const meta: Meta<typeof AnimalRegistration> = {
  component: AnimalRegistration,
};
export default meta;
type Story = StoryObj<typeof AnimalRegistration>;

export const Primary: Story = {
  render: () => ({
    components: { AnimalRegistration },
    template: "<AnimalRegistration />",
  }),

  name: "Creacion de animal",
};
