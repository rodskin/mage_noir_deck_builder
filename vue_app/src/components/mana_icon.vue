<template>
    <img class="mana_icon" :src="mana_icon" />
</template>

<script>
export default {
    name: 'mana_icon',
    props: ['mana'],
    data() {
        return {
            mana_icon: require('@/assets/icons/' + this.mana + '_icon.png')
        }
    }
}
</script>

<style scoped lang="scss">
    .mana_icon {
        border-radius: 50%;
        width: 15px;
        height: 15px
    }
</style>

