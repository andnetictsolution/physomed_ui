<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { serviceStore } from '../../stores/admin/service'
import { computed, onMounted } from 'vue'
const servicePinia = serviceStore()
onMounted(() => {
  servicePinia.fetchServices()
})
const allServices = computed(() => {
  return servicePinia.getAllServices
})
console.log('Inside View service', allServices)

const column = ['name', 'description', 'price_per_item']
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
          v-for="item in allServices"
          :key="item._id"
        >
          <td class="px-6 py-4" v-for="col in column" :key="col">
            {{ item[col] }}
          </td>

          <td class="px-6 py-4">
            <button class="mx-2" @click="edit">Edit</button>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>
</template>
