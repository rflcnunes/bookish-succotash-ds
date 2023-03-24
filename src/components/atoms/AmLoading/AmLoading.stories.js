import AmLoading from "./AmLoading.vue";

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
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmLoading },
  setup() {
    return { args };
  },
  template: '<am-loading v-bind="$props" />',
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
