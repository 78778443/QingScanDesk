import * as VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';
import Dashboard from '@/view/dashboard/index.vue';
import BlackBox from '@/view/black-box/index.vue';
import BatchVerification from '@/view/batch-verification/index.vue';
import CollectInformation from '@/view/collect-information/index.vue';
import WhiteBoxAudit from '@/view/white-box-audit/index.vue';

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
    ],
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes, // (缩写) 相当于 routes: routes
});
