const receptionRoutes = [
  {
    path: '/reception/dashboard',
    name: 'ReceptionDashboard',
    component: () => import('../views/reception/ReceptionDashboard.vue'),
    meta: { requiresAuth: true, userGuard: 'Reception' }
  },
  {
    path: '/table1',
    name: 'table1',
    component: () => import('../components/table/table1.vue')
  },
  {
    path: '/payment/page',
    name: 'paymentPage',
    component: () => import('../views/reception/PaymentPage.vue')
  }
]

export default receptionRoutes