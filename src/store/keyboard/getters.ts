import { GetterTree } from "vuex";
import { ColorScheme } from "../../models/types/ColorScheme";
import { RootState } from "../types";
import { KeyboardState } from "./types";

export const getters: GetterTree<KeyboardState, RootState> = {
  colors(state): ColorScheme {
    const { colorScheme } = state;
    return colorScheme;
  }
};
