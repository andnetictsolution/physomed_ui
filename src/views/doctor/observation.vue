<script setup>
import { ref } from 'vue'
import { patientMedicalHistoryStore } from '../../stores/nurse/patientMedicalHistory'
const patientMedicalHistoryPinia = patientMedicalHistoryStore()
import { useRoute } from 'vue-router'
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
const route = useRoute()
const id = route.params.id;
const toast = useToast();
const patientMedicalHistory = ref({
    chief_complaint: '',
    referral_diagnosis: '',
    HPI: '',
    PMH: '',
    patient_expectation: '',
    observation: '',
    palpation: '',
    assessment: '',
    progress_note: '',
    patient_id: ''
})





const saveAssesment = () => {
    try {
        patientMedicalHistoryPinia.addpatientmedicalHistory({
            patient_id: id,
            referral_diagnosis: patientMedicalHistory.value.referral_diagnosis,
            HPI: patientMedicalHistory.value.HPI,
            PMH: patientMedicalHistory.value.PMH,
            chief_complaint: patientMedicalHistory.value.chief_complaint,
            patient_expectation: patientMedicalHistory.value.patient_expectation,
            observation: patientMedicalHistory.value.observation,
            palpation: patientMedicalHistory.value.palpation,
            assessment: patientMedicalHistory.value.assessment,
            progress_note: patientMedicalHistory.value.progress_note,
        })
        patientMedicalHistory.value = {}
        toast.add({
            severity: 'info',
            summary: 'Message',
            detail: 'Observation added successfully',
            life: 6000
        })
    } catch (error) {
        toast.add({
            severity: 'error',
            summary: 'Message',
            detail: error.response.data.message,
            life: 6000
        })
    }

}
</script>

<template>
    <div>
        <Toast />
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Referral
            Diagnosis</label>
        <textarea v-model="patientMedicalHistory.referral_diagnosis" id="whenToStrat" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-00 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary"
            placeholder=""></textarea>
    </div>
    <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">chief
            compliant?</label>
        <textarea v-model="patientMedicalHistory.chief_complaint" id="whenToStrat" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-00 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Write your thoughts here..."></textarea>
    </div>
    <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">HPI</label>

        <div class="relative">
            <textarea v-model="patientMedicalHistory.HPI" id="whenToStrat" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-00 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>
    <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">PMH</label>

        <div class="relative">
            <textarea v-model="patientMedicalHistory.PMH" id="whenToStrat" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-00 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>
    <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Patient
            expectation</label>

        <div class="relative">
            <textarea v-model="patientMedicalHistory.patient_expectation" id="whenToStrat" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-00 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>
    <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Observation</label>

        <div class="relative">
            <textarea v-model="patientMedicalHistory.observation" id="whenToStrat" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-00 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>
    <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Palpation</label>

        <div class="relative">
            <textarea v-model="patientMedicalHistory.palpation" id="whenToStrat" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-00 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>
    <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Assessment</label>

        <div class="relative">
            <textarea v-model="patientMedicalHistory.assessment" id="whenToStrat" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-00 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>
    <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Progress Notes</label>

        <div class="relative">
            <textarea v-model="patientMedicalHistory.progress_note" id="whenToStrat" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-00 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>


    <div class="flex flex-col justify-right align-items-center my-2" style="align-items: right">
        <button @click="saveAssesment"
            class="block bg-primary w-80 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
            Save Observation
        </button>
    </div>
</template>
