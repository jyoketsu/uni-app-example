<template>
  <view class="left-window"><PageNavigator /></view>
</template>
<script setup lang="ts">
import PageNavigator from "../components/PageNavigator.vue";
</script>
<style scoped lang="scss">
.left-window {
  height: calc(100vh - 62px);
  // border-right: 1px solid $uni-border-color;
  background-color: $uni-bg-color-grey;
}
</style>
