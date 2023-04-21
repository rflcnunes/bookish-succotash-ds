import { shallowMount } from "@vue/test-utils";
import AmInput from "@/components/atoms/AmInput/AmInput.vue";

describe("AmInput.vue", () => {
  test("renders correctly", () => {
    const wrapper = shallowMount(AmInput, {
      propsData: {
        label: "Username",
        name: "username",
      },
    });

    expect(wrapper.props().label).toMatch("Username");
  });

  test("emits input event on input", () => {
    const wrapper = shallowMount(AmInput, {
      propsData: {
        label: "Password",
        name: "password",
      },
    });
    const input = wrapper.find("input");
    input.setValue("mypassword");
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual(["mypassword"]);
  });

  test("toggles password visibility on click", async () => {
    const wrapper = shallowMount(AmInput, {
      propsData: {
        label: "Password",
        name: "password",
        type: "password",
      },
    });
    const icon = wrapper.find(".am-input-icon");
    expect(wrapper.find("input").attributes("type")).toBe("password");
    await icon.trigger("click");
    expect(wrapper.find("input").attributes("type")).toBe("text");
    await icon.trigger("click");
    expect(wrapper.find("input").attributes("type")).toBe("password");
  });
});
