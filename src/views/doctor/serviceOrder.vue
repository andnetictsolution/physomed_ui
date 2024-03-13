<script setup>
import { serviceStore } from '@/stores/admin/service'
import { orderStore } from '@/stores/reception/order'
import { computed, onMounted, ref } from 'vue'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { useRoute } from 'vue-router'
const servicePinia = serviceStore()
const orderPinia = orderStore()
const toast = useToast()
onMounted(async () => {
  await servicePinia.fetchServices()
})
const route = useRoute()
const id = route.params.id
const allServices = computed(() => {
  return servicePinia.getAllServices
})
const selectedCategories = ref([])
const filteredServices = computed(() => {
  let services = []
  allServices.value.forEach((service) => {
    services.push({
      name: service.name,
      service: service._id,
      quantity: '',
      interval_in_days: '',
      patient: id
    })
  })
  return services
})
// const selectedServices = ref(filteredServices.value)

const sendOrder = async () => {
  try {
    await orderPinia.createOrder(selectedCategories.value);
    toast.add({
      severity: 'success',
      summary: 'Message',
      detail: 'Treatment plan sent successfully',
      life: 6000
    })
    this.selectedCategories.value = []
  } catch (error) {
    console.log(error.response.data,"error in order")
    toast.add({
      severity: 'error',
      summary: 'Message',
      detail: error?.response?.data?.message,
      life: 6000
    })
  }

  console.log('selected order', selectedCategories.value)
}
</script>

<template>
  <div class="my-2">
    <Toast />
    <div class="flex flex-wrap">
      <div v-for="category in filteredServices" :key="category.service" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        
        <div class="flex items-center">
          <input v-model="selectedCategories" type="checkbox" :value="category"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00 mr-2">{{ category.name }}</label>

        </div>
        <div class="my-2">
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="name" class="block mb-2">Quantity:</label>
            <input v-model="category.quantity" id="name" type="text"
              class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Quantity" />
          </div>
        </div>
        <div class="my-2">
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="name" class="block mb-2">Interval:</label>
            <input v-model="category.interval_in_days" id="name" type="text"
              class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="interval" />
          </div>
        </div>
      </div>
    </div>
    <div class="my-2">
      <button :class="{'cursor-not-allowed':selectedCategories.length <= 0}" :disabled="selectedCategories.length <= 0" @click="sendOrder" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
        Send Order
      </button>
    </div>
  </div>
</template>

<style>
.p-checkbox .p-checkbox-input {
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  z-index: 1 !important;
  outline: 0 none;
  border: 1px solid #cbd5e1 !important;
  border-radius: 6px !important;
}
</style>
