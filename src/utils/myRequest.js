// 引入axios和qs
export default `
// 请求封装

import axios from "axios";
import store from "../store";
import qs from "qs";
import { Message } from "element-ui";
import NProgress from "nprogress";

axios.defaults.timeout = 9000; //超时响应
// 配置请求头（推荐）
axios.defaults.headers.common["token"] = store.state.token;
// axios 默认不发送cookie，需要全局设置true发送cookie
axios.defaults.withCredentials = true;
let baseURL = window.location.origin;
axios.defaults.baseURL = baseURL; //生产地址
if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "http://192.168.1.1"; //开发地址
}
//赋值判断用json还是formData
let newIsFormData = "";
function isFormDataFun(isFormData) {
  newIsFormData = isFormData;
}
// 请求拦截器
axios.interceptors.request.use(
  config => {
    NProgress.start();
    if (config.method == "post" && newIsFormData) {
      config.headers.post["Content-Type"] = "application/json;charset=utf-8";
    } else if (newIsFormData == false) {
      config.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    }
    return config;
  },
  error => {
    return Promise.error(error);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  response => {
    NProgress.done();
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      Message({
        showClose: true,
        message: response
      }); // 失败 弹出失败提示
      return Promise.reject(response);
    }
  },
  // 服务器状态error
  error => {
    NProgress.done();
    Message({
      showClose: true,
      message: "请求超时！" + error,
      duration: 9000
    }); // 失败 弹出失败提示
    return Promise.reject(error);
    // if (error.response.status) {
    //   return Promise.reject(error.response)
    // }
  }
);

// api方法封装
export default {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params
        })
        .then(res => {
          if (res) {
            if (res.data.code === 0) {
              resolve(res.data); // 成功
            } else {
              resolve(res.data);
              Message({
                showClose: true,
                message: res.data.message,
                duration: 2000
              }); // 失败 弹出失败提示
            }
          }
        })
        .catch(err => {
          reject(err); //失败
        });
    });
  },
  post(url, params = {}, isFormData = true) {
    isFormDataFun(isFormData);
    if (isFormData) {
      params = JSON.stringify(params);
    } else {
      params = qs.stringify(params);
    }
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then(res => {
          if (res) {
            if (res.data.code === 0) {
              resolve(res.data); // 成功
            } else {
              resolve(res.data);
              Message({
                showClose: true,
                message: res.data.message,
                duration: 2000
              }); // 失败 弹出失败提示
            }
          }
        })
        .catch(err => {
          reject(err); // 失败
        });
    });
  }
};
//  `;
