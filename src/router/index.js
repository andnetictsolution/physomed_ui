import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/patientRegistration',
      name: 'patientRegistration',
      component: () => import('../components/ui/patientRegistration.vue')
    },
    {
      path: '/patientMedicalHistory',
      name: 'patientMedicalHistory',
      component: () => import('../components/ui/patientMedicalHistory.vue')
    },
    {
      path: '/userRegistration',
      name: 'userRegistration',
      component: () => import('../components/ui/userRegistration.vue')
    },
    {
      path: '/cashier',
      name: 'cashier',
      component: () => import('../components/ui/cashier.vue')
    }
  ]
})

export default router
