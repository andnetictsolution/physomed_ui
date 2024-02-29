<script setup>
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import ListItem from '@/components/default/listItem.vue'
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import { patientMedicalHistoryStore } from '../../stores/nurse/patientMedicalHistory'
const medicalAssesmentPinia = patientMedicalHistoryStore()
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  patientId: {
    type: String,
    required: true
  }
})
onMounted(() => {
  setTimeout(async () => {
    await medicalAssesmentPinia.fetchPatientsMedicalHistory(props.patientId)
  }, 200)
})
const viewvitalsign = computed(() => {
  console.log('Responce', viewvitalsign)
  return medicalAssesmentPinia.getVitalSign
})
const vitalsignResults = computed(() => {
  return viewvitalsign.value.data?.patient.medicalHistory[0].vitalSigns[0]
})
const previousDiagonsis = computed(() => {
  return viewvitalsign.value.data?.patient?.medicalHistory[0]?.list_of_previous_diagnosis[0]
})
const whenDidItStart = computed(() => {
  return viewvitalsign.value.data?.patient?.medicalHistory[0]?.when_did_it_start
})
const isPregnant = computed(() => {
  return viewvitalsign.value.data?.patient?.medicalHistory[0]?.is_patient_pregnant
})
const chiefCompliant = computed(() => {
  return viewvitalsign.value.data?.patient?.medicalHistory[0]?.chief_complaint
})
</script>

<template>
  <Accordion :activeIndex="0">
    <AccordionTab header="Vital Signs" title="Vital Signs">
      <ListItem label="BP" :value="vitalsignResults?.BP" />
      <ListItem label="PR" :value="vitalsignResults?.PR" />
      <ListItem label="RR" :value="vitalsignResults?.RR" />
      <ListItem label="WT" :value="vitalsignResults?.Wt" />
      <ListItem label="Temp" :value="vitalsignResults?.Temp" />
    </AccordionTab>
    <AccordionTab header="Assement" title="Assement" class="text-xl">
      <ListItem label="List of other Diagonsis" :value="previousDiagonsis" />
      <ul v-for="itme in medicalAssesment">
        <li class="text-xs">{{ itme }}</li>
      </ul>
      <p class="m-0">List of previous Diagonsis</p>
      <p class="text-xs">{{ previousDiagonsis }}</p>
      <p>When did it start</p>
      <p class="text-xs">{{ whenDidItStart }}</p>
      <p>Pregnance status</p>
      <p class="text-xs">{{ isPregnant }}</p>
      <p>Chief compliant</p>
      <p class="text-xs">{{ chiefCompliant }}</p>
    </AccordionTab>
  </Accordion>
</template>
