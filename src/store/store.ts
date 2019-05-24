import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { keyboard } from './keyboard';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    keyboard
  }
};

function getStore(_store: StoreOptions<RootState>) {
  return new Vuex.Store<RootState>(_store);
}

export { getStore };
export default getStore(store);
