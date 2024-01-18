<template>
  <header>
    <nav :class="getNavClass">
      <a href="/" class="logo">Logo</a>
      <button v-if="isMobile" @click="toggleMobileMenu" class="mobile-menu-button">
        <span>&#9776;</span>
        Menu
      </button>
      <ul v-else class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <ul v-if="isMobile && isMobileMenuOpen" class="mobile-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </header>
</template>

<script>
import { reactive, ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const windowWidth = ref(window.innerWidth);
    const isMobileMenuOpen = reactive(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const getNavClass =`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    `;

    const isMobile = ref(false);

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
      isMobile.value = window.innerWidth <= 768;
    };

    return {
      windowWidth,
      isMobileMenuOpen,
      toggleMobileMenu,
      getNavClass,
      isMobile,
    };
  },
};
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