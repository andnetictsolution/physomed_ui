const doctorRoutes = [
  {
    path: '/doctor/dashboard',
    name: 'DoctorDashboard',
    component: () => import('../views/doctor/DoctorDashboard.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: "Auth" }
  },

  {
    path: '/doctor/investigation',
    name: 'Investigation',
    component: () => import('../views/doctor/DoctorInvestigation.vue')
  }
]

export default doctorRoutes
