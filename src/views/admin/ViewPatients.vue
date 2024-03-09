<script setup>

import { orderStore } from '../../stores/reception/order'
import { serviceStore } from '../../stores/admin/service'
import { authStore } from '@/stores/auth/auth'
import { cardStore } from '../../stores/admin/cardConfig'
import { queueStore } from '../../stores/queue/queue'
import { computed, onMounted, ref } from 'vue'
import socket from "../../utils/socket.js"
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { convertDOBToAge, convertShortDate } from '@/utils/moment'
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
  authPinia.setTitle('All Patients')
  socket.on('newNurseQueue', (data) => {
      console.log('Received message from server:', data);
    });
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

</script>

<template>
  <div>

  
  <div class="calc-screen">
    <Toast />
    <DataTable
    class="h-screen"
    :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }"
    :value="allPatients" scrollable scrollHeight="600px" tableStyle="min-width: 50rem">
    <Column field="name" header="Full Name">
      <template #body="slotProps">
                    {{ slotProps.data.first_name + " " +slotProps.data.middle_name + slotProps.data.last_name   }}
                </template>
    </Column>
    <Column field="sex" header="Sex"></Column>
    <Column  header="Age" >
      <template #body="slotProps">
{{ convertDOBToAge(slotProps.data.date_of_birth) }}
        </template>
    
    </Column>
    <Column header="Registration Date">
      <template #body="slotProps">
{{ convertShortDate(slotProps.createdAt) }}
        </template>
    </Column>
    <Column header="Actions">
      
      <template #body="slotProps">
        <Button type="button" label="Edit" icon="pi pi-pencil"   class="mx-1 w-full md:w-auto bg-primary p-1 my-1 px-10 text-white"/>
        <Button type="button" label="Send patient" icon="pi pi-send"  @click="openModal(slotProps.data)" class="mx-1 bg-primary p-1 my-1 w-full md:w-auto px-10 text-white" />

        </template>
    </Column>
</DataTable>

    <div>
      <Dialog v-model:visible="visible" modal header="Card Payment" :style="{ width: '25rem' }">
        <div class="flex align-items-center gap-3 mb-3">
          You have to receive {{ cardPrice?.card_price }} birr for
          {{ cardPrice?.validity_duration_in_days }} days in order to send the patient to nurse
        </div>
        <div class="flex justify-center gap-3">
          <Button
            class="bg-gray-200 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded"
            @click="visible = false"
          >
            Cancel
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

</div>
</template>
<style scoped>

</style>