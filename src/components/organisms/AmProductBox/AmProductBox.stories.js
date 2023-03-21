import AmProductBox from "./AmProductBox.vue";

export default {
  title: "Organisms/AmProductBox",
  component: AmProductBox,
  argTypes: {
    headerInformation: {
      control: {
        type: "object",
        defaultValue: {
          title: "New Product Title",
          emphasisText: "50% off",
          description: "New Product Description",
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmProductBox },
  template: '<am-product-box v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  headerInformation: {
    title: "New Product Title",
    emphasisText: "50% off",
    description: "New Product Description",
  },
  products: [
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
    {
      id: 3,
      title: "Product Box Title 03",
      emphasisText: "Emphasis Text 03",
      description: "Product Box Description 03",
      url: "https://picsum.photos/600",
      price: "480.98",
    },
    {
      id: 4,
      title: "Product Box Title 04",
      emphasisText: "Emphasis Text 04",
      description: "Product Box Description 04",
      url: "https://picsum.photos/500",
      price: "1000",
    },
    {
      id: 5,
      title: "Product Box Title 05",
      emphasisText: "Emphasis Text 05",
      description: "Product Box Description 05",
      url: "https://picsum.photos/400",
      price: "100",
    },
    {
      id: 6,
      title: "Product Box Title 06",
      emphasisText: "Emphasis Text 06",
      description: "Product Box Description 06",
      url: "https://picsum.photos/300",
      price: "100",
    },
  ],
};

export const WithOneProduct = Template.bind({});
WithOneProduct.args = {
  headerInformation: {
    title: "New Product Title",
    emphasisText: "20% off",
    description: "New Product Description",
  },
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      url: "https://picsum.photos/700",
      description: "Product 1 description",
    },
  ],
};

export const WithTwoProducts = Template.bind({});
WithTwoProducts.args = {
  headerInformation: {
    title: "New Product Title",
    emphasisText: "Buy 2 for $200",
    description: "New Product Description",
  },
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      url: "https://picsum.photos/300",
      description: "Product 1 description",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      url: "https://picsum.photos/400",
      description: "Product 2 description",
    },
  ],
};
