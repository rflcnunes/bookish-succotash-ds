import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import AmNavigation from "@/components/organisms/AmNavigation/AmNavigation.vue";
import AmTypography from "@/components/atoms/AmTypography/AmTypography.vue";

describe("AmNavigation", () => {
  const options = [
    { label: "Option 1", routeName: "option1" },
    { label: "Option 2", routeName: "option2" },
    { label: "Option 3", routeName: "option3" },
  ];

  it("renders the correct number of options", () => {
    const wrapper = shallowMount(AmNavigation, {
      propsData: {
        options: options,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.findAll(".nav__item")).toHaveLength(options.length);
  });

  it("selects an option when clicked", async () => {
    const wrapper = shallowMount(AmNavigation, {
      propsData: {
        options: options,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const optionIndex = 1;
    await wrapper.findAll(".nav__item").at(optionIndex).trigger("click");
    expect(wrapper.vm.selected).toEqual(optionIndex);
  });

  it("sets the hoverIndex when an option is hovered over", async () => {
    const wrapper = shallowMount(AmNavigation, {
      propsData: {
        options: options,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const optionIndex = 2;
    await wrapper.findAll(".nav__item").at(optionIndex).trigger("mouseover");
    expect(wrapper.vm.hoverIndex).toEqual(optionIndex);
  });

  it("removes the hoverIndex when an option is not being hovered over", async () => {
    const wrapper = shallowMount(AmNavigation, {
      propsData: {
        options: options,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    await wrapper.findAll(".nav__item").at(0).trigger("mouseover");
    await wrapper.findAll(".nav__item").at(0).trigger("mouseout");
    expect(wrapper.vm.hoverIndex).toBeNull();
  });

  it("displays the option label with AmTypography", () => {
    const wrapper = shallowMount(AmNavigation, {
      propsData: {
        options: options,
      },
      stubs: {
        AmTypography: true,
        RouterLink: true,
      },
    });
    const typographyWrapper = wrapper.findComponent(AmTypography);
    expect(typographyWrapper.exists()).toBe(true);
    expect(typographyWrapper.props("label")).toEqual(options[0].label);
  });
});
