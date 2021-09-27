<template>
    <div class="cover">
        <h1></h1>
        <manaIcon :mana="mana" />
        <div class="cards_block" v-for="(qty, key, index) in cardsList" :key="index">
            {{ key }}:{{ qty }}
            <div class="card_wrapper" v-for="item in qty" :key="item">
                <cardHolder :slug="key" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pageCover',
        data () {
            console.log(this.$currentDeck.cards);
            return {
                cardsList: this.$currentDeck.cards,
                mana: 'fire'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
