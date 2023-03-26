import AmTable from "./AmTable.vue";
import pretty from "pretty";

export default {
  title: "Organisms/AmTable",
  component: AmTable,
};

const Template = (args) => ({
  components: { AmTable },
  setup() {
    return { args };
  },
  template: '<am-table v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  header: [
    { label: "ID", key: "id" },
    { label: "Nome", key: "name", isSorting: true },
    { label: "E-mail", key: "email" },
    { label: "Telefone", key: "phone" },
  ],
  data: [
    {
      id: 1,
      name: "Ana Silva",
      email: "ana.silva@example.com",
      phone: "+55 (11) 5555-5555",
    },
    {
      id: 2,
      name: "Bruno Santos",
      email: "bruno.santos@example.com",
      phone: "+55 (11) 5555-5555",
    },
    {
      id: 3,
      name: "Carla Oliveira",
      email: "carla.oliveira@example.com",
      phone: "+55 (11) 5555-5555",
    },
  ],
};

const formatCode = (code) => pretty(code, { ocd: true });

const generateCode = () => {
  const code = `
    <AmTable
      header="header"
      data="data"
    />
  `;
  return formatCode(code);
};

Default.parameters = {
  docs: {
    source: {
      code: generateCode(Default.args),
    },
  },
};
