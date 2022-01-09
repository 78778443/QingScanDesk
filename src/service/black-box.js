import ajax from 'ajax';

export const DESK_APP_INDEX = '/desk_app/index';

export const DESK_APP_ADD = '/desk_app/_add';

/**
 * 获取黑盒列表数据
 * @returns {Promise<any>}
 */
export const requestBlackBoxData = () => {
  return ajax.get(DESK_APP_INDEX);
};

/**
 * 添加黑盒测试目标
 */
export const addBlackBoxApp = (data) => {
  return ajax.post(DESK_APP_ADD, data);
};
