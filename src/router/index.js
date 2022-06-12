import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (Home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/coreconcepts/states',
      name: 'states',
      // route level code-splitting
      // this generates a separate chunk (Home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CoreConcepts/States.vue'),
    },
    {
      path: '/coreconcepts/responsive-design',
      name: 'responsivedesign',
      // route level code-splitting
      // this generates a separate chunk (Home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CoreConcepts/ResponsiveDesign.vue'),
    },
  ],
});

export default router;
