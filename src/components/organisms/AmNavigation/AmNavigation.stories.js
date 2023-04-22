import AmNavigation from "./AmNavigation.vue";

export default {
  title: "Organisms/AmNavigation",
  component: AmNavigation,
  argTypes: {
    options: {
      control: {
        type: "array",
      },
      description: "Array of navigation options",
      defaultValue: [
        { label: "Option 1" },
        { label: "Option 2" },
        { label: "Option 3" },
      ],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmNavigation },
  template: '<AmNavigation v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Option 1" },
    { label: "Option 2" },
    { label: "Option 3" },
  ],
};
