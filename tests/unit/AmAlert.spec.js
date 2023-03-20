import { shallowMount } from "@vue/test-utils";
import AmAlert from "@/components/molecules/AmAlert/AmAlert.vue";

describe("AmAlert.vue", () => {
  it("renders props.title and props.text when passed", () => {
    const title = "Test Title";
    const text = "Test Text";
    const wrapper = shallowMount(AmAlert, {
      propsData: { title, text },
    });

    expect(wrapper.text()).toMatch(title);
    expect(wrapper.text()).toMatch(text);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders the link when passed via props", () => {
    const link = "https://www.example.com";
    const wrapper = shallowMount(AmAlert, {
      propsData: { link },
    });
    expect(wrapper.find(".am-alert__link").attributes("href")).toMatch(link);
  });

  it("sets the background color based on the variation prop", () => {
    const variation = "success";
    const wrapper = shallowMount(AmAlert, {
      propsData: { variation },
    });

    expect(wrapper.attributes("style")).toMatch(
      `background-color: rgb(227, 252, 239);`
    );
  });

  it("sets the icon color based on the variation prop", () => {
    const variation = "error";
    const wrapper = shallowMount(AmAlert, {
      propsData: { variation },
    });
    const iconWrapper = wrapper.findComponent({ name: "AmIcon" });

    expect(wrapper.attributes("style")).toMatch(
      `background-color: rgb(255, 235, 230);`
    );

    expect(iconWrapper.attributes("style")).toMatch(`color: rgb(191, 38, 0);`);
  });

  it("sets the icon based on the variation prop", () => {
    const variation = "warning";
    const wrapper = shallowMount(AmAlert, {
      propsData: { variation },
    });
    const iconWrapper = wrapper.findComponent({ name: "AmIcon" });
    expect(iconWrapper.props("icon")).toBe("warning");
  });
});
