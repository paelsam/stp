import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/modules/landing/router/landing.router'
import Auth from '@/modules/auth/router/auth.router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      ...Landing
    },
    {
      path: '/auth',
      ...Auth
    }
  ]
})

export default router
