const physotrapistRoutes = [
  {
    path: '/physotrapist/dashboard',
    name: 'PhysotrapistDashboard',
    component: () => import('../views/physotrapist/PhyDashboard.vue'),
    meta: { requiresAuth: false, userGuard: 'Physotrapist' }
  },
  // {
  //   path: '/physotrapist/patientTreatment',
  //   name: 'physotrapistTreatment',
  //   component: () => import('../views/physotrapist')
  // }
]

export default physotrapistRoutes
