import { createRouter, createWebHistory } from 'vue-router';
const HomeView = () => import('@/views/HomeView.vue');
const PseudoClasses = () => import('@/views/CoreConcepts/PseudoClasses.vue');
const ResponsiveDesign = () =>
  import('@/views/CoreConcepts/ResponsiveDesign.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/coreconcepts/pseudo-classes',
      name: 'pseudoclasses',
      component: PseudoClasses,
    },
    {
      path: '/coreconcepts/responsive-design',
      name: 'responsivedesign',
      component: ResponsiveDesign,
    },
  ],
});

export default router;
