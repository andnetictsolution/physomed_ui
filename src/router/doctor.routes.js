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
  },
  {
    path: '/doctor/medicalHistory',
    name: 'medicalHistory',
    component: () => import('../views/doctor/viewPatientMedicalHistory.vue')
  }
]

export default doctorRoutes
