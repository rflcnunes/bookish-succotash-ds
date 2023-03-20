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
    <div class="am-product-box__body">
      <div
        class="am-product-box__body__card"
        v-for="product in products"
        :key="product.id"
      >
        <AmImage :src="product.url" hasShadow :alt="product.description" />
        <div class="am-product-box__body__card__description">
          <div class="am-product-box__body__card__description__price-title">
            <AmTypography
              variant="regular"
              weight="medium"
              :label="product.title"
            />
            <AmTypography
              variant="regular"
              weight="medium"
              color="blue"
              :label="product.price"
            />
          </div>
          <AmTypography
            variant="regular"
            size="sm"
            color="gray"
            :label="product.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./AmProductBox.scss";
import AmTypography from "../../atoms/AmTypography/AmTypography.vue";
import AmImage from "../../atoms/AmImage/AmImage.vue";

export default {
  name: "AmProductBox",
  components: { AmTypography, AmImage },
  props: {
    headerInformation: {
      type: Object,
      default: () => ({
        title: "Product Box Title",
        emphasisText: "Emphasis Text",
        description: "Product Box Description",
      }),
    },
    products: {
      type: Array,
      default: () => [
        {
          id: 1,
          title: "Product Box Title",
          emphasisText: "Emphasis Text",
          description: "Product Box Description",
          url: "https://picsum.photos/800",
          price: "100",
        },
        {
          id: 2,
          title: "Product Box Title 02",
          emphasisText: "Emphasis Text 02",
          description: "Product Box Description 02",
          url: "https://picsum.photos/700",
          price: "200",
        },
      ],
    },
  },
};
</script>
