import AmIcon from "./AmIcon.vue";

export default {
  title: "Atoms/AmIcon",
  component: AmIcon,
  argTypes: {
    icon: {
      control: {
        type: "text",
      },
      description:
        "The Material icon name from https://fonts.google.com/icons?icon.set=Material+Icons",
      defaultValue: "add",
    },
    size: {
      control: {
        type: "radio",
        options: ["16px", "24px", "32px", "40px", "48px"],
        defaultValue: "24px",
      },
      description: "The icon size",
      defaultValue: "medium",
    },
    color: {
      control: {
        type: "color",
      },
      description: "The icon color",
      defaultValue: "#000",
    },
  },
};

const Template = (args) => ({
  components: { AmIcon },
  setup() {
    return { args };
  },
  template:
    '<am-icon :icon="args.icon" :size="args.size" :color="args.color" />',
});

export const Default = Template.bind({});
Default.args = {
  icon: "add",
  size: "24px",
  color: "#000",
};
