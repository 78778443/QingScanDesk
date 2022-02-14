<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.svg" alt="QingScan" />
        </router-link>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="onClick"
      >
        <a-menu-item key="dashboard">
          <Icon type="zhuye" />
          <span>仪表盘</span>
        </a-menu-item>
        <a-menu-item key="blackBox">
          <Icon type="saomiao" />
          <span>黑盒扫描</span>
        </a-menu-item>
        <a-menu-item key="collectInformation">
          <Icon type="shujushouji" />
          <span>信息收集</span>
        </a-menu-item>
        <a-menu-item key="whiteBoxAudit">
          <Icon type="fengkongshenji" />
          <span>白盒审计</span>
        </a-menu-item>
        <a-menu-item key="batchVerification">
          <verified-outlined />
          <span>批量验证</span>
        </a-menu-item>
        <a-menu-item key="setting">
          <setting-outlined />
          <span>设置</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff"> </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { VerifiedOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, getCurrentInstance } from 'vue';
import Icon from '@/components/icon/index.vue';
export default defineComponent({
  components: {
    Icon,
    SettingOutlined,
    VerifiedOutlined,
  },
  setup() {
    const _this = getCurrentInstance().proxy;
    const onClick = (item) => {
      _this.$router.push(`/${item.key}`);
    };
    return {
      selectedKeys: ref(['dashboard']),
      collapsed: ref(true),
      onClick,
    };
  },
});
</script>
<style lang="less">
.layout {
  height: 100%;
  .content {
    padding: 16px;
    overflow-y: auto;
  }
}
.logo {
  background: #fff;
  margin: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  img {
    max-width: 100%;
  }
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
