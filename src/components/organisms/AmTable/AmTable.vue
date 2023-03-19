<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.key"
          @click="sort(column.key)"
        >
          <div class="sort_row">
            <AmTypography
              variant="slab"
              size="md"
              :label="column.label"
              class="sort"
            />
            <AmIcon
              class="sort-icon"
              v-if="sortColumn === column.key"
              :icon="
                sortDirection === 'asc'
                  ? 'keyboard_arrow_up'
                  : 'keyboard_arrow_down'
              "
            />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="column in columns" :key="column.key">
          <div>
            {{ item[column.key] }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import AmIcon from "@/components/atoms/AmIcon/AmIcon.vue";
import AmTypography from "@/components/atoms/AmTypography/AmTypography.vue";

export default {
  name: "AmTable",
  components: {
    AmIcon,
    AmTypography,
  },
  props: {
    header: {
      type: Array,
      required: true,
      default: () => [],
    },
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      sortColumn: "",
      sortDirection: "asc",
      dataCopy: JSON.parse(JSON.stringify(this.data)),
    };
  },
  computed: {
    columns() {
      return this.header.map((column) => ({
        ...column,
        key: column.key || column.label.toLowerCase().replace(" ", "_"),
      }));
    },
    items() {
      const dataCopy = this.data.slice();
      if (!this.sortColumn) {
        return dataCopy;
      }
      return dataCopy.sort((a, b) =>
        this.sortDirection === "asc"
          ? a[this.sortColumn].localeCompare(b[this.sortColumn])
          : b[this.sortColumn].localeCompare(a[this.sortColumn])
      );
    },
  },
  methods: {
    sort(columnKey) {
      if (this.sortColumn === columnKey) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortColumn = columnKey;
        this.sortDirection = "asc";
      }
    },
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
}

th {
  cursor: pointer;
}

th span {
  margin-left: 5px;
}

tr th {
  border-bottom: 2px solid rgba(107, 119, 140, 0.3);
  color: #6b778c;
}

.sort_row {
  display: flex;
}
</style>
