<script setup>
import BaseTable from '@/components/table/tableHH.vue'

import { queueStore } from '../../stores/queue/queue'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { convertToString } from '@/utils/moment'
import { authStore } from '@/stores/auth/auth'
import socket from '@/utils/socket'
const authPinia = authStore()
const queue = queueStore()

onMounted(async () => {
  authPinia.setTitle("Nurse Queue")
  await queue.fetchNurseQueue();
  socket.on('newNurseQueue', async(data) => {
    await queue.fetchNurseQueue();
    });
  
})
const allQueue = computed(() => {
  return queue.getNurseQueue
})
const router = useRouter()
const routeTo = (id) => {
  router.push(`/nurse/patient/${id}`)
}
const convertDate = (date) => {
  return convertToString(date)
}

const column = ['Full Name', 'Sex', 'Queue Date']
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
          class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400"
          v-for="item in allQueue"
          :key="item._id"
        >
          <td class="px-6 py-4">
            {{
              item.patient.first_name +
              ' ' +
              item.patient.middle_name +
              ' ' +
              item.patient.last_name
            }}
          </td>
          <td class="px-6 py-4">
            {{ item.patient.sex }}
          </td>
          <td class="px-6 py-4">
            {{ convertDate(item.date) }}
          </td>
          <td class="px-6 py-4">
            <button @click="routeTo(item.patient._id)" class="bg-primary p-1 px-10 text-white border-primary-200 rounded">
              Detail
            </button>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>
</template>
