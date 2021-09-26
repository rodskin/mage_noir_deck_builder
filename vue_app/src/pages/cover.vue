<template>
    <div class="cover">
        <h1>{{ card.slug }}</h1>
        <li v-for="card in currentDeck" :key="card.id">
            <cardHolder :slug="card" />
        </li>
    </div>
</template>

<script>
    export default {
        name: 'pageCover',
        data () {
            return {
                currentDeck: [
                    'seed', 'prodigious_sowing', 'druid_horns', 'dead_tree', 'seed'
                ],
                card: this.$cards['seed']
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
