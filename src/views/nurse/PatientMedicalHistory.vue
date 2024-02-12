<script setup>
import { ref } from 'vue'
import { patientMedicalHistoryStore } from '../../stores/nurse/patientMedicalHistory'
const patientMedicalHistoryPinia = patientMedicalHistoryStore()
const patientMedicalHistory = ref({
  chief_complaint: '',
  when_did_it_start: '',
  list_of_other_diagnosis: '',
  list_of_previous_diagnosis: '',
  is_patient_pregnant: '',
  patient_id: '65ba0bbd8eab859545a42bc8'
})
const registerPatientMedicalHistory = () => {
  console.log(patientMedicalHistory.value, 'in commponent')
  patientMedicalHistoryPinia.addpatientmedicalHistory(patientMedicalHistory.value)
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
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </div>
      <input
        v-model="patientMedicalHistory.when_did_it_start"
        datepicker
        type="text"
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
      <div class="flex items-center">
        <input
          v-model="patientMedicalHistory.list_of_other_diagnosis"
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Hypertension
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >DM
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Animea
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Cancer
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value="cancer"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Pacemaker
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value="pacemaker"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Heat disease
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value="heatdisease"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Stroke
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value="stroke"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Allergies
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value="allergies"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Hepititus
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value="heptititus"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >HIV
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value="hiv"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Eplipsy
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Astma
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Balance problem
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Dizziness
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Surgery
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
        <input
          v-model="is_patient_pregnant"
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Yes
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >No
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Am not sure
        </label>
      </div>
    </div>
  </div>
  <div>
    <label for="message" class="block pt-2 mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >5. Any previous x-ray, reuslt and treatment taken?</label
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
    <div class="flex flex-col justify-center my-2">
      <button class="font-medium text-base ">Save Assesment</button>
    </div>
  </div>
</template>
