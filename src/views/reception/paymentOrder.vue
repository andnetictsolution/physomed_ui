<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import Tag from 'primevue/tag'
// import { orderStore } from '../../stores/reception/order'
import { patientCardPaymentStore } from '../../stores/reception/payment'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
// const orderPina = orderStore()
const paymentPinia = patientCardPaymentStore()
const router = useRouter()
// const confirm = useConfirm();
onMounted(() => {
  // orderPina.fetchOrders()
  paymentPinia.fetchPatientPayments()
})

const allPayments = computed(() => {
  return paymentPinia.getAllPayments
})

const processPayment = (payment) => {
  router.push('/payment/order/' + payment)
  // orderPina.confirmCardPayment({ patient: payment })
}

const column = ['Full Name', 'sex', 'quantity', 'U.price', 'T.price', 'status']
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
          <!-- <td class="px-6 py-4">
            {{ item.service.name }}
          </td> -->
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
