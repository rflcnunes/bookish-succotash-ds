import AmModal from "./AmModal.vue";
import AmButton from "../../atoms/AmButton/AmButton.vue";

export default {
  title: "Molecules/AmModal",
  component: AmModal,
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
  },
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AmModal, AmButton },
  data() {
    return {
      isOpen: false,
    };
  },
  template: `
    <div>
      <AmButton variant="outlined" label="Open Modal" @click="isOpen = true" />
      <AmModal :isOpen="isOpen" @close="isOpen = false">
        <template #header>
          <h2>Modal Title</h2>
        </template>
        <p>Modal Content Goes Here</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis placerat iaculis. Cras sit amet nibh at elit sollicitudin varius. Duis vestibulum purus sed urna interdum, sit amet iaculis libero condimentum. Cras viverra pretium justo, posuere dictum lectus consequat quis. Vivamus sagittis non ligula ut eleifend. Nulla suscipit laoreet luctus. Vestibulum eu ipsum neque. Aliquam vehicula suscipit varius. Aenean luctus erat libero, a consectetur elit viverra hendrerit. Ut ex leo, viverra id metus quis, congue gravida lacus. Phasellus ante tellus, tincidunt eget scelerisque et, pretium ac dolor. Phasellus rutrum elit eu tincidunt porttitor. Mauris in libero euismod, pulvinar lectus id, vestibulum est. Vivamus condimentum odio non dolor ullamcorper, vitae interdum mi ultricies. Integer ut viverra neque, nec tempor libero.</p>
        <template #footer>
          <AmButton variant="outlined" label="Close Modal" @click="isOpen = false" />
        </template>
      </AmModal>
    </div>
  `,
});
