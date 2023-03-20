import AmProductBox from "./AmProductBox.vue";

export default {
  title: "Organisms/AmProductBox",
  component: AmProductBox,
  argTypes: {
    headerInformation: {
      control: {
        type: "object",
        defaultValue: {
          title: "New Product Title",
          emphasisText: "50% off",
          description: "New Product Description",
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmProductBox },
  template: '<am-product-box v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  headerInformation: {
    title: "New Product Title",
    emphasisText: "50% off",
    description: "New Product Description",
  },
};
