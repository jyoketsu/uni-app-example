<template>
  <view class="language-select">
    <uni-data-select
      v-model="language"
      :clear="false"
      :localdata="languages"
      @change="change"
    ></uni-data-select>
  </view>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "../store";
const store = useStore();
const { locale } = useI18n();
const language = computed(() => store.state.common.locale);

const languages = [
  { value: "zh-CN", text: "简体中文" },
  { value: "zh-TW", text: "繁體中文" },
  { value: "en", text: "English" },
  { value: "ja", text: "日本語" },
];
const change = (value: string) => {
  locale.value = value;
  store.dispatch("common/changeLocale", value);
};
</script>
<style scoped lang="scss">
.language-select {
  margin-right: 15px;
  width: 120px;
}
</style>
