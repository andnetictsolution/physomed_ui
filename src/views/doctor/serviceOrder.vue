<script setup>
import { serviceStore } from '@/stores/admin/service'
import { orderStore } from '@/stores/reception/order'
import { computed, onMounted, ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import { useRoute } from 'vue-router'
const servicePinia = serviceStore()
const orderPinia = orderStore()
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
  await orderPinia.createOrder(selectedCategories.value)
  console.log('selected order', selectedCategories.value)
}
</script>

<template>
  <div class="my-2">
    <div class="flex">
      <div
        v-for="category in filteredServices"
        :key="category.service"
        class="flex flex-col align-items-center w-2/3"
      >
        <div>
          <Checkbox
            class="border-primary"
            v-model="selectedCategories"
            :inputId="category.service"
            name="category"
            :value="category"
          />
          <label :for="category.key">{{ category.name }}</label>
        </div>
        <div class="my-2">
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="name" class="block mb-2">Quantity:</label>
            <input
              v-model="category.quantity"
              id="name"
              type="text"
              class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Quantity"
            />
          </div>
        </div>
        <div class="my-2">
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="name" class="block mb-2">Interval:</label>
            <input
              v-model="category.interval_in_days"
              id="name"
              type="text"
              class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="interval"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="my-2">
      <button
        @click="sendOrder"
        class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
      >
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
    border: 1px solid #cbd5e1!important;
    border-radius: 6px !important;
}
</style>
