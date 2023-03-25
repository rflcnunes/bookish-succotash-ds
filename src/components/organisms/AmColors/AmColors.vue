<template>
  <div class="am-colors">
    <div class="am-colors__item">
      <div
        class="am-colors__item__color"
        :class="`am-colors__item__color__${color}`"
      ></div>
      <div class="am-colors__item__description">{{ color }}</div>
    </div>
  </div>
</template>

<script>
import { colors } from "./colors";

export default {
  name: "AmColors",
  props: {
    color: {
      type: String,
      default: "maxPrimaryPurple100",
      validator: (value) => colors.map((color) => color.value).includes(value),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./AmColors.scss";
</style>
