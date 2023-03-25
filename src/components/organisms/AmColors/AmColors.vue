<template>
  <div class="am-colors">
    <div class="am-colors__item" v-for="color in colors" :key="color.value">
      <div
        class="am-colors__item__color"
        :class="`am-colors__item__color__${color.value}`"
      ></div>
      <div class="am-colors__item__description">
        <div class="am-colors__item__description__name">
          Name: {{ color.name }}
        </div>
        <div class="am-colors__item__description__value">
          Value: {{ color.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors } from "./colors";

export default {
  name: "AmColors",
  data() {
    return {
      colors: colors,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./AmColors.scss";
</style>
