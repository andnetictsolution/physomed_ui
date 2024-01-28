const adminRoutes = [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginPage.vue'),
      meta: { requiresAuth: false, userGuard: 'All' }
    }
  ]
  
  export default adminRoutes