<template>
  <a
    href="#"
    class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
  >
    <p class="me-3 w-7 h-7">
      {{ props.number }}
    </p>
    <div class="text-left rtl:text-right">
      <div class="mb-1 text-xs">{{ props.description }}</div>
      <!-- <div class="-mt-1 font-sans text-sm font-semibold">{{ title }}</div> -->
    </div>
  </a>
</template>
<script setup>
const props = defineProps({
  number: String,
  title: String,
  description: String
})
</script>
<style>
.card:last-child {
  margin-bottom: 0;
}

.mb-0 {
  margin-bottom: 0rem !important;
}

.card {
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: var(--card-shadow);
  border-radius: 12px;
}
</style>
