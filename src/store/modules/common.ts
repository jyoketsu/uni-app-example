import { ActionTree, MutationTree } from "vuex";
import { CommonState } from "../types/CommonState";
import { RootState } from "../types/RootState";

const state: CommonState = {
  loading: false,
  dark: uni.getStorageSync("DARK") ? true : false,
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
};

const actions: ActionTree<CommonState, RootState> = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
