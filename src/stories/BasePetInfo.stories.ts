import type { Meta, StoryObj } from "@storybook/vue3";

import BasePetInfo from "@/components/pet_info/BasePetInfo.vue";

const meta: Meta<typeof BasePetInfo> = {
  component: BasePetInfo,
};

interface Pet {
  codigo: string;
  nombre: string;
  edad: number;
  especie: string;
  genero: string;
  ubicacion: string;
  peso: number;
  adoptado: boolean;
  imagen: string;
}

export default meta;
type Story = StoryObj<typeof BasePetInfo>;

export const Primary: Story = {
  render: (args: { pet: Pet }) => ({
    components: { BasePetInfo },
    template: '<BasePetInfo v-bind="args" />',
    setup() {
      return { args };
    },
  }),
  args: {
    pet: {
      codigo: "YXEC",
      nombre: "Luo",
      edad: 10,
      especie: "Perro",
      genero: "Macho",
      ubicacion: "12-34x",
      peso: 50,
      adoptado: true,
      imagen:
        "https://media.istockphoto.com/id/1482199015/es/foto/feliz-cachorro-gal%C3%A9s-corgi-14-semanas-de-edad-perro-gui%C3%B1ando-un-ojo-jadeando-y-sentado-aislado.webp?s=1024x1024&w=is&k=20&c=rsFg2u7HyCI8EnXJ7MjW94mu2fyulJx-LV5UVvzzowk=",
    },
  },
};
