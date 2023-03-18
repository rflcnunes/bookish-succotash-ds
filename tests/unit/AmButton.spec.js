import { shallowMount } from "@vue/test-utils";
import AmButton from "@/components/atoms/AmButton/AmButton.vue";

describe("AmButton.vue", () => {
  it("renders props.msg when passed", () => {
    const label = "Label Button";
    const wrapper = shallowMount(AmButton, {
      propsData: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});
