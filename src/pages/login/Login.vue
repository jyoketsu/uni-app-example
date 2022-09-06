<template>
  <view class="account">
    <web-view
      src="https://psnine.com"
      :webview-styles="{ width: '100%', height: '100%' }"
    ></web-view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.account {
  width: 360px;
  height: 600px;
  // background-color: #fff;
}
</style>
