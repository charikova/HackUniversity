import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app"


Vue.use(Vuex);


const initialState = () => ({
  ...app.state,
});

const state = initialState();

const getters = {
  ...app.getters
};

const actions = {
  ...app.actions,
};

const mutations = {
  ...app.mutations,

};


export default new Vuex.Store({
  getters,
  actions,
  mutations,
  state
});
