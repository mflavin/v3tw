import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { TopBar } from '@/components/TopBar';

describe('TopBar', () => {
  it('renders properly', () => {
    const mockRoute = {
      params: {
        id: 1,
      },
    };
    const mockRouter = {
      push: vi.fn(),
    };
    const wrapper = mount(TopBar, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    expect(wrapper.text()).toContain('Home');
  });
});
