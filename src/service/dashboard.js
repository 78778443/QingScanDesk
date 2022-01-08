import ajax from 'ajax';

export const DESK_INDEX_INDEX = '/desk_index/index';

/**
 * 获取仪表盘数据
 * @returns {Promise<any>}
 */
export const getDashboardData = () => {
  return ajax.get(DESK_INDEX_INDEX);
};
