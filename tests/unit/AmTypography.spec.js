import { shallowMount } from "@vue/test-utils";
import AmTypography from "@/components/atoms/AmTypography/AmTypography.vue";

describe("AmTypography.vue", () => {
  it("renders label correctly", () => {
    const label = "Hello World";
    const wrapper = shallowMount(AmTypography, {
      propsData: {
        label,
      },
    });
    expect(wrapper.text()).toMatch(label);
  });

  it("sets size class correctly", () => {
    const size = "sm";
    const wrapper = shallowMount(AmTypography, {
      propsData: {
        size,
        label: "Hello World",
      },
    });

    expect(wrapper.classes()).toContain(`am-typography--${size}`);
  });

  it("sets variant class correctly", () => {
    const variant = "condensed";
    const wrapper = shallowMount(AmTypography, {
      propsData: {
        variant,
        label: "Hello World",
      },
    });
    expect(wrapper.classes()).toContain(`am-typography--${variant}`);
  });

  it("matches snapshot", () => {
    const wrapper = shallowMount(AmTypography, {
      propsData: {
        label: "Hello World",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("throws an error if label prop is not provided", () => {
    const wrapper = shallowMount(AmTypography);
    expect(wrapper.vm.$options.props.label.required).toBe(true);
  });
});
