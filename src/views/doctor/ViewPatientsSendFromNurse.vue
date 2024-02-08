<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { patientStoreInDoctor } from '../../stores/reception/patient'
import { computed, onMounted } from 'vue'
const patientPiniaInDoctor = patientStore()
onMounted(() => {
  patientPinia.fetchPatients()
})
const allPatients = computed(() => {
  return patientPinia.getAllPatients
})

const column = ['full_name', 'sex', 'date_of_birth', 'phone']
</script>
<template>
  <div>
    <BaseTable :column="column" :data="allPatients" />
  </div>
</template>
