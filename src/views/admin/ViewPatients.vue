<script setup>

import { orderStore } from '../../stores/reception/order'
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
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import debounce from 'lodash.debounce';
const patientPinia = orderStore()
const queuePinia = queueStore()
const authPinia = authStore()
const cardPinia = cardStore()
const toast = useToast()
const router = useRouter()
onMounted(async () => {
  authPinia.setTitle('All Patients')
  await patientPinia.fetchPatients()
  await cardPinia.fetchCardPrice()
  socket.on('newNurseQueue', async (data) => {
    await patientPinia.fetchPatients()
  });
})
const filterPatient = debounce(async function () {
  let payload = {};
  if (searchBy.value == "card_no") {
    payload = {
      card_no: search.value
    }
  } else {
    payload = {
      first_name: search.value
    }
  }
  await patientPinia.filterPatients(payload)
}, 300)
const allPatients = computed(() => {
  return patientPinia.getAllPatients
})
const cardPrice = computed(() => {
  return cardPinia.getCardPrice
})


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
const editPatient = (id) => {
  router.push('/patient/edit/' + id)
}
const searchBy = ref("first_name");
const search = ref("");
const searchMethods = ref([
  {
    name: "Card No",
    value: "card_no"
  },
  {
    name: "Name",
    value: "first_name"
  }
])

const confirmPayment = async () => {
  if (!patientId.value) {
    return toast.add({
      severity: 'info',
      summary: 'Message',
      detail: 'Please select  patient',
      life: 6000
    })
  }
  try {
    await cardPinia.confirmCardPayment({ patient: patientId.value })
    await queuePinia.addNurseQueue({ date: new Date(), patient_id: patientId.value })
    toast.add({
      severity: 'info',
      summary: 'Message',
      detail: 'Patient paid successfully',
      life: 6000
    })
    visible.value = false
  } catch (error) {
    console.log(error)
    toast.add({
      severity: 'error',
      summary: 'Message',
      detail: error.response.data.message,
      life: 6000
    })
  }

}

</script>

<template>
  <div>


    <div class="calc-screen">
      <Toast />
      <div class="flex flex-col md:flex-row my-2 gap-2">
        <span class="">
          <Dropdown v-model="searchBy" :options="searchMethods" valueLabel="value" optionLabel="name"
            placeholder="Select search method" class="w-full md:w-[14rem]" />
        </span>
        <span class="relative flex flex-row">
          <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-black text-surface-400 dark:text-black" />
          <InputText v-model="search" @input="filterPatient" placeholder="Type to search"
            class="pl-10 py-2 text-black" />
        </span>
      </div>
      <DataTable class="h-screen" :value="allPatients" scrollable scrollHeight="600px" tableStyle="min-width: 50rem">
        <Column field="name" header="Full Name">
          <template #body="slotProps">
            {{ slotProps.data.first_name + " " + slotProps.data.middle_name + " " + slotProps.data.last_name }}
          </template>
        </Column>
        <Column field="sex" header="Sex"></Column>
        <Column header="Age">
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
            <Button type="button" label="Edit" icon="pi pi-pencil" @click="editPatient(slotProps.data._id)"
              class="mx-1 w-full md:w-auto bg-primary p-1 my-1 px-10 text-white" />
            <Button type="button" label="Send patient" icon="pi pi-send" @click="openModal(slotProps.data)"
              class="mx-1 bg-primary p-1 my-1 w-full md:w-auto px-10 text-white" />

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
            <Button class="bg-gray-200 hover:bg-primary text-black hover:text-white font-bold py-2 px-4 rounded"
              @click="visible = false">
              Cancel
            </Button>
            <Button @click="confirmPayment" class="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded">
              Confirm
            </Button>
          </div>
        </Dialog>
      </div>
    </div>

  </div>
</template>
<style scoped></style>