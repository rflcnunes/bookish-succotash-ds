import AmTypography from "./AmTypography.vue";

export default {
  title: "Atoms/AmTypography",
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
    weight: {
      control: {
        type: "select",
        options: ["light", "normal", "medium", "bold", "xbold"],
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "black",
          "blue100",
          "blue120",
          "blue80",
          "gray100",
          "gray80",
          "gray60",
          "gray40",
          "gray20",
          "red",
          "green",
          "yellow",
          "white",
          "purple100",
          "purple120",
          "purple80",
        ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmTypography },
  setup() {
    return { args };
  },
  template: `
    <AmTypography
      v-bind="$props"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  size: "md",
  variant: "regular",
  weight: "medium",
  color: "black",
  label: "Typography component",
};

export const Regular = Template.bind({});
Regular.args = {
  size: "md",
  variant: "regular",
  weight: "medium",
  color: "black",
  label: "Typography component",
};

export const Condensed = Template.bind({});
Condensed.args = {
  size: "md",
  variant: "condensed",
  weight: "medium",
  color: "black",
  label: "Typography component",
};

export const Slab = Template.bind({});
Slab.args = {
  size: "md",
  variant: "slab",
  weight: "medium",
  color: "black",
  label: "Typography component",
};

export const Bold = Template.bind({});
Bold.args = {
  size: "md",
  variant: "regular",
  weight: "bold",
  color: "black",
  label: "Typography component",
};

export const XBold = Template.bind({});
XBold.args = {
  size: "md",
  variant: "regular",
  weight: "xbold",
  color: "black",
  label: "Typography component",
};

export const Blue = Template.bind({});
Blue.args = {
  size: "md",
  variant: "regular",
  weight: "medium",
  color: "blue",
  label: "Typography component",
};

export const Red = Template.bind({});
Red.args = {
  size: "md",
  variant: "regular",
  weight: "medium",
  color: "red",
  label: "Typography component",
};

export const Gray = Template.bind({});
Gray.args = {
  size: "md",
  variant: "regular",
  weight: "medium",
  color: "gray",
  label: "Typography component",
};

export const White = Template.bind({});
White.args = {
  size: "md",
  variant: "regular",
  weight: "medium",
  color: "white",
  label: "Typography component",
};
