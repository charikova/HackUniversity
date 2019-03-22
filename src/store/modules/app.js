import axios from "axios";
import Vue from "vue";

import versionChecker from "../versionChecker";

const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
  }/api/`;

const initialState = () => ({
  name:"",
});

const state = initialState();

const getters = {
  getMeetupName: ({ name }) => name,
};

const actions = {

};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations
};
