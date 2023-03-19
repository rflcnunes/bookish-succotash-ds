import AmAlert from "./AmAlert.vue";

export default {
  title: "Molecules/AmAlert",
  component: AmAlert,
  argTypes: {
    variation: {
      control: {
        type: "select",
        options: ["warning", "error", "success", "info", "helper"],
      },
    },
    title: {
      control: "text",
    },
    text: {
      control: "text",
    },
    link: {
      control: "text",
    },
  },
};

const Template = (args) => ({
  components: { AmAlert },
  setup() {
    return { args };
  },
  template: '<am-alert v-bind="args" />',
});

export const Warning = Template.bind({});
Warning.args = {
  variation: "warning",
  title: "This is a warning",
  text: "Be careful!",
};

export const Error = Template.bind({});
Error.args = {
  variation: "error",
  title: "Error",
  text: "An error has occurred.",
};

export const Success = Template.bind({});
Success.args = {
  variation: "success",
  title: "Success!",
  text: "Your action was successful.",
};

export const Info = Template.bind({});
Info.args = {
  variation: "info",
  title: "Information",
  text: "This is some important information.",
};

export const Helper = Template.bind({});
Helper.args = {
  variation: "helper",
  title: "Helper",
  text: "This is some helpful text.",
};
