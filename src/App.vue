<script>
import { computed } from 'vue'
import AuthLayout from './layouts/authLayout.vue'
import DefaultLayout from './layouts/defaultLayout.vue'
import { authStore } from './stores/auth/auth'
import AddUser from './views/admin/UserRegistration.vue'
export default {
  components: {
    DefaultLayout,
    AuthLayout,
    AddUser
  },
  setup() {
    const authPinia = authStore()
    const isAuthenticated = computed(() => {
      return localStorage.getItem('physomed_token') ? true : authPinia.isAuthenticatedUser
    })
    return {
      isAuthenticated
    }
  }
}
</script>

<template>
  <div>
    <div>
      <component :is="isAuthenticated ? 'AuthLayout' : 'DefaultLayout'"> </component>
    </div>
  </div>
</template>

<style scoped></style>
