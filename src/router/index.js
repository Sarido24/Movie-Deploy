import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ListEpisode from '../views/ListEpisode.vue'
import Detail from '../views/Detail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/list/:id',
      name: 'list',
      component: ListEpisode
    },
    {
      path: '/detail/:detailId',
      name: 'detail',
      component: Detail
    },
   
  ]
})

export default router
