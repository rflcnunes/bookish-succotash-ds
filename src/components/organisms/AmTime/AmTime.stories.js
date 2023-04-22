import AmTime from "./AmTime.vue";

export default {
  title: "Organisms/AmTime",
  component: AmTime,
  parameters: {
    layout: "centered",
  },
};

export const Default = () => ({
  components: { AmTime },
  template: "<AmTime />",
});
