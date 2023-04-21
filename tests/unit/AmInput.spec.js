import { mount } from "@vue/test-utils";
import AmInput from "@/components/atoms/AmInput/AmInput.vue";
import AmTypography from "@/components/atoms/AmTypography/AmTypography.vue";

describe("AmInput.vue", () => {
  test("renders correctly", () => {
    const wrapper = mount(AmInput, {
      propsData: {
        label: "Username",
        name: "username",
      },
      global: {
        components: { AmTypography },
      },
    });

    expect(wrapper.props().label).toMatch("Username");
  });

  test("emits input event on input", () => {
    const wrapper = mount(AmInput, {
      propsData: {
        label: "Password",
        name: "password",
      },
      global: {
        components: { AmTypography },
      },
    });
    const input = wrapper.find("input");
    input.setValue("mypassword");
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual(["mypassword"]);
  });

  test("toggles password visibility on click", async () => {
    const wrapper = mount(AmInput, {
      propsData: {
        label: "Password",
        name: "password",
        type: "password",
      },
      global: {
        components: { AmTypography },
      },
    });
    const icon = wrapper.find(".am-input__icon");
    expect(wrapper.find("input").attributes("type")).toBe("password");
    await icon.trigger("click");
    expect(wrapper.find("input").attributes("type")).toBe("text");
    await icon.trigger("click");
    expect(wrapper.find("input").attributes("type")).toBe("password");
  });

  test("displays placeholder correctly", () => {
    const wrapper = mount(AmInput, {
      propsData: {
        label: "Email",
        name: "email",
        placeholder: "Enter your email",
      },
      global: {
        components: { AmTypography },
      },
    });
    expect(wrapper.find("input").attributes("placeholder")).toBe(
      "Enter your email"
    );
  });

  test("displays icon correctly", () => {
    const wrapper = mount(AmInput, {
      propsData: {
        label: "Search",
        name: "search",
        icon: "search",
      },
      global: {
        components: { AmTypography },
      },
    });
    const icon = wrapper.find(".am-input__icon i");
    expect(icon.classes()).toContain("material-icons");
    expect(icon.text()).toBe("search");
  });
});
