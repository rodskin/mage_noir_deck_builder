<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <h1>Mage Noir - Deck builder</h1>
    <div id="page_left">toto</div>
    <div id="page_content">
        <router-view/>
    </div>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#page_left {
    width: 30%;
    float: left;
    border-left: 1px solid black;
}
#page_content {
    width: 70%;
    float: left;
    &:after {
        clear:both;
    }
}

</style>
