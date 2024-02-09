<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { patientStore } from '../../stores/reception/patient'
import { computed, onMounted } from 'vue'
const patientPinia = patientStore()
onMounted(() => {
  patientPinia.fetchPatients()
})
const allPatients = computed(() => {
  return patientPinia.getAllPatients
})

const column = ['full_name', 'sex', 'date_of_birth', 'phone', 'Actions']
const action = ['Edit Patient', 'Delete Patient', 'Pay']
</script>
<template>
  <div>
    <BaseTable :column="column" route="#" :data="allPatients" :actions="action" />
  </div>
</template>
