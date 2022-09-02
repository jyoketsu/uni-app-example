import { InjectionKey } from "vue";
import {
  createStore,
  StoreOptions,
  useStore as baseUseStore,
  Store,
} from "vuex";
import { RootState } from "./types/RootState";
import common from "./modules/common";
import auth from "./modules/auth";

export const key: InjectionKey<Store<RootState>> = Symbol();

const rootStore: StoreOptions<RootState> = {
  modules: {
    auth,
    common,
  },
};

export const store = createStore(rootStore);

// https://vuex.vuejs.org/zh/guide/typescript-support.html#%E7%AE%80%E5%8C%96-usestore-%E7%94%A8%E6%B3%95
export function useStore() {
  return baseUseStore(key);
}
