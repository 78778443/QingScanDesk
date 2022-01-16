<template>
  <div class="page-content">
    <div class="table-header-actions">
      <a-button type="primary" @click="batchAdd">批量添加目标</a-button>
      <a-button type="primary" @click="download">下载模板</a-button>
      <a-button type="primary" @click="add">添加</a-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="pagination"
      :total="100"
      @change="search"
      :loading="loading"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'action'">
          <span>
            <a>启动代理</a>
            <a-divider type="vertical" />
            <a @click="actions('detail')">查看详情</a>
            <a-divider type="vertical" />
            <a>重新扫描</a>
            <a-divider type="vertical" />
            <a>删除</a>
          </span>
        </template>
      </template>
    </a-table>
    <BlackBoxFormDialog v-model:visible="visible" @update="search" />
  </div>
</template>
<script>
import { onMounted, ref, reactive, computed, getCurrentInstance } from 'vue';
import BlackBoxFormDialog from './black-box-form-dialog/index.vue';
import { userBlackBoxSearch } from './userBlackBoxSearch';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '是否存在waf',
    dataIndex: 'is_waf',
    key: 'is_waf',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
  },
  {
    title: '是否内网',
    dataIndex: 'is_intranet',
    key: 'is_intranet',
  },
  {
    title: '操作',
    key: 'action',
  },
];
export default {
  components: {
    BlackBoxFormDialog,
  },
  setup() {
    const _this = getCurrentInstance().proxy;
    const data = ref([]);
    const searchForm = reactive({});
    const visible = ref(false);
    const { page, size, total, loading, requestData } = userBlackBoxSearch();

    const pagination = computed(() => ({
      total: total.value || 200,
      current: page.value,
      pageSize: size.value,
    }));

    const search = async (pag) => {
      if (pag) {
        page.value = pag.current;
        size.value = pag.pageSize;
      }
      const res = await requestData();
      data.value = res.list;
    };

    const reset = async (isReset) => {
      if (isReset === true) {
        page.value = 1;
      }
      search({ page: page.value, size: size.value });
    };

    const actions = (type) => {
      switch (type) {
        case 'detail':
          _this.$router.push('blackBoxDetail');
          break;

        default:
          break;
      }
    };

    const batchAdd = () => {};

    const download = () => {};

    const add = () => {
      visible.value = true;
    };

    onMounted(() => {
      search();
    });

    return {
      data,
      page,
      size,
      total,
      loading,
      visible,
      columns,
      pagination,
      searchForm,
      add,
      reset,
      search,
      batchAdd,
      download,
      actions,
    };
  },
};
</script>
