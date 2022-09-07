<template>
  <view class="login">
    <view class="logo" />
    <uni-forms :modelValue="formData" class="login-form">
      <uni-forms-item :label="$t('login.mobile')" name="mobile">
        <uni-easyinput
          type="number"
          v-model="formData.mobile"
          :placeholder="$t('login.mobilePlaceholder')"
        />
      </uni-forms-item>
      <uni-forms-item :label="$t('login.password')" name="password">
        <uni-easyinput
          type="password"
          v-model="formData.password"
          :placeholder="$t('login.passwordPlaceholder')"
        />
      </uni-forms-item>
    </uni-forms>
    <button @click="submitForm">{{ $t("login.login") }}</button>
  </view>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";
import { useStore } from "../../store";
const store = useStore();
const user = computed(() => store.state.auth.user);
const formData = ref({ mobile: undefined, password: "" });

watch(user, (newVal, oldVal) => {
  if (newVal && !oldVal) {
    uni.navigateTo({ url: "/pages/index/index" });
  }
});

const submitForm = () => {
  store.dispatch("auth/login", formData.value);
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
.login-form {
  width: 340px;
  margin-bottom: 25px;
}
</style>
