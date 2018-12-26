// 定义 http 插件，是一个全局变量
import Vue from "vue";
import http from "./http.js";// 引入http封装的axios

const install = function (VueClass, opts = {}) {

    // http method
    VueClass.http = http;
    VueClass.prototype.$http = http;
};
Vue.use(install);// 在vue 中，使用该插件