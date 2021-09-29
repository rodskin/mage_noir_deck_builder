<template>
        <div id="page_left">
            <searchAutocomplete :items="cardsAvailable" />
        </div>
        <div id="page_content">
            <manaIcon :mana="mana" />
            <div v-if="display == 'grid'">
                <div class="cards_block" v-for="(qty, key, indexBlock) in cardsList" :key="indexBlock" :iswatched="1">
                    {{ key }}:{{ qty }}
                    <div class="card_wrapper" v-for="item in qty" :key="item">
                        <cardBlock :slug="key" :addCard="1" deleteCard="1" :key="reloadCards" />
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="cards_line" v-for="(qty, keyLine, indexLine) in cardsList" :key="indexLine">
                    <div class="card_wrapper" v-for="item in qty" :key="item">
                        <cardLine :slug="key" :qty="qty"/>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'pageCover',
        data () {
            let cards_list = this.$currentDeck.cards
            let searchList = []
            let searchArray = []
            Object.keys(this.$cards).forEach(key => {
                searchList.push({'key': key, 'value': this.$cards[key].name})
                searchArray[key] = this.$cards[key].name
            })
            return {
                cardsAvailable: searchArray,
                cardsList: cards_list,
                mana: 'fire',
                display: 'grid'
            }
        },
        watch: {
            iswatched: function() {
                this.cardList = this.$currentDeck.cards
            }
        }
    }
</script>
