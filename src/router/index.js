import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CountryShow from '../views/CountryShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
    props: true
  },
  {
    path: '/name/:name',
    name: 'country-show',
    component: CountryShow,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
