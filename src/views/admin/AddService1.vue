<script setup>
import { computed, onMounted, ref } from 'vue'

import { serviceStore } from '../../stores/admin/service'
import { categoryStore } from '../../stores/admin/category'
import { authStore } from '@/stores/auth/auth'
import Checkbox from 'primevue/checkbox'
import { useRoute, useRouter } from 'vue-router'
const servicePinia = serviceStore()
const categoryPinia = categoryStore()
const authPinia = authStore()
const router = useRouter()
const route = useRoute();
const id = route.params.id
onMounted(async () => {
  await categoryPinia.fetchCategories()
  await authPinia.fetchRoles()
  if (id) {
    authPinia.setTitle("Update Treatment");
    await servicePinia.fetchSingleService(id);
    service.value.name = singleService.value.name;
    service.value.description = singleService.value.description;
    service.value.price_per_item = singleService.value.price_per_item;
    service.value.category = singleService.value.category._id;
    singleService.value.roles_allowed.forEach((item)=>(
      service.value.roles_allowed.push(item._id)
    ))
  } else {
    authPinia.setTitle("Register Treatment")
  }


})
const allCategories = computed(() => {
  return categoryPinia.getAllCategories
})
const category = ref('')
const allRoles = computed(() => {
  return authPinia.getRoles
})
const singleService = computed(()=>{
  return servicePinia.getSingleService
})
const service = ref({
  name: '',
  description: '',
  price_per_item: '',
  category: '',
  roles_allowed: []
})

const addService = async () => {
  try {
    await servicePinia.addNewservice({ ...service.value, category: category.value });
    router.push("/service/view")
  } catch (error) {
  }
}
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full sm:w-1/2 md:w-full lg:w-2/3 mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded shadow">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="address" class="block text-gray-700 font-bold mb-2 dark:text-white">Category</label>
          <select v-model="category" id="sex"
            class="w-full px-3 py-2 dark:text-black border border-primary-300 rounded focus:outline-none focus:border-primary">
            <option selected value="">Select category</option>
            <option v-for="category in allCategories" :key="category._id" :value="category._id">{{ category.name }}
            </option>
          </select>
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Service Name:</label>
          <input v-model="service.name" id="name" type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Service Name" />
        </div>

        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Description:</label>
          <input v-model="service.description" id="name" type="text"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Description" />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4 ">
          <label for="" class="block text-gray-700 font-bold mb-2 dark:text-white">Price:</label>
          <input v-model="service.price_per_item" id="price" type="price"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Price" />
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4 ">
          <label for="" class="block text-gray-700 font-bold mb-2 dark:text-white">Roles Allowed:</label>
          <div class="flex align-items-center" v-for="role in allRoles" :key="role._id">
            <Checkbox v-model="service.roles_allowed" inputId="ingredient1" :name="role.name" :value="role._id" />
            <label for="ingredient1" class="ml-2"> {{ role.name }} </label>
          </div>

        </div>


      </div>
      <div class="flex justify-end">
        <button v-if="!id" @click="addService" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
          Register treatment
        </button>
        <button v-else @click="updateService" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
          Update treatment
        </button>
      </div>
    </div>
  </div>
</template>
