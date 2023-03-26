import AmButton from "./AmButton.vue";
import { toJS } from "mobx";
import pretty from "pretty";

export default {
  title: "Atoms/AmButton",
  component: AmButton,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["tiny", "small", "medium", "large", "xlarge", "xxlarge"],
      },
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

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  variant: "maxPrimary",
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "iconTiny",
};

export const OnlyIconSmall = Template.bind({});
OnlyIconSmall.args = {
  variant: "maxPrimary",
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "iconSmall",
};

export const OnlyIconMedium = Template.bind({});
OnlyIconMedium.args = {
  variant: "maxPrimary",
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "iconMedium",
};

export const OnlyIconMediumOutlined = Template.bind({});
OnlyIconMediumOutlined.args = {
  variant: "maxOutlined",
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "iconMedium",
};

export const OnlyIconMediumGhost = Template.bind({});
OnlyIconMediumGhost.args = {
  variant: "maxGhost",
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "iconMedium",
};

export const OnlyIconMediumDisabled = Template.bind({});
OnlyIconMediumDisabled.args = {
  variant: "maxPrimary",
  disabled: true,
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "iconMedium",
};

export const OnlyIconLarge = Template.bind({});
OnlyIconLarge.args = {
  variant: "maxPrimary",
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "iconLarge",
};

export const OnlyIconXLarge = Template.bind({});
OnlyIconXLarge.args = {
  variant: "maxPrimary",
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "xIconLarge",
};

export const OnlyIconXXLarge = Template.bind({});
OnlyIconXXLarge.args = {
  variant: "maxPrimary",
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "xxIconLarge",
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: "maxSecondary",
  label: "Button",
  icon: {
    name: "close",
    size: "small",
    position: "withLeftIcon",
  },
  size: "medium",
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  variant: "maxSecondary",
  label: "Button",
  icon: {
    name: "close",
    size: "small",
    position: "withRightIcon",
  },
  size: "medium",
};

export const Dashed = Template.bind({});
Dashed.args = {
  variant: "dashed",
  label: "Button Dashed",
  size: "medium",
};

export const Purple = Template.bind({});
Purple.args = {
  variant: "purple",
  label: "Button Purple",
  size: "medium",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  label: "Button Error",
  size: "medium",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Button Outlined",
  size: "medium",
};

export const Green = Template.bind({});
Green.args = {
  variant: "green",
  label: "Button Green",
  size: "medium",
};

export const Yellow = Template.bind({});
Yellow.args = {
  variant: "yellow",
  label: "Button Yellow",
  size: "medium",
};

export const OutlinedYellow = Template.bind({});
OutlinedYellow.args = {
  variant: "outlined-yellow",
  label: "Button Yellow",
  size: "medium",
};

export const PureYellow = Template.bind({});
PureYellow.args = {
  variant: "pure-yellow",
  label: "Button Pure Yellow",
  size: "medium",
};

export const MaxPrimary = Template.bind({});
MaxPrimary.args = {
  variant: "maxPrimary",
  label: "Button Max Primary",
  size: "medium",
};

export const MaxOutlined = Template.bind({});
MaxOutlined.args = {
  variant: "maxOutlined",
  label: "Button Max Outlined",
  size: "medium",
};

export const MaxGhost = Template.bind({});
MaxGhost.args = {
  variant: "maxGhost",
  label: "Button Max Ghost",
  size: "medium",
};

export const MaxGhostDisabled = Template.bind({});
MaxGhostDisabled.args = {
  variant: "maxGhost",
  label: "Button Max Ghost",
  disabled: true,
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "maxPrimary",
  label: "Button Max Primary",
  disabled: true,
  size: "medium",
};
