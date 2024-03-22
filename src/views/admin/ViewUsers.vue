<script setup>
import { roleStore } from '../../stores/admin/role'
import { userStore } from '../../stores/admin/user'
import Dialog from 'primevue/dialog'

import { computed, onMounted, ref } from 'vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Button from 'primevue/button'
import { authStore } from '@/stores/auth/auth'
import { useRouter } from 'vue-router'
const visible = ref(false)
const rolePinia = roleStore()
const userPinia = userStore()
const authPinia = authStore()
const router = useRouter()
onMounted(async () => {
  authPinia.setTitle("All users")
  await userPinia.fetchUsers()
  await rolePinia.fetchRoles()
})
const allUsers = computed(() => {
  return userPinia.getAllUsers
})

const deleteUser = () => {
  userPinia.deletuser('65b95eaa73bfd186397612cd')
}
const editUser = (id) => {
  router.push('/user/edit/' + id)
}
</script>
<template>
  <div>
    <div class="card">
      <Toolbar class="mb-4">
        <template #start>
          <Button label="Add New User" icon="pi pi-plus" severity="primary"
            class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" @click="openNew" />
        </template>


      </Toolbar>
      <DataTable ref="dt" :value="allUsers" dataKey="id" :paginator="true" :rows="10">



        <Column header="Full Name" style="min-width:12rem">
          <template #body="slotProps">
            <span class="text-sm">{{ slotProps.data?.first_name + " " + slotProps.data?.last_name }}</span>
          </template>
        </Column>
        <Column field="phone" header="Phone" style="min-width:8rem">

        </Column>
        <Column field="email" header="Email" style="min-width:8rem"></Column>
        <Column header="Role" style="min-width:10rem">
          <template #body="slotProps">
            <span class="text-sm">{{ slotProps.data?.role.name }}</span>
          </template>
        </Column>
        <Column :exportable="false" header="Actions" style="min-width:12rem">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editUser(slotProps.data._id)" />
            <Button icon="pi pi-trash" outlined rounded severity="danger" />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>

  <div>
    <Dialog v-model:visible="visible" modal header="Are you sure to delete?" :style="{ width: '25rem' }">
      <div class="flex justify-content-end gap-2">
        <button @click="visible = false">Cancel</button>
        <button type="button" label="Save" @click="deleteUser()">Delete User</button>
      </div>
    </Dialog>
  </div>
</template>
