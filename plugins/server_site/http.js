import Axios from "axios";
import config from "~/config";


const http = Axios.create({
    baseURL: config.api,
    timeout: 8000
});

function LogicError (message, code, data) {
    this.message = message;
    this.code = code;
    this.data = data;
    this.name = "LogicError";
}

LogicError.prototype = new Error();
LogicError.prototype.constructor = LogicError;

  // http.interceptors.request.use((data, headers) => {
  //     return data;
  // });

 //http request 拦截器
//   http.interceptors.request.use(
//     config => {
//       try {
//         if (window.localStorage.Token&&window.localStorage.Token.length>=128) {//store.state.token 获取不到值
//           config.headers.Authorization = window.localStorage.Token;
//         }
//       }catch (e) {
//       }
//       return config;
//     },
//     err => {
//       return Promise.reject(err);
//     }
//   );

http.interceptors.response.use(response => {
    const data = response.data;
    if(data.code && data.code == 1){
        return data.data;
    } else if(data.msg){
        throw new LogicError(data.msg);
    } else {
        throw new LogicError("返回的数据格式有误");
    }
}, err => {
    throw new LogicError("网络请求错误");
});

export default http;