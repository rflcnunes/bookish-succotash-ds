import { mount } from '@vue/test-utils';
import AmButton from './AmButton.vue';

describe('AmButton', () => {
  // Testes vão aqui
  test('renders a button with the correct label', () => {
    const label = 'Click me';
    const wrapper = mount(AmButton, {
      props: { label },
    });
    const button = wrapper.find('button');
  
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe(label);
  });
});