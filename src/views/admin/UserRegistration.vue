<script setup>
import { computed, onMounted, ref } from 'vue'
import { userStore } from '../../stores/admin/user'
import { authStore } from '@/stores/auth/auth'
import { roleStore } from "../../stores/admin/role"
import { useRouter } from 'vue-router'
const router = useRouter()
const userPinia = userStore()
const authPinia = authStore()
const rolePinia = roleStore()
const user = ref({
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  role: '',
})
onMounted(async() => {
  await rolePinia.fetchRoles();
  authPinia.setTitle("User Registration")
})

const registerUser = async() => {
  try {
    await userPinia.addNewUser(user.value)
    router.push("/user/view")
  } catch (error) {
    console.log(error)
  }
}


const allRoles = computed(() => {
  return rolePinia.getAllRoles
})
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full sm:w-1/2 md:w-full lg:w-2/3 mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded shadow">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">First Name:</label>
          <input
            v-model="user.first_name"
            id="name"
            type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your first name"
          />
        </div>
        
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Last Name:</label>
          <input
            v-model="user.last_name"
            id="name"
            type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your last name"
          />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4 ">
          <label for="date-of-birth" class="block text-gray-700 font-bold mb-2 dark:text-white"
            >Email:</label
          >
          <input
            v-model="user.email"
            id="email"
            type="email"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Email"
          />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="phone" class="block text-gray-700 font-bold mb-2 dark:text-white">Phone:</label>
          <input
            id="phone"
            v-model="user.phone"
            type="tel"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your phone number"
          />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="address" class="block text-gray-700 font-bold mb-2 dark:text-white">Role</label>
          <select
            v-model="user.role"
            id="sex"
            class="w-full px-3 py-2 dark:text-black border border-primary-300 rounded focus:outline-none focus:border-primary"
          >
            <option selected value="">Select role</option>
            <option v-for="role in allRoles" :key="role._id" :value="role._id">{{ role.name }}</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          @click="registerUser"
          class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
        >
          Register user
        </button>
      </div>
    </div>
  </div>
</template>
