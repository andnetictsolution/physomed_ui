<template>
  <div class="flex flex-col items-center h-full">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-md mx-auto bg-white rounded-lg h-full rounded-lg overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <h3 class="dark:text-primary text-2xl text-center font-medium my-3">Welcome back!</h3>
          <p class="dark:text-black text-base text-center my-2 font-semibold">
            Sign in to start your work!
          </p>
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              v-model="user.email"
              type="text"
              id="username"
              class="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2"
              >Password</label
            >
            <input
              v-model="user.password"
              type="password"
              id="password"
              class="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div class="flex items-center justify-between mb-4">
            <div>
              <a href="#" class="text-blue-500 hover:text-blue-700">Forgot password?</a>
            </div>
          </div>
          <button
            @click="login"
            class="block w-full bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { authStore } from '../stores/auth/auth'
export default {
  setup() {
    const user = reactive({
      email: '',
      password: ''
    })
    const authPinia = authStore()

    const login = async () => {
      authPinia.login(user)
    }
    return { user, login }
  }
}
</script>

<style>
/* Add your custom styles or override Tailwind CSS classes here */
</style>
