import AmDay from "./AmDay.vue";

export default {
  title: "Organisms/AmDay",
  component: AmDay,
  argTypes: {
    userName: { control: "text" },
  },
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmDay },
  template: "<AmDay v-bind='$props' />",
});

export const WithUser = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmDay },
  template: "<AmDay v-bind='$props' />",
});
WithUser.args = {
  userName: "John Doe",
};
