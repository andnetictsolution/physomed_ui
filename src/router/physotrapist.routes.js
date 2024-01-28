const physotrapistRoutes = [
  {
    path: '/physotrapist/dashboard',
    name: 'PhysotrapistDashboard',
    component: () => import('../views/physotrapist/PhyDashboard.vue'),
    meta: { requiresAuth: false, userGuard: 'Physotrapist' }
  }
]

export default physotrapistRoutes
