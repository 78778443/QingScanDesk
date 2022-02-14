<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item label="网关地址" name="host">
      <a-input v-model:value="formState.host" />
    </a-form-item>

    <a-form-item label="token" name="token">
      <a-input v-model:value="formState.token" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
      <a-button type="primary" html-type="submit">确定</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { message } from 'ant-design-vue';

export default {
  setup() {
    const formState = reactive({
      host: '',
      token: '',
    });
    const onFinish = (values) => {
      Object.keys(values).forEach((key) => {
        const value = (values[key] || '').trim();
        localStorage.setItem(key, value);
      });
      message.success('保存成功');
    };

    onMounted(() => {
      const host = localStorage.getItem('host');
      const token = localStorage.getItem('token');
      formState.host = host;
      formState.token = token;
    });
    return {
      formState,
      onFinish,
    };
  },
};
</script>
