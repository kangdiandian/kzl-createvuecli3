import axios from 'axios';
import { copy } from 'kit-qs';
import { compat } from 'kit-qs';

function noop() {
  console.warn('异常流程，不应该进入这里');
}

function checkStatus(res = {}) {
  const { status } = res;
  if (status >= 200 && status < 300) {
    return res;
  }
}

const defaultOption = {
  url: '',
  method: 'get',
  baseURL: '',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  params: {},
  data: {},
  responseType: 'json',
  withCredentials: true,
};
// method, url, options, header, success, fail
export default function request({
  url,
  method,
  options = {},
  header,
  success = noop,
  fail = noop,
}) {
  const opts = copy(defaultOption);
  opts.url = url;
  opts.headers = {
    ...opts.headers,
    ...header,
  };
  if (method === 'GET') {
    opts.method = 'get';
    opts.params = compat({ ...options });
  } else {
    opts.method = 'post';
    opts.data = compat({ ...options });
  }
  const successCallBack = data => {
    success(data);
  };
  const failCallBack = err => {
    fail(err);
  };
  function log(res = {}) {
    console.log(`api ${method} ${res.status} ${url}`);
    return res;
  }
  axios(opts)
    .then(log)
    .then(checkStatus)
    .then(res => {
      successCallBack(res.data);
    })
    .catch(err => {
      failCallBack(err);
    });
}
