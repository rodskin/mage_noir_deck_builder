<template>
    <img v-if="card_front != ''" class="card" :src="card_front" />
</template>

<script>
export default {
    name: 'card_block',
    props: ['slug'],
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
