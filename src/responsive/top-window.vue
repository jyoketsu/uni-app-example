<template>
  <view class="top-window">
    <view class="logo" />
    <text class="title">{{ $t("home.title") }}</text>
    <view class="menu" @click="handleOpenDrawer">
      <uni-icons type="bars" size="30"></uni-icons>
    </view>
    <view class="space" />
    <change-language />
    <user-avatar
      :size="42"
      :url="user?.profile.avatar"
      :user-key="user?._key"
    />
  </view>
  <uni-drawer ref="menuDrawer" mode="left">
    <scroll-view style="height: 100%" scroll-y="true">
      <page-navigator />
    </scroll-view>
  </uni-drawer>
</template>
<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";
import UserAvatar from "../components/UserAvatar.vue";
import { useStore } from "../store";
import ChangeLanguage from "../components/ChangeLanguage.vue";
import PageNavigator from "../components/PageNavigator.vue";

const store = useStore();
const user = computed(() => store.state.auth.user);
const path = computed(() => store.state.common.route?.path);
const menuDrawer = ref<any>(null);

watch(path, (newVal, oldVal) => {
  if (newVal !== oldVal && menuDrawer.value) {
    menuDrawer.value.close();
  }
});

const handleOpenDrawer = () => {
  if (menuDrawer.value) {
    menuDrawer.value.open();
  }
};
</script>
<style scoped lang="scss">
.top-window {
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-position: center;
  border-bottom: 1px solid $uni-border-color;
}
.logo {
  width: 42px;
  height: 42px;
  background-image: url("/static/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.space {
  flex: 1;
}
.title {
  font-size: 24px;
  padding: 0 15px;
}
.menu {
  cursor: pointer;
}
.uni-app--showtopwindow.uni-app--showleftwindow .menu {
  display: none;
}
</style>
