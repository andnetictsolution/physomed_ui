<script setup>
import { computed, onMounted, ref } from 'vue'
import { authStore } from '@/stores/auth/auth'
import { categoryStore } from "../../stores/admin/category.js"
const authPinia = authStore()
const categoryPinia = categoryStore()
const card = ref({
  price: '',
  service: '',
})
onMounted(async() => {
    authPinia.setTitle("Card configuration")
  await categoryPinia.fetchCards();
  card.value.price = allCards.value.card_price;
  card.value.service = allCards.value.validity_duration_in_days;

})

const configureCard = async() => {
  try {
    await categoryPinia.configureCard({
        card_price: card.value.price,
        validity_duration_in_days: card.value.service
    })
  } catch (error) {
    console.log(error)
  }
}


const allCards = computed(() => {
  return categoryPinia.getCard
})
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full sm:w-1/2 md:w-full lg:w-2/3 mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded shadow">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Card Price:</label>
          <input
            v-model="card.price"
            id="name"
            type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Enter your first name"
          />
        </div>
        
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Card Service Time:</label>
          <input
            v-model="card.service"
            id="name"
            type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Service Time"
          />
        </div>
        
      </div>
      <div class="flex justify-end">
        <button
          @click="configureCard"
          class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
        >
          Configure Card
        </button>
      </div>
    </div>
  </div>
</template>
