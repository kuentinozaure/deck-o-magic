<template>
  <div id="app">
    <container-component />
  </div>
</template>

<script>
import containerComponent from "./components/BeRealComponents/containerComponent.vue";
import store from "./store";
export default {
  components: { containerComponent },
  name: "App",

  computed: {
    getStatusOfConnexion: () => {
      return store.getters.getStatusOfTheAuth;
    },
  },
};
</script>

<style>
body {
  padding: 2% 2% 2% 2%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #311b92;
  color: #222;
}
</style>
