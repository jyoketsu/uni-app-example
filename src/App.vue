<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useStore } from "./store";
const store = useStore();
onLaunch(() => {
  console.log("App Launch");

  const token = uni.getStorageSync("auth_token");
  if (token) {
    store.dispatch("auth/getUserByToken", token);
  } else {
    uni.navigateTo({ url: "/pages/login/index" });
  }
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
