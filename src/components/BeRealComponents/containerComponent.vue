<template>
  <div class="container-component">
    <card-component
      :players="getUserToPlay"
      :action="getTypeCard"
      :description="getDescription"
      :music="getMusic"
    />
    <image-panel-component :type="getTypeCard"/>
  </div>
</template>

<script>
import cardComponent from "./cardComponent.vue";
import ImagePanelComponent from './imagePanelComponent.vue';
import store from '@/store';

export default {
  components: { cardComponent, ImagePanelComponent },
  name: "containerComponent",

  data() {
    return {
      CARD: store.getters.getRandomCard,
      USER: store.getters.getRandomUser,
    };
  },

  computed: {
    getUserToPlay() {
      switch (this.USER.name.toLowerCase()) {
        case "anna":
          return "Anna";
        case "quentin":
          return "Quentin";
        default:
          return "Anna & Quentin";
      }
    },

    getCardTitle() {
      return this.CARD.title;
    },

    getMusic() {
      return this.CARD.song;
    },

    getTypeCard() {
      return this.CARD.type;
    },

    getImage() {
      return this.CARD.image;
    },

    getDescription() {
      return this.CARD.description;
    },
  },
};
</script>

<style scoped>
.container-component {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>