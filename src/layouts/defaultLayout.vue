<script setup>
import DefaultHeader from '../components/default/DefaultHeader.vue'
import DefaultFooter from '../components/default/DefaultFooter.vue'
</script>

<template>
  <div class="">
    <DefaultHeader />
    <RouterView class="mb-20"/>
    <DefaultFooter class="md:hidden fixed bottom-0" />
  </div>
</template>
