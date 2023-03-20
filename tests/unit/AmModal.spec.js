import { shallowMount } from "@vue/test-utils";
import AmModal from "@/components/organisms/AmModal/AmModal.vue";

describe("AmModal.vue", () => {
  it("renders correctly when open", async () => {
    const wrapper = shallowMount(AmModal, {
      propsData: {
        isOpen: true,
      },
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.classes("am-modal--open")).toBe(true);
    expect(wrapper.find(".am-modal__content").exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("emits a 'close' event when the close button is clicked", () => {
    const wrapper = shallowMount(AmModal);
    wrapper.find(".am-modal__close").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
