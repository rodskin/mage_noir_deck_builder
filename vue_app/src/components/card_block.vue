<template>
    <div class="cardBlock_wrapper">
        <img v-if="card_front != ''" class="card" :src="card_front" />
        <div v-if="add != ''" class="card_add">+</div>
    </div>
</template>

<script>
export default {
    name: 'card_block',
    props: ['slug', 'add'],
    data() {
        let card_url = ''
        if (this.slug != '') {
            card_url = require('@/assets/cards/' + this.slug + '.png')
        } 
        return {
            card_front: card_url
        }
    }
}
</script>

<style scoped lang="scss">
    .card {
        border-radius: 10px;
    }
</style>
