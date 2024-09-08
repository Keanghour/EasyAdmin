import { createApp } from 'vue'
import App from './App.vue'

import './assets/style.css'  
import router from './router'  

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'

import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';



const app = createApp(App)

app.use(router)    
app.use(PrimeVue)

app.component('InputText',InputText)
app.component('Avatar',Avatar)
app.component('Menu',Menu)

app.mount('#app')  // Mount the app to the DOM element with the ID 'app' 
