import { shallowMount } from "@vue/test-utils";
import AmTime from "@/components/organisms/AmTime/AmTime.vue";

describe("AmTime.vue", () => {
  it("displays the correct time format", async () => {
    const wrapper = shallowMount(AmTime);
    const time = { time: { hours: "12", minutes: "32", seconds: "45" } };

    wrapper.setData(time);
    await wrapper.vm.$nextTick();

    const expectedLabel = `${time.time.hours}h${time.time.minutes}min${time.time.seconds}s`;
    const actualLabel = wrapper.find(".am_time__timezone").props().label;

    expect(actualLabel).toBe(expectedLabel);
  });
});
