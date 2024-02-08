<script setup>
import BaseTable from '@/components/table/tableHH.vue'
import { serviceStore } from '../../stores/admin/service'
import { computed, onMounted } from 'vue'
const servicePinia = serviceStore()
onMounted(() => {
  servicePinia.fetchServices()
})
const allServices = computed(() => {
  return servicePinia.getAllServices
})

const column = ['name', 'description', 'price_per_item']
</script>
<template>
  <div>
    <BaseTable :column="column" :data="allServices" />
  </div>
</template>
