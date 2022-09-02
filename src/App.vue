<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useStore } from "./store";
const store = useStore();
onLaunch(() => {
  console.log("App Launch");
  store.dispatch("auth/getUserByToken", "aaaa");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
