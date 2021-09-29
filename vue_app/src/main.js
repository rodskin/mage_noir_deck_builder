import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

// COMMON COMPONNENTS
import cardBlock from '@/components/card_block'
import cardLine from '@/components/card_line'
import manaIcon from '@/components/mana_icon'
import searchAutocomplete from '@/components/search_autocomplete'

// DATAS
import cards from './datas/cards.js'
import currentDeck from './datas/current_deck.js'
import ingredients from './datas/ingredients.js'

// CSS
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
require('@/assets/scss/_root.scss')

// FONT AWECOME ICONS
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBook);

// APP
const app = createApp(App)
app.use(Vuex)
app.use(router)
app.component('cardBlock', cardBlock)
app.component('cardLine', cardLine)
app.component('manaIcon', manaIcon)
app.component('searchAutocomplete', searchAutocomplete)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.$cards = cards
app.config.globalProperties.$currentDeck = currentDeck
app.config.globalProperties.$ingredients = ingredients

app.mount('#app')
