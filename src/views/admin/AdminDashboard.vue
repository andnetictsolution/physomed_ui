<script setup>
import cardDashboard from '@/components/auth/cardDashboard.vue';
import Toolbar from 'primevue/toolbar';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import { reportStore } from '@/stores/admin/report';
import { onMounted, ref, computed } from "vue"
import { authStore } from '@/stores/auth/auth';
import { serviceStore } from '@/stores/admin/service';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { convertToString } from '@/utils/moment';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { userStore } from '@/stores/admin/user';
import Dialog from 'primevue/dialog';
const reportPinia = reportStore();
const userPinia = userStore();
const authPinia = authStore();
const servicePinia = serviceStore()
const toast = useToast()
onMounted(async () => {
  authPinia.setTitle("Report Analytics")
  await reportPinia.fetchRevenue({
    start_date: new Date(),
    end_date: new Date()
  });
  await reportPinia.fetchCompareRevenue({
    start_date: new Date(),
    end_date: new Date(),
    interval: "Monthly"
  })
  await userPinia.fetchUsers()
  await servicePinia.fetchServices()
})
const physioId = ref('')
const openModal = ((id) => {
  phsioDate.value.id = id
  visible.value = true
})
const allServices = computed(() => {
  return servicePinia.getAllServices
})
const allRevenue = computed(() => {
  return reportPinia.getRevenue
})
const allCompareRevenue = computed(() => {
  return reportPinia.getRevenueCompare
})
const physiotherapist = computed(() => {
  return userPinia.getAllUsers
})
const visible = ref(false);
const phsioDate = ref({
  start_date: '',
  end_date: '',
  id: ''
})

