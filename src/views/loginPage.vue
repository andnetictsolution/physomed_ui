<script setup>
import { reactive } from 'vue'
import { authStore } from '../stores/auth/auth'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

const user = reactive({
  email: '',
  password: ''
})
const authPinia = authStore()
const toast = useToast()
const login = async () => {
  try {
    await authPinia.login(user);
    toast.add({
      severity: 'success',
      summary: 'Message',
      detail: 'You are now logged in',
      life: 6000
    })
  } catch (error) {
    console.log(error)
    console.log(toast)
    toast.add({
      severity: 'error',
      summary: 'Message',
      detail: error?.response?.data?.message,
      life: 6000
    })
  }

}

</script>
<template>
  <div class="flex flex-col items-center h-full">
    <Toast />
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-md mx-auto bg-white rounded-lg h-full rounded-lg overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <img src="../assets/PhysioMed.png" style="height: 300px;width: 100%;" alt="" srcset="">
          <h3 class="dark:text-primary text-2xl text-center font-medium my-3" style="margin-top: -60px;">Welcome back!
          </h3>
          <p class="dark:text-black text-base text-center my-2 font-semibold">
            Sign in to start your work!
          </p>
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input v-model="user.email" type="text" id="username"
              class="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your username" />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input v-model="user.password" type="password" id="password"
              class="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password" />
          </div>
          <div class="flex items-center justify-between mb-4">
            <div>
              <a href="#" class="text-blue-500 hover:text-blue-700">Forgot password?</a>
            </div>
          </div>
          <button :class="{ 'cursor-not-allowed': user.password == '' || user.email == '' }" @click="login"
            :disabled="user.password == '' || user.email == ''"
            class="block w-full bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
/* Add your custom styles or override Tailwind CSS classes here */
</style>
