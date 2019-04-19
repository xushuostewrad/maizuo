import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import Film from '../views/index/Film.vue'
import Cinema from '../views/index/Cinema.vue'
import Sale from '../views/index/Sale.vue'
import Center from '../views/index/Center.vue'
import City from '../views/city/Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        { path: 'films/:filmType', name: 'films', component: Film, meta: { tabNumber: 0 } },
        { path: 'cinemas', name: 'cinemas', component: Cinema, meta: { tabNumber: 1 } },
        { path: 'sales', name: 'sales', component: Sale, meta: { tabNumber: 2 } },
        { path: 'center', name: 'center', component: Center, meta: { tabNumber: 3 } },
        { path: '', redirect: '/films/nowPlaying' }

      ]
    },
    { path: '/city', name: 'city', component: City },
    { path: '*', redirect: '/films/nowPlaying'}
  ]
})
export default router
