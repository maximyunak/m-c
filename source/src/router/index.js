import CreatePost from '@/views/CreatePost.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Register from '@/views/Register.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/profile/:id',
      component: Profile,
    },
    {
      path: '/create-post',
      component: CreatePost,
    },
    {
      path: '/edit-post/:id',
      component: CreatePost,
    },
  ],
})

export default router
