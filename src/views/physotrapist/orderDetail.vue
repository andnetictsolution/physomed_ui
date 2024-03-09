<template>
  <div class="card">
    <PersonalInfo
      :personal="patient"
      class="sticky top-0 z-30 dark:bg-white dark:text-black text-white bg-gray-700"
    />
    <TabView class="dark:text-black h-full z-0">
      <TabPanel header="Order Exercise">
        <OP />
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import PersonalInfo from '@/components/auth/personalInfo.vue'
import OP from './ViewTreatmentPlan.vue'
import { patientStore } from '../../stores/reception/patient'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
const patientPinia = patientStore()
onMounted(async () => {
  await patientPinia.fetchSinglePatient(id)
})
const patient = computed(() => {
  return patientPinia.getPatient
})
</script>
