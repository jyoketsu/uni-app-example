<template>
  <view class="login">
    <view class="logo" />
    <button @click="handleLogin">登录</button>
    <web-view
      :src="url"
      v-if="showLogin"
      @onPostMessage="handleMessage"
    ></web-view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const redirect = "/pages/login/index";
// const redirect = "https://psnine.com";
const logo = "https://notes.qingtime.cn/icons/logo2.svg";
const APP = import.meta.env.VITE_APP;
const APP_HIGH = import.meta.env.VITE_APP_HIGH;
const url = `https://account.qingtime.cn?app=${APP}&apphigh=${APP_HIGH}&logo=${logo}&redirect=${redirect}`;

const showLogin = ref(false);

const handleLogin = () => {
  showLogin.value = true;
};

const handleMessage = (e: any) => {
  console.log("---onPostMessage---", e);
  alert("aaa");
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 120px;
  height: 120px;
  margin-bottom: 45px;
  background-image: url("/static/logo.png");
  background-size: cover;
  background-position: center;
}
</style>
