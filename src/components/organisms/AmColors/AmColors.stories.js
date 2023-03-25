import AmColors from "./AmColors";
import { colors } from "./colors";

export default {
  title: "Organisms/AmColors",
  component: AmColors,
  argTypes: {
    color: {
      control: { type: "select", options: colors.map((color) => color.value) },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AmColors },
  props: Object.keys(argTypes),
  template: '<AmColors :color="color" />',
});

export const Default = Template.bind({});
Default.args = {
  color: "maxPrimaryPurple100",
};