const intervals = [
  {
    name: "Monthly",
    value: "Monthly"
  },
  {
    name: "Weekly",
    value: "Weekly"
  },

]
const report = ref({
  start_date: '',
  end_date: '',
  interval: '',
  service_list: []
})
const filterPhysioReport = async () => {
  reportPinia.fetchPhysioReport(phsioDate.value)
}
const allPhysio = computed(() => {
  return reportPinia.getPhysioReport
})
const filterReport = async () => {
  try {
    await reportPinia.fetchRevenue({
      start_date: new Date(report.start_date),
      end_date: new Date(report.end_date)
    })
  } catch (error) {
    console.log(error)
  }
}
const filterCompareReport = async () => {
  try {
    await reportPinia.fetchCompareRevenue(report.value);
    toast.add({ severity: "success", summary: "Message", detail: "Report Updated", life: 6000 })
  } catch (error) {
    toast.add({ severity: "error", summary: "Message", detail: error.response.data.message, life: 6000 })
  }

}
</script>
<template>
  <div class="m-4">
    <Toast />
    <Toolbar class="bg-gray-900">
      <template #start>
        <div class="flex flex-col md:flex-row">
          <div class="md:mr-2 w-96 md:w-full">
            <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Start Date:</label>
            <input v-model="report.start_date" id="name" type="date"
              class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="" />
          </div>

          <div class="">
            <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">End Date:</label>
            <input v-model="report.end_date" id="name" type="date"
              class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
              @change="filterReport" placeholder="" />
          </div>
        </div>


      </template>

      <template #center>
        <div class=" flex-col md:flex-row md:w-full">
          <div class="flex flex-col md:flex-row">
            <div class="mr-2 ">
              <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Interval:</label>
              <Dropdown v-model="report.interval" :options="intervals" optionValue="name" optionLabel="name"
                placeholder="Select interval" class="w-full md:w-14rem" />
            </div>

            <div class="w-96 md:w-full">
              <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Service list:</label>
              <MultiSelect v-model="report.service_list" display="chip" :options="allServices" optionValue="_id"
                optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-[20rem]" />
            </div>
          </div>
        </div>
      </template>

      <template #end>
        <button class="bg-primary rounded text-white p-2 md:mt-8 align-items-center" @click="filterCompareReport">
          Apply Filter
        </button>
      </template>
    </Toolbar>
    <h3 class="font-bold text-xl my-1 ">Number Statics</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <cardDashboard description="Revenue" :number="allRevenue.revenue" title="here" />
      <cardDashboard description="Revenue" number="12" title="here" />
      <cardDashboard description="Revenue" number="12" title="here" />
    </div>
    <h3 class="font-bold text-xl my-1 ">Revenue Report</h3>

    <DataTable class="h-screen" :value="[allRevenue]" scrollable scrollHeight="600px" tableStyle="min-width: 50rem">

      <Column header="Start date">
        <template #body="slotProps">
          <p>{{ convertToString(slotProps.data.start_date) }}</p>
        </template>
      </Column>
      <Column header="End date">
        <template #body="slotProps">
          <p>{{ convertToString(slotProps.data.end_date) }}</p>
        </template>
      </Column>
      <Column header="Revenue">
        <template #body="slotProps">
          <p>{{ slotProps.data.revenue + ' Birr' }}</p>
        </template>
      </Column>


    </DataTable>
    <h3 class="font-bold text-xl my-1 ">Revenue Compare</h3>
    <DataTable class="h-screen" :value="allCompareRevenue.revenue_data" scrollable scrollHeight="600px"
      tableStyle="min-width: 50rem">

      <Column header="Start date">
        <template #body="slotProps">
          <p>{{ convertToString(slotProps.data.startDate) }}</p>
        </template>
      </Column>
      <Column header="End date">
        <template #body="slotProps">
          <p>{{ convertToString(slotProps.data.endDate) }}</p>
        </template>
      </Column>
      <Column header="Label">
        <template #body="slotProps">
          <p>{{ slotProps.data.label }}</p>
        </template>
      </Column>
      <Column header="Sequence">
        <template #body="slotProps">
          <p>{{ slotProps.data.sequence }}</p>
        </template>
      </Column>
      <Column header="Revenue">
        <template #body="slotProps">
          <p>{{ slotProps.data.revenue + ' Birr' }}</p>
        </template>
      </Column>


    </DataTable>
    <h3 class="font-bold text-xl my-1 ">Physiotherapist work statistics</h3>
    <DataTable class="h-screen" :value="physiotherapist" scrollable scrollHeight="600px" tableStyle="min-width: 50rem">

      <Column header="Start date">
        <template #body="slotProps">
          <p class="capitalize">{{ slotProps.data.first_name + " " + slotProps.data.last_name }}</p>
        </template>
      </Column>
      <Column header="End date">
        <template #body="slotProps">
          <p>{{ slotProps.data.role.name }}</p>
        </template>
      </Column>
      <Column header="Action">
        <template #body="slotProps">
          <button class="bg-primary p-2 rounded text-white" @click="openModal(slotProps.data._id)">
            Check work
          </button>
        </template>
      </Column>



    </DataTable>
    <Dialog v-model:visible="visible" modal header="Work statics" :style="{ width: '25rem' }">
      <div class="flex flex-col md:flex-row">
        <div class="md:mr-2 w-96 md:w-full">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">Start Date:</label>
          <input v-model="phsioDate.start_date" id="name" type="date"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="" />
        </div>


        <div class="">
          <label for="name" class="block text-gray-700 font-bold mb-2 dark:text-white">End Date:</label>
          <input v-model="phsioDate.end_date" id="name" type="date"
            class="w-full px-3 py-2 dark:text-black border border-gray-300 rounded focus:outline-none focus:border-primary"
            @change="filterPhysioReport" placeholder="" />
        </div>
      </div>
      <DataTable class="h-screen" :value="allPhysio" scrollable scrollHeight="600px"
        tableStyle="min-width: 50rem">

        <Column header="Patient">
          <template #body="slotProps">
            <p class="capitalize">{{ slotProps.data.patient.first_name + " " + slotProps.data.patient.last_name }}</p>
          </template>
        </Column>
        <Column header="Treatment">
          <template #body="slotProps">
            <p>{{ slotProps.data.service.name }}</p>
          </template>
        </Column>
        <Column header="Action">
          
        </Column>

      </DataTable>
      <div class="flex justify-center gap-3 my-2">
        <Button class="bg-gray-200 hover:bg-primary text-black hover:text-white font-bold py-2 px-4 rounded"
          @click="visible = false">
          Cancel
        </Button>
        <Button @click="visible = false" class="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded">
          ok
        </Button>
      </div>
    </Dialog>

  </div>
</template>

<style scoped>
.h-screen {
  height: auto !important;
}
</style>
