const adminRoutes = [
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/admin/AdminDashboard.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'default' }
  },
  {
    path: '/user/register',
    name: 'userRegister',
    component: () => import('../views/admin/UserRegistration.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'auth' }
  },
  {
    path: '/user/edit/:id',
    name: 'userEdit',
    component: () => import('../views/admin/UserRegistration.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'auth' }
  },
  {
    path: '/patient/register',
    name: 'patientRegister',
    component: () => import('../views/admin/PatientRegistration.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'auth' }
  },
  {
    path: '/patient/edit/:id',
    name: 'patientEdit',
    component: () => import('../views/admin/PatientRegistration.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'auth' }
  },
  {
    path: '/user/view',
    name: 'userView',
    component: () => import('../views/admin/ViewUsers.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'auth' }
  },
  {
    path: '/patient/view',
    name: 'patientView',
    component: () => import('../views/admin/ViewPatients.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'auth' }
  },
  {
    path: '/service/add',
    name: 'serviceadd',
    component: () => import('../views/admin/AddService1.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'auth' }
  },
  {
    path: '/service/view',
    name: 'serviceview',
    component: () => import('../views/admin/ViewService.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'auth' }
  },
  {
    path: '/service/edit/:id',
    name: 'serviceEdit',
    component: () => import('../views/admin/AddService1.vue'),
    meta: { requiresAuth: false, userGuard: 'All', layout: 'auth' }
  },
  {
    path: '/add/categories',
    name: 'addCategories',
    component: () => import('../views/admin/manageCategorie.vue')
  },
  {
    path: '/add/role',
    name: 'AddRole',
    component: () => import('../views/admin/AddRole.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/admin/success.vue')
  },
  {
    path: '/add/card',
    name: 'addCard',
    component: () => import('../views/admin/cardConfig.vue')
  },
  {
    path: '/view/role',
    name: 'ViewRole',
    component: () => import('../views/admin/ViewRole.vue')
  }
]

export default adminRoutes
