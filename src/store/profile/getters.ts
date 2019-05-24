// profile/getters.ts
import { GetterTree } from "vuex";
import { RootState } from "../types";
import { ProfileState } from "./types";

export const getters: GetterTree<ProfileState, RootState> = {
  fullName(state): string {
    const { user } = state;
    const firstName = (user && user.firstName) || "No";
    const lastName = (user && user.lastName) || "Name";
    return `${firstName} ${lastName}`;
  },

  state(state): any {
    return state;
  }
};
