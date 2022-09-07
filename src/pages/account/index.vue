<template>
  <view class="content">
    <user-avatar
      class="user-avatar"
      :size="88"
      :url="user?.profile.avatar"
      :user-key="user?._key"
    />
    <button @click="handleLogout">{{ $t("login.logout") }}</button>
  </view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../../store";
import UserAvatar from "../../components/UserAvatar.vue";

const store = useStore();
const user = computed(() => store.state.auth.user);
const handleLogout = () => {
  store.dispatch("auth/logout");
};
</script>

<style scoped>
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.user-avatar {
  margin-bottom: 35px;
}
</style>
