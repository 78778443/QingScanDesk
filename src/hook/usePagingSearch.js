import { ref } from 'vue';
import ajax from 'ajax';

/**
 * 分页搜索
 * @param {*} searchParams
 * @returns
 */
function usePagingSearch(url, options) {
  const defaultOptions = {
    size: options?.size || 10,
    method: (options?.method || 'get').toLocaleLowerCase(),
  };

  const page = ref(1);
  const size = ref(defaultOptions.size);
  const total = ref(0);
  const loading = ref(false);

  const requestData = (params = {}) => {
    loading.value = true;

    params.page = page.value;
    params.size = size.value;

    let requestFn = null;

    if (defaultOptions.method === 'post') {
      requestFn = ajax.post.bind(null, url, { data: params });
    } else {
      requestFn = ajax.get.bind(null, url, { params });
    }

    return requestFn()
      .then((res) => {
        total.value = res.data.total;
        return res.data;
      })
      .finally(() => {
        loading.value = false;
      });
  };
  return {
    requestData,
    page,
    size,
    total,
    loading,
  };
}
export { usePagingSearch };
