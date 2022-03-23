<template>
  <div id="app">
    <container-component />
  </div>
</template>

<script>
import containerComponent from "./components/BeRealComponents/containerComponent.vue";
export default {
  components: { containerComponent },
  name: "App",
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
