<template>
  <span :style="tagStyle" :class="!isStatusTag ? 'am-tag' : 'am-status-tag'">{{
    text
  }}</span>
</template>

<script>
export default {
  name: "AmTag",
  props: {
    text: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: "gray",
    },
    isStatusTag: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tagStyle() {
      const variants = {
        gray: { background: "DFE1E6", fontColor: "42526E" },
        darkGray: { background: "42526E", fontColor: "FFFFFF" },
        blue: { background: "DEEBFF", fontColor: "0747A6" },
        darkBlue: { background: "0747A6", fontColor: "DEEBFF" },
        yellow: { background: "FFF0B3", fontColor: "172B4D" },
        orange: { background: "FF8B00", fontColor: "172B4D" },
        purple: { background: "EAE6FF", fontColor: "403294" },
        darkPurple: { background: "403294", fontColor: "EAE6FF" },
        red: { background: "FFEBE6", fontColor: "BF2600" },
        darkRed: { background: "BF2600", fontColor: "FFEBE6" },
        green: { background: "E3FCEF", fontColor: "006644" },
        darkGreen: { background: "006644", fontColor: "E3FCEF" },
        statusYellow: { background: "FDEBD0", fontColor: "B8770F" },
        statusBlue: { background: "CCE6FD", fontColor: "0067C2" },
        statusRed: { background: "F8DBD7", fontColor: "B84232" },
        statusGreen: { background: "D5F0E4", fontColor: "017E46" },
        statusGray: { background: "D6D6D6", fontColor: "5C5C5C" },
      };
      const { background, fontColor } = variants[this.variant];
      return {
        backgroundColor: `#${background}`,
        color: `#${fontColor}`,
      };
    },
  },
};
</script>

<style>
.am-tag {
  padding: 5px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

.am-status-tag {
  padding: 8px 12px;
  border-radius: 8px 18px 18px 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
}
</style>
