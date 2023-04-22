<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'nav__item--selected': selected === index }"
        class="nav__item"
        @mouseover="hoverIndex = index"
        @mouseout="hoverIndex = null"
        @click="selectOption(index)"
      >
        <router-link class="nav__link" :to="{ name: option.routeName }">
          <AmTypography :label="option.label" weight="normal" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import "./AmNavigation.scss";
import AmTypography from "../../atoms/AmTypography/AmTypography.vue";

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
  },
  components: { AmTypography },
};
</script>
