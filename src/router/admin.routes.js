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
  },

  {
    path: '/user/view',
    name: 'fortest',
    component: () => import('../views/admin/ViewUsers.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: "auth" }
  },
  {
    path: '/patient/view',
    name: 'patientView',
    component: () => import('../views/admin/ViewPatients.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: "auth" }
  },
  {
    path: '/service/add',
    name: 'serviceadd',
    component: () => import('../views/admin/AddService1.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: "auth" }
  },
  {
    path: '/service/view',
    name: 'serviceview',
    component: () => import('../views/admin/ViewService.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: "auth" }
  }
]

export default adminRoutes
