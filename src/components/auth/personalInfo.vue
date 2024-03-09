<template>
  <div class="flex p-4 flex-col md:flex-row border justify-between border-gray-200 rounded-lg">
    <div class="flex flex-col list-none">
      <ListItem label="Full Name" :value="fullName" />
      <ListItem label="Sex" :value="props.personal?.sex" />
      <ListItem label="Age" :value="convertDOB(props.personal?.date_of_birth)" />
    </div>
    <div class="flex flex-col list-none mr-20">
      <ListItem label="MRN" :value="props.personal?.card_no" />
      <ListItem label="Last Visted" :value="convertDate(props.personal?.updatedAt)" />
      <!-- <ListItem label="" :value="props.personal." /> -->
    </div>
  </div>
</template>

<script setup>
import { convertDOBToAge, convertToString } from '@/utils/moment'
import ListItem from '../default/listItem.vue'
import { computed } from 'vue'
const props = defineProps({
  personal: {
    type: Object,
    required: true // Make it mandatory if needed
  }
})
const convertDOB = (dob) => {
  return convertDOBToAge(dob)
}
const convertDate = (date) => {
  return convertToString(date)
}
const fullName = computed(() => {
  return `${props.personal?.first_name} ${props.personal?.middle_name} ${props.personal?.last_name}`
})
</script>
