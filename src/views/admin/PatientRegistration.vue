<script setup>
import { ref } from 'vue'
import { patientStore } from '../../stores/reception/patient.js'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import {authStore} from "../../stores/auth/auth.js"
import {onMounted} from "vue"
const toast = useToast()
const authPinia = authStore()
const patientPinia = patientStore()
onMounted(()=>{
   authPinia.setTitle("Patient Registration")
})
const patient = ref({
  middle_name: '',
  first_name: '',
  last_name: '',
  date_of_birth: '',
  sex: '',
  phone: ''
})
const registerPatient = async () => {
  if (!patient.value.first_name || !patient.value.middle_name || !patient.value.last_name) {
    return toast.add({
      severity: 'info',
      summary: 'Message',
      detail: 'Please fill all required fields',
      life: 6000
    })
  }
  await patientPinia.addNewPatient(patient.value)

  toast.add({
    severity: 'success',
    summary: 'Message',
    detail: 'Patient registered successfully',
    life: 6000
  })
}
</script>
<template>
  <div class="flex justify-center">
    <Toast />
    <div class="w-full sm:w-1/2 md:w-full lg:w-2/3 mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded shadow">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">First Name:</label>
          <input
            v-model="patient.first_name"
            id="name"
            type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your first name"
          />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Middle Name:</label>
          <input
            v-model="patient.middle_name"
            id="name"
            type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your middle name"
          />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Last Name:</label>
          <input
            v-model="patient.last_name"
            id="name"
            type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your last name"
          />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4 ">
          <label for="date-of-birth" class="block text-gray-700 font-bold mb-2 dark:text-white"
            >Date of birth:</label
          >
          <input
            v-model="patient.date_of_birth"
            id="date-of-birth"
            type="date"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="date of birth"
          />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="phone" class="block text-gray-700 font-bold mb-2 dark:text-white">Phone:</label>
          <input
            id="phone"
            v-model="patient.phone"
            type="tel"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your phone number"
          />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="address" class="block text-gray-700 font-bold mb-2 dark:text-white">Sex</label>
          <select
            v-model="patient.sex"
            id="sex"
            class="w-full px-3 py-2 dark:text-black border border-primary-300 rounded focus:outline-none focus:border-primary"
          >
            <option selected value="">Select sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          @click="registerPatient"
          class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
        >
          Register patient
        </button>
      </div>
    </div>
  </div>
</template>
