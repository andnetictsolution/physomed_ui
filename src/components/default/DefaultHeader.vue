<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/login" class="flex items-center space-x-3 rtl:space-x-reverse">
        <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-primary"
          >Physomed</span
        >
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          @click="navigateToPatientRegistration"
          type="button"
          class="block w-full bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        ></ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const windowWidth = ref(window.innerWidth)
    const isMobileMenuOpen = reactive(false)

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    //
    const router = useRouter()

    const navigateToPatientRegistration = () => {
      // Use router.push() to navigate to the desired route
      router.push('/patient/register') // Replace '/my-route' with your desired route
    }

    return {
      navigateToPatientRegistration
    }
    //
    const getNavClass = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    `

    const isMobile = ref(false)

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    const handleResize = () => {
      windowWidth.value = window.innerWidth
      isMobile.value = window.innerWidth <= 768
    }

    return {
      windowWidth,
      isMobileMenuOpen,
      toggleMobileMenu,
      getNavClass,
      isMobile
    }
  }
}
</script>

<style>
.logo {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.mobile-menu-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1rem;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem;
  background-color: #f0f0f0;
}
</style>
