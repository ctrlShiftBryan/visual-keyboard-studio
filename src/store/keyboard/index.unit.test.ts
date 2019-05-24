import { createLocalVue } from '@vue/test-utils';
import Vuex, { StoreOptions } from 'vuex';
import { keyboard } from '.';
import { getStore } from '../store';
import { RootState } from '../types';

const localVue = createLocalVue();
localVue.use(Vuex);

const initialState: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    keyboard
  }
};
const store = getStore(initialState);

describe('store', () => {
  describe('state', () => {
    it('a getter', () => {
      expect(store.getters['profile/fullName']).toEqual('No Name');
    });
  });
});
