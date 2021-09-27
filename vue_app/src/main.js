import { createApp } from 'vue'
import App from './App'
import router from './router'
//import VueSidebarMenu from 'vue-sidebar-menu'
//import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import cardHolder from '@/components/card_holder'
import manaIcon from '@/components/mana_icon'

// DATAS
import cards from './datas/cards.js'

// APP
const app = createApp(App)
app.use(router)
//app.use(VueSidebarMenu)
app.component('cardHolder', cardHolder)
app.component('manaIcon', manaIcon)
app.config.globalProperties.$cards = cards

app.mount('#app')
