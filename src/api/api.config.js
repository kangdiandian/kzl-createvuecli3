import { copy } from 'kit-qs';

let params = {};
let reqHeaders = {};

export const modelApis = {
  getConfig: '/open/common/appconfig',
};
export const commonParams = {
  init(data) {
    params = copy(data);
  },
  set(obj) {
    Object.assign(params, obj);
  },
  get(key) {
    return key ? copy(params[key]) : copy(params);
  },
};

export const headers = {
  init(data) {
    reqHeaders = copy(data);
  },
  set(obj) {
    Object.assign(reqHeaders, obj);
  },
  get(key) {
    return key ? copy(reqHeaders[key]) : copy(reqHeaders);
  },
};
