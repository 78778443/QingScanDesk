import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { router } from '@/config/router';
import App from './app.vue';

import './theme/index.less';
import './assets/font/iconfont';

createApp(App).use(Antd).use(router).mount('#app');
