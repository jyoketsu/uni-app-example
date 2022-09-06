<template>
  <view class="content">
    <view class="text-area">
      <text class="title">页面2</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useCurrentRoute } from "../../composables/currentRoute";
useCurrentRoute();
</script>

<style>
.content {
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 23px;
}
</style>
