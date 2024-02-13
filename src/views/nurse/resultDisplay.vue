<script setup>
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import ListItem from '@/components/default/listItem.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <Accordion :activeIndex="0">
    <AccordionTab header="Vital Signs" title="Vital Signs">
      <ListItem label="BP" />
      <ListItem label="PR" />
      <ListItem label="RR" />
      <ListItem label="BP" />
    </AccordionTab>
    <AccordionTab header="Assement" title="Assement">
      <p class="m-0">vital sign</p>
    </AccordionTab>
  </Accordion>
</template>
