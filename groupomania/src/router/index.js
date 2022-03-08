import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from '@/components/NavBar'
import Login from '@/views/Login'
import Footer from '@/components/Footer'
import comment from '@/components/comment'
import Accueil from '@/views/Accueil'
import Articles from '@/components/Articles'
import Profile from '@/components/Profile'
import Signup from '@/views/Signup'
import NewArticle from '@/components/NewArticle'
import Post from '@/components/Post'
import CreateComment from '@/components/CreateComment'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: 'Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/CreateComment',
    name: 'CreateComment',
    component: CreateComment
  },
  {
    path: '/NavBar',
    name: 'NavBar',
    component: NavBar
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
  {
    path: '/NewArticle',
    name: 'NewArticle',
    component: NewArticle,
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post,
  },
]


const router = new VueRouter({
  routes
})

export default router;
