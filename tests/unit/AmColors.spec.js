import { shallowMount } from "@vue/test-utils";
import AmColors from "@/components/Organisms/AmColors/AmColors.vue";

describe("AmColors", () => {
  it("should render all colors", () => {
    const wrapper = shallowMount(AmColors);

    expect(wrapper.find(".am-colors__item__color")).toBeTruthy();
  });
});
