<template>
    <img class="card" :src="card_front" />
</template>

<script>
export default {
    name: 'card_block',
    props: ['slug'],
    data() {
        return {
            card_front: require('@/assets/cards/' + this.slug + '.png')
        }
    }
}
</script>

<style scoped lang="scss">
    .card {
        border-radius: 10px;
    }
</style>
