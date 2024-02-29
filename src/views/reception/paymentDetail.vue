<script setup>
import { useRoute } from 'vue-router'
import { orderStore } from '../../stores/reception/order'
import { patientCardPaymentStore } from '@/stores/reception/payment'
import { authStore } from '@/stores/auth/auth'
const authPinia = authStore()
import { computed, onMounted } from 'vue'
import BaseTable from '@/components/table/tableHH.vue'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
const route = useRoute()
const payment = patientCardPaymentStore()
const id = route.params.id
const orderPinia = orderStore()
onMounted(async() => {
  await authPinia.setTitle('Payment Details')
  await payment.fetchOnePatientPayments({ patient: id,date:new Date() })
})
const paymentList = computed(() => {
  return payment.getOnePatientPayments
})
const payOrder = (payment) => {
  orderPinia.confirmPayment({ payments: [payment._id],patient_id:payment.patient._id })
}
const column = ['Full Name', 'Sex',"Service", 'quantity', 'U.price', 'T.price', 'status']
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
          v-for="item in paymentList"
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
            {{ item.service.name }}
          </td>
          <td class="px-6 py-4">
            {{ item.quantity }}
          </td>
          <td class="px-6 py-4">
            {{ item.price_per_item }}
          </td>
          <td class="px-6 py-4">
            {{ item.price }}
          </td>
          <td class="px-6 py-4">
            <Tag
              :value="item.payment_status"
              :severity="
                item.payment_status == 'none'
                  ? 'danger'
                  : item.payment_status == 'warning'
                    ? 'warning'
                    : 'primary'
              "
            />
          </td>
          <td class="px-6 py-4">
            <Button
              @click="payOrder(item)"
              class="bg-primary p-1 px-10 text-white"
              label="Pay"
            ></Button>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>
</template>
