import { createRouter, createWebHistory } from 'vue-router'
import permisionDenied from '../views/403Page.vue'
import notFound from '../views/404Page.vue'
import welcome from "../views/welcome.vue"
import adminRoutes from './admin.routes'
import configurationRoutes from './configuration.routes'
import doctorRoutes from './doctor.routes'
import nurseRoutes from './nurse.routes'
import physotrapistRoutes from './physotrapist.routes'
import receptionRoutes from './reception.routes'
import authRoutes from './auth.routes'

// import jwt_decode from "jwt-decode";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...adminRoutes,
    ...configurationRoutes,
    ...doctorRoutes,
    ...nurseRoutes,
    ...physotrapistRoutes,
    ...receptionRoutes,
    ...authRoutes,
    {
      path: '/permision-denied',
      name: 'permisiondenied',
      component: permisionDenied
    },

    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },

    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: notFound
    }
  ]
})

router.beforeEach((to, from, next) => {

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("physomed_token")) {
      next({ path: "/Login" });
    } else {
      // const tokenPayload = localStorage.getItem("physomed_token");
      const authPayload = {}//jwt_decode(tokenPayload);
      const now = new Date();
      if (Math.floor(now.getTime() / 1000) > authPayload.exp) {
        localStorage.removeItem("physomed_token");
        next({ path: "/" });
      } else {
        console.log("match ", to.matched);
      }
      const User = JSON.parse(
        localStorage.getItem("physomed_authenticated_user")
      );
      to.matched.some((record) => {
        if (record.meta.userGuard) {
          if (record.meta.userGuard === "all") {
            next(true);
          } else {
            if (record.meta.userGuard === User.user_role) {
              next(true);
            } else {
              window.location.replace("/permission-denied");
            }
          }
        }
      });
    }
  } else {
    next();
  }
})

export default router
