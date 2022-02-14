import axios from 'axios';
import { message } from 'ant-design-vue';

const host = localStorage.getItem('host');
const token = localStorage.getItem('token');
// const isProduction = process.env.NODE_ENV === 'production';

axios.interceptors.request.use(
  function (config) {
    if (!/http/.test(config.url)) {
      // 优化双斜杠问题
      config.url = (host + `${config.url || ''}`)
        .replace(/\/\//g, '/')
        .replace('http:/', 'http://')
        .replace('https:/', 'https://');
    }
    config.headers.token = token;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    message.warning(error.message);
    return Promise.reject(error);
  }
);

export default axios;
