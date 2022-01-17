import ajax from 'ajax';

export const DESK_APP_INDEX = '/desk_app/index';

export const DESK_APP_ADD = '/desk_app/_add';

export const DESK_APP_DETAILS = '/desk_app/details';

/**
 * 获取黑盒列表数据
 * @returns {Promise<any>}
 */
export const requestBlackBoxData = () => {
  return ajax.get(DESK_APP_INDEX);
};

/**
 * 添加黑盒测试目标
 * @returns {Promise<any>}
 */
export const addBlackBoxApp = (data) => {
  return ajax.post(DESK_APP_ADD, data);
};

/**
 * 获取黑盒详情
 * @param {*} id
 * @returns {Promise<any>}
 */
export const requestBlackBoxDetail = (id) => {
  return ajax.get(DESK_APP_DETAILS, { params: { id } }).then((res) => res.data);
};
