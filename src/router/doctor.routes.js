const doctorRoutes = [
  {
    path: '/doctor/dashboard',
    name: 'DoctorDashboard',
    component: () => import('../views/doctor/DoctorDashboard.vue'),
    meta: { requiresAuth: false,userGuard: 'All',layout:"Auth" }
  }
]

export default doctorRoutes
