<template>
  <div class="card-component">
    <div class="string-container">Joueur(s) : {{ players.toUpperCase() }}</div>
    <div class="string-container">Action : {{ action.toUpperCase() }}</div>
    <div class="string-container">
      Description : {{ description.toUpperCase() }}
    </div>

    <div class="string-container">
      <iframe
        style="border-radius: 12px"
        v-bind:src="music"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardComponent",
  props: {
    players: String,
    action: String,
    music: String,
    description: String,
  },
};
</script>

<style scoped>
.card-component {
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #ede7f6;
}

.string-container {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1%;
  margin-bottom: 1%;
  font-size: 20px;
}
</style>