<script setup>
import BaseTable from '@/components/table/tableHH.vue'

import { computed, onMounted } from 'vue'
import { patientStore } from '@/stores/reception/patient';
import { convertShortDate, convertToString } from '@/utils/moment';
import { authStore } from '@/stores/auth/auth';
import { useRouter } from 'vue-router';
const patientPinia = patientStore();
const authPinia = authStore();
const router = useRouter()
onMounted(async () => {
    authPinia.setTitle("All Patients")
    await patientPinia.fetchPatients()
})
const routeTo = (id) => {
    router.push(`/physio/order/${id}`)
}
const convertDate = (date) => {
    return convertToString(date)
}
const allPatients = computed(() => {
    return patientPinia.getAllPatients
})


const column = ['full_name', 'date_of_birth', 'sex']
</script>

<template>
    <div>
        <BaseTable>
            <template v-slot:header>
                <th scope="col" class="px-6 py-3" v-for="(item, i) in column" :key="i">
                    {{ item }}
                </th>
                <th scope="col" class="px-6 py-3">Actions</th>
            </template>
            <template v-slot:body>
                <tr class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400"
                    v-for="item in allPatients" :key="item._id">
                    <td class="px-6 py-4">
                        {{
                    item.first_name +
                    ' ' +
                    item.middle_name +
                    ' ' +
                    item.last_name
                }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.sex }}
                    </td>
                    <td class="px-6 py-4">
                        {{ convertDate(item.createdAt) }}
                    </td>
                    <td class="px-6 py-4">
                        <button @click="routeTo(item._id)" class="bg-primary py-2 px-10 rounded text-white">
                            Detail
                        </button>
                    </td>
                </tr>
            </template>
        </BaseTable>
    </div>
</template>
