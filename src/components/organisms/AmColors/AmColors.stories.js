import AmColors from "./AmColors";

export default {
  title: "Organisms/AmColors",
  component: AmColors,
  argTypes: {
    colors: {
      control: { type: "object" },
    },
  },
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmColors },
  template: `
    <AmColors :colors="colors" />
  `,
});
