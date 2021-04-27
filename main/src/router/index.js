import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'AboutEvent',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "aboutevent" */ '../views/AboutEvent.vue')
  },
  {
    path: '/aboutme',
    name : 'AboutMe',
    component : () => import(/* webpackChunkName: "aboutme") */ '../views/AboutMe.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
