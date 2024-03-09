<script setup>
import { computed, onMounted, ref } from 'vue'
import { authStore } from '@/stores/auth/auth';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Column from 'primevue/column';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import { categoryStore } from '@/stores/admin/category';
const categoryPinia = categoryStore();
const authPinia = authStore()
onMounted(async () => {
  await categoryPinia.fetchCategories();
  authPinia.setTitle("Add Category")
})

const allCategories = computed(() => {
  return categoryPinia.getAllCategories
})

const category = ref({
  name: ''
})
const addCategory = async() => {
  try {
    await categoryPinia.addNewCategorie({name:category.value.name});
    categoryDialog.value = false
  } catch (error) {
    console.log(error)
  }
  
}
const categoryDialog = ref(false)
const openNew = () => {
  categoryDialog.value = true;
};
const hideDialog = () => {
  categoryDialog.value = false;
};
</script>

<template>
  <div>
      <div class="card">
          <Toolbar class="mb-4">
              <template #start>
                  <Button label="Add New Category" icon="pi pi-plus" severity="primary" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" @click="openNew" />
              </template>

              
          </Toolbar>
          <DataTable ref="dt" :value="allCategories"  dataKey="id"
              :paginator="true" :rows="10">
              

              
              <Column field="name" header="Name" sortable style="min-width:16rem"></Column>
              <Column :exportable="false" style="min-width:8rem">
                  <template #body="slotProps">
                      <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="openNew(slotProps.data)" />
                      <Button icon="pi pi-trash" outlined rounded severity="danger" />
                  </template>
              </Column>
          </DataTable>
      </div>

      <Dialog v-model:visible="categoryDialog" :style="{width: '450px'}" header="Category Details" :modal="true" class="p-fluid">
          <div class="field">
              <label for="name">Category Name</label>
              <InputText id="name" class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary" v-model.trim="category.name" required="true"  />
              
          </div>
          
          <template #footer>
              <Button label="Cancel" icon="pi pi-times" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" text @click="hideDialog"/>
              <Button label="Save" icon="pi pi-check" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" text @click="addCategory" />
          </template>
      </Dialog>

      
</div>
</template>
