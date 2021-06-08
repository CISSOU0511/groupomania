import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '@/views/Signup'
import Login from '@/views/Login'
import Footer from '@/components/Footer'
import comment from '@/components/comment'
import Accueil from '@/views/Accueil'
import Articles from '@/components/Articles'
import Post from '@/components/Post'


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
    path: '/Footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/comment',
    name: 'comment',
    component: comment
  },
  {
    path: '/Accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post
  },
]


const router = new VueRouter({
  routes
})

export default router
