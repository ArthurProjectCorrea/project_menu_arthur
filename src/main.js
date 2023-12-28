import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import roteador from './roteador'

createApp(App)
    .use(roteador)
    .mount('#app')
