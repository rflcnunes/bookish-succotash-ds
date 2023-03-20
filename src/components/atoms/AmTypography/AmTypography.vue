<template>
  <span
    :class="[
      'am-typography',
      `am-typography--${variant}`,
      `am-typography--${size}`,
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
</style>
