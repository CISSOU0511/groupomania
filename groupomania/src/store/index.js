import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const getDefaultState = () => {
  return {
    token: '',
    user: {}
  };
};

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    status: '',
    user: {
      userId: -1,
      token:'',
    },
  },
  getters: {
    isLoggedIn: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user) {
      state.user= user;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET: state => {
      Object.assign(state, getDefaultState());
    }
  },
  actions: {
    signin: ({ commit }, userInfos) => {
      commit ('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('/login', userInfos)
          .then(function (response) {
            commit('setStatus', 'error');
            commit('logUser', response.data);
            resolve(response);
          })
          .catch(function (error) {
            commit('setStatus', 'error_login');
            reject(error);
          });
      })
    },
    signup: ({ commit }, userInfos) => {
      return new Promise((resolve, reject) => {
        commit;
        instance.post('/signup', userInfos)
          .then(function (response) {
            commit('setStatus', 'created');
            resolve(response);
          })
          .catch(function (error) {
            commit('setStatus', 'error_create');
            reject(error);
          });
      })
    },
    login: ({ commit }, { token, user }) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', user);

      // set auth header
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit('RESET', '');
    }
  }
});