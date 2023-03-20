import { shallowMount } from "@vue/test-utils";
import AmTag from "@/components/molecules/AmTag/AmTag.vue";

describe("AmTag", () => {
  it("renders a tag with the correct class and style", () => {
    const wrapper = shallowMount(AmTag, {
      propsData: {
        variant: "red",
        text: "hello world",
      },
    });

    const variant = wrapper.props().variant;
    const text = wrapper.props().text;

    expect(variant).toBe("red");
    expect(text).toBe("hello world");
  });

  it("renders tag text", () => {
    const text = "Test Tag";
    const wrapper = shallowMount(AmTag, {
      propsData: {
        text,
      },
    });
    expect(wrapper.text()).toMatch(text);
  });

  it("renders tag with default gray variant", () => {
    const wrapper = shallowMount(AmTag, {
      propsData: {
        text: "Test Tag",
      },
    });
    expect(wrapper.vm.tagStyle.backgroundColor).toMatch("#DFE1E6");
    expect(wrapper.vm.tagStyle.color).toMatch("#42526E");
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders tag with specified variant", () => {
    const wrapper = shallowMount(AmTag, {
      propsData: {
        text: "Test Tag",
        variant: "blue",
      },
    });
    expect(wrapper.vm.tagStyle.backgroundColor).toMatch("#DEEBFF");
    expect(wrapper.vm.tagStyle.color).toMatch("#0747A6");
    expect(wrapper.element).toMatchSnapshot();
  });
});
