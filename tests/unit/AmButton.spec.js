import { shallowMount } from "@vue/test-utils";
import AmButton from "@/components/atoms/AmButton/AmButton.vue";

describe("AmButton.vue", () => {
  it("renders props.label when passed", () => {
    const label = "Label Button";
    const wrapper = shallowMount(AmButton, {
      propsData: { label },
    });

    expect(wrapper.props().label).toMatch(label);
  });

  it("renders a button element", () => {
    const wrapper = shallowMount(AmButton);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("displays the correct label", () => {
    const wrapper = shallowMount(AmButton, {
      propsData: {
        label: "Test Label",
      },
    });
    expect(wrapper.props().label).toContain("Test Label");
  });

  it("emits a click event when clicked", async () => {
    const wrapper = shallowMount(AmButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("applies the correct class based on props", () => {
    const wrapper = shallowMount(AmButton, {
      propsData: {
        size: "small",
        variant: "outlined",
      },
    });
    expect(wrapper.classes()).toContain("am-button--small");
    expect(wrapper.classes()).toContain("am-button--outlined");
  });

  it("applies the clicked class when clicked", async () => {
    const wrapper = shallowMount(AmButton);
    await wrapper.trigger("click");
    expect(wrapper.classes()).toContain("am-button--clicked");
  });

  it("should render a primary button with medium size", () => {
    const wrapper = shallowMount(AmButton, {
      propsData: {
        size: "medium",
        variant: "primary",
        label: "Click me",
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
