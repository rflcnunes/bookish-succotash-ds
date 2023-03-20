<template>
  <div
    :class="'am-alert am-alert--' + variation"
    :style="{ backgroundColor: alertStyles.bgColor }"
  >
    <div class="am-alert__icon">
      <AmIcon
        :icon="alertStyles.icon"
        :style="{ color: alertStyles.iconColor }"
      />
    </div>
    <div class="am-alert__content">
      <h3 class="am-alert__title">{{ title }}</h3>
      <p class="am-alert__text">{{ text }}</p>
      <a v-if="link" :href="link" class="am-alert__link">{{ linkLabel }}</a>
    </div>
  </div>
</template>

<script>
import "./AmAlert.css";
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
    linkLabel: {
      type: String,
      default: "Learn more",
    },
  },
  components: {
    AmIcon,
  },
  computed: {
    alertStyles() {
      const colors = {
        warning: {
          bgColor: "#FFFAE6",
          iconColor: "#FF8B00",
          icon: "warning",
        },
        error: {
          bgColor: "#FFEBE6",
          iconColor: "#BF2600",
          icon: "error",
        },
        success: {
          bgColor: "#E3FCEF",
          iconColor: "#006644",
          icon: "check_circle",
        },
        helper: {
          bgColor: "#EAE6FF",
          iconColor: "#403294",
          icon: "help",
        },
        info: {
          bgColor: "#DEEBFF",
          iconColor: "#0747A6",
          icon: "info",
        },
      };

      return colors[this.variation];
    },
  },
};
</script>
