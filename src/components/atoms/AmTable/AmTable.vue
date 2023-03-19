<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.key"
          @click="sort(column.key)"
        >
          {{ column.label }}
          <span v-if="sortColumn === column.key">
            {{ sortDirection === "asc" ? "▲" : "▼" }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="column in columns" :key="column.key">
          {{ item[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "AmTable",
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
  border-bottom: 1px solid #ddd;
}

th {
  cursor: pointer;
}

th span {
  margin-left: 5px;
}
</style>
