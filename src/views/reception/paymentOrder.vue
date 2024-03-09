<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { queueStore } from '@/stores/queue/queue'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import { convertToString } from '@/utils/moment'
import { authStore } from '@/stores/auth/auth'
const queuePinia = queueStore();
const authPinia = authStore();
const router = useRouter()
onMounted(async() => {
  await queuePinia.fetchReceptionQueue();
  authPinia.setTitle("Payment order")
})

const allPayments = computed(() => {
  return queuePinia.getReceptionQueue
})

const processPayment = (payment) => {
  router.push('/payment/order/' + payment)
}

const column = ['Full Name', 'sex', 'date']
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
          v-for="item in allPayments"
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
            {{ convertToString(item.date) }}
          </td>
          
          <td class="px-6 py-4">
            <Button
              @click="processPayment(item.patient._id)"
              class="bg-primary p-1 px-10 text-white"
              label="Detail"
            ></Button>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>
</template>
