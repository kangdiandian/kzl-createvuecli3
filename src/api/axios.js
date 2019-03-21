import request from '@/api/request';
import { modelApis, commonParams, headers } from '@/api/api.config';
import env from '@/config/env';
import { compat } from 'kit-qs';

let apiBaseUrl;
apiBaseUrl = `${env.apiBaseUrl}`;

const { width, height } = window.screen;
commonParams.init({
  // userInfo和currAddress为缓存中内容
  // token: userInfo.token,
  // user_id: userInfo.id, // || '1000001001', // 用户唯一标志
  // udid: env.getUUID(), // 设备唯一标志
  // device: '', // 设备
  // net: '', // 网络
  timestamp: '', // 时间
  platform: 'h5', // 渠道
  channel: 'h5', // 渠道
  spm: 'h5',
  // version: env.version, // 系统版本
  swidth: width, // 屏幕宽度 分辨率
  sheight: height, // 屏幕高度
  // location: '', // 地理位置
  // lng: currAddress.lng || 121.463,
  // lat: currAddress.lat || 31.234,
  // zone_id: currAddress.id || 21, // 城市id 上海
  // loc_code: 21, // 定位的城市code
  // loc_type: 1, // 1 = 高德（默认）2 = 百度
  showLoading: true, // 默认显示loading，request会删除
});
headers.init({});
const regHttp = /^https?/i;
const apiList = Object.keys(modelApis).reduce((api, key) => {
  const val = modelApis[key];
  const [url, mothedType = 'GET'] = val.split(/\s+/).reverse();
  const method = mothedType.toUpperCase();
  api[key] = function postRequest(params, success, fail) {
    const originUrl = regHttp.test(url)
      ? url
      : `${env.scheme}//${apiBaseUrl}${url}`;
    let temp = compat(Object.assign({}, commonParams.get(), params));
    const header = headers.get();
    return request({
      url: originUrl,
      method,
      options: temp,
      header,
      success,
      fail,
    });
  };
  return api;
}, {});

export default apiList;
