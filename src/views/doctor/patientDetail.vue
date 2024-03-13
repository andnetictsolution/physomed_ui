<template>
  <div class="card">
    <PersonalInfo
      :personal="patient"
      class="sticky top-0 z-30 dark:bg-white dark:text-black text-white bg-gray-700"
    />
    <TabView class="dark:text-black h-full z-0">
      <TabPanel header="Patient History">
        <PR :data="patient" />
      </TabPanel>
      <TabPanel header="Observation">
        <Observation :data="patient" />
      </TabPanel>
      <TabPanel header="Treatment Plan">
        <SO />
      </TabPanel>
      <TabPanel header="Follow up">
        <FU/>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import PersonalInfo from '@/components/auth/personalInfo.vue'
import Observation from "./observation.vue"
import PR from './doctorHistory.vue'
import FU from "./followUp.vue"
import SO from "./serviceOrder.vue"
import { patientStore } from '../../stores/reception/patient'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { authStore } from '@/stores/auth/auth'
const route = useRoute();
const authPina = authStore()
const id = route.params.id
const patientPinia = patientStore()
onMounted(async () => {
  authPina.setTitle("Patient Details")
  await patientPinia.fetchSinglePatient(id)
})
const patient = computed(() => {
  return patientPinia.getPatient
})
</script>
