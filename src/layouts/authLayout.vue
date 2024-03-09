<script setup>
import AuthHeader from '../components/auth/authHeader.vue'
import { computed, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { useRouter } from 'vue-router'
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
  router.push('/welcome')
})
const router = useRouter()
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
      <div class="text-2xl font-bold text-primary mb-4 rounded text-center">
        <img src="../assets/PhysioMed.png" style="margin-top: -30px;" class="w-full "  alt="" srcset="">
        <p style="margin-top: -30px;">{{ user_role }}</p>
      </div>
      <ul class="space-y-2 font-medium" v-if="user_role == 'Admin'">
        
        <li v-for="(link, i) in adminLinks" :key="i">
          <RouterLink
            :to="link.to"
            class="flex items-center p-2 text-gray-900 rounded-lg w-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
          <i :class="link.icon" style="font-size: 1rem"></i>
            <span class="ms-3">{{ link.name }}</span>
          </RouterLink>
        </li>
      </ul>

      <ul class="space-y-2 font-medium" v-if="user_role == 'Reception'">
        <li v-for="(link, i) in receptionLinks" :key="i" class="flex flex-row items-center">
          
          <RouterLink
            :to="link.to"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
          >
          <i :class="link.icon" style="font-size: 1rem"></i>
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
          <i :class="link.icon" style="font-size: 1rem"></i>
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
          <i :class="link.icon" style="font-size: 1rem"></i>
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
          <i :class="link.icon" style="font-size: 1rem"></i>
            <span class="ms-3">{{ link.name }}</span>
          </RouterLink>
        </li>
      </ul>
 
    </div>
  </aside>

  <div class=" sm:ml-64">
    <AuthHeader />
    <RouterView class="" />
  </div>
</template>

<style></style>
