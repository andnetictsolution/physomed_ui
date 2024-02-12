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
  {
    path: '/view/cardPaid/patients',
    name: 'cardPaidPatients',
    component: () => import('../views/nurse/ViewPatientsTheyPaidForCard.vue')
  },
  {
    path: '/nurse/patient/:id',
    name: 'patientDetailNurse',
    component: () => import('../views/nurse/patientDetail.vue')
  }
]

export default nurseRoutes