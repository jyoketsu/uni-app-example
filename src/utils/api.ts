import { getDeviceType } from "./util";

const AUTH_URL = import.meta.env.VITE_AUTH_URL;
const API_URL = import.meta.env.VITE_API_URL;

const APP = import.meta.env.VITE_APP;
const APP_HIGH = import.meta.env.VITE_APP_HIGH;

let token = "";
const locale = "zh-CN";

const common = {
  request(
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    params?: object
  ) {
    return new Promise(async function (resolve, reject) {
      try {
        uni.request({
          method,
          url: path,
          data: params,
          header: {
            token,
            locale,
          },
          success: (res) => {
            resolve(res.data);
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  },
};

const auth = {
  login(mobile: number, password: string) {
    const deviceType = getDeviceType();
    return common.request("GET", `${AUTH_URL}/account`, {
      mobileArea: "+86",
      mobile: mobile,
      password: password,
      service: 3,
      app: APP,
      appHigh: APP_HIGH,
      deviceType: deviceType,
      deviceModel: deviceType,
    });
  },
  loginByToken(token: string) {
    return common.request("GET", `${API_URL}/user`, { token });
  },
};

export default {
  auth,
  setToken: (_token: string) => {
    uni.setStorage({
      key: "auth_token",
      data: _token,
    });
    token = _token;
  },
};
