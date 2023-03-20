<template>
  <i :class="`material-icons ${sizeClass}`" :style="{ color: color }">{{
    icon
  }}</i>
</template>

<script>
export default {
  name: "AmIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "inherit",
    },
    size: {
      type: String,
      default: "24px",
    },
  },
  computed: {
    sizeClass() {
      return `am-icon--${this.size}`;
    },
  },
};
</script>

<style scoped>
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.am-icon--16px {
  font-size: 16px;
}

.am-icon--24px {
  font-size: 24px;
}

.am-icon--32px {
  font-size: 32px;
}

.am-icon--40px {
  font-size: 40px;
}

.am-icon--48px {
  font-size: 48px;
}
</style>
