import App from './App.vue'

// Composables
import { createApp } from 'vue'
import i18n from '@/locales/i18n'
import 'vuetify/dist/vuetify.min.css';
import './assets/css/global.css'




import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(i18n).mount('#app')
