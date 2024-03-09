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
const route = useRoute()
const id = route.params.id
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
const confirmPayment = async () => {
  let payments = []
  if (SelectedSchedule.value.length) {
    for (let i = 0; i < SelectedSchedule.value.length; i++) {
      payments.push({
        schedules_paid_for: SelectedSchedule.value[i]._id,
        amount: singleOrder.value.service.price_per_item,
        payment_id: singleOrder.value.payment
      })
    }
  }
  await orderPinia.confirmPayment({
    payments: payments,
    patient_id: singleOrder.value.patient._id,
    paymentMethod: schedule.value
  })
}
</script>

<template>
  <div>
    <PI :personal="singleOrder.patient" />
    {{ SelectedSchedule }}
    <div>
      <Toolbar class="mb-4">
        <template #start>
          <Button
            :disabled="!SelectedSchedule || !SelectedSchedule.length"
            label="Process payment"
            icon="pi pi-plus"
            severity="success"
            class="mr-2 border p-2 bg-primary border-gray-200 rounded-lg"
            @click="openNew"
          />
        </template>
      </Toolbar>
      <DataTable
        v-model:selection="SelectedSchedule"
        :value="singleOrder.schedule"
        dataKey="_id"
        tableStyle="min-width: 50rem"
      >
        <Column
          selectionMode="multiple"
          class="border-gray-400 rounded-lg"
          headerStyle="width: 3rem"
        ></Column>
        <Column field="sequence" header="Sequence"></Column>
        <Column header="Date">
          <template #body="slotProps">
            {{ convertShortDate(slotProps.data.date) }}
          </template></Column
        >
        <Column header="Payment Status">
          <template #body="slotProps">
            <Tag
              :severity="slotProps.data.isPaidFor ? 'primary' : 'danger'"
              :value="slotProps.data.isPaidFor ? 'Paid' : 'Not paid'"
            />
          </template>
        </Column>
        <Column header="Service status">
          <template #body="slotProps">
            <Tag
              :severity="slotProps.data.isServiceGiven ? 'primary' : 'danger'"
              :value="slotProps.data.isServiceGiven ? 'Given' : 'Not given'"
            />
          </template>
        </Column>
      </DataTable>
      <Dialog
        v-model:visible="scheduleDialog"
        :style="{ width: '450px' }"
        header="Payment details"
        :modal="true"
        class="p-fluid"
      >
        <div class="field">
          <label for="name">Payment for sequences</label>
          <ul class="my-1" v-for="payment in SelectedSchedule" :key="payment._id">
            <li>{{ payment.sequence }}</li>
          </ul>
        </div>

        <div class="field">
          <label class="mb-3">Payment Method:</label>
          <div class="formgrid grid">
            <div class="field-radiobutton col-6">
              <RadioButton
                id="paymentMethod"
                name="paymentMethod"
                value="Bank Transfer"
                v-model="schedule"
              />
              <label for="category1">Bank Transfer</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton
                id="category2"
                name="category"
                value="Cash"
                v-model="schedule"
              />
              <label for="category2">Cash</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton
                id="category3"
                name="category"
                value="Mobile Banking"
                v-model="schedule"
              />
              <label for="category3">Mobile Banking</label>
            </div>
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
          <Button
            label="Save"
            class="bg-primary p-2"
            icon="pi pi-check"
            text
            @click="confirmPayment"
          />
        </template>
      </Dialog>
    </div>
  </div>
</template>
