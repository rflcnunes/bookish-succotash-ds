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
        ["black", "blue", "red", "gray", "white"].includes(value),
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.am-typography {
  display: inline-block;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
}

.am-typography--xs {
  font-size: 12px;
}

.am-typography--sm {
  font-size: 14px;
}

.am-typography--md {
  font-size: 16px;
}

.am-typography--lg {
  font-size: 18px;
}

.am-typography--xl {
  font-size: 20px;
}

.am-typography--xxl {
  font-size: 24px;
}

.am-typography--xxl2 {
  font-size: 28px;
}

.am-typography--regular {
  font-family: "Roboto", sans-serif;
}

.am-typography--condensed {
  font-family: "Roboto Condensed", sans-serif;
}

.am-typography--slab {
  font-family: "Roboto Slab", serif;
}

.am-typography--normal {
  font-weight: 400;
}

.am-typography--medium {
  font-weight: 500;
}

.am-typography--bold {
  font-weight: 700;
}

.am-typography--xbold {
  font-weight: 900;
}

.am-typography--black {
  color: #000000;
}

.am-typography--blue {
  color: #3056d3;
}

.am-typography--gray {
  color: #637381;
}

.am-typography--red {
  color: #dc3545;
}
</style>
