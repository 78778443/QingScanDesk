<template>
  <a-modal
    :visible="visible"
    title="详情"
    :afterClose="onCancel"
    @cancel="onCancel"
    :destroyOnClose="true"
  >
    <Content ref="content"></Content>

    <template #footer>
      <a-button key="back" @click="onCancel">取消</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loading"
        @click="onSubmit"
      >
        确定
      </a-button>
    </template>
  </a-modal>
</template>
<script>
import { ref, getCurrentInstance } from 'vue';
import Content from './content.vue';
import { addBlackBoxApp } from '@/service';

export default {
  components: {
    Content,
  },
  props: {
    detailData: {
      type: Object,
      default: null,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const _this = getCurrentInstance().proxy;
    const contentRef = ref();
    const loading = ref(false);

    const onSubmit = () => {
      _this.$refs.content.validate().then((formValue) => {
        addBlackBoxApp(formValue).then(() => {
          onCancel();
          emit('update');
        });
      });
    };

    const onCancel = () => {
      emit('update:visible', false);
    };

    return { contentRef, loading, onSubmit, onCancel };
  },
};
</script>
