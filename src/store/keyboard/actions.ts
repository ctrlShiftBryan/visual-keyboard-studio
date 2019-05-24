// profile/actions.ts
import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { KeyboardState } from './types';

export const actions: ActionTree<KeyboardState, RootState> = {
  // fetchData({ commit }): any {
  //   axios({
  //     url: "https://...."
  //   }).then(
  //     response => {
  //       const payload: User = response && response.data;
  //       commit("profileLoaded", payload);
  //     },
  //     error => {
  //       console.log(error);
  //       commit("profileError");
  //     }
  //   );
  // }
};
