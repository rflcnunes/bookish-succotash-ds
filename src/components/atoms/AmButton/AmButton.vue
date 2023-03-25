<template>
  <component
    v-bind:is="!to ? 'button' : 'router-link'"
    :class="buttonClasses"
    @click="onClick"
    :disabled="disabled"
    :to="to"
  >
    <div :class="icon.position ? icon.position : 'withLeftIcon'" v-if="icon">
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
import { reactive, computed } from "vue";

export default {
  name: "AmButton",
  props: {
    size: {
      type: String,
      validator: (value) =>
        ["tiny", "small", "medium", "large", "xlarge", "xxlarge"].includes(
          value
        ),
      default: "medium",
    },
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
          "maxSecondary",
          "maxSuccess",
          "maxError",
        ].includes(value),
      default: "primary",
    },
    label: {
      type: String,
      default: "Button",
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
  },
  setup(props, { emit }) {
    const state = reactive({
      isClicked: false,
    });

    const buttonClasses = computed(() => [
      "am-button",
      `am-button--${props.variant}`,
      `am-button--${props.size}`,
      { "am-button--clicked": state.isClicked },
    ]);

    function onClick() {
      state.isClicked = true;
      emit("click");
    }

    return {
      buttonClasses,
      onClick,
    };
  },
  components: { AmIcon, AmTypography },
};
</script>
