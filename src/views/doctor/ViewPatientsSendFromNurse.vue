<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { patientStoreInDoctor } from '../../stores/doctor/patientSendFromNurse'
import { computed, onMounted } from 'vue'
const patientPiniaInDoctor = patientStoreInDoctor()
onMounted(() => {
  patientPiniaInDoctor.fetchPatientsFromDoctor()
})
const allPatients = computed(() => {
  return patientPiniaInDoctor.getAllPatientsFromDoctor
})

const column = ['full_name', 'sex', 'date_of_birth', 'phone']
</script>
<!-- 
<template>
  <div>
    <BaseTable :column="column" :data="allPatients" route="/doctor/medicalHistory" />
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
            <button @click="delete">Delete</button>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>
</template>
