export const state = () => ({
  isLoggedIn: false,
  userData: null,
  userName: null
});

export const mutations = {
  setLoginState(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  },
  setUserData(state, { userData, userName }) {
    state.userData = userData;
    state.userName = userName;
  }
};

export const actions = {
  login({ commit }, { userData, userName }) {
    // 로그인 로직 구현
    commit('setLoginState', true);
    commit('setUserData', { userData, userName });
  },
  logout({ commit }) {
    // 로그아웃 로직 구현
    commit('setLoginState', false);
    commit('setUserData', { userData: null, userName: null });
  }
};
