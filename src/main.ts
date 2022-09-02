import { createSSRApp } from "vue";
import App from "./App.vue";
import { store, key } from "./store";
export function createApp() {
  const app = createSSRApp(App);
  app.use(store, key);
  return {
    app,
  };
}
