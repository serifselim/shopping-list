import { createRouter, createWebHistory } from 'vue-router';
import { Home, BasketList, BasketDetails } from '../views';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/lists',
    component: BasketList
  },
  {
    path: '/details',
    component: BasketDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
