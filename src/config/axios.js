import axios from 'axios';
import { message } from 'ant-design-vue';

// const host = `http://txy8g.songboy.site:18008`;

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // if (!/http/.test(config.url)) {
    //   config.url = host + `/${config.url || ''}`.replace(/\/\//g, '/');
    // }
    // Do something before request is sent
    config.headers.token = '1ca4725c34758183af3fd1f723f07a31';
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    message.warning(error.message);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;
