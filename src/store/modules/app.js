const app = {
  state: {
    appConfig: {},
  },
  mutations: {
    INIT_APP_CONFIG(state, payload = {}) {
      state.appConfig = payload;
    },
  },
  actions: {
    initAppConfig({ commit, state }, payload = {}) {
      commit('INIT_APP_CONFIG', payload);
    },
  },
  getter: {
    configInfo(state) {
      return state.appConfig;
    },
  },
};
export default app;
