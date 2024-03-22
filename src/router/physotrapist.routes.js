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
    path: '/physio/queue',
    name: 'physioQueue',
    component: () => import('../views/physotrapist/physioQueue.vue')
  },
  {
    path: '/physiotherapist/patient',
    name: 'physioPatient',
    component: () => import('../views/physotrapist/allPatients.vue')
  },
  {
    path: '/physio/order/:id',
    name: 'physioOrder',
    component: () => import('../views/physotrapist/orderDetail.vue')
  }
]

export default physotrapistRoutes
