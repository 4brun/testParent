import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      parent: {},
      childrens: [],
   },
   getters: {
      PARENT: state => state.parent,
      CHILDRENS: state => state.childrens
   },
   mutations: {
      ADD_CHILDREN: (state, payload) => {
         state.childrens.push(payload)
      },
      DELETE_CHILDREN: (state, id) => {
         state.childrens = state.childrens.filter(el => el.id !== id);
      }
   },
   actions: {},
});