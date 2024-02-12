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
  },
  {
    path: '/doctor/patients',
    name: 'doctorPatients',
    component: () => import('../views/doctor/ViewPatientsSendFromNurse.vue')
  },
  {
    path: '/doctor/treatment',
    name: 'patientTreatmentPlan',
    component: () => import('../views/doctor/PatientTreatmentPlan.vue')
  },
  {
    path: '/doctor/order',
    name: 'doctorQueue',
    component: () => import('../views/doctor/patientOrder.vue')
  },
  {
    path: '/doctor/order/:id',
    name: 'doctorOrderDetail',
    component: () => import('../views/doctor/patientDetail.vue')
  }
]

export default doctorRoutes
