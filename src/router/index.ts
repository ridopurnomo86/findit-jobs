import routes from './routes';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => {
    document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
  },
});

export default router;
