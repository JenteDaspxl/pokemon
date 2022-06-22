import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritView from '../views/FavoritView.vue'
import MyTeamView from '../views/MyTeamView.vue'
import detailsView from '../views/detailsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Favorit',
    name: 'Favorit',
    component: FavoritView
  },
  {
    path: '/MyTeam',
    name: 'MyTeam',
    component: MyTeamView
  },
  {
    path: '/detailsView/:id',
    name: 'detailsView',
    component: detailsView,
    props: true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
