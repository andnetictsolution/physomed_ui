const categorieRoutes = [
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/admin/manageCategorie.vue'),
      meta: { requiresAuth: false, userGuard: 'All' }
    }
  ]
  
  export default categorieRoutes