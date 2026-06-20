import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from './components/HomePage.vue'
import GalleryPage from './components/GalleryPage.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  }
})

export default router