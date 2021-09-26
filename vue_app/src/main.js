import { createApp } from 'vue'
import App from './App'
import router from './router'

import cardHolder from '@/components/card_holder'

// DATAS
import cards from './datas/cards.js'

// APP
const app = createApp(App)
app.use(router)
app.component('cardHolder', cardHolder)
app.config.globalProperties.$cards = cards

app.mount('#app')
