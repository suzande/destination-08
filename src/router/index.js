import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Destinations from '../views/Destinations.vue';
import CulturalEvents from '../views/CulturalEvents.vue';
import WaterSports from '../views/WaterSports.vue';
import UploadPhotos from '../views/UploadPhotos.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/WaterSports',
    name: 'WaterSports',
    component: WaterSports,
  },
  {
    path: '/Destinations',
    name: 'Destinations',
    component: Destinations,
  },
  {
    path: '/CulturalEvents',
    name: 'CulturalEvents',
    component: CulturalEvents,
  },
  {
    path: '/UploadPhotos',
    name: 'UploadPhotos',
    component: UploadPhotos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;