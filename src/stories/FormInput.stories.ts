import { Meta, StoryObj } from "@storybook/vue3";
import FormInput from "@/components/FormInput.vue";

const meta: Meta<typeof FormInput> = {
  title: "Components/FormInput",
  component: FormInput,
};

export default meta;

type Story = StoryObj<typeof FormInput>;

export const TextInput: Story = {
  render: (args) => ({
    components: { FormInput },
    setup() {
      return { args };
    },
    template: `
          <FormInput v-bind="args"/>`,
  }),
  args: {
    placeholder: "Enter text",
    value: "",
    type: "text",
    customClass: "w-[50px]",
  },
};

export const NumberInput: Story = {
  render: (args) => ({
    components: { FormInput },
    setup() {
      return { args };
    },
    template: `
          <FormInput v-bind="args"/>`,
  }),
  args: {
    placeholder: "Enter number",
    type: "number",
    min: 0,
    max: 100,
  },
};

export const DateInput: Story = {
  render: (args) => ({
    components: { FormInput },
    setup() {
      return { args };
    },
    template: `
          <FormInput v-bind="args"/>`,
  }),
  args: {
    type: "date",
  },
};

export const EmailInput: Story = {
  render: (args) => ({
    components: { FormInput },
    setup() {
      return { args };
    },
    template: `
          <FormInput v-bind="args"/>`,
  }),
  args: {
    placeholder: "Enter email",
    type: "email",
  },
};
