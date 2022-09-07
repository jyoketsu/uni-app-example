import { ActionTree, MutationTree } from "vuex";
import { getDefaultLanguage } from "../../utils/util";
import { CommonState } from "../types/CommonState";
import { RootState } from "../types/RootState";

const state: CommonState = {
  loading: false,
  // dark: uni.getStorageSync("DARK") ? true : false,
  dark: false,
  route: null,
  locale: getDefaultLanguage(),
};

const mutations: MutationTree<CommonState> = {
  setLoading(state, data) {
    state.loading = data;
  },
  setDark(state, data) {
    if (data) {
      uni.setStorage({
        key: "DARK",
        data,
      });
    } else {
      uni.removeStorage({
        key: "DARK",
      });
    }
    state.dark = data;
  },
  setRoute(state, data) {
    state.route = data;
  },
  setLocale(state, data) {
    state.locale = data;
  },
};

const actions: ActionTree<CommonState, RootState> = {
  getCurrentRoute({ commit }) {
    const routes = getCurrentPages();
    let curRoute: any = routes[routes.length - 1];
    // console.log("---curRoute---", curRoute);
    commit("setRoute", {
      route: curRoute.route,
      path: curRoute.$page.path,
      options: curRoute.$page.options,
    });
  },
  changeLocale({ commit }, locale) {
    uni.setStorage({ key: "LOCALE", data: locale });
    commit("setLocale", locale);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
