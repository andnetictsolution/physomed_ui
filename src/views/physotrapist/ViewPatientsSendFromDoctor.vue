<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { orderStore } from '../../stores/reception/order'
import { patientStoreInPhysotropist } from '../../stores/physotrapist/patientsSendFromDoctor'
import { computed, onMounted, ref } from 'vue'
import Dialog from 'primevue/dialog'
const patientInPhysotrapistPinia = patientStoreInPhysotropist()
onMounted(async () => {
  await patientInPhysotrapistPinia.fetchPatientsFromPhysotrapist()
  // await servicePinia.fetchServices()
})

const allPatientsInPhysotrapy = computed(() => {
  return patientInPhysotrapistPinia.getAllPatientsFromPhysotrapist
})

// const visible = ref(false)
// const orderVars = ref({
//   patient: '',
//   service: '',
//   quantity: '',
//   schedule: '',
//   ordered_by: localStorage.getItem('physomed_user_id'),
//   payment: ''
// })

// const openModal = (value) => {
//   console.log('Open Modal', value)
//   console.log('Order', orderVars)
//   orderVars.value.patient = value
//   visible.value = !visible.value
// }

// const sendOrder = () => {
//   patientPinia.createOrder(orderVars.value)
// }
// const fillPayment = async () => {
//   console.log(orderVars.value.service, 'service')
//   let payment = await allServices.value.find((service) => {
//     return service._id == orderVars.value.service
//   })
//   orderVars.value.quantity = orderVars.value.quantity = 1
//   orderVars.value.payment = payment.price_per_item
//   console.log(payment)
// }
const column = ['full_name', 'sex', 'date_of_birth', 'phone']
const action = ['Edit', 'Delete']
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
          v-for="item in allPatientsInPhysotrapy"
          :key="item._id"
        >
          <td class="px-6 py-4" v-for="col in column" :key="col">
            {{ item[col] }}
          </td>
          <td class="px-6 py-4">
            <button @click="openModal(item._id)">Fill Medical History</button>
          </td>
        </tr>
      </template>
    </BaseTable>

    <div>
      <Dialog v-model:visible="visible" modal header="Card Payment" :style="{ width: '25rem' }">
        <div class="flex align-items-center gap-3 mb-3">
          <label for="username" class="font-semibold w-6rem">Service</label>
          <select v-model="orderVars.service" @change="fillPayment()">
            <option :value="service._id" v-for="(service, i) in allServices" :key="i">
              {{ service.name }}
            </option>
          </select>
        </div>
        <div class="flex align-items-center gap-3 mb-5">
          <label for="email" class="font-semibold w-6rem">Quantity</label>
          <input v-model="orderVars.quantity" />
        </div>
        <div class="flex align-items-center gap-3 mb-5">
          <label for="email" class="font-semibold w-6rem">Payment</label>
          <input v-model="orderVars.payment" />
        </div>
        <div class="flex justify-content-end gap-2">
          <button @click="visible = false">Cancel</button>
          <button type="button" label="Save" @click="sendOrder">Send Order</button>
        </div>
      </Dialog>
    </div>
  </div>
</template>
