import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const instance = Axios.create({
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
    //comment: [],
    status: '',
    user: {
      userId: -1,
      token: '',
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
  //SET_COMMMENT(state, comment) {
     // state.comment = comment;
   // },
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user) {
      state.user = user;
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
    newAccount: ({ commit }, userInfos,) => {
      commit;
      return new Promise((resolve, reject) => {
        instance.post('/Signup', userInfos)
          .then(function (response) {
            console.log(response)
            resolve(response);
          })
          .catch(function (error) {
            console.log('Error')
            reject(error);
          });
      })
    },
    createArticle: ({ commit }, userInfos) => {
      commit;
      return new Promise((resolve, reject) => {
        instance.post('/Articles', userInfos)
          .then(function (response) {
            console.log(response)
            resolve(response);
          })
          .catch(function (error) {
            console.log('Error')
            reject(error);
          });
      })
    },
    modifyArticle: ({ commit }, userInfos) => {
      commit;
      return new Promise((resolve, reject) => {
        instance.put('/Articles', userInfos)
          .then(function (response) {
            console.log(response)
            resolve(response);
          })
          .catch(function (error) {
            console.log('Error')
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