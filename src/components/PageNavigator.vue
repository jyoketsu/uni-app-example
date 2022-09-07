<template>
  <view class="page-menu">
    <navigator url="/pages/index/index" hover-class="navigator-hover">
      <view
        :class="`navigate-item ${
          currentRoutePath === '/pages/index/index' ? 'active' : ''
        }`"
      >
        <text>{{ $t("pages.page1") }}</text>
      </view>
    </navigator>
    <navigator url="/pages/page2/index" hover-class="navigator-hover">
      <view
        :class="`navigate-item ${
          currentRoutePath === '/pages/page2/index' ? 'active' : ''
        }`"
      >
        <text>{{ $t("pages.page2") }}</text>
      </view>
    </navigator>
    <navigator url="/pages/page3/index" hover-class="navigator-hover">
      <view
        :class="`navigate-item ${
          currentRoutePath === '/pages/page3/index' ? 'active' : ''
        }`"
      >
        <text>{{ $t("pages.page3") }}</text>
      </view>
    </navigator>
    <navigator url="/pages/page4/index" hover-class="navigator-hover">
      <view
        :class="`navigate-item ${
          currentRoutePath === '/pages/page4/index' ? 'active' : ''
        }`"
      >
        <text>{{ $t("pages.page4") }}</text>
      </view>
    </navigator>
  </view>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store";
const store = useStore();
const currentRoutePath = computed(() => store.state.common.route?.path);
</script>
<style lang="scss">
.page-menu {
  width: 100%;
}
.navigate-item {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  font-size: 18px;
  margin-bottom: 5px;
  transition: background-color 300ms;
}
.navigate-item:hover {
  background-color: $uni-bg-color-hover;
}
.navigate-item.active {
  background-color: $uni-bg-color-hover;
  font-weight: 800;
  transition: filter 300ms;
}
.navigate-item.active:hover {
  filter: brightness(0.9);
}
</style>
