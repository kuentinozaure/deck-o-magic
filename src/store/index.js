import { DECK_OF_CARDS } from '@/constants/deck'
import { USERS } from '@/constants/user'
import Vue from 'vue'
import Vuex from 'vuex'
import localForage from 'localforage';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: localForage,
  asyncStorage: true,
});
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: USERS,
    cards: DECK_OF_CARDS,
  },
  getters: {
    getRandomUser: (state) => {
      const {
        users
      } = state

      const randomUser = Math.floor(Math.random() * users.length);
      return users[randomUser]
    },

    getRandomCard: (state) => {
      const {
        cards
      } = state
      const randomCard = Math.floor(Math.random() * cards.length);
      return cards[randomCard]
    },

    getPhotosByCard: (state) => (typeCard) => {
      const {
        cards
      } = state
      return cards.find(card => card.type === typeCard)
    },
  },
  mutations: {
    addPhotoToCard: (state, payload) => {
      const {
        cards
      } = state

      const {
        type,
        photo
      } = payload

      cards.map(elem => {
        if (elem.type === type) {
          elem.photos = [...elem.photos, photo]
        }
      });
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],

})
