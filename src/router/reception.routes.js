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
    path: '/payment/order',
    name: 'paymentorder',
    component: () => import('../views/reception/paymentOrder.vue')
  },
  {
    path: '/payment/order/:id',
    name: 'paymentDetail',
    component: () => import('../views/reception/paymentDetail.vue')
  },
  {
    path: '/payment/order/schedule/:id',
    name: 'paymentScheduleDetail',
    component: () => import('../views/reception/paymentSchedule.vue')
  },
]

export default receptionRoutes