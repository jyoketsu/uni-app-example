<template>
  <view
    class="avatar"
    :style="`width:${size}px;height:${size}px;background-image:url('${
      url || '/static/avatar.svg'
    }')`"
    @click="handleClick"
  ></view>
</template>
<script setup lang="ts">
const props = defineProps<{
  size: number;
  userKey?: string;
  url?: string;
}>();

const handleClick = () => {
  if (!props.userKey) {
    uni.navigateTo({ url: "/pages/login/index" });
  } else {
    uni.navigateTo({ url: "/pages/account/index" });
  }
};
</script>
<style scoped>
.avatar {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border-radius: 50%;
}
</style>
