import { shallowMount } from "@vue/test-utils";
import AmProductBox from "@/components/organisms/AmProductBox/AmProductBox.vue";

describe("AmProductBox", () => {
  const headerInformation = {
    title: "New Product Title",
    emphasisText: "50% off",
    description: "New Product Description",
  };

  const wrapper = shallowMount(AmProductBox, {
    propsData: {
      headerInformation: {
        title: headerInformation.title,
        emphasisText: headerInformation.emphasisText,
        description: headerInformation.description,
      },
    },
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
