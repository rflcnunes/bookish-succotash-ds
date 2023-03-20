<template>
  <div class="am-product-box">
    <div class="am-product-box__header">
      <AmTypography
        variant="regular"
        weight="medium"
        size="sm"
        color="blue"
        :label="headerInformation.title"
      />
      <AmTypography
        size="xxl"
        weight="xbold"
        variant="regular"
        :label="headerInformation.emphasisText"
      />
      <AmTypography
        size="sm"
        weight="medium"
        variant="regular"
        color="gray"
        :label="headerInformation.description"
      />
    </div>
  </div>
</template>

<script>
import "./AmProductBox.scss";
import AmTypography from "../../atoms/AmTypography/AmTypography.vue";

export default {
  name: "AmProductBox",
  components: { AmTypography },
  props: {
    headerInformation: {
      type: Object,
      default: () => ({
        title: "Product Box Title",
        emphasisText: "Emphasis Text",
        description: "Product Box Description",
      }),
    },
  },
};
</script>
