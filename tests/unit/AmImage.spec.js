import { shallowMount } from "@vue/test-utils";
import AmImage from "@/components/atoms/AmImage/AmImage.vue";

describe("AmImage", () => {
  const src = "https://picsum.photos/800";
  const alt = "Placeholder image";

  const wrapper = shallowMount(AmImage, {
    propsData: {
      src: src,
      alt: alt,
    },
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(src);
    expect(wrapper.find("img").attributes("alt")).toBe(alt);
  });

  it("renders with a border", async () => {
    wrapper.setProps({ hasBorder: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.classes()).toContain("am-image--border");
  });

  it("renders with a shadow", async () => {
    wrapper.setProps({ hasShadow: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.classes()).toContain("am-image--shadow");
  });
});
