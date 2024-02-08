<script setup>
import AuthHeader from '../components/auth/authHeader.vue'
import { computed, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import {
  adminLinks,
  doctorLinks,
  nurseLinks,
  physotrapistLinks,
  receptionLinks
} from '../constant/navLinks'
// initialize components based on data attribute selectors

onMounted(() => {
  initFlowbite()
})

const user_role = computed(() => {
  return localStorage.getItem('physomed_user_role')
})
</script>

<template>
  <button
    data-drawer-target="cta-button-sidebar"
    data-drawer-toggle="cta-button-sidebar"
    aria-controls="cta-button-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="cta-button-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium" v-if="user_role == 'Admin'">
        <li v-for="(link, i) in adminLinks" :key="i">
          <RouterLink
            :to="link.to"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span class="ms-3">{{ link.name }}</span>
          </RouterLink>
        </li>
      </ul>

      <ul class="space-y-2 font-medium" v-if="user_role == 'Reception'">
        <li v-for="(link, i) in receptionLinks" :key="i">
          <RouterLink
            :to="link.to"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span class="ms-3">{{ link.name }}</span>
          </RouterLink>
        </li>
      </ul>

      <ul class="space-y-2 font-medium" v-if="user_role == 'Nurse'">
        <li v-for="(link, i) in nurseLinks" :key="i">
          <RouterLink
            :to="link.to"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span class="ms-3">{{ link.name }}</span>
          </RouterLink>
        </li>
      </ul>

      <ul class="space-y-2 font-medium" v-if="user_role == 'Physotrapist'">
        <li v-for="(link, i) in physotrapistLinks" :key="i">
          <RouterLink
            :to="link.to"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span class="ms-3">{{ link.name }}</span>
          </RouterLink>
        </li>
      </ul>

      <ul class="space-y-2 font-medium" v-if="user_role == 'Doctor'">
        <li v-for="(link, i) in doctorLinks" :key="i">
          <RouterLink
            :to="link.to"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span class="ms-3">{{ link.name }}</span>
          </RouterLink>
        </li>
      </ul>
      <div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
        <div class="flex items-center mb-3">
          <span
            class="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900"
            >Beta</span
          >
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
            data-dismiss-target="#dropdown-cta"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">
          Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a
          limited time in your profile.
        </p>
        <a
          class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
          href="#"
          >Turn new navigation off</a
        >
      </div>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <AuthHeader />
    <!-- <UserRegistration /> -->
    <!-- <PatientRegistration /> -->
    <!-- <PatientMedeicalHistoryForm /> -->
    <RouterView />
  </div>
</template>
