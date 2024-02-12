<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { orderStore } from '../../stores/reception/order'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const orderPina = orderStore()
const router = useRouter()
onMounted(() => {
  orderPina.fetchOrders()
})
const allOrders = computed(() => {
  return orderPina.getAllOrders
})

const routeTO = (id) => {
  router.push(`/doctor/order/${id}`)
}

const column = ['Full Name', 'sex', 'service', 'quantity', 'U.price', 'T.price', 'status']
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
          v-for="item in allOrders"
          :key="item._id"
        >
          <td class="px-6 py-4">
            {{ item.patient.full_name }}
          </td>
          <td class="px-6 py-4">
            {{ item.patient.sex }}
          </td>
          <td class="px-6 py-4">
            {{ item.service.name }}
          </td>
          <td class="px-6 py-4">
            {{ item.quantity }}
          </td>
          <td class="px-6 py-4">
            {{ item.service.price_per_item }}
          </td>
          <td class="px-6 py-4">
            {{ item.payment.price }}
          </td>
          <td class="px-6 py-4">
            {{ item.payment.isPaid ? 'Paid' : 'Not paid' }}
          </td>
          <td class="px-6 py-4">
            <button @click="routeTO(item._id)" class="p-2 rounded-sm">Pay</button>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>
</template>
