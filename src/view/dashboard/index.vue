<template>
  <a-spin :spinning="spinning" style="margin: 0 auto; display: block">
    <a-row :gutter="8" type="flex" justify="start">
      <a-col
        :span="12"
        v-for="(item, index) in data"
        :key="index"
        style="margin-bottom: 8px"
      >
        <a-card style="height: 100%">
          <h3>
            {{ item.name }}： <span>{{ item.value }}</span>
          </h3>
          <div class="sub-info">
            <div
              class="sub-item"
              v-for="(subItem, subIndex) in item.subInfo"
              :key="subIndex"
            >
              <span class="sub-item-name">{{ subItem.name }}：</span>
              <span>
                <a-tag color="blue">{{ subItem.value }}</a-tag>
              </span>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </a-spin>
</template>

<script>
import { onMounted, ref } from 'vue';
import { getDashboardData } from '@/service';

export default {
  setup() {
    const spinning = ref(false);
    const data = ref([]);

    onMounted(async () => {
      spinning.value = true;
      const res = (await getDashboardData()) ?? {};
      data.value = res.data;
      spinning.value = false;
    });

    return {
      data,
      spinning,
    };
  },
};
</script>

<style lang="less" scoped>
.sub-info {
  display: flex;
  flex-wrap: wrap;
}
.sub-item {
  width: 33%;
  margin-bottom: 4px;
  display: flex;
  .sub-item-name {
    min-width: 100px;
    text-align: right;
  }
}
</style>
