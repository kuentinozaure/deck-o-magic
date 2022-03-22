import { DECK_OF_CARDS } from "../constants/deck";
import { USERS } from "../constants/user";

export function GET_RANDOM_CARD() {
  return Math.floor(Math.random() * DECK_OF_CARDS.length);
}

export function GET_RANDOM_USER() {
  return Math.floor(Math.random() * USERS.length);
}
