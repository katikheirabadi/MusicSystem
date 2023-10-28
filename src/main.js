import App from './App.vue'

// Composables
import { createApp } from 'vue'
//import i18n from './locales/i18n'
import 'vuetify/dist/vuetify.min.css';
import './assets/css/global.css'


import config from '@/locales/config'
import {createI18n} from 'vue-i18n'

const i18n = createI18n({
    locale:config.locale,
    messages:config.messages
})

import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(i18n).mount('#app')
