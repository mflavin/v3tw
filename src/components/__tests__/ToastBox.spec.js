import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ToastBox from '@/components/ToastBox.vue';

describe('ToastBox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ToastBox, {
      props: {
        title: 'Toast Title',
        text: 'Toast Text',
      },
    });
  });

  it('renders the title and text correctly', () => {
    expect(wrapper.find('.text-xl').text()).toBe('Toast Title');
    expect(wrapper.find('p').text()).toBe('Toast Text');
  });

  it('renders the default icon if no custom icon is passed', () => {
    expect(wrapper.find('img').attributes().src).toBe(
      '/v3tw/img/icons/android-chrome-192x192.png',
    );
  });

  it('renders a custom icon if passed as a prop', async () => {
    await wrapper.setProps({ icon: 'https://my-custom-icon.com/icon.png' });
    expect(wrapper.find('img').attributes().src).toBe(
      'https://my-custom-icon.com/icon.png',
    );
  });

  it('closes the toast when the close button is clicked', async () => {
    wrapper.find('.cursor-pointer').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.rounded-card').exists()).toBe(false);
  });
});
