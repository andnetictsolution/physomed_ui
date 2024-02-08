const nurseRoutes = [
  {
    path: '/nurse/dashboard',
    name: 'NurseDashboard',
    component: () => import('../views/nurse/NurseDashboard.vue'),
    meta: { requiresAuth: false, userGuard: 'Nurse' }
  },
  {
    path: '/nurse/patientMedicalHistory',
    name: 'MedicalHistory',
    component: () => import('../views/nurse/PatientMedicalHistory.vue')
  },
]

export default nurseRoutes