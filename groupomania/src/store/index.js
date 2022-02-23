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
    status: '',
    userInfos:
    {
      nom: '',
      prenom: '',
      email: '',
      photo: '',
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
    userInfos: function (state, userInfos) {
      state.userInfos = userInfos;
    },
    logout: function (state) {
      state.user = {
        userId: -1,
        token: '',
      }
      localStorage.removeItem('user');
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
    createAccount: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        commit;
        instance.post('/Signup', userInfos)
        .then(function (response) {
          commit('setStatus', 'created');
          resolve(response);
        })
        .catch(function (error) {
          commit('setStatus', 'error_create');
          reject(error);
        });
      });
    },
    signin:({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('/login', userInfos)
        .then(function (response) {
          commit('setStatus', '');
          commit('logUser', response.data);
          resolve(response);
        })
        .catch(function (error) {
          commit('setStatus', 'error_login');
          reject(error);
        });
      });
    },
    createArticle: ({commit}) => {
      commit;
      return new Promise((resolve, reject) => {
        instance.put('/NewArticle')
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
    modifyArticle: ({commit}) => {
      commit;
      return new Promise((resolve, reject) => {
        instance.put('/NewArticle')
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
    /*createComment: ({commit}) => {
      commit;
      return new Promise((resolve, reject) => {
        instance.post('/comment')
          .then(function (response) {
            console.log(response)
            resolve(response);
          })
          .catch(function (error) {
            console.log('Error')
            reject(error);
          });
      })
    },*/
    login: ({ commit }, { token, user }) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', user);


      // set auth header
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit('RESET', '');
    }
  },
});