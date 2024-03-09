<script setup>
import { ref } from 'vue'
import { patientMedicalHistoryStore } from '../../stores/nurse/patientMedicalHistory'
import RadioButton from 'primevue/radiobutton'
const patientMedicalHistoryPinia = patientMedicalHistoryStore()
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
const patientMedicalHistory = ref({
  chief_complaint: '',
  when_did_it_start: '',
  list_of_other_diagnosis: '',
  list_of_previous_diagnosis: '',
  is_patient_pregnant: '',
  patient_id: ''
})
const props = defineProps({
  patientId: {
    type: String,
    required: true
  }
})

const pregnancyCheckList = ref([
  {
    label: 'Yes'
  },
  {
    label: 'No'
  },
  {
    label: 'NA'
  }
])
const diseaseList = ref([
  { label: 'HIV' },
  { label: 'Cancer' },
  { label: 'Balance problem' },
  { label: 'Hypertation' },
  { label: 'Stroke' },
  { label: 'DM' },
  { label: 'Pacemaker' },
  { label: 'Allergies' }
])
const selectedDiseases = ref(['HIV', 'DM'])
const selectedPregnant = ref('')
const saveAssesment = () => {
  patientMedicalHistoryPinia.addpatientmedicalHistory({
    id: props.patientId,
      list_of_other_diagnosis: selectedDiseases.value,
      when_did_it_start: patientMedicalHistory.value.when_did_it_start,
      is_patient_pregnant: selectedPregnant.value,
      chief_complaint: patientMedicalHistory.value.chief_complaint,
      list_of_previous_diagnosis: patientMedicalHistory.value.list_of_previous_diagnosis
    
  })
}
</script>

<template>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >1. What is your chief compliant?</label
    >
    <textarea
      v-model="patientMedicalHistory.chief_complaint"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >2. When did it strat?</label
    >

    <div class="relative max-w-sm">
      <input
        v-model="patientMedicalHistory.when_did_it_start"
        type="date"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Select date"
      />
    </div>
  </div>

  <div>
    <label for="message" class="block pt-2 mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >3. How you ever been diagnosed with any of the following?</label
    >
    <div class="grid gap-1 mb-6 md:grid-cols-3 ml-4">
      <div class="flex items-center" v-for="disease in diseaseList" :key="disease">
        <input
          v-model="selectedDiseases"
          type="checkbox"
          :value="disease.label"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >{{ disease.label }}
        </label>
      </div>
    </div>
  </div>

  <div>
    <label for="message" class="block pt-2 mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >4. Are you Pregnant?</label
    >
    <div class="ml-4">
      <div class="flex items-center">
        <div
          v-for="category in pregnancyCheckList"
          :key="category.key"
          class="flex align-items-center"
        >
          <RadioButton
            class="border border-gray-400 rounded-lg"
            v-model="selectedPregnant"
            :inputId="category.label"
            name="dynamic"
            :value="category.label"
          />
          <label :for="category.key" class="ml-2">{{ category.label }}</label>
        </div>
      </div>
    </div>
  </div>
  <div>
    <label for="message" class="block pt-2 mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >5. Any previous x-ray, result and treatment taken?</label
    >
    <div>
      <textarea
        v-model="patientMedicalHistory.list_of_previous_diagnosis"
        id="whenToStrat"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
    <div class="flex flex-col justify-center align-items-center my-2" style="align-items: center">
      <button
        @click="saveAssesment"
        class="bg-blue-500 w-80 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Assessment
      </button>
    </div>
  </div>
</template>
