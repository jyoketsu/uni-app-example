<template>
  <view class="top-window">
    <view class="logo" />
    <text class="title">标题</text>
    <view class="space" />
    <user-avatar
      :size="42"
      :url="user?.profile.avatar"
      :user-key="user?._key"
    />
  </view>
</template>
<script setup lang="ts">
import { computed } from "vue";
import UserAvatar from "../components/UserAvatar.vue";
import { useStore } from "../store";
const store = useStore();
const user = computed(() => store.state.auth.user);
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
</style>
