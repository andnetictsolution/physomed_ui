<script setup>
import PI from '../../components/auth/personalInfo.vue'
import { orderStore } from '@/stores/reception/order'
import { useRoute } from 'vue-router'
const orderPinia = orderStore()
import { computed, onMounted, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import { convertShortDate } from '@/utils/moment'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import RadioButton from 'primevue/radiobutton'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
const route = useRoute();
const id = route.params.id;
const toast = useToast()
onMounted(async () => {
  await orderPinia.fetchSingleOrder(id)
})
const singleOrder = computed(() => {
  return orderPinia.getSingleOrder
})
const SelectedSchedule = ref()
const scheduleDialog = ref(false)
const openNew = () => {
  scheduleDialog.value = true
}
const schedule = ref('')
const totalPayment = computed(() => {
  return singleOrder.value.service.price_per_item * SelectedSchedule.value.length
})
const schedules = ref([
  "Bank Transfer",
  "Mobile Banking",
  "Cash"
])
const confirmPayment = async () => {
  let payments = []
  if (SelectedSchedule.value.length) {
    for (let i = 0; i < SelectedSchedule.value.length; i++) {
      payments.push({
        schedules_paid_for: [SelectedSchedule.value[i]._id],
        amount: singleOrder.value.service.price_per_item,
        payment_id: singleOrder.value.payment
      })
    }
  }
  try {
    await orderPinia.confirmPayment({
      payments: payments,
      patient_id: singleOrder.value.patient._id,
      paymentMethod: schedule.value
    })
    await orderPinia.fetchSingleOrder(id)
    toast.add({
      severity: 'success',
      summary: 'Message',
      detail: "Payment confirmed",
      life: 6000
    })
    scheduleDialog.value = false
  } catch (error) {
    console.log(error)
    toast.add({
      severity: 'error',
      summary: 'Message',
      detail: error?.response?.data?.message,
      life: 6000
    })
  }
}
</script>

<template>
  <div>
    <Toast />
    <PI :personal="singleOrder.patient" />
    <div>
      <Toolbar class="mb-4">
        <template #start>
          <button :class="{ 'cursor-not-allowed': !SelectedSchedule || !SelectedSchedule.length }"
            :disabled="!SelectedSchedule || !SelectedSchedule.length" class="mr-2 text-white p-2 bg-primary  rounded"
            @click="openNew">
            Process payment
          </button>
        </template>
      </Toolbar>
      <DataTable v-model:selection="SelectedSchedule" :value="singleOrder.schedule" dataKey="_id"
        tableStyle="min-width: 50rem">
        <Column style="z-index: 1 !important;
    outline: 0 none;
    border: 1px solid #cbd5e1!important;
    border-radius: 6px !important; margin: 2px;" selectionMode="multiple" class="border-gray-400 rounded-lg"
          headerStyle="width: 3rem"></Column>
        <Column field="sequence" header="Sequence"></Column>
        <Column header="Date">
          <template #body="slotProps">
            {{ convertShortDate(slotProps.data.date) }}
          </template>
        </Column>
        <Column header="Payment Status">
          <template #body="slotProps">
            <Tag :severity="slotProps.data.isPaidFor ? 'primary' : 'danger'"
              :value="slotProps.data.isPaidFor ? 'Paid' : 'Not paid'" />
          </template>
        </Column>
        <Column header="Service status">
          <template #body="slotProps">
            <Tag :severity="slotProps.data.isServiceGiven ? 'primary' : 'danger'"
              :value="slotProps.data.isServiceGiven ? 'Given' : 'Not given'" />
          </template>
        </Column>
      </DataTable>
      <Dialog v-model:visible="scheduleDialog" :style="{ width: '450px' }" header="Payment details" :modal="true"
        class="p-fluid">
        <div class="field">
          <label for="name">Payment for sequences</label>
          <ul class="my-1 inline" v-for="payment in SelectedSchedule" :key="payment._id">
            <li>{{ payment.sequence }}</li>
          </ul>
        </div>

        <div class="field">
          <label class="mb-3">Payment Method:</label>

          <div class="flex items-center" v-for="(item,index) in schedules" :key="index">
            <input v-model="schedule" type="radio" :value="item"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00 mr-2">{{ item}}</label>

          </div>
        </div>

        <div class="formgrid grid">
          <div class="field col">
            <p>
              Total payment : <span class="font-semibold">{{ totalPayment }}</span>
            </p>
          </div>
        </div>
        <template #footer>
          <button :class="{'cursor-not-allowed':!schedule}" :disabled="!schedule"  class="bg-primary rounded text-white p-2"  @click="confirmPayment" >
          Confirm Payment
          </button>
        </template>
      </Dialog>
    </div>
  </div>
</template>
