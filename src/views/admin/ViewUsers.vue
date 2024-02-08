<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { userStore } from '../../stores/admin/user'
import { computed, onMounted } from 'vue'
const userPinia = userStore()
onMounted(() => {
  userPinia.fetchUsers()
})
const allUsers = computed(() => {
  return userPinia.getAllUsers
})

const column = ['first_name', 'last_name', 'phone', 'email', 'role']
</script>
<template>
  <div>
    <BaseTable :column="column" route="/users" :data="allUsers" />
  </div>
</template>
