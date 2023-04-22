<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        v-for="(option, index) in options"
        :key="index"
        :class="{
          'nav__item--selected': selected === index || option.selected,
        }"
        class="nav__item"
        @mouseover="hoverIndex = index"
        @mouseout="hoverIndex = null"
        @click="
          selectOption(index);
          performAction(option);
        "
      >
        <a class="nav__link">
          <AmIcon v-if="option.icon" :icon="option.icon" class="nav__icon" />
          <AmTypography :label="option.label" weight="normal" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import "./AmNavigation.scss";
import AmTypography from "../../atoms/AmTypography/AmTypography.vue";
import AmIcon from "../../atoms/AmIcon/AmIcon.vue";

export default {
  name: "AmNavigation",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: null,
      hoverIndex: null,
    };
  },
  methods: {
    selectOption(index) {
      this.selected = index;
    },
    performAction(option) {
      if (option.action) {
        option.action();
      }
      if (option.methodName) {
        this.$emit(option.methodName);
      }
    },
  },
  components: { AmTypography, AmIcon },
};
</script>
