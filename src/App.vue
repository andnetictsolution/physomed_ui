<script>
import { computed } from 'vue'
import AuthLayout from './layouts/authLayout.vue'
import DefaultLayout from './layouts/defaultLayout.vue'
import { authStore } from './stores/auth/auth'
export default {
  components: {
    DefaultLayout,
    AuthLayout
  },
  setup() {
    // const currentLayout = ref(false);
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
