<template>
  <div
    :class="'am-alert am-alert--' + variation"
    :style="{ backgroundColor: bgColor }"
  >
    <div class="am-alert__icon">
      <AmIcon :icon="icon" :style="{ color: iconColor }" />
    </div>
    <div class="am-alert__content">
      <h3 class="am-alert__title">{{ title }}</h3>
      <p class="am-alert__text">{{ text }}</p>
      <a v-if="link" :href="link" class="am-alert__link">Learn more</a>
    </div>
  </div>
</template>

<script>
import AmIcon from "../../atoms/AmIcon/AmIcon.vue";

export default {
  name: "AmAlert",
  props: {
    variation: {
      type: String,
      default: "info",
      validator: (value) =>
        ["warning", "error", "success", "info", "helper"].includes(value),
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
  components: {
    AmIcon,
  },
  computed: {
    bgColor() {
      const colors = {
        warning: "#FFFAE6",
        error: "#FFEBE6",
        success: "#E3FCEF",
        helper: "#EAE6FF",
        info: "#DEEBFF",
      };

      return colors[this.variation];
    },
    iconColor() {
      const colors = {
        warning: "#FF8B00",
        error: "#BF2600",
        success: "#006644",
        helper: "#403294",
        info: "#0747A6",
      };

      return colors[this.variation];
    },
    icon() {
      const icons = {
        warning: "warning",
        error: "error",
        success: "check_circle",
        helper: "help",
        info: "info",
      };

      return icons[this.variation];
    },
  },
};
</script>
