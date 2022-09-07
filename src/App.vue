<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "./store";
const store = useStore();
const { locale } = useI18n();
const expired = computed(() => store.state.auth.expired);
onLaunch(() => {
  console.log("App Launch");
  // 切换语言
  const lan = uni.getStorageSync("LOCALE");
  if (lan) {
    locale.value = lan;
    store.dispatch("common/changeLocale", lan);
  }

  // 自动登录
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

watch(expired, (newVal, oldVal) => {
  if (newVal && !oldVal) {
    uni.navigateTo({ url: "/pages/login/index" });
  }
});
</script>
<style>
.uni-top-window {
  overflow: visible;
}
</style>
