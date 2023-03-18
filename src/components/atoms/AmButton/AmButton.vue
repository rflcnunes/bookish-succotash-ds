<template>
  <button :class="buttonClasses" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
import "./AmButton.css";
import { reactive, computed } from "vue";

export default {
  name: "AmButton",

  props: {
    size: {
      type: String,
      validator: (value) => ["small", "medium", "large"].includes(value),
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
        ].includes(value),
      default: "primary",
    },
    label: {
      type: String,
      default: "Button",
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
};
</script>
