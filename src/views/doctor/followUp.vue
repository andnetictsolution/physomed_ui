<script setup>
import { useRoute } from 'vue-router'
import { orderStore } from '@/stores/reception/order'
import { computed, onMounted } from 'vue'
import AccordionTab from 'primevue/accordiontab'
import Accordion from 'primevue/accordion'
import { convertShortDate } from '@/utils/moment'
const route = useRoute()
const orderPinia = orderStore()
const id = route.params.id
onMounted(() => {
  orderPinia.fetchSinglePatientOrder(id)
})
const patientOrder = computed(() => {
  return orderPinia.patientOrder
})

</script>
<template>
  <div class="text-base font-semibold">
    <Accordion :activeIndex="0" v-for="(order) in patientOrder" :key="order._id">
      <AccordionTab :title="order.service.name" :header="order.service.name">
        <span v-for="(schedule) in order.schedule" :key="schedule._id">
          <ul v-if="schedule.isServiceGiven" class="my-2 border border-gray-200 p-2 rounded-lg">
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
                {{ schedule.note }}
              </div>
            </li>
            
          </ul>
        </span>
      </AccordionTab>
    </Accordion>
  </div>
</template>
