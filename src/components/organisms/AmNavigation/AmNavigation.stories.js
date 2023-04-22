import AmNavigation from "./AmNavigation.vue";
import AmIcon from "../../atoms/AmIcon/AmIcon.vue";

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
        {
          label: "Option 1",
          icon: "home",
          action: () => {
            console.log("Option 1 selected");
          },
        },
        {
          label: "Option 2",
          icon: "search",
          action: () => {
            console.log("Option 2 selected");
          },
        },
        {
          label: "Option 3",
          icon: "settings",
          action: () => {
            console.log("Option 3 selected");
          },
        },
      ],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmNavigation, AmIcon },
  template: `
    <AmNavigation v-bind="$props" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      label: "Option 1",
      action: () => {
        console.log("Option 1 selected");
      },
    },
    {
      label: "Option 2",
      action: () => {
        console.log("Option 2 selected");
      },
    },
    {
      label: "Option 3",
      action: () => {
        console.log("Option 3 selected");
      },
    },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  options: [
    {
      label: "Home",
      icon: "home",
      action: () => {
        console.log("Option 1 selected");
      },
    },
    {
      label: "Search",
      icon: "search",
      action: () => {
        console.log("Option 2 selected");
      },
    },
    {
      label: "Settings",
      icon: "settings",
      action: () => {
        console.log("Option 3 selected");
      },
    },
  ],
};
