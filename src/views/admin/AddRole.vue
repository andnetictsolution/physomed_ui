<script setup>
import { computed, onMounted, ref } from 'vue'
import { roleStore } from '@/stores/admin/role'
import { authStore } from '@/stores/auth/auth';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Column from 'primevue/column';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
const rolePinia = roleStore();
const authPinia = authStore()
onMounted(async () => {
  await rolePinia.fetchRoles();
  authPinia.setTitle("Add Role")
})

const allRoles = computed(() => {
  return rolePinia.getAllRoles
})

const role = ref({
  name: ''
})
const addRole = async() => {
  try {
    await rolePinia.addNewRole({name:role.value.name});
    roleDialog.value = false
  } catch (error) {
  }
  
}
const roleDialog = ref(false)
const openNew = () => {
    roleDialog.value = true;
};
const hideDialog = () => {
  roleDialog.value = false;
};
</script>

<template>
  <div>
      <div class="card">
          <Toolbar class="mb-4">
              <template #start>
                  <Button label="Add New Role" icon="pi pi-plus" severity="primary" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" @click="openNew" />
              </template>

              
          </Toolbar>
          <DataTable ref="dt" :value="allRoles"  dataKey="id"
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

      <Dialog v-model:visible="roleDialog" :style="{width: '450px'}" header="Role Details" :modal="true" class="p-fluid">
          <div class="field">
              <label for="name">Role Name</label>
              <InputText id="name" class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary" v-model.trim="role.name" required="true"  />
              
          </div>
          
          <template #footer>
              <Button label="Cancel" icon="pi pi-times" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" text @click="hideDialog"/>
              <Button label="Save" icon="pi pi-check" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" text @click="addRole" />
          </template>
      </Dialog>

      
</div>
</template>
