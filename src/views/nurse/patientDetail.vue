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
      <TabPanel header="Medical Assessment">
        <PMH :patient-id="patient?._id" />
      </TabPanel>
      <TabPanel header="Medical Result">
        <PR :data="patient?._id"/>
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
import { authStore } from '@/stores/auth/auth'
import { patientStore } from '../../stores/reception/patient'
import VS from './vitalSign.vue'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
const authPinia = authStore()
const patientPinia = patientStore()
onMounted(async () => {
  authPinia.setTitle("Patient Details")
  await patientPinia.fetchSinglePatient(id)
})
const patient = computed(() => {
  return patientPinia.getSinglePatient
})
</script>
