<template>
    <div class="cardBlock_wrapper" v-if="card_front != ''">
        <img class="card" :src="card_front" />
        <div v-if="add_card == 1" class="card_add" @click="addToDeck">+</div>
        <div v-if="delete_card == 1" class="card_delete" @click="DeleteFromDeck">-</div>
    </div>
</template>

<script>
export default {
    name: 'card_block',
    props: ['slug', 'addCard', 'deleteCard'],
    data() {
        let card_url = ''
        if (this.slug != '') {
            card_url = require('@/assets/cards/' + this.slug + '.png')
        } 
        return {
            card_front: card_url,
            add_card: this.addCard,
            delete_card: this.deleteCard
        }
    },
    methods: {
        addToDeck (){
            console.log('add')
        },
        deleteFromDeck () {
            console.log('delete')
        }
    }
}
</script>

<style scoped lang="scss">
    .card {
        border-radius: 10px;
    }
</style>
