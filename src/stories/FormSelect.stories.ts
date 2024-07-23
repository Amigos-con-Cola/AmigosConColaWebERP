import { Meta, StoryObj } from "@storybook/vue3";
import SelectForm from "@/components/FormSelect.vue";

const meta: Meta<typeof SelectForm> = {
  title: "Components/SelectForm",
  component: SelectForm,
  argTypes: {
    options: { control: "object" },
    modelValue: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    customClass: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof SelectForm>;

export const Default: Story = {
  render: (args) => ({
    components: { SelectForm },
    setup() {
      return { args };
    },
    template: `
          <SelectForm v-bind="args" :options="[
      { value: 'Dias', label: 'Días' },
          { value: 'Meses', label: 'Meses' },
          { value: 'Años', label: 'Años' },
          ]"/>`,
  }),
  args: {
    modelValue: "",
    placeholder: "Tiempo en ...",
    disabled: false,
    customClass: "",
  },
};
