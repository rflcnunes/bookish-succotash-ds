import AmSidebar from './AmSidebar.vue';

export default {
  title: 'Atoms/AmSidebar',
  component: AmSidebar,
  argTypes: {
    items: { control: 'array' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmSidebar },
  template: '<AmSidebar :items="items"><template #logo><div><h1>Logo</h1></div></template><template #actions><div><button>Button</button></div></template></AmSidebar>',
});

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  items: [
    { label: 'Home', url: '#' },
    { label: 'About', url: '#' },
    { label: 'Contact', url: '#' },
  ],
};
