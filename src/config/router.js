import * as VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';
import Dashboard from '@/view/dashboard/index.vue';
import BlackBox from '@/view/black-box/index.vue';
import BatchVerification from '@/view/batch-verification/index.vue';
import CollectInformation from '@/view/collect-information/index.vue';
import WhiteBoxAudit from '@/view/white-box-audit/index.vue';
import BlackBoxDetail from '@/view/black-box-detail/index.vue';
import Setting from '@/view/setting/index.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/blackBox',
        component: BlackBox,
      },
      {
        path: '/blackBoxDetail/:id',
        component: BlackBoxDetail,
      },
      {
        path: '/whiteBoxAudit',
        component: WhiteBoxAudit,
      },
      {
        path: '/collectInformation',
        component: CollectInformation,
      },
      {
        path: '/batchVerification',
        component: BatchVerification,
      },
      {
        path: '/setting',
        component: Setting,
      },
    ],
  },
];

export const router = VueRouter.createRouter({
  history: process.env.WEBPACK_DEV_SERVER_URL
    ? VueRouter.createWebHistory()
    : VueRouter.createWebHashHistory(),
  routes, // (缩写) 相当于 routes: routes
});
