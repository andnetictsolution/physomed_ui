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
  {
    path: '/physotrapist/treatment',
    name: 'physotrapist treatment',
    component: () => import('../views/physotrapist/ViewTreatmentPlan.vue')
  },
  {
    path: '/physotrapist/viewPatient',
    name: 'physotrapistPatient',
    component: () => import('../views/physotrapist/ViewPatientsSendFromDoctor.vue')
  }
]

export default physotrapistRoutes
