<script setup>
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import ListItem from '@/components/default/listItem.vue'
import {queueStore} from "../../stores/queue/queue"
import { useToast } from 'primevue/usetoast'
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
 
})
const toast = useToast()
const queuePinia = queueStore();
const user_role =computed(()=>{
  return localStorage.getItem("physomed_user_role")
})
const sendToDr = async()=>{
  await queuePinia.addDrQueue({date:new Date(),patient_id:props.data._id});
  toast.add({
      severity: 'info',
      summary: 'Message',
      detail: 'Patient send to doctor successfully',
      life: 6000
    })

}
</script>

<template>
  <Toast/>
  <Accordion :activeIndex="0">
    <AccordionTab header="Vital Signs" title="Vital Signs" v-if="props.data.medicalHistory">
      <ListItem
        v-if="props.data.medicalHistory[0].vitalSigns[0]?.BP"
        label="BP"
        :value="props.data.medicalHistory[0].vitalSigns[0]?.BP"
      />
      <ListItem
        v-if="props.data.medicalHistory[0].vitalSigns[0]?.PR"
        label="PR"
        :value="props.data.medicalHistory[0].vitalSigns[0]?.PR"
      />
      <ListItem
        v-if="props.data.medicalHistory[0].vitalSigns[0]?.RR"
        label="RR"
        :value="props.data.medicalHistory[0].vitalSigns[0]?.RR"
      />
      <ListItem
        v-if="props.data.medicalHistory[0].vitalSigns[0]?.Wt"
        label="Wet"
        :value="props.data.medicalHistory[0].vitalSigns[0]?.Wt"
      />
      <ListItem
        v-if="props.data.medicalHistory[0].vitalSigns[0]?.Temp"
        label="Temp"
        :value="props.data.medicalHistory[0].vitalSigns[0]?.Temp"
      />
    </AccordionTab>
    <AccordionTab header="Assessment" title="Assessment">
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Previous diagnosis</h2>
        <p v-if="props.data.medicalHistory">
          {{ props.data.medicalHistory[0]?.list_of_previous_diagnosis[0] }}
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Other diagnosis</h2>
        <p v-if="props.data.medicalHistory">
          <ul v-if="props.data.medicalHistory[0]?.list_of_other_diagnosis">
<li v-for="(item,index) in props.data.medicalHistory[0]?.list_of_other_diagnosis" :key="index">
{{ item }}
</li>
          </ul>
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Start date</h2>
        <p v-if="props.data.medicalHistory">
          {{ props.data.medicalHistory[0]?.when_did_it_start }}
        </p>
      </div>
      <div v-if="props.data.sex == 'Female'" class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Pregnancy status</h2>
        <p v-if="props.data.medicalHistory && props.data.sex == 'Female'">
          {{ props.data.medicalHistory[0]?.is_patient_pregnant }}
        </p>
      </div>
      <div class="my-2" v-if="user_role=='Nurse'">
        <button
            @click="sendToDr"
            class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
          >
            Send to doctor
          </button>
      </div>
    </AccordionTab>
  </Accordion>
</template>
