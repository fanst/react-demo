import axios from 'axios';
import commonHelper from './commonHelper';

axios.defaults.baseURL = commonHelper.getApiConfig("baseUrl");

axios.defaults.withCredentials= true; // 允许携带cookie
//axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

//统一预处理

// 请求拦截
axios.interceptors.request.use(function (config) {
    //loaddingstart

    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
    //loaddingend 一些预处理
    //登陆过期统一处理
    if(response.data.code==1001){
        window.location.href='/#/login';
    }
    return response;
}, function (error) {

    if(error.response.status==404){
        window.location.href='/#/404';
    }
    return Promise.reject(error);
});

module.exports = axios;