import { shallowMount } from "@vue/test-utils";
import AmLoading from "@/components/atoms/AmLoading/AmLoading.vue";

describe("AmLoading", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(AmLoading, {
      propsData: {
        isLoading: true,
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });

  test("renders the spinner when isLoading is true", () => {
    const wrapper = shallowMount(AmLoading, {
      props: {
        isLoading: true,
      },
    });
    const spinner = wrapper.find(".loading-spinner");
    expect(spinner.exists()).toBe(true);
  });

  test("does not render the spinner when isLoading is false", () => {
    const wrapper = shallowMount(AmLoading, {
      props: {
        isLoading: false,
      },
    });
    const spinner = wrapper.find(".loading-spinner");

    expect(spinner.exists()).toBe(true);
    expect(spinner.isVisible()).toBe(false);
  });
});
