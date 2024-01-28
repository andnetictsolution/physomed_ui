const configurationRoutes = [
  {
    path: '/configuration/configuration',
    name: 'Configuration',
    component: () => import('../views/configuration/ExcerciseRegister.vue'),
    meta: { requiresAuth: false, userGuard: 'Admin' }
  }
]

export default configurationRoutes
