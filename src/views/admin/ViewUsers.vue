<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { userStore } from '../../stores/admin/user'
import Dialog from 'primevue/dialog'

import { computed, onMounted, ref } from 'vue'
const visible = ref(false)

const userPinia = userStore()
onMounted(() => {
  userPinia.fetchUsers()
})
const allUsers = computed(() => {
  return userPinia.getAllUsers
})

const deleteUser = () => {
  userPinia.deletuser('65b95eaa73bfd186397612cd')
}
const openModal = (value) => {
  visible.value = !visible.value
}

const column = ['first_name', 'last_name', 'phone', 'email', 'role']
</script>
<template>
  <div>
    <BaseTable>
      <template v-slot:header>
        <th scope="col" class="px-6 py-3" v-for="(item, i) in column" :key="i">
          {{ item }}
        </th>
        <th scope="col" class="px-6 py-3">Actions</th>
      </template>
      <template v-slot:body>
        <tr
          class="bg-white border-b dark:bg-gray-000 dark:border-gray-700"
          v-for="item in allUsers"
          :key="item._id"
        >
          <td class="px-6 py-4" v-for="col in column" :key="col">
            {{ item[col] }}
          </td>
          <td class="px-6 py-4">
            <button class="mx-2" @click="edit">Edit</button>
            <button @click="openModal()">Delete</button>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>

  //
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      header="Are you sure to delete?"
      :style="{ width: '25rem' }"
    >
      <div class="flex justify-content-end gap-2">
        <button @click="visible = false">Cancel</button>
        <button type="button" label="Save" @click="deleteUser()">Delete User</button>
      </div>
    </Dialog>
  </div>
</template>
