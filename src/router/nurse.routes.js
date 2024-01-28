const nurseRoutes = [
    {
      path: '/nurse/dashboard',
      name: 'NurseDashboard',
      component: () => import('../views/nurse/NurseDashboard.vue'),
      meta: { requiresAuth: false,userGuard: 'Nurse' }
    }
  ]
  
  export default nurseRoutes