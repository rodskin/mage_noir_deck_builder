<template>
    <header>
        <h1 id="app_title">Mage Noir - Deck builder</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </header>
    <div id="app_body">
        <div id="page_left">
        <searchAutocomplete :items="cardsAvailable" />
        </div>
        <div id="page_content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            let searchList = []
            //let valuesOnly = []
            let searchArray = []
            Object.keys(this.$cards).forEach(key => {
                searchList.push({'key': key, 'value': this.$cards[key].name})
                //valuesOnly.push(this.$cards[key].name)
                searchArray[key] = this.$cards[key].name
            })
            return {
                //cardsAvailable: this.$cards
                cardsAvailable: searchArray
                //cardsAvailable: valuesOnly
            }
        },
    }
</script>

<style scoped lang="scss">
</style>
