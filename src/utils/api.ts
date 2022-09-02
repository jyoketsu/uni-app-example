const AUTH_URL = import.meta.env.VITE_AUTH_URL;
const API_URL = import.meta.env.VITE_API_URL;

let token = localStorage.getItem("auth_token") || "";
const locale = localStorage.getItem("LOCALE") || "zh-CN";

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
