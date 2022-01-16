<template>
  <div style="padding: 16px; background-color: #fff">
    <a-descriptions title="基础信息" size="small" layout="vertical" bordered>
      <a-descriptions-item label="id">Zhou Maomao</a-descriptions-item>
      <a-descriptions-item label="状态">1810000000</a-descriptions-item>
      <a-descriptions-item label="名称">Hangzhou, Zhejiang</a-descriptions-item>
      <a-descriptions-item label="URL">empty</a-descriptions-item>
      <a-descriptions-item label="创建时间">
        2022-01-12 21:05:07
      </a-descriptions-item>
      <a-descriptions-item label="是否删除"> 0 </a-descriptions-item>
      <a-descriptions-item label="名称">1 </a-descriptions-item>
      <a-descriptions-item label="密码">1 </a-descriptions-item>
    </a-descriptions>

    <a-descriptions
      title="扫描时间"
      size="small"
      layout="vertical"
      bordered
      style="margin-top: 16px"
    >
      <a-descriptions-item label="RAD(爬虫)">Zhou Maomao</a-descriptions-item>
      <a-descriptions-item label="whatweb(指纹扫描)"
        >1810000000</a-descriptions-item
      >
      <a-descriptions-item label="V2子域名扫描时间"
        >Hangzhou, Zhejiang</a-descriptions-item
      >
      <a-descriptions-item label="获取基本信息时间">empty</a-descriptions-item>
      <a-descriptions-item label="xray扫描时间"
        >2022-01-15 00:56:52</a-descriptions-item
      >
      <a-descriptions-item label="dirmap扫描时间"
        >2022-01-15 00:56:52</a-descriptions-item
      >
      <a-descriptions-item label="DisMap扫描时间"
        >2022-01-15 00:56:52</a-descriptions-item
      >
      <a-descriptions-item label="Crawlergo扫描时间"
        >2022-01-15 00:56:52</a-descriptions-item
      >
      <a-descriptions-item label="Vulmap扫描时间"
        >2022-01-15 00:56:52</a-descriptions-item
      >
      <a-descriptions-item label="awvs扫描时间"
        >2022-01-15 00:56:52</a-descriptions-item
      >
      <a-descriptions-item label="子域名扫描时间"
        >2022-01-15 00:56:52</a-descriptions-item
      >
    </a-descriptions>

    <div class="custom-table">
      <p class="table-title">RAD(URL爬虫)</p>
      <a-table :columns="radColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">crawlergo(URL爬虫扫描)</p>
      <a-table :columns="crawlergoColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">AWVS(综合扫描)</p>
      <a-table :columns="awvsColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">nuclei(POC扫描)</p>
      <a-table :columns="nucleiColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">XRAY(黑盒+POC)</p>
      <a-table :columns="xrayColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">app信息</p>
      <a-table :columns="xrayColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">whatweb（指纹识别）</p>
      <a-table :columns="whatwebColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">sqlmap（SQL注入）</p>
      <a-table :columns="sqlmapColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">oneforall（子域名）</p>
      <a-table :columns="oneforallColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">hydra（主机暴力破解）</p>
      <a-table :columns="hydraColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">dirmapColumns</p>
      <a-table :columns="hydraColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">Nmap列表</p>
      <a-table :columns="nmapColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">vulmap信息</p>
      <a-table :columns="vulmapColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">主机列表</p>
      <a-table :columns="hostColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">DisMap（CMS指纹识别）</p>
      <a-table :columns="disMapColumns" :data-source="[]"> </a-table>
    </div>

    <div class="custom-table">
      <p class="table-title">自定义插件</p>
      <a-table :columns="pluginColumns" :data-source="[]"> </a-table>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const radColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'URL',
        dataIndex: 'url',
      },
      {
        title: 'APP',
        dataIndex: 'app',
      },
      {
        title: 'ICP ',
        dataIndex: 'icp',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
      },
      {
        title: 'sqlmap扫描时间',
        dataIndex: 'sqlmap',
      },
      {
        title: '创建时间',
        dataIndex: 'createDate',
      },
    ];

    const crawlergoColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'URL',
        dataIndex: 'url',
      },
      {
        title: '扫描时间',
        dataIndex: 'date',
      },
    ];

    const awvsColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'severity',
        dataIndex: 'severity',
      },
      {
        title: 'URL',
        dataIndex: 'url',
      },
      {
        title: '发现时间',
        dataIndex: 'date',
      },
      {
        title: '操作',
        dataIndex: 'action',
      },
    ];

    const nucleiColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: 'host',
        dataIndex: 'host',
      },
      {
        title: '扫描时间',
        dataIndex: 'date',
      },
    ];

    const xrayColumns = [
      {
        title: 'app_id',
        dataIndex: 'app_id',
      },
      {
        title: 'cms',
        dataIndex: 'cms',
      },
      {
        title: 'server',
        dataIndex: 'server',
      },
      {
        title: 'statuscode',
        dataIndex: 'statuscode',
      },
      {
        title: 'length',
        dataIndex: 'length',
      },
      {
        title: 'page_title',
        dataIndex: 'page_title',
      },
      {
        title: 'header',
        dataIndex: 'header',
      },
      {
        title: 'icon',
        dataIndex: 'icon',
      },
      {
        title: 'url_screenshot',
        dataIndex: 'url_screenshot',
      },
    ];

    const whatwebColumns = [
      {
        title: 'ID',
        dataIndex: 'ID',
      },
      {
        title: 'target',
        dataIndex: 'target',
      },
      {
        title: 'http_status',
        dataIndex: 'http_status',
      },
      {
        title: 'request_config',
        dataIndex: 'request_config',
      },
      {
        title: 'request_config',
        dataIndex: 'request_config',
      },
    ];

    const sqlmapColumns = [
      {
        title: 'ID',
        dataIndex: 'ID',
      },
      {
        title: 'urls_id',
        dataIndex: 'urls_id',
      },
      {
        title: 'type',
        dataIndex: 'type',
      },
      {
        title: 'title',
        dataIndex: 'title',
      },
      {
        title: 'payload',
        dataIndex: 'payload',
      },
      {
        title: 'dbms',
        dataIndex: 'dbms',
      },
      {
        title: 'application',
        dataIndex: 'application',
      },
      {
        title: '时间',
        dataIndex: '时间',
      },
    ];

    const oneforallColumns = [
      {
        title: 'ID',
        dataIndex: 'ID',
      },
      {
        title: '域名',
        dataIndex: 'domain',
      },
      {
        title: '端口',
        dataIndex: 'port',
      },
      {
        title: 'ip',
        dataIndex: 'ip',
      },
      {
        title: '状态',
        dataIndex: 'state',
      },
    ];

    const hydraColumns = [
      {
        title: 'ID',
        dataIndex: 'ID',
      },
      {
        title: 'host',
        dataIndex: 'host',
      },
      {
        title: 'type',
        dataIndex: 'type',
      },
      {
        title: 'username',
        dataIndex: 'username',
      },
      {
        title: '状态',
        dataIndex: 'state',
      },
    ];

    const dirmapColumns = [
      {
        title: 'ID',
        dataIndex: 'ID',
      },
      {
        title: 'code',
        dataIndex: 'code',
      },
      {
        title: 'size',
        dataIndex: 'size',
      },
      {
        title: 'type',
        dataIndex: 'type',
      },
      {
        title: 'url',
        dataIndex: 'url',
      },
      {
        title: '时间',
        dataIndex: '时间',
      },
    ];

    const nmapColumns = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: 'port',
        dataIndex: 'port',
      },
      {
        title: 'host',
        dataIndex: 'host',
      },
      {
        title: 'type',
        dataIndex: 'type',
      },
      {
        title: 'service',
        dataIndex: 'service',
      },
      {
        title: 'is_close',
        dataIndex: 'is_close',
      },
      {
        title: 'create_time',
        dataIndex: 'create_time',
      },
      {
        title: 'update_time',
        dataIndex: 'update_time',
      },
      {
        title: 'os',
        dataIndex: 'os',
      },
      {
        title: 'html',
        dataIndex: 'html',
      },
      {
        title: 'headers',
        dataIndex: 'headers',
      },
      {
        title: 'is_delete',
        dataIndex: 'is_delete',
      },
      {
        title: 'scan_time',
        dataIndex: 'scan_time',
      },
    ];

    const vulmapColumns = [
      {
        title: 'ID',
        dataIndex: 'ID',
      },
      {
        title: 'app_id',
        dataIndex: 'app_id',
      },
      {
        title: 'urls_id',
        dataIndex: 'urls_id',
      },
      {
        title: 'author',
        dataIndex: 'author',
      },
      {
        title: 'description',
        dataIndex: 'description',
      },
      {
        title: 'host',
        dataIndex: 'host',
      },
      {
        title: 'port',
        dataIndex: 'port',
      },
      {
        title: 'param',
        dataIndex: 'param',
      },
      {
        title: 'request',
        dataIndex: 'request',
      },
      {
        title: 'payload',
        dataIndex: 'payload',
      },
      {
        title: 'response',
        dataIndex: 'response',
      },
      {
        title: 'url',
        dataIndex: 'url',
      },
      {
        title: 'plugin',
        dataIndex: 'plugin',
      },
      {
        title: 'target',
        dataIndex: 'target',
      },
      {
        title: 'vuln_class',
        dataIndex: 'vuln_class',
      },
      {
        title: 'create_time',
        dataIndex: 'create_time',
      },
    ];

    const hostColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'app_id',
        dataIndex: 'app_id',
      },
      {
        title: 'domain',
        dataIndex: 'domain',
      },
      {
        title: 'host',
        dataIndex: 'host',
      },
      {
        title: 'status',
        dataIndex: 'status',
      },
      {
        title: 'create_time',
        dataIndex: 'create_time',
      },
      {
        title: 'isp',
        dataIndex: 'isp',
      },
      {
        title: 'country',
        dataIndex: 'country',
      },
      {
        title: 'region',
        dataIndex: 'region',
      },
      {
        title: 'city',
        dataIndex: 'city',
      },
      {
        title: 'area',
        dataIndex: 'area',
      },
      {
        title: 'hydra_scan_time',
        dataIndex: 'hydra_scan_time',
      },
      {
        title: 'port_scan_time',
        dataIndex: 'port_scan_time',
      },
      {
        title: 'target',
        dataIndex: 'target',
      },
      {
        title: 'is_delete',
        dataIndex: 'is_delete',
      },
      {
        title: 'user_id',
        dataIndex: 'user_id',
      },
    ];

    const disMapColumns = [
      {
        title: 'ID',
        dataIndex: 'ID',
      },
      {
        title: 'result',
        dataIndex: 'result',
      },
      {
        title: '时间',
        dataIndex: '时间',
      },
    ];

    const pluginColumns = [
      {
        title: 'ID',
        dataIndex: 'ID',
      },
      {
        title: '所属项目',
        dataIndex: 'ID',
      },
      {
        title: '插件名称',
        dataIndex: 'pluginName',
      },
    ];

    return {
      pluginColumns,
      disMapColumns,
      hostColumns,
      vulmapColumns,
      nmapColumns,
      dirmapColumns,
      hydraColumns,
      radColumns,
      awvsColumns,
      nucleiColumns,
      xrayColumns,
      sqlmapColumns,
      whatwebColumns,
      oneforallColumns,
      crawlergoColumns,
    };
  },
};
</script>
<style lang="less" scoped>
.custom-table {
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: bold;
  font-size: 16px;
}
</style>
