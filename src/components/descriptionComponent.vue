<template>
  <!-- Description card  -->
  <div class="description-container">
    <iframe
      style="border-radius: 12px"
      v-bind:src="spotifyUrl"
      width="100%"
      height="80"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>

    <div class="description-title">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "imageComponent",
  props: {
    spotifyUrl: String,
    description: String,
  },
};
</script>

<style scoped>
.description-container {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 3%;
  background-color: #171717;
}

.description-title {
  margin-top: 2%;
  font-size: 25px;
  letter-spacing: 4px;
  flex-wrap: nowrap;
}

@media only screen and (max-width: 500px) {
  [class*="description-title"] {
    font-size: 12px;
    text-align: justify;
  }
}
</style>
