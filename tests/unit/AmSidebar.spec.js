import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import AmSidebar from "@/components/atoms/AmSidebar/AmSidebar.vue";
import AmTypography from "@/components/atoms/AmTypography/AmTypography.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();

describe("AmSidebar.vue", () => {
  it("renders a closed sidebar when isOpen prop is false", () => {
    const items = [
      { label: "Home", link: "/" },
      { label: "About", link: "/about" },
      { label: "Contact", link: "/contact" },
    ];
    const wrapper = shallowMount(AmSidebar, {
      localVue,
      router,
      propsData: {
        items,
        isOpen: false,
      },
      stubs: {
        RouterLink: true,
        AmTypography,
      },
    });
    expect(wrapper.classes()).toContain("am-sidebar");
    expect(wrapper.classes()).not.toContain("am-sidebar--open");
  });

  it("renders an open sidebar when isOpen prop is true", async () => {
    const items = [
      { label: "Home", link: "/" },
      { label: "About", link: "/about" },
      { label: "Contact", link: "/contact" },
    ];
    const wrapper = shallowMount(AmSidebar, {
      localVue,
      router,
      propsData: {
        items,
      },
      stubs: {
        RouterLink: true,
        AmTypography,
      },
    });
    wrapper.setData({ isOpen: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$data.isOpen).toBe(true);
    expect(wrapper.classes()).toContain("am-sidebar");
    expect(wrapper.classes()).toContain("am-sidebar--open");
  });

  it("renders all menu items with correct label and link props", async () => {
    const items = [
      { label: "Home", link: "/" },
      { label: "About", link: "/about" },
      { label: "Contact", link: "/contact" },
    ];
    const wrapper = shallowMount(AmSidebar, {
      localVue,
      router,
      propsData: {
        items,
      },
      stubs: {
        RouterLink: true,
        AmTypography,
      },
    });

    wrapper.setData({ isOpen: true });

    await wrapper.vm.$nextTick();

    const menuItems = wrapper.findAll(".am-sidebar__menu li");

    menuItems.wrappers.forEach((item) => {
      expect(items.map((i) => i.label).includes(item.text())).toBe(true);
    });

    expect(menuItems.length).toBe(items.length);
  });
});
