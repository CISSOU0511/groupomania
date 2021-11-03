import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Footer from '@/components/Footer'
import comment from '@/components/comment'
import Accueil from '@/views/Accueil'
import Articles from '@/components/Articles'
import NewArticle from '@/components/NewArticle'
import Profile from '@/components/Profile'
import Signup from '@/views/Signup'

Vue.use(VueRouter)

const routes = [

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
    path: '/NewArticle',
    name: 'NewArticle',
    component: NewArticle
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]


const router = new VueRouter({
  routes
})

export default router
