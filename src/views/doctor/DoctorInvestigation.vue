<script setup>
import { ref } from 'vue'
import { doctorInvestigation } from '../../stores/doctor/doctorInvestigation'
const doctorInvestigationPinia = doctorInvestigation()
const doctorInvestigations = ref({
  refferalDiagnosis: '',
  chiefCompliant: '',
  hpi: '',
  pmh: '',
  patientExpectation: '',
  observation: '',
  palpation: '',
  assessment: '',
  treatmentPlan: '',
  progressNotes: ''
})
const props = defineProps({
  patientId: {
    type: String,
    required: true
  }
})
const addDoctorInvestigation = () => {
  doctorInvestigationPinia.addDoctorInvestigation(doctorInvestigations.value)
}
</script>
<template>
  <h1 class="text-xl pt-2">Investigations</h1>

  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >Referral Diagonsis</label
    >
    <textarea
      v-model="doctorInvestigations.refferalDiagnosis"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>

  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >Chief Compliant</label
    >
    <textarea
      v-model="doctorInvestigations.chiefCompliant"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>

  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >HPI</label
    >
    <textarea
      v-model="doctorInvestigations.hpi"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >PMH</label
    >
    <textarea
      v-model="doctorInvestigations.pmh"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >Patient expectation</label
    >
    <textarea
      v-model="doctorInvestigations.patientExpectation"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >Observation</label
    >
    <textarea
      v-model="doctorInvestigations.observation"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >Palpation</label
    >
    <textarea
      v-model="doctorInvestigations.palpation"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >Assessment</label
    >
    <textarea
      v-model="doctorInvestigations.assessment"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >Treatment</label
    >
    <textarea
      v-model="doctorInvestigations.treatmentPlan"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >Progres notes</label
    >
    <textarea
      v-model="doctorInvestigations.progressNotes"
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>

  <div>
    <button
      @click.prevent="addDoctorInvestigation"
      type="submit"
      class="float-start mt-4 mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-end dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800: pt-4"
    >
      Submit
    </button>
  </div>
</template>
