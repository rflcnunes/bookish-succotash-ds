<template>
  <span
    :class="[
      'am-typography',
      `am-typography--${variant}`,
      `am-typography--${size}`,
      `am-typography--${weight}`,
      `am-typography--${color}`,
    ]"
  >
    {{ label }}
  </span>
</template>

<script>
import "./AmTypography.scss";

export default {
  name: "AmTypography",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (value) =>
        ["xs", "sm", "md", "lg", "xl", "xxl", "xxl2"].includes(value),
    },
    variant: {
      type: String,
      default: "regular",
      validator: (value) => ["regular", "condensed", "slab"].includes(value),
    },
    weight: {
      type: String,
      default: "medium",
      validator: (value) =>
        ["normal", "medium", "bold", "xbold"].includes(value),
    },
    color: {
      type: String,
      default: "black",
      validator: (value) =>
        [
          "black",
          "blue100",
          "blue120",
          "blue80",
          "gray100",
          "gray80",
          "red",
          "green",
          "yellow",
          "white",
          "purple100",
          "purple120",
          "purple80",
        ].includes(value),
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
