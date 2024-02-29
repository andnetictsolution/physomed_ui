<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { categoryStore } from '../../stores/admin/category'
import { computed, onMounted, ref } from 'vue'

const categoryPinia = categoryStore()
onMounted(() => {
  categoryPinia.fetchCategories()
})
const allCategories = computed(() => {
  return categoryPinia.getAllCategories
})
const category = ref('')
const registerCategory = () => {
  categoryPinia.addNewCategorie({ name: category.value })
}
console.log(allCategories)
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="flex flex-row justify-between my-4">
      <div>
        <div class="flex flex-column gap-2 text-black">
          <label for="username" class="text-black dark:text-white">Categorie</label>
          <InputText class="p-1" v-model="category" />
        </div>
      </div>
      <Button label="Add category" @click="registerCategory" />
    </div>
    <div class="table">
      <DataTable :value="allCategories" tableStyle="min-width: 50rem">
        <Column field="name" header="Name"></Column>
      </DataTable>
    </div>
  </div>
</template>
