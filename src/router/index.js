import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Destinations from '../views/Destinations.vue';
import CultureWashington from '../views/CultureWashington.vue';
import CultureOregon from '../views/CultureOregon.vue';
import Photos from '../views/Photos.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/CultureOregon',
    name: 'CultureOregon',
    component: CultureOregon,
  },
  {
    path: '/Destinations',
    name: 'Destinations',
    component: Destinations,
  },
  {
    path: '/CultureWashington',
    name: 'CultureWashington',
    component: CultureWashington,
  },
  {
    path: '/Photos',
    name: 'Photos',
    component: Photos,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;