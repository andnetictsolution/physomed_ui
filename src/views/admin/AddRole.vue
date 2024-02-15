<script setup>
import Dropdown from 'primevue/dropdown'
import { computed, onMounted, ref } from 'vue'

import { roleStore } from '../../stores/admin/role'
import { categoryStore } from '../../stores/admin/category'
const rolePinia = roleStore()
const categoryPinia = categoryStore()
onMounted(async () => {
  await categoryPinia.fetchCategories()
})
const allCategories = computed(() => {
  return categoryPinia.getAllCategories
})
console.log(allCategories)
const role = ref({
  name: ''
})
const category = ref('')
const addRole = () => {
  console.log(category.value)
  rolePinia.addNewRole(role.value)
}
console.log(allCategories)
</script>

<template>
  <div class="max-w-md mx-auto my-auto pt-2">
    <div class="relative z-0 w-full mb-5 group">
      <input
        v-model="role.name"
        type="text"
        name="floating_email"
        id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Role name</label
      >
    </div>
    <div>
      <!-- <p>my First Name is {{ fName }}</p> -->
    </div>
    <div class="relative z-0 w-full mb-5 group"></div>

    <div class="relative z-0 w-full mb-5 group"></div>
    <button
      @click.prevent="addRole"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add Role
    </button>
  </div>
</template>
