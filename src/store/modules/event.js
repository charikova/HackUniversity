import axios from "axios";
import Vue from "vue";


const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
  }/api/`;

const initialState = () => ({
  songs: []
});

const state = initialState();

const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};


const getters = {
  getAllSongs: ({songs}) => songs,
};

const actions = {
  getSongs({getters, commit}, {eventId}) {
    return axios
      .get(`${URL}event/${eventId}/tracks/`, null, axiosConfig)
      .then(({data}) => {
        commit("setSongs", data)
      })
      .catch((error) => {
        throw error
      })
  }
}

const mutations = {
  setSongs(state, songs) {
    state.songs = songs;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
