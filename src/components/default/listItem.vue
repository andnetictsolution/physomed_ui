<template>
  <div class="flex flex-row my-1">
    <li class="list-none mr-2 text-base">
      {{ props.label }}
    </li>:
    <li class="list-none font-medium text-base ml-1">
      {{ props.value }}
    </li>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
})
</script>
