<template>
    {{ card_name }}
</template>

<script>
export default {
    name: 'card_line',
    props: ['slug', 'qty'],
    data() {
        return {
            card_name: this.$cards[this.slug].name,
            quantity: this.quantity
        }
    }
}
</script>

<style scoped lang="scss">
</style>
