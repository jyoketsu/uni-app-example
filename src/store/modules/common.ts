import { ActionTree, MutationTree } from "vuex";
import { CommonState } from "../types/CommonState";
import { RootState } from "../types/RootState";

const state: CommonState = {
  loading: false,
  // dark: uni.getStorageSync("DARK") ? true : false,
  dark: false,
  route: null,
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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
