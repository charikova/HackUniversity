import axios from "axios";
import Vue from "vue";


const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
  }/api/`;

const initialState = () => ({
  name: "",
  eventId: ""
});

const state = initialState();
const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

const getters = {
  getMeetupName: ({name}) => name,
  getEventId: ({eventId}) => eventId,
};

const actions = {
  getEventId({getters, commit},{name,songs}) {

    const data = {
      name:name,
      songs: songs
    }
    return axios
      .post(`${URL}getEventId/`,data, axiosConfig)
      .then(({data}) => {
        commit("setEventId",{data})
      })
      .catch((error) => {
        console.log(error)
      })
  }
};

const mutations = {
  setEventId(state,{eventId}){
    state.eventId = eventId;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
