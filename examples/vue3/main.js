import { createApp } from 'vue'
import 'element3/lib/theme-chalk/button.css'
import { ElButton } from 'element3'

import App from './App.vue'
import './index.css'

createApp(App).use(ElButton).mount('#app')