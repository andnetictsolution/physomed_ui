<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { orderStore } from '../../stores/reception/order'
import { serviceStore } from '../../stores/admin/service'
import { authStore } from '@/stores/auth/auth'
import { cardStore } from '../../stores/admin/cardConfig'
import { queueStore } from '../../stores/queue/queue'
import { computed, onMounted, ref } from 'vue'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'
const patientPinia = orderStore()
const queuePinia = queueStore()
const servicePinia = serviceStore()
const authPinia = authStore()
const cardPinia = cardStore()
const toast = useToast()
onMounted(async () => {
  await patientPinia.fetchPatients()
  await servicePinia.fetchServices()
  await cardPinia.fetchCardPrice()
  await authPinia.setTitle('All Patients')
})

const allPatients = computed(() => {
  return patientPinia.getAllPatients
})
const cardPrice = computed(() => {
  return cardPinia.getCardPrice
})

console.log('Patient in view patients', allPatients)
const allServices = computed(() => {
  return servicePinia.getAllServices
})
console.log('allServices', allServices)
const visible = ref(false)
const patientId = ref('')

const openModal = async (value) => {
  patientId.value = value._id
  if (value.card_payment) {
    let now = new Date()
    let endDate = new Date(value.card_payment.end_date)
    if (now > endDate) {
      visible.value = !visible.value
    } else {
      await queuePinia.addNurseQueue({ date: new Date(), patient_id: value._id })
      toast.add({
        severity: 'info',
        summary: 'Message',
        detail: 'Patient send to nurse successfully',
        life: 6000
      })
    }
  } else {
    visible.value = !visible.value
  }
}

const confirmPayment = async () => {
  if (!patientId.value) {
    return toast.add({
      severity: 'info',
      summary: 'Message',
      detail: 'Please select  patient',
      life: 6000
    })
  }
  await cardPinia.confirmCardPayment({ patient: patientId.value })
  await queuePinia.addNurseQueue({ date: new Date(), patient_id: patientId.value })
  toast.add({
    severity: 'info',
    summary: 'Message',
    detail: 'Patient paid succesfully',
    life: 6000
  })
  visible.value = false
}
const column = ['sex', 'phone']
</script>

<template>
  <div>
    <Toast />
    <BaseTable>
      <template v-slot:header>
        <th scope="col" class="px-6 py-3">Full Name</th>
        <th scope="col" class="px-6 py-3" v-for="(item, i) in column" :key="i">
          {{ item }}
        </th>
        <th scope="col" class="px-6 py-3">Actions</th>
      </template>
      <template v-slot:body>
        <tr
          class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400"
          v-for="item in allPatients"
          :key="item._id"
        >
          <td class="px-6 py-4">
            {{ item.first_name + ' ' + item.middle_name + ' ' + item.last_name }}
          </td>
          <td class="px-6 py-4" v-for="col in column" :key="col">
            {{ item[col] }}
          </td>
          <td class="px-6 py-4">
            <button class="mx-2" @click="edit">Edit</button>
            <button @click="openModal(item)">Send to Nurse</button>
          </td>
        </tr>
      </template>
    </BaseTable>

    <div>
      <Dialog v-model:visible="visible" modal header="Card Payment" :style="{ width: '25rem' }">
        <div class="flex align-items-center gap-3 mb-3">
          You have to recieve {{ cardPrice?.card_price }} birr for
          {{ cardPrice?.validity_duration_in_days }} days in order to send the patient to nurse
        </div>
        <div class="flex justify-center gap-3">
          <Button
            class="bg-gray-200 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded"
            @click="visible = false"
          >
            Cancle
          </Button>
          <Button
            @click="confirmPayment"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Confirm
          </Button>
        </div>
      </Dialog>
    </div>
  </div>
</template>
