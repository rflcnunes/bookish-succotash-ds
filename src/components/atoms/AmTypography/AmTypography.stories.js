import AmTypography from "./AmTypography.vue";

export default {
  title: "Typography",
  component: AmTypography,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl", "xxl", "xxl2"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["regular", "condensed", "slab"],
      },
    },
  },
};

const Template = (args) => ({
  components: { AmTypography },
  setup() {
    return { args };
  },
  template: '<am-typography v-bind="args">Typography component</am-typography>',
});

export const Default = Template.bind({});
Default.args = {
  size: "md",
  variant: "regular",
  label: "Typography component",
};

export const Regular = Template.bind({});
Regular.args = {
  size: "md",
  variant: "regular",
  label: "Typography component",
};

export const Condensed = Template.bind({});
Condensed.args = {
  size: "md",
  variant: "condensed",
  label: "Typography component",
};

export const Slab = Template.bind({});
Slab.args = {
  size: "md",
  variant: "slab",
  label: "Typography component",
};
