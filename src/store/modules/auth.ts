import { MutationTree, ActionTree } from "vuex";
import { RootState } from "../types/RootState";
import { AuthState } from "../types/AuthState";
import api from "../../utils/api";
import i18n from "../../locales";

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
    uni.clearStorage();
  },
};

const actions: ActionTree<AuthState, RootState> = {
  // 登录
  async login(
    { commit },
    { mobile, password }: { mobile: number; password: string }
  ) {
    uni.showLoading({ title: i18n.global.t("feedback.loading") });
    const res: any = await api.auth.login(mobile, password);
    uni.hideLoading();
    if (res.statusCode === "200") {
      api.setToken(res.token);
      commit("setUser", res);
    } else {
      commit("clearUser");
    }
  },
  // 获取用户信息
  async getUserByToken({ commit }, token: string) {
    const res: any = await api.auth.loginByToken(token);
    if (res.status === 200) {
      api.setToken(token);
      const user = res.data;
      commit("setUser", {
        _key: user._key,
        token: user.token,
        mobile: user.mobile,
        mobileArea: user.mobileArea,
        profile: {
          avatar: user.userAvatar,
          trueName: user.userName,
          nickName: user.userName,
          email: user.email,
        },
      });
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
