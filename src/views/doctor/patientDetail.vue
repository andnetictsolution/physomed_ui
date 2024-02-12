<template>
  <div class="card">
    <PersonalInfo
      :personal="personal"
      class="sticky top-0 z-30 dark:bg-white dark:text-black text-white bg-gray-700"
    />
    <TabView class="dark:text-black h-full z-0">
      <TabPanel header="Patient History">
        <VPMH />
      </TabPanel>
      <TabPanel header="Order Excercise">
        <DoctorInvestigation />
      </TabPanel>
      <TabPanel header="Result">
        <p class="m-0">This is for expecting result</p>
      </TabPanel>
      <TabPanel header="Follow up">
        <p class="m-0">this is follow up</p>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import PersonalInfo from '@/components/auth/personalInfo.vue'
import VPMH from './viewPatientMedicalHistory.vue'
import DoctorInvestigation from './DoctorInvestigation.vue'
import { orderStore } from '@/stores/reception/order'
import { computed, onMounted, ref } from 'vue'
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
console.log(order, 'here is it new')
const personal = ref({
  full_name: 'Haftom Gidey',
  age: '24',
  sex: 'Male',
  last_visted: '11/03/2024',
  id: 'HG72/24'
})
</script>
