<script setup>
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import ListItem from '@/components/default/listItem.vue'
import {queueStore} from "../../stores/queue/queue"
import { useToast } from 'primevue/usetoast'
import { computed,onMounted } from 'vue'
import {patientMedicalHistoryStore} from "../../stores/nurse/patientMedicalHistory"
import { useRoute } from 'vue-router'
const route = useRoute();
const id = route.params.id
const toast = useToast()
const queuePinia = queueStore();
const PHPinia = patientMedicalHistoryStore()
onMounted(async()=>{
await PHPinia.fetchPatientsMedicalHistory(id)
})
const PMH = computed(()=>{
  return PHPinia.getVitalSign
})

const sendToDr = async()=>{
  await queuePinia.addDrQueue({date:new Date(),patient_id:id});
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
    
    <AccordionTab header="Vital Signs" title="Vital Signs" v-if="PMH.medicalHistory">
      <ListItem
        v-if="PMH.medicalHistory[0].vitalSigns[0]?.BP"
        label="BP"
        :value="PMH.medicalHistory[0].vitalSigns[0]?.BP"
      />
      <ListItem
        v-if="PMH.medicalHistory[0].vitalSigns[0]?.PR"
        label="PR"
        :value="PMH.medicalHistory[0].vitalSigns[0]?.PR"
      />
      <ListItem
        v-if="PMH.medicalHistory[0].vitalSigns[0]?.RR"
        label="RR"
        :value="PMH.medicalHistory[0].vitalSigns[0]?.RR"
      />
      <ListItem
        v-if="PMH.medicalHistory[0].vitalSigns[0]?.Wt"
        label="Wet"
        :value="PMH.medicalHistory[0].vitalSigns[0]?.Wt"
      />
      <ListItem
        v-if="PMH.medicalHistory[0].vitalSigns[0]?.Temp"
        label="Temp"
        :value="PMH.medicalHistory[0].vitalSigns[0]?.Temp"
      />
    </AccordionTab>

    <AccordionTab header="Assessment" title="Assessment">
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Previous diagnosis</h2>
        <p v-if="PMH.medicalHistory">
          {{ PMH.medicalHistory[0]?.list_of_previous_diagnosis[0] }}
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Other diagnosis</h2>
        <p v-if="PMH.medicalHistory">
          <ul v-if="PMH.medicalHistory[0]?.list_of_other_diagnosis">
<li v-for="(item,index) in PMH.medicalHistory[0]?.list_of_other_diagnosis" :key="index">
{{ item }}
</li>
          </ul>
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Start date</h2>
        <p v-if="PMH.medicalHistory">
          {{ PMH.medicalHistory[0]?.when_did_it_start }}
        </p>
      </div>
      <div v-if="PMH.sex == 'Female'" class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Pregnancy status</h2>
        <p v-if="PMH.medicalHistory && PMH.sex == 'Female'">
          {{ PMH.medicalHistory[0]?.is_patient_pregnant }}
        </p>
      </div>
      
    </AccordionTab>

    <AccordionTab header="Observations" title="Vital Signs" v-if="PMH.medicalHistory">
        <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">HPI</h2>
        <p v-if="PMH.medicalHistory">
          {{ PMH.medicalHistory[0]?.HPI }}
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">PMH</h2>
        <p v-if="PMH.medicalHistory">
         {{ PMH.medicalHistory[0]?.PMH }}
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Assessment</h2>
        <p v-if="PMH.medicalHistory">
          {{ PMH.medicalHistory[0]?.assessment }}
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Observation</h2>
        <p v-if="PMH.medicalHistory">
          {{ PMH.medicalHistory[0]?.observation }}
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Palpation</h2>
        <p v-if="PMH.medicalHistory">
          {{ PMH.medicalHistory[0]?.palpation }}
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Patient Expectation</h2>
        <p v-if="PMH.medicalHistory">
          {{ PMH.medicalHistory[0]?.patient_expectation }}
        </p>
      </div>
      <div class="flex my-1 flex-col border border-gray-200 rounded-lg p-4">
        <h2 class="m-0 font-semibold">Referral Diagnosis</h2>
        <p v-if="PMH.medicalHistory">
          {{ PMH.medicalHistory[0]?.referral_diagnosis }}
        </p>
      </div>
    </AccordionTab>
  </Accordion>
</template>
