<script setup>
import { useRoute } from 'vue-router'
import { orderStore } from '@/stores/reception/order'
import { computed, onMounted } from 'vue'
import AccordionTab from 'primevue/accordiontab'
import Accordion from 'primevue/accordion'
import { convertShortDate } from '@/utils/moment'
import Textarea from 'primevue/textarea'
const route = useRoute()
const orderPinia = orderStore()
const id = route.params.id
onMounted(() => {
  orderPinia.fetchSinglePatientOrder(id)
})
const patientOrder = computed(() => {
  return orderPinia.patientOrder
})
const updateOrder = async (count, index) => {
  const payload = {
    order_id: patientOrder.value[count]._id,
    schedule_id: patientOrder.value[count].schedule[index]._id,
    date: new Date(),
    isServiceGiven: true,
    note: patientOrder.value[count].schedule[index].note
  }
  await orderPinia.addPatientProgressNote(payload)
}
</script>
<template>
  <div class="text-base font-semibold">
    <Accordion :activeIndex="0" v-for="(order, count) in patientOrder" :key="order._id">
      <AccordionTab :title="order.service.name" :header="order.service.name">
        <span v-for="(schedule, index) in order.schedule" :key="schedule._id">
          <ul v-if="schedule.isPaidFor" class="my-2 border border-gray-200 p-2 rounded-lg">
            <li>
              Sequence: <span class="font-semibold">{{ schedule.sequence }}</span>
            </li>
            <li>
              Date: <span class="font-semibold">{{ convertShortDate(schedule.date) }}</span>
            </li>
            <li>
              Payment status:
              <span class="font-semibold">{{ schedule.isPaidFor ? 'Paid' : 'Not paid' }}</span>
            </li>
            <li>
              Service status:
              <span class="font-semibold">{{
                schedule.isServiceGiven ? 'Service given' : 'Not given'
              }}</span>
            </li>
            <li class="my-2">
              <div class="my-1">Progress note:</div>
              <div>
                <Textarea
                  v-model="schedule.note"
                  rows="3"
                  class="w-full border border-gray-200 p-2 rounded-lg"
                ></Textarea>
              </div>
            </li>
            <li class="my-2">
              <button
                @click="updateOrder(count, index)"
                type="button"
                class="block bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Note
              </button>
            </li>
          </ul>
        </span>
      </AccordionTab>
    </Accordion>
  </div>
</template>
