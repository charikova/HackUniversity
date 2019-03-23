import axios from "axios";
import Vue from "vue";


const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
  }/api/`;

const initialState = () => ({
  songs: [],
  socket_connected: false,
  currentSongs: [],
  timer: 0,
  choice: {},
  total: 1
});

const state = initialState();

const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};


const getters = {
  getAllSongs: ({songs}) => songs,
  getTimer: ({timer}) => timer,
  getChoice: ({choice}) => choice,
  getCurrentSongs: ({currentSongs}) => currentSongs,
  getTotal: ({total}) => total
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
  },
  setCurrentSongs({getters, commit}, {eventId, data}) {
    return axios
      .post(`${URL}event/${eventId}/currentTracks/`, data, axiosConfig)
      .then(({data}) => {
        commit("setChoice", array.tracks)
      })
      .catch((error) => {
        throw error
      })
  },
  vote({getters, commit}, {eventId, trackId, inc}) {
      return axios
        .get(`${URL}event/${eventId}/vote/${trackId}/${inc}`, null, axiosConfig)
        .then(({data}) => {
        })
        .catch((error) => {
          throw error
        })

  },
  SOCKET_Current({getters, commit}, {data}) {
    commit("CurrentSongs", data)
  },
  SOCKET_poll({getters, commit}, {data}) {
    commit("ChoiceCount", {data})
  },
  editTotal({commit},flg){
    commit("editedTotal",flg)
  }
}


const mutations = {
  setSongs(state, songs) {
    state.songs = songs;
  },
  SOCKET_OPENED(state) {
    state.socket_connected = true;
  },
  SOCKET_CLOSED(state) {
    state.socket_connected = false;
  },
  CurrentSongs(state, data) {
    state.currentSongs = data.tracks;
    state.timer = data.timer;
  },
  ChoiceCount(state, {data}) {
    console.log(data);
    state.currentSongs.forEach((item) => {
      data.choice.forEach((ch) => {
        if (item.id === ch.id)
          item.count = ch.count
      })
      state.total = data.total;
    })
  },
  editedTotal(state,flg){
    if(flg)
      state.total -= 1;
    else state.total += 1;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
