<template>
  <div class="container-component">
    <card-component
      :players="getUserToPlay"
      :action="getTypeCard"
      :description="getDescription"
      :music="getMusic"
    />
    <image-panel-component/>
  </div>
</template>

<script>
import { DECK_OF_CARDS } from "@/constants/deck";
import { USERS } from "@/constants/user";
import { GET_RANDOM_CARD, GET_RANDOM_USER } from "@/utils/function";
import cardComponent from "./cardComponent.vue";
import ImagePanelComponent from './imagePanelComponent.vue';

export default {
  components: { cardComponent, ImagePanelComponent },
  name: "containerComponent",

  data() {
    return {
      CARD: DECK_OF_CARDS[GET_RANDOM_CARD()],
      USER: USERS[GET_RANDOM_USER()],
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