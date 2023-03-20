import AmImage from "./AmImage.vue";

export default {
  title: "Atoms/AmImage",
  component: AmImage,
  argTypes: {
    src: {
      control: "text",
      description: "The URL of the image to display.",
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      control: "text",
      description:
        "The alternative text to display if the image cannot be loaded.",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
      description: "The size of the image.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    hasBorder: {
      control: "boolean",
      description: "Whether to display a border around the image.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    hasShadow: {
      control: "boolean",
      description: "Whether to display a shadow behind the image.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AmImage },
  props: Object.keys(argTypes),
  template:
    '<am-image :src="src" :alt="alt" :size="size" :has-border="hasBorder" :has-shadow="hasShadow" />',
});

export const Default = Template.bind({});
Default.args = {
  src: "https://picsum.photos/800",
  alt: "Placeholder image",
};
