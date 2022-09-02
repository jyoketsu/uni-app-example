import { MutationTree, ActionTree } from "vuex";
import { RootState } from "../types/RootState";
import { AuthState } from "../types/AuthState";
import api from "../../utils/api";

const state: AuthState = {
  user: null,
  expired: false,
};

const mutations: MutationTree<AuthState> = {
  // 保存用户信息
  setUser(state, data) {
    state.user = data;
    state.expired = false;
  },
  // 清除用户信息
  clearUser(state) {
    state.user = null;
    state.expired = true;
    localStorage.clear();
    localStorage.setItem("EXPIRED_URL", window.location.href);
  },
};

const actions: ActionTree<AuthState, RootState> = {
  // 获取用户信息
  async getUserByToken({ commit }, token: string) {
    const res: any = await api.auth.loginByToken(token);
    if (res.status === 200) {
      api.setToken(token);
      const user = res.result;
      commit("setUser", user);
    } else {
      commit("clearUser");
    }
  },
  logout({ commit }) {
    commit("clearUser");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
