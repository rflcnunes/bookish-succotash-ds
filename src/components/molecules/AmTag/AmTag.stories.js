import AmTag from "./AmTag.vue";

export default {
  title: "Molecules/AmTag",
  component: AmTag,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "gray",
          "darkGray",
          "blue",
          "darkBlue",
          "yellow",
          "orange",
          "purple",
          "darkPurple",
          "red",
          "darkRed",
          "green",
          "darkGreen",
        ],
      },
    },
    text: {
      control: { type: "text" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmTag },
  template: '<am-tag v-bind="$props">{{ text }}</am-tag>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "darkGray",
  text: "Tag",
};
