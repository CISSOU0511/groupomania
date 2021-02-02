import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '@/views/Accueil'
import Signup from '@/views/Signup'
import Login from '@/components/Login'

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
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
]


const router = new VueRouter({
  routes
})

export default router
