import AmButton from "./AmButton.vue";
import { toJS } from "mobx";
import pretty from "pretty";

export default {
  title: "Atoms/AmButton",
  component: AmButton,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "dashed",
          "purple",
          "error",
          "outlined",
          "green",
          "yellow",
          "outlined-yellow",
          "pure-yellow",
          "maxPrimary",
          "maxOutlined",
          "maxGhost",
          "maxSecondary",
          "maxSuccess",
          "maxError",
        ],
      },
    },
    backgroundColor: {
      control: { type: "color" },
    },
    label: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    onClick: {},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmButton },
  template:
    '<am-button v-bind="$props" @click="onClick">{{ label }}</am-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "maxPrimary",
  label: "Button",
  size: "medium",
};

const formatCode = (code) => pretty(code, { ocd: true });

const generateCode = (args) => {
  const props = toJS(args);
  const code = `
    <AmButton
      variant="${props.variant}"
      size="${props.size}"
      label="${props.label}"
      @click="onClick"
    />
  `;
  return formatCode(code);
};

Primary.parameters = {
  docs: {
    source: {
      code: generateCode(Primary.args),
    },
  },
};

export const Dashed = Template.bind({});

Dashed.args = {
  variant: "dashed",
  label: "Button Dashed",
};

export const Purple = Template.bind({});
Purple.args = {
  variant: "purple",
  label: "Button Purple",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  label: "Button Error",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Button Outlined",
};

export const Green = Template.bind({});
Green.args = {
  variant: "green",
  label: "Button Green",
};

export const Yellow = Template.bind({});
Yellow.args = {
  variant: "yellow",
  label: "Button Yellow",
};

export const OutlinedYellow = Template.bind({});
OutlinedYellow.args = {
  variant: "outlined-yellow",
  label: "Button Yellow",
};

export const PureYellow = Template.bind({});
PureYellow.args = {
  variant: "pure-yellow",
  label: "Button Pure Yellow",
};
