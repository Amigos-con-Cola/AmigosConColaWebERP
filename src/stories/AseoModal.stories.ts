import { Meta, StoryObj } from "@storybook/vue3";
import AseoModal from "@/components/animal_details/AseoModal.vue";

const meta: Meta<typeof AseoModal> = {
  component: AseoModal,
};

export default meta;

type Story = StoryObj<typeof AseoModal>;

export const Primary: Story = {
  render: () => ({
    components: { AseoModal },
    template: "<AseoModal />",
  }),
};
