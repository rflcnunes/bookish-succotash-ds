<template>
  <img
    :src="src"
    :alt="alt"
    :class="{
      'am-image': true,
      'am-image--border': hasBorder,
      'am-image--shadow': hasShadow,
      [`am-image--${size}`]: true,
    }"
  />
</template>

<script>
export default {
  name: "AmImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].indexOf(value) !== -1,
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
    hasShadow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.am-image {
  display: block;
  max-width: 100%;
  height: auto;
}

.am-image--border {
  border: 4px solid #333;
}

.am-image--shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.am-image--small {
  width: 50px;
}

.am-image--medium {
  width: 200px;
}

.am-image--large {
  width: 400px;
}
</style>
