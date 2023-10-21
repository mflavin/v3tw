import { describe, it, expect, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import TextBox from '@/components/TextBox.vue';

describe('TextBox.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TextBox, {
      propsData: {
        label: 'Label text',
        type: 'text',
      },
    });
  });

  it('renders the label correctly', () => {
    const label = wrapper.find('.block.font-medium.text-slate-700');
    expect(label.text()).toBe('Label text');
  });

  it('renders the input correctly', () => {
    const input = wrapper.find('input');
    expect(input.attributes().type).toBe('text');
    expect(input.classes()).toContain('focus-error-text-box');
    expect(input.classes()).toContain('peer');
  });

  it('renders the error message correctly when peer is passed as prop', async () => {
    await wrapper.setProps({ peer: 'Peer text' });
    const p = wrapper.find('p');
    expect(p.text()).toBe('Peer text');
    expect(p.classes()).toContain('invisible');
    expect(p.classes()).toContain('peer-invalid:visible');
  });

  it('does not render the error message if peer prop is not passed', () => {
    const p = wrapper.find('p');
    expect(p.exists()).toBe(false);
  });
});
