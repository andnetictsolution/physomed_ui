<script setup>
import { computed, ref } from 'vue'
import { patientStore } from '../../stores/reception/patient.js'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { authStore } from "../../stores/auth/auth.js"
import { onMounted } from "vue"
import { useRoute, useRouter } from 'vue-router'
import { convertDatePicker } from '@/utils/moment.js'
const toast = useToast()
const authPinia = authStore()
const patientPinia = patientStore();
const router = useRouter();
const route = useRoute();
const id = route.params.id;
onMounted(async () => {
  if (id) {
    authPinia.setTitle("Update patient details")
    await patientPinia.fetchSinglePatient(id)
    patient.value.first_name = singlePatient.value.first_name;
    patient.value.last_name = singlePatient.value.last_name;
    patient.value.middle_name = singlePatient.value.middle_name;
    patient.value.sex = singlePatient.value.sex;
    patient.value.date_of_birth = convertDatePicker(singlePatient.value.date_of_birth);
    patient.value.phone = singlePatient.value.phone;
  } else {
    authPinia.setTitle("Add new patinet")
  }

})
const singlePatient = computed(() => {
  return patientPinia.getSinglePatient
})

const user_role = localStorage.getItem("physomed_user_role")
const patient = ref({
  middle_name: '',
  first_name: '',
  last_name: '',
  date_of_birth: '',
  sex: '',
  phone: ''
})
const updatePatient = async () => {
  try {
    await patientPinia.updatePatient({
      id: id,
      patient: patient.value
    })
    router.push("/patient/view")
  } catch (error) {
    console.log(error)
    toast.add({
      severity: 'error',
      summary: 'Message',
      detail: error?.response?.data?.message,
      life: 6000
    })
  }
}
const registerPatient = async () => {
  if (!patient.value.first_name || !patient.value.middle_name || !patient.value.last_name || !patient.value.date_of_birth || !patient.value.sex || !patient.value.phone) {
    return toast.add({
      severity: 'info',
      summary: 'Message',
      detail: 'Please fill all required fields',
      life: 6000
    })
  }
  try {
    await patientPinia.addNewPatient(patient.value)
    if (user_role == 'Reception') {
      toast.add({
        severity: 'success',
        summary: 'Message',
        detail: 'Patient registered successfully',
        life: 6000
      })
      router.push("/patient/view")

    } else {
      router.push("/success")
    }
  } catch (error) {
    console.log(error)
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
  <div class="flex justify-center">
    <Toast />
    <div class="w-full sm:w-1/2 md:w-full lg:w-2/3 mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded shadow">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/2 px-2 mb-4">

          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">First Name:</label>
          <input v-model="patient.first_name" id="name" type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your first name" />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Father Name:</label>
          <input v-model="patient.middle_name" id="name" type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your middle name" />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Last Name:</label>
          <input v-model="patient.last_name" id="name" type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your last name" />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4 ">
          <label for="date-of-birth" class="block text-gray-700 font-bold mb-2 dark:text-white">Date of birth:</label>
          <input v-model="patient.date_of_birth" id="date-of-birth" type="date"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="date of birth" />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="phone" class="block text-gray-700 font-bold mb-2 dark:text-white">Phone:</label>
          <input id="phone" v-model="patient.phone" type="tel"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your phone number" />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="address" class="block text-gray-700 font-bold mb-2 dark:text-white">Sex</label>
          <select v-model="patient.sex" id="sex"
            class="w-full px-3 py-2 dark:text-black border border-primary-300 rounded focus:outline-none focus:border-primary">
            <option selected value="">Select sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end">
        <button v-if="!id"
          :class="{ 'cursor-not-allowed': !patient.first_name || !patient.last_name || !patient.middle_name }"
          :disabled="!patient.first_name || !patient.last_name || !patient.middle_name" @click="registerPatient"
          class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
        <button v-if="user_role == 'Reception' && id"
          :class="{ 'cursor-not-allowed': !patient.first_name || !patient.last_name || !patient.middle_name }"
          :disabled="!patient.first_name || !patient.last_name || !patient.middle_name" @click="updatePatient"
          class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </div>
    </div>
  </div>
</template>
