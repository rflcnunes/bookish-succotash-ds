import { shallowMount } from "@vue/test-utils";
import AmTable from "@/components/organisms/AmTable/AmTable.vue";
import AmIcon from "@/components/atoms/AmIcon/AmIcon.vue";
import AmTypography from "@/components/atoms/AmTypography/AmTypography.vue";

describe("AmTable", () => {
  const header = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Age", key: "age" },
  ];
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 20 },
  ];

  it("sorts data when sort method is called", async () => {
    const wrapper = shallowMount(AmTable, {
      propsData: {
        header,
        data,
      },
      stubs: {
        AmIcon,
        AmTypography,
      },
    });

    wrapper.vm.sort("name");
    await wrapper.vm.$nextTick();

    const tds = wrapper.findAll("tbody tr td");
    expect(tds.length).toBe(9);
    expect(tds.at(0).text()).toBe("3");
    expect(tds.at(1).text()).toBe("Bob");
    expect(tds.at(2).text()).toBe("20");
    expect(tds.at(3).text()).toBe("2");
    expect(tds.at(4).text()).toBe("Jane");
    expect(tds.at(5).text()).toBe("30");
    expect(tds.at(6).text()).toBe("1");
    expect(tds.at(7).text()).toBe("John");
    expect(tds.at(8).text()).toBe("25");
    expect(wrapper.vm.$data.sortColumn).toBe("name");
    expect(wrapper.vm.$data.sortDirection).toBe("asc");
  });
});
