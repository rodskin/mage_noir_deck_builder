<template>
    <header>
        <h1 id="app_title">Mage Noir - Deck builder</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </header>
    <div id="app_body">
        <router-view/>
    </div>
</template>

<script>
/*const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})*/
</script>

<style scoped lang="scss">
</style>
