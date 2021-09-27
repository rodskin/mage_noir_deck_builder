import { createApp } from 'vue'
import App from './App'
import router from './router'
//import VueSidebarMenu from 'vue-sidebar-menu'
//import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

// COMMON COMPONNENTS
import cardHolder from '@/components/card_holder'
import manaIcon from '@/components/mana_icon'

// DATAS
import cards from './datas/cards.js'
import currentDeck from './datas/current_deck.js'
import ingredients from './datas/ingredients.js'

// CSS
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
require('@/assets/scss/_root.scss')

// FONT AWECOME ICONS
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook } from "@fortawesome/free-solid-svg-icons";
library.add(faBook);
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
library.add(faExclamationTriangle);
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faUndoAlt);

// APP
const app = createApp(App)
app.use(router)
//app.use(VueSidebarMenu)
app.component('cardHolder', cardHolder)
app.component('manaIcon', manaIcon)
app.config.globalProperties.$cards = cards
app.config.globalProperties.$currentDeck = currentDeck
app.config.globalProperties.$ingredients = ingredients

app.mount('#app')
