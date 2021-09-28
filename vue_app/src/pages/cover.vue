<template>
    <div class="cover">
        <h1></h1>
        <manaIcon :mana="mana" />
        <div v-if="display == 'grid'">
            <div class="cards_block" v-for="(qty, key, index) in cardsList" :key="index">
                {{ key }}:{{ qty }}
                <div class="card_wrapper" v-for="item in qty" :key="item">
                    <cardBlock :slug="key" />
                </div>
            </div>
        </div>
        <div v-else>
            <div class="cards_block" v-for="(qty, key, index) in cardsList" :key="index">
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
            return {
                cardsList: this.$currentDeck.cards,
                mana: 'fire',
                display: 'grid'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
