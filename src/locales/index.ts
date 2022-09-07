import { createI18n } from "vue-i18n"; // 引入vue-i18n组件
import zhCn from "./zh-cn"; // 中文语言包
import zhTw from "./zh-tw";
import en from "./en"; // 英文语言包
import ja from "./ja";
import { getDefaultLanguage } from "../utils/util";

const defaultLocale = getDefaultLanguage();

// 实例化I18n
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale, // 初始化配置语言
  messages: {
    "zh-CN": zhCn,
    "zh-TW": zhTw,
    zh: zhTw,
    en,
    ja,
  },
});

export default i18n;
