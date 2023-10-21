import { describe, it, expect, beforeEach, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import IconMenu from '@/components/icons/IconMenu.vue';
import SideBar from '@/components/SideBar.vue';

describe('SideBar', () => {
  const mockRoute = {
    path: '/',
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SideBar, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
      components: {
        IconMenu,
      },
      data() {
        return {
          show: false,
          menu: false,
          navItems: [
            { name: 'Home', path: '/' },
            { name: 'Pseudo Classes', path: '/coreconcepts/pseudo-classes' },
            {
              name: 'Responsive Design',
              path: '/coreconcepts/responsive-design',
            },
          ],
        };
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('toggles the menu on button click', () => {
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.menu).toBe(true);
  });

  it('scrolls to the top of the page on click', () => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    const button = wrapper.findAll('button').at(1);
    button.trigger('click');
    expect(window.scrollTo).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: 0,
    });
  });
});
