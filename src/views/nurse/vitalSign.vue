<script setup>
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
const vs = ref({
  bp: '',
  pr: '',
  rr: '',
  wt: '',
  t: ''
})
const saveVS = () => {
  console.log(vs.value)
}
</script>

<template>
  <div class="flex justify-start gap-2">
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col">
          <label>BP</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.bp" />
        </div>
        <div class="flex flex-col">
          <label>PR</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.pr" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col">
          <label>RR</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.rr" />
        </div>
        <div class="flex flex-col">
          <label>WT</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.wt" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col">
          <label>T</label>
          <InputText class="border border-gray-400 p-1" v-model="vs.t" />
        </div>
        <div class="flex flex-col mt-8">
          <button @click="saveVS" class="text-base font-medium">Save vital sign</button>
        </div>
      </div>
    </div>
  </div>
</template>
