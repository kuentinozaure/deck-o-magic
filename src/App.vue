<template>
  <div id="app">
    <containerCard v-if="isConnect" />
    <div class="container" v-if="!isConnect">
      <div class="password-container">
        <input
          type="password"
          class="password-input"
          v-model="password"
          placeholder="Mot de passe"
          @keyup.enter="onClickGoButton"
        />
        <div class="password-error" v-if="passwordOnError">
          mot de passe incorrect ...
        </div>
      </div>
      <div class="button-container">
        <button type="button" v-on:click="onClickGoButton">Go</button>
      </div>
    </div>
  </div>
</template>

<script>
import containerCard from "./components/containerCard.vue";
export default {
  components: { containerCard },
  name: "App",

  data() {
    return {
      password: "",
      PASSWORD_OF_THE_APP: "annaestmagique",
      isConnect: false,
      numberOfTry: 0,
    };
  },

  computed: {
    passwordOnError() {
      return this.numberOfTry !== 0 && !this.isConnect && this.password !== "";
    },
  },

  methods: {
    onClickGoButton: function () {
      this.isConnect = this.password === this.PASSWORD_OF_THE_APP;
      this.numberOfTry += 1;
    },
  },
};
</script>

<style>
body {
  padding-top: 2%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #222;
  color: #fff5f5;
}

.container {
  display: flex;
  flex-direction: row;
}

.password-container {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-top: 10%;
  width: 70%;
}

.button-container {
  display: flex;
  margin-left: 1%;
  align-items: flex-end;
  justify-content: flex-end;
}

.password-input {
  letter-spacing: 3px;
}

.password-error {
  padding-top: 1%;
  color: #cf000a;
  font-size: 20px;
  letter-spacing: 3px;
}
</style>
