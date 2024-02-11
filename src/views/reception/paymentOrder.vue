<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { patientPaymentStore } from '../../stores/reception/patient'
import { computed, onMounted } from 'vue'
const patientPaymentPinia = patientPaymentStore()
onMounted(() => {
  patientPaymentPinia.fetchPatients()
})
const allPatients = computed(() => {
  return patientPaymentPinia.getAllPatients
})
const sendToNurse = () => {
  patientPaymentPinia
}

const column = ['full_name', 'sex', 'date_of_birth', 'phone', 'Actions']
const action = ['Edit', 'Delete']
</script>
<!-- <template>
  <div>
    <BaseTable :column="column" route="#" :data="allPatients" :actions="action" />
  </div>
</template> -->

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
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="item in allPatients"
          :key="item._id"
        >
          <td class="px-6 py-4" v-for="col in column" :key="col">
            {{ item[col] }}
          </td>
          <td class="px-6 py-4">
            <button class="mx-2" @click="edit">Edit</button>
            <button @click="delete">Send to Nurse</button>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>
</template>
