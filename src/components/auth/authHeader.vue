<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >{{ title }}</span
        >
      </a>
      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <!-- <span class="sr-only">Open user menu</span> -->
          <img class="w-8 h-8 rounded-full" src="../../assets/andnet.jpeg" alt="user photo" />
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div class="px-4 py-3 capitalize">
            <span class="block text-sm text-gray-500 truncate dark:text-gray-400">{{ user }}</span>
            <span class="block text-sm text-gray-500 truncate dark:text-gray-400">{{ role }}</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li class="flex flex-row items-center ml-2">
              <i class="pi pi-user-edit" style="font-size: 1rem"></i>
              <a
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Edit Profile</a
              >
            </li>
            <li class="flex flex-row items-center ml-2">
              <i class="pi pi-sync" style="font-size: 1rem"></i>
              <a
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Change Password</a
              >
            </li>
            <li class="flex flex-row items-center ml-2">
              <i class="pi pi-unlock" style="font-size: 1rem"></i>
              <a
                @click="logout"
                class="block px-4 pointer py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { authStore } from '@/stores/auth/auth'
import { useRouter } from 'vue-router'
import { reactive, ref, onMounted, onUnmounted, computed } from 'vue'
export default {
  setup() {
    const windowWidth = ref(window.innerWidth)
    const authPinia = authStore()
    const isMobileMenuOpen = reactive(false)
    const user = computed(() => {
      return localStorage.getItem('physomed_user')
    })
    const role = computed(() => {
      return localStorage.getItem('physomed_role')
    })
    const title = computed(() => {
      return authPinia.getTitle
    })
    const logout = async () => {
      await router.push('/login')
      authPinia.logoutUser()
    }

    const router = useRouter()

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

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
      isMobile,
      user,
      title,
      role,
      logout
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
