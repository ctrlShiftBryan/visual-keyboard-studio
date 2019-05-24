import { MutationTree } from "vuex";
import { KeyboardState } from "./types";

export const mutations: MutationTree<KeyboardState> = {
  updatePrimaryColor(state, color: string) {
    state.colorScheme.primaryColor = color;
  }
};
