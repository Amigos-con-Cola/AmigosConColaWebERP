import {Meta, StoryObj} from "@storybook/vue3";
import StepOne from "@/components/AnimalRegistration/StepOne.vue";


const meta: Meta<typeof StepOne> = {
    component: StepOne,
};
export default meta;
type Story = StoryObj<typeof StepOne>;


export const Primary: Story = {
    render: () => ({
        components: { StepOne },
        template: '<StepOne />',
    }),

    name: "Creacion de animal parte 1"
};