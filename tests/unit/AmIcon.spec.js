import { shallowMount } from "@vue/test-utils";
import AmIcon from "@/components/atoms/AmIcon/AmIcon.vue";

describe("AmIcon", () => {
  test("renders a Material Icon with the correct class and style", () => {
    const wrapper = shallowMount(AmIcon, {
      propsData: {
        icon: "add",
        color: "red",
        size: "32px",
      },
    });

    const iconElement = wrapper.find("i");
    expect(iconElement.exists()).toBe(true);
    expect(iconElement.classes()).toContain("material-icons");
    expect(iconElement.classes()).toContain("am-icon--32px");
    expect(iconElement.attributes("style")).toContain("color: red;");
    expect(iconElement.text()).toBe("add");
  });

  test("renders a Material Icon with default color and size when not specified", () => {
    const wrapper = shallowMount(AmIcon, {
      propsData: {
        icon: "add",
      },
    });

    const iconElement = wrapper.find("i");
    expect(iconElement.exists()).toBe(true);
    expect(iconElement.classes()).toContain("material-icons");
    expect(iconElement.classes()).toContain("am-icon--24px");
    expect(iconElement.attributes("style")).toBeUndefined();
    expect(iconElement.text()).toBe("add");
  });

  test("renders a Material Icon with the correct class when size is invalid", () => {
    const wrapper = shallowMount(AmIcon, {
      propsData: {
        icon: "add",
        size: "invalid-size",
      },
    });

    const iconElement = wrapper.find("i");
    expect(iconElement.exists()).toBe(true);
    expect(iconElement.classes()).toContain("material-icons");
    expect(iconElement.classes()).toContain("am-icon--invalid-size");
    expect(iconElement.attributes("style")).toBeUndefined();
    expect(iconElement.text()).toBe("add");
  });

  test("renders a Material Icon with the correct class when variant is specified", () => {
    const wrapper = shallowMount(AmIcon, {
      propsData: {
        icon: "add",
        variant: "secondary",
      },
    });

    const iconElement = wrapper.find("i");
    expect(iconElement.exists()).toBe(true);
    expect(iconElement.classes()).toContain("material-icons");
    expect(iconElement.classes()).toContain("am-icon--24px");
    expect(iconElement.attributes("style")).toBeUndefined();
    expect(iconElement.text()).toBe("add");
  });
});
