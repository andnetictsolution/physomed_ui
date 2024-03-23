<template>
  <div class="card">
    <PersonalInfo v-if="patient" :personal="patient"
      class="sticky top-0 z-30 dark:bg-white dark:text-black text-white bg-gray-700" />
    <TabView class="dark:text-black h-full z-0" v-if="patient">
      <TabPanel header="Order Exercise">
        <OP />
      </TabPanel>
      <TabPanel header="Medical history">
        <MH />
      </TabPanel>
    </TabView>
    <div class="my-10 text-white text-center text-lg" v-if="!patient">
      Sorry there is no treatment plan for this patient.
    </div>
  </div>
</template>

<script setup>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import MH from "../doctor/doctorHistory.vue"
import PersonalInfo from '@/components/auth/personalInfo.vue'
import OP from './ViewTreatmentPlan.vue'
import { patientStore } from '../../stores/reception/patient'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { authStore } from '@/stores/auth/auth'
const route = useRoute()
const id = route.params.id
const patientPinia = patientStore();
const authPinia = authStore();
onMounted(async () => {
  authPinia.setTitle("Patient Details")
  await patientPinia.fetchSinglePatient(id)
})
const patient = computed(() => {
  return patientPinia.getSinglePatient
})
</script>
