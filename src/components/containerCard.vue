<template>
  <div class="card-container">
    <top-component :title="getCardTitle" :user="getUserToPlay" :type="getTypeCard"/>
    <image-component :imageSrc="getImage" />
    <description-component :spotifyUrl="getMusic" :description="getDescription"/>
  </div>
</template>

<script>
import DescriptionComponent from "./descriptionComponent.vue";
import ImageComponent from "./imageComponent.vue";
import topComponent from "./topComponent.vue";
import { DECK_OF_CARDS } from "../constants/deck";
import { USERS } from "../constants/user";
import { GET_RANDOM_USER, GET_RANDOM_CARD } from "../utils/function";
export default {
  components: { topComponent, ImageComponent, DescriptionComponent },
  name: "ContainerCard",

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
          return "A";
        case "quentin":
          return "Q";
        default:
          return "A & Q";
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
        return this.CARD.description
    }
  },
};
</script>

<style scoped>
.card-container {
  background-color:#333333;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 5px;
  height: 50%;
}
</style>
