import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app"
import event from "./modules/event"

Vue.use(Vuex);


const initialState = () => ({
  ...app.state,
  ...event.state
});

const state = initialState();

const getters = {
  ...app.getters,
  ...event.getters
};

const actions = {
  ...app.actions,
  ...event.actions
};

const mutations = {
  ...app.mutations,
  ...app.mutations
};


export default new Vuex.Store({
  getters,
  actions,
  mutations,
  state
});
