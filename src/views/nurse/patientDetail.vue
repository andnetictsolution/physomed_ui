<template>
  <div class="card">
    <PersonalInfo
      :personal="patient"
      class="sticky top-0 z-30 dark:bg-white dark:text-black text-white bg-gray-700"
    />
    <TabView class="dark:text-black h-full z-0">
      <TabPanel header="Vital Sign">
        <VS :patient-id="patient?._id" />
      </TabPanel>
      <TabPanel header="Medical Assesment">
        <PMH :patient-id="patient?._id" />
      </TabPanel>
      <TabPanel header="Medical Result">
        <PR :data="patient"/>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import PersonalInfo from '@/components/auth/personalInfo.vue'
import PMH from './PatientMedicalHistory.vue'
import PR from './resultDisplay.vue'
// import { orderStore } from '@/stores/reception/order'
import { patientStore } from '../../stores/reception/patient'
import VS from './vitalSign.vue'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
// const orderPinia = orderStore()
const patientPinia = patientStore()
onMounted(async () => {
  console.log('created hook')
  await patientPinia.fetchSinglePatient(id)
  // await orderPinia.fetchSingleOrder(id)
})
const patient = computed(() => {
  return patientPinia.getPatient
})
</script>
