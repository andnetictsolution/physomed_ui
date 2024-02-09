<script setup>
import { ref } from 'vue'
import { patientMedicalHistoryStore } from '../../stores/nurse/patientMedicalHistory'
const patientMedicalHistoryPinia = patientMedicalHistoryStore()
</script>

<template>
  <h1 class="text-xl">Patient Medical History</h1>
  <div class="float-end block mb-2 text-sm font-medium text-gray-900 dark:text-black">
    <p>Name Fred zak</p>
    <p>Phone No. 0912321232</p>
    <p>Sex M</p>
  </div>
  <br />
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >1.chief compliant's</label
    >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet neque possimus
      fugiat. Modi ipsam accusantium voluptate error ullam sit cupiditate voluptas, architecto ab,
      facilis aliquam. Veritatis laborum eius deserunt.
    </p>
    >
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >2. When did it strat</label
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime molestiae,
        eligendi consequuntur laboriosam a ex necessitatibus eaque perferendis libero incidunt
        placeat quae possimus minima labore, natus molestias! Eligendi, beatae?
      </p>
    </div>
  </div>

  <div>
    <label for="message" class="block pt-2 mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >3. How you ever been diagnosed with any of the following?</label
    >
    <div class="grid gap-1 mb-6 md:grid-cols-3 ml-4">
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-00"
          >Hypertension
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
        id="whenToStrat"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  </div>
  <div>
    <button
      @click.prevent="registerPatientMedicalHistory"
      type="submit"
      class="float-right mt-4 mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-end dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800: pt-4"
    >
      Submit
    </button>
  </div>
</template>
