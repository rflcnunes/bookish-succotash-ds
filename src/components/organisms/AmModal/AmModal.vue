<template>
  <div class="am-modal" :class="{ 'am-modal--open': isOpen }">
    <div class="am-modal__overlay" @click="close"></div>
    <div class="am-modal__content">
      <div class="am-modal__header">
        <slot name="header"></slot>
        <button class="am-modal__close" @click="close">
          <AmIcon icon="close" />
        </button>
      </div>
      <div class="am-modal__body_and_footer_box">
        <div class="am-modal__body">
          <slot></slot>
        </div>
        <div class="am-modal__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./AmModal.scss";
import AmIcon from "../../atoms/AmIcon/AmIcon.vue";

export default {
  name: "AmModal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  components: { AmIcon },
};
</script>
