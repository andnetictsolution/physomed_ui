<script>
import { patientStore } from '@/stores/reception/patient'
import { computed, onMounted } from 'vue'
const patientPinia = patientStore()
onMounted(() => {
  patientPinia.fetchPatients()
})
const allPatients = computed(() => {
  return patientPinia.getAllPatients
})
</script>
<template>
  <p>Full name {{ 'patientPinia.full_name' }}</p>
  <p>MRN</p>
  <p>Sex {{ 'patientPinia.sex' }}</p>
  <p>Full name</p>
  <p>Full name</p>
</template>
