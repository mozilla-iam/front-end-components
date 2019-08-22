<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SearchBar />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import { SearchBar } from "./export";

@Component({
  components: {
    SearchBar,
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $blue;
  margin-top: 60px;
}
</style>
