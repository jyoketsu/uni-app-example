export function getDeviceType() {
  const ua = window.navigator.userAgent.toLowerCase();
  const matchs = ua.match(
    /electron|micromessenger|Android|webOS|iPhone|Macintosh|windows/i
  );
  return matchs && matchs.length ? matchs[0] : 1;
}

export function getDefaultLanguage() {
  const languages = ["zh-TW", "ja", "zh-CN", "zh", "en"];
  const systemLan = navigator.language;
  if (systemLan && languages.includes(systemLan)) {
    return systemLan;
  } else {
    return "en";
  }
}
