import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config"
import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';
const app = createApp(App)

app.use(createPinia())
app.use(ToastService)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
