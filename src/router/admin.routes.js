const adminRoutes = [
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/admin/AdminDashboard.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: "default" }
  },
  {
    path: '/user/register',
    name: 'userRegister',
    component: () => import('../views/admin/UserRegistration.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: "auth" }
  },
  {
    path: '/patient/register',
    name: 'patientRegister',
    component: () => import('../views/admin/PatientRegistration.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: "auth" }
  }
]

export default adminRoutes
