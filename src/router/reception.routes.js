const receptionRoutes = [
  {
    path: '/reception/dashboard',
    name: 'ReceptionDashboard',
    component: () => import('../views/reception/ReceptionDashboard.vue'),
    meta: { requiresAuth: true, userGuard: 'Reception' }
  }
]

export default receptionRoutes