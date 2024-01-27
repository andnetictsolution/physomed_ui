<script></script>
<template>
  <h1 class="text-xl pt-2">Patient Medical History</h1>

  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >1. When did it start?</label
    >
    <textarea
      id="whenToStrat"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>

  <div>
    <label for="message" class="block pt-2 mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >2. How you ever been diagnosed with any of the following?</label
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
          value="cancer"
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
          value="pacemaker"
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
      >3. Are you Pregnant?</label
    >
    <div class="ml-4">
      <div class="flex items-center">
        <input
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
      >4. Any previous x-ray, reuslt and treatment taken?</label
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
      type="submit"
      class="float-right mt-4 mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-end dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800: pt-4"
    >
      Submit
    </button>
  </div>
</template>
