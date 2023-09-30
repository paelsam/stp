import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/modules/landing/router/landing.router'
import Auth from '@/modules/auth/router/auth.router'
import Admin from '@/modules/admin/router/admin.router'
import Empleado from '@/modules/empleado/router/empleado.router'


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
    },
    {
      path: '/admin',
      ...Admin
    },
    {
      path: '/empleado',
      ...Empleado
    }
  ]
})

export default router
