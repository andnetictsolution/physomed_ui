<template>
  <div class="card">
    <PersonalInfo
      :personal="order.patient"
      class="sticky top-0 z-30 dark:bg-white dark:text-black text-white bg-gray-700"
    />
    <TabView class="dark:text-black h-full z-0">
      <TabPanel header="Vital Sign">
        <VS />
      </TabPanel>
      <TabPanel header="Medical Assesment">
        <PMH />
      </TabPanel>
      <TabPanel header="Medical Result">
        <p>Medical result</p>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import PersonalInfo from '@/components/auth/personalInfo.vue'
import PMH from './PatientMedicalHistory.vue'
import { orderStore } from '@/stores/reception/order'
import VS from './vitalSign.vue'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
const orderPinia = orderStore()
onMounted(async () => {
  console.log('created hook')
  await orderPinia.fetchSingleOrder(id)
})
const order = computed(() => {
  return orderPinia.getSingleOrder
})
</script>
