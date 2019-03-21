const { location } = window;
const baseENV = {
  scheme: 'https:',
};
export const ENV = {
  prod: {
    stage: 'prod',
    baseUrl: 'm.mishifeng.com',
    apiBaseUrl: 'open.mishifeng.com',
  },
  beta: {
    stage: 'beta',
    baseUrl: 'm.beta.mishifeng.com',
    apiBaseUrl: 'm.betaapi.mishifeng.com',
  },
  dev: {
    stage: 'dev',
    baseUrl: 'm.dev.mishifeng.com',
    apiBaseUrl: 'm.devapi.mishifeng.com',
  },
  local: {
    stage: 'local',
    baseUrl: location.host,
    apiBaseUrl: 'open.mishifeng.com',
    // apiBaseUrl: 'm.betaapi.mishifeng.com',
    // apiBaseUrl: 'm.devapi.mishifeng.com',
  },
};
const regLocal = /^(localhost|127\.)/i;
const regLocalIp = /^(10\.|192\.)/i;
function creatEnv() {
  const { host } = location;
  let current = {
    ...baseENV,
    ...ENV.prod,
  };
  if (host === ENV['prod'].baseUrl) {
    return current;
  }
  if (host === ENV['beta'].baseUrl) {
    current = {
      ...baseENV,
      ...ENV.beta,
    };
  }
  if (host === ENV['dev'].baseUrl) {
    current = {
      ...baseENV,
      ...ENV.dev,
    };
  }
  const isLocal = host.match(regLocal);
  const isLocalIp = host.match(regLocalIp);
  if (isLocal || isLocalIp) {
    current = { ...baseENV, ...ENV.local };
  }
  return current;
}

const currentEnv = creatEnv({});
export default currentEnv;
