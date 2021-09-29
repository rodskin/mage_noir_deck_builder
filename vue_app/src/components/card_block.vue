<template>
    <div class="cardBlock_wrapper" v-if="card_front != ''">
        <img class="card" :src="card_front" />
        <div v-if="add_card == 1" :style="add_image" class="card_action card_add" @click="addToDeck"> </div>
        <div v-if="delete_card == 1" :style="delete_image" class="card_action card_delete" @click="deleteFromDeck"> </div>
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
        let bgAddImage = require('@/assets/icons/add_card.png')
        let bgDelImage = require('@/assets/icons/remove_card.png')
        return {
            card_front: card_url,
            add_card: this.addCard,
            delete_card: this.deleteCard,
            add_image: { backgroundImage: 'url("' + bgAddImage + '")' },
            delete_image: { backgroundImage: 'url("' + bgDelImage + '")' }
        }
    },
    methods: {
        addToDeck (){
            if (typeof this.$currentDeck.cards[this.slug] !== 'undefined') {
                if (this.$currentDeck.cards[this.slug] < 4) {
                    this.$currentDeck.cards[this.slug] ++
                }
            } else {
                this.$currentDeck.cards[this.slug] = 1
            }
            this.$forceUpdate();
            this.indexBlock++;
            vm.$set(this.$currentDeck.cards)
        },
        deleteFromDeck () {
            console.log('delete')
        },
        forceUpdate() {
            this.$forceUpdate();
        }
    }
}
</script>

<style scoped lang="scss">
    .cardBlock_wrapper {
        position: absolute;
        .card {
            border-radius: 10px;
        }
        .card_action {
            position: absolute;
            height: 23px;
            width: 23px;
            background-color: #1e1e33;
            background-size: 100% 100%;
            opacity: 0.8;
            font-size: 24px;
            bottom: 0;
            visibility: hidden;
        }
        .card_add {
            right: 46px;

        }
        .card_delete {
            right: 23px;
        }
        &:hover {
            .card_action {
                visibility: visible;
            }
        }
    }
</style>
