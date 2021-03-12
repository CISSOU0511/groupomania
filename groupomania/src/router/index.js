import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '@/views/Signup'
import Login from '@/components/Login'
import NavBar from '@/components/NavBar'

Vue.use(VueRouter)

const routes = [
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
  {
    path:'/NavBar',
    name: 'NavBar',
    component: NavBar
  },
]


const router = new VueRouter({
  routes
})

export default router
