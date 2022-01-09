<template>
  <a-form ref="formRef" :model="formState" :rules="rules">
    <a-form-item name="name" label="应用名称">
      <a-input v-model:value="formState['name']" placeholder="请输入应用名称" />
    </a-form-item>
    <a-form-item name="url" label="URL地址">
      <a-input
        v-model:value="formState['url']"
        type="url"
        placeholder="请输入URL地址"
      />
    </a-form-item>
    <div class="checkbox-list">
      <a-checkbox v-model:checked="formState['is_xray']">
        是否xary扫描
      </a-checkbox>
      <a-checkbox v-model:checked="formState['is_awvs']">
        是否awvs扫描
      </a-checkbox>
      <a-checkbox v-model:checked="formState['is_whatweb']"
        >是否whatweb扫描</a-checkbox
      >
      <a-checkbox v-model:checked="formState['is_one_for_all']"
        >是否OneForAll扫描</a-checkbox
      >
      <a-checkbox v-model:checked="formState['is_dirmap']"
        >是否dirmap扫描</a-checkbox
      >
      <a-checkbox v-model:checked="formState['is_intranet']"
        >是否为内网</a-checkbox
      >
    </div>
  </a-form>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      name: '',
      url: '',
      is_xray: true,
      is_awvs: true,
      is_whatweb: true,
      is_one_for_all: true,
      is_dirmap: true,
      is_intranet: true,
    });

    const httpReg =
      /^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i;

    const validateHttp = async (_rule, value) => {
      if (value && !httpReg.test(value)) {
        return Promise.reject('输入正确的URL');
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      name: [{ required: true, trigger: 'change', message: '请输入应用名称' }],
      url: [
        { required: true, trigger: 'change', message: '请输入url' },
        { validator: validateHttp, trigger: 'change' },
      ],
    };

    const validate = () => {
      return formRef.value.validateFields().then(() => ({ ...formState }));
    };

    return {
      rules,
      formRef,
      formState,
      validate,
    };
  },
});
</script>
