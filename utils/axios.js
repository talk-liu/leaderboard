//1、引入axios
import axios from "axios";
//2、创建axios的实例
let httpService = axios.create({
  baseUrl: process.env.NODE_ENV === "development" ? "/devApi" : "/proApi", // TODO:具体的配置可以根据项目情况而来
  timeout: 35000,
});
//5、get请求的封装
export function get(url, params = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: "get",
      params: params,
      headers: headers,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function post(
  url,
  params = {},
  headers = { "Content-Type": "application/json" }
) {
  return new Promise((resolve, reject) => {
    params["game_id"] = parseInt(localStorage.getItem("gameid"));
    params["access_token"] = localStorage.getItem("access_token");
    httpService({
      url: url,
      method: "post",
      data: params,
      headers: headers,
    })
      .then((res) => {
        if (res.data.code == 1001) {
          localStorage.removeItem("access_token");
          alert(res.data.message);
          location.reload();
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//7、将模块暴露
export default {
  get,
  post,
};