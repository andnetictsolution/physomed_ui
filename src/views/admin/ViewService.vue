<script setup>
import Column from 'primevue/column';
import { serviceStore } from '../../stores/admin/service'
import { computed, onMounted } from 'vue'
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import { useRouter } from 'vue-router';
import { authStore } from '@/stores/auth/auth';
const servicePinia = serviceStore();
const router = useRouter();
const authPinia = authStore();
onMounted(async () => {
  authPinia.setTitle("All Services");
 await servicePinia.fetchServices()
})
const allServices = computed(() => {
  return servicePinia.getAllServices
})
const goToService = (()=>{
router.push("/service/add")
})

</script>
<template>
  <div>
    <div class="card">
          <Toolbar class="mb-4">
              <template #start>
                  <Button @click="goToService" label="Add New Service" icon="pi pi-plus" severity="primary" class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" />
              </template>

              
          </Toolbar>
          <DataTable ref="dt" :value="allServices"  dataKey="id"
              :paginator="true" :rows="10">
              

              
              <Column  header="Service Name"  style="min-width:12rem">
              <template #body="slotProps">
                  <span class="text-sm">{{slotProps.data?.name}}</span>
              </template>
              </Column>
              <Column field="price_per_item" header="Price"  style="min-width:8rem"></Column>
              <Column header="Category"  style="min-width:10rem">
                <template #body="slotProps">
                  <span class="text-sm">{{slotProps.data?.category.name}}</span>
              </template>
              </Column>
              <Column :exportable="false" header="Actions" style="min-width:12rem">
                  <template #body>
                      <Button icon="pi pi-pencil" outlined rounded class="mr-2" />
                      <Button icon="pi pi-trash" outlined rounded severity="danger" />
                  </template>
              </Column>
          </DataTable>
      </div>
  </div>
</template>
