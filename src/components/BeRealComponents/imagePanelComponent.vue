<template>
  <div class="image-panel-component">
    <div
      class="string-image-panel-component"
      v-if="getListOfBlobUrlFile.length > 0"
    >
      Photo(s) des activite(s) precedente(s) :
    </div>
    <div
      class="string-image-panel-component"
      v-if="getListOfBlobUrlFile.length <= 0"
    >
      Pas de photo pour cette carte :( ...
    </div>
    <div class="image-slider-component" v-if="getListOfBlobUrlFile.length > 0">
      <div
        class="image-element"
        v-for="(url, index) in getListOfBlobUrlFile"
        :key="index"
      >
        <img v-bind:src="url" class="responsive" />
      </div>
    </div>

    <div class="image-upload-panel-component">
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        ref="image"
        @change="onChangeImage()"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "imagePanelComponent",
  props: {
    type: String,
  },

  computed: {
    getListOfBlobUrlFile() {
      const photos = store.getters.getPhotosByCard(this.type).photos;
      return photos.map((elem) => window.URL.createObjectURL(elem));
    },
  },

  methods: {
    /**
     * The method is trigger when user click on the choose a file button
     */
    onChangeImage() {
      store.commit("addPhotoToCard", {
        type: this.type,
        photo: this.$refs.image.files[0],
      });
    },
  },
};
</script>

<style scoped>
.image-panel-component {
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.string-image-panel-component {
  color: #fff;
  font-size: 20px;
  text-align: center;
}

.image-slider-component {
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  height: auto;
  background-color: #ede7f6;
}

.image-element {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1% 1% 1% 1%;
}

.responsive {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.image-upload-panel-component {
  margin-top: 1%;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
</style>