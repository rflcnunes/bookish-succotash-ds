import AmLoading from "./AmLoading.vue";
import AmIcon from "../AmIcon/AmIcon.vue";

export default {
  title: "Atoms/AmLoading",
  component: AmLoading,
  argTypes: {
    isLoading: {
      control: { type: "boolean" },
    },
    loadingType: {
      control: { type: "select", options: ["spinner", "dots"] },
    },
    status: {
      control: {
        type: "select",
        options: ["loading", "completed", "error"],
        default: "loading",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmLoading, AmIcon },
  setup() {
    return { args };
  },
  template: `<AmLoading v-bind="$props" />`,
});

export const Default = Template.bind({});
Default.args = {
  isLoading: true,
  loadingType: "spinner",
};

export const Spinner = Template.bind({});
Spinner.args = {
  isLoading: true,
  loadingType: "spinner",
};

export const Dots = Template.bind({});
Dots.args = {
  isLoading: true,
  loadingType: "dots",
};

export const Beats = Template.bind({});
Beats.args = {
  isLoading: true,
  loadingType: "beats",
};

export const Completed = Template.bind({});
Completed.args = {
  isLoading: true,
  loadingType: "spinner",
  status: "completed",
};

export const Error = Template.bind({});
Error.args = {
  isLoading: true,
  loadingType: "spinner",
  status: "error",
};
