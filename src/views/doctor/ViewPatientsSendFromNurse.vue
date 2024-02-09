<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { patientStoreInDoctor } from '../../stores/doctor/patientSendFromNurse'
import { computed, onMounted } from 'vue'
const patientPiniaInDoctor = patientStoreInDoctor()
onMounted(() => {
  patientPiniaInDoctor.fetchPatientsFromDoctor()
})
const allPatients = computed(() => {
  return patientPiniaInDoctor.getAllPatientsFromDoctor
})

const column = ['full_name', 'sex', 'date_of_birth', 'phone']
</script>
<template>
  <div>
    <BaseTable :column="column" :data="allPatients" route="/doctor/medicalHistory" />
  </div>
</template>
