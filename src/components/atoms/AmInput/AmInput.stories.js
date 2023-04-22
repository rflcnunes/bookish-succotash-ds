import AmInput from "./AmInput.vue";

export default {
  title: "Atoms/AmInput",
  component: AmInput,
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    type: { control: "select", options: ["text", "email", "password"] },
    placeholder: { control: "text" },
    value: { control: "text" },
    icon: { control: "text" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmInput },
  template: '<AmInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  name: "name",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Email",
  name: "email",
  type: "email",
  icon: "mail_outline",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  name: "password",
  type: "password",
};
