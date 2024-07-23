import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gallery',
      name: 'gallery',
      props: true,
      component: () => import('@/views/GalleryView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue')
    }
  ]
});

router.beforeEach(() => {
  // Triggers window stop to cancel all of the active streams
  // otherwise, they will keep running in background, consuming huge amounts of data
  window.stop();

});

export default router;
