<script setup>
import { patientMedicalHistoryStore } from '../../stores/nurse/patientMedicalHistory'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
const MHPinia = patientMedicalHistoryStore()
const props = defineProps({
  patientId: {
    type: String,
    required: true
  }
})
const vs = ref({
  BP: '',
  PR: '',
  RR: '',
  Wt: '',
  Temp: ''
})
const saveVS = async () => {
  await MHPinia.saveVitalSign({
    id: props.patientId,
    vitalSigns: vs.value
  })
}
</script>

<template>
  <div class="flex justify-start gap-2">
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row gap-2">
        <div class="flex flex-col">
          <label>BP</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.BP" />
        </div>
        <div class="flex flex-col">
          <label>PR</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.PR" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-2">
        <div class="flex flex-col">
          <label>RR</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.RR" />
        </div>
        <div class="flex flex-col">
          <label>WT</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.Wt" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-2">
        <div class="flex flex-col">
          <label>T</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.Temp" />
        </div>
        <div class="flex flex-col mt-4">
          <button
            @click="saveVS"
            class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
          >
            Save vital sign
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
