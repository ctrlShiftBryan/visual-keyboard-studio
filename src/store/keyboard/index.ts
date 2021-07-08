import { ColorScheme } from '@/models/types/ColorScheme';
import { Module } from 'vuex';
import { RootState } from '../types';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { KeyboardState } from './types';

export const state: KeyboardState = {
  colorScheme: new ColorScheme({})
};

const namespaced: boolean = true;

export const keyboard: Module<KeyboardState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
