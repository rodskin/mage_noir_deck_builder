let currentDeck = {
    'display': 'grid',
    'cards': {
        'seed': 2,
        'prodigious_sowing': 1,
        'druid_horns': 1,
        'dead_tree': 1
    }
}

export default currentDeck

const currentDeck = new Vuex.Store({
    state: {
        count: 0,
        display: 'grid',
        cards: {}
    },
    mutations: {
        increment (state) {
            state.count++
        },
        changeDisplay (state) {
            if (state.display == 'grid') {
                state.display = 'list'
            } else {
                state.display = 'grid'
            }
        },
        addCard (state, cardSlug) {
            console.log('addCard')
        }
    }
}

//store.commit('increment', 10)
