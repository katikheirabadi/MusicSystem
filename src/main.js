import App from './App.vue'

// Composables
import { createApp } from 'vue'
import i18n from './locales/i18n'

import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(i18n).mount('#app')
