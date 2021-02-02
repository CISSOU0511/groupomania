import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '@/views/Accueil'
import Signup from '@/components/Signup'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
]


const router = new VueRouter({
  routes
})

export default router
