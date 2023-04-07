<template>
  <component
    v-bind:is="!to ? 'button' : 'router-link'"
    :class="buttonClasses"
    @click="onClick"
    :disabled="disabled"
    :to="to"
  >
    <AmIcon v-if="!label && icon" :icon="icon.name" />
    <div
      :class="icon.position ? icon.position : 'withLeftIcon'"
      v-else-if="label && icon"
    >
      <AmIcon :icon="icon.name" />
      <AmTypography :label="label" variant="regular" color="white" />
    </div>
    <AmTypography v-else :label="label" variant="regular" color="white" />
  </component>
</template>

<script>
import AmIcon from "../AmIcon/AmIcon.vue";
import AmTypography from "../AmTypography/AmTypography.vue";
import "./AmButton.css";
import "./AmButton.scss";
import { reactive } from "vue";

export default {
  name: "AmButton",
  props: {
    variant: {
      type: String,
      validator: (value) =>
        [
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
          "maxDarkGhost",
          "maxSecondary",
          "maxSuccess",
          "maxError",
        ].includes(value),
      default: "primary",
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
    },
    icon: {
      type: Object,
      default: null,
    },
    size: {
      type: String,
      validator: (value) =>
        [
          "tiny",
          "small",
          "medium",
          "large",
          "xlarge",
          "xxlarge",
          "iconTiny",
          "iconSmall",
          "iconMedium",
          "iconLarge",
          "xIconLarge",
          "xxIconLarge",
        ].includes(value),
      default: "medium",
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      isClicked: false,
    });

    function onClick() {
      state.isClicked = true;
      emit("click");
    }

    return {
      onClick,
    };
  },
  components: { AmIcon, AmTypography },
  computed: {
    buttonClasses() {
      return [
        "am-button",
        `am-button--${this.variant}`,
        `am-button--${this.size}`,
        { "am-button--clicked": this.isClicked },
        { "am-button--icon": this.icon && this.label },
        { "am-button--icon-only": this.icon && !this.label },
      ];
    },
  },
};
</script>
