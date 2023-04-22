import { shallowMount } from "@vue/test-utils";
import AmDay from "@/components/organisms/AmDay/AmDay.vue";

describe("AmDay.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AmDay);
  });

  it("displays the correct greeting based on the time of day", () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      expect(wrapper.vm.greeting).toBe("Good morning");
    } else if (hour >= 12 && hour < 18) {
      expect(wrapper.vm.greeting).toBe("Good afternoon");
    } else {
      expect(wrapper.vm.greeting).toBe("Good evening");
    }
  });

  it("displays the correct date information", () => {
    const date = new Date();
    const day = date.getDate();
    const dayOfWeek = wrapper.vm.getDayOfWeek(date.getDay());
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const expectedLabel = `${dayOfWeek}, ${wrapper.vm.getMonthName(
      month
    )} ${day}, ${year}`;

    expect(wrapper.find(".am_day__date").props().label).toBe(expectedLabel);
  });

  it("displays the correct name if a user is provided", async () => {
    const name = "John Doe";

    wrapper.setProps({ userName: name });

    const expectedLabel = `, ${name}`;

    await wrapper.vm.$nextTick();

    expect(wrapper.find(".am_day__user_name").props().label).toBe(
      expectedLabel
    );
  });
});
