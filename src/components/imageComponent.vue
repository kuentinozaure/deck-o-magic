<template>
  <!-- img card  -->
  <div class="image-container">
    <img
      v-bind:src="imageSrc"
      class="img-size"
    />
  </div>
</template>

<script>
export default {
  name: "imageComponent",
  props: {
    imageSrc: String,
  },
};
</script>

<style scoped>

.image-container {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 3%;
  margin-bottom: 3%;
}

.img-size {
  width: 100%;
  height: 50%;
}

</style>
