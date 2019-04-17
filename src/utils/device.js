const ua = navigator.userAgent;
const platform = navigator.platform || '';

const device = {
  system: '',
  os: {},
  host: {},
  browser: {},
  phone: false,
  tablet: false,
  mobileGrade: '',
  userAgent: ua,
};

// 系统平台 windows mac xll iphone android
let system = '';
// 操作系统 ios android mac windows wp
const os = {
  name: '', //
  version: '',
};
// 宿主 wechat aliapy hybrid browser
const host = {
  name: '',
  version: '',
};
// 浏览器
const browser = {
  name: '', // chrome safari firefox ie
  version: '',
};

// https://github.com/madrobby/zepto/blob/master/src/detect.js
/* eslint no-useless-escape: 0 */
const webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/);
const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
const webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/);
// PC
const osx = !!ua.match(/\(Macintosh\; Intel /);
const win = /Win\d{2}|Windows/.test(platform);
const x11 = platform.indexOf('X11') === 0 || platform.indexOf('Linux') === 0;
const wp = ua.match(/Windows Phone ([\d.]+)/);
const touchpad = webos && ua.match(/TouchPad/);
const kindle = ua.match(/Kindle\/([\d.]+)/);
const silk = ua.match(/Silk\/([\d._]+)/);
const blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
const bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
const rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
const playbook = ua.match(/PlayBook/);
const chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
const firefox = ua.match(/Firefox\/([\d.]+)/);
const firefoxos = ua.match(
  /\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/
);
const ie =
  ua.match(/MSIE\s([\d.]+)/) ||
  ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/);
const webview =
  !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/);
const safari =
  webview ||
  ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);

/* eslint no-unused-expressions: 0, no-sequences: 0, no-multi-assign: 0, prefer-destructuring: 0 */
if ((browser.webkit = !!webkit)) browser.version = webkit[1];
if (android)
  (os.android = true),
    (os.version = android[2]),
    (device.androidChrome = !!(ua.toLowerCase().indexOf('chrome') >= 0));
if (iphone && !ipod)
  (os.ios = os.iphone = true), (os.version = iphone[2].replace(/_/g, '.'));
if (ipad) (os.ios = os.ipad = true), (os.version = ipad[2].replace(/_/g, '.'));
if (ipod)
  (os.ios = os.ipod = true),
    (os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null);
if (wp) (os.wp = true), (os.version = wp[1]);
if (webos) (os.webos = true), (os.version = webos[2]);
if (touchpad) os.touchpad = true;
if (blackberry) (os.blackberry = true), (os.version = blackberry[2]);
if (bb10) (os.bb10 = true), (os.version = bb10[2]);
if (rimtabletos) (os.rimtabletos = true), (os.version = rimtabletos[2]);
if (playbook) browser.playbook = true;
if (kindle) (os.kindle = true), (os.version = kindle[1]);
if (silk) (browser.silk = true), (browser.version = silk[1]);
if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
if (chrome) (browser.chrome = true), (browser.version = chrome[1]);
if (firefox) (browser.firefox = true), (browser.version = firefox[1]);
if (firefoxos) (os.firefoxos = true), (os.version = firefoxos[1]);
if (ie) (browser.ie = true), (browser.version = ie[1]);
if (safari && (osx || os.ios || win)) {
  browser.safari = true;
  if (!os.ios) browser.version = safari[1];
}
if (webview) browser.webview = true;
host.version = browser.version;

// 平板电脑
os.tablet = !!(
  ipad ||
  playbook ||
  (android && !ua.match(/Mobile/)) ||
  (firefox && ua.match(/Tablet/)) ||
  (ie && !ua.match(/Phone/) && ua.match(/Touch/))
);
os.phone = !!(
  !os.tablet &&
  !os.ipod &&
  (android ||
    iphone ||
    webos ||
    blackberry ||
    bb10 ||
    (chrome && ua.match(/Android/)) ||
    (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
    (firefox && ua.match(/Mobile/)) ||
    (ie && ua.match(/Touch/)))
);

// 手持设备
device.isHandheld = os.iphone || os.tablet;
device.supportMotion = 'ondevicemotion' in window;

// custom host
let alipay =
  ua.match(/(AliApp\(AP)\/([\d.]+)/) || ua.match(/(AlipayClient)\/([\d.]+)/);
let wechat = ua.match(/(MicroMessenger)\/([\d.]+)/);
let msf = ua.match(/(DWD_MSF)\/([\d.]+)/);
let hsq = ua.match(/(DWD_HSQ)\/([\d.]+)/);
let iqg = ua.match(/(DWD_IQG)\/([\d.]+)/);
const dingtalk = ua.match(/(AliApp\(DingTalk)\/([\d.]+)/);
const taobao = ua.match(/(AliApp\(TB)\/([\d.]+)/);
const qq = ua.match(/(QQ)\/([\d.]+)/);
const iqgsh = ua.match(/(DWD_IQGSH)\/([\d.]+)/);
const hybrid = !!('dwd' in window);

if (qq) (host.qq = true), (host.version = qq[1]);
if (wechat) (host.wechat = true), (host.version = wechat[1]);
if (alipay) (host.alipay = true), (host.version = alipay[1]);
if (dingtalk) (host.dingtalk = true), (host.version = dingtalk[1]);
if (taobao) (host.taobao = true), (host.version = taobao[1]);
if (msf) (host.msf = true), (host.version = msf[2]);
if (hsq) (host.hsq = true), (host.version = hsq[2]);
if (iqg) (host.iqg = true), (host.version = iqg[2]);
if (iqgsh) (host.iqgsh = true), (host.version = iqgsh[1]);

// iOS 8+ changed UA ?
if (os.ios && os.version && ua.indexOf('Version/') >= 0) {
  if (os.version.split('.')[0] === '10') {
    os.version = ua
      .toLowerCase()
      .split('version/')[1]
      .split(' ')[0];
  }
}

// 系统平台/设备
// prettier-ignore
system = android ? 'android' :
  iphone ? 'iphone' :
  win ? 'windows' :
  osx ? 'mac' :
  x11 ? 'linux' :
  ipad ? 'ipad' :
  ipod ? 'ipod' :
  kindle ? 'kindle' :
  wp ? 'wp' :
  'unknown'

// 操作系统
// prettier-ignore
os.name = android ? 'android' :
  (ipad || iphone || ipod) ? 'ios' :
  win ? 'windows' :
  osx ? 'osx' :
  x11 ? 'x11' :
  wp ? 'wp' :
  'unknown'

// 宿主/软件环境
// prettier-ignore
host.name = alipay ? 'alipay' :
  wechat ? 'wechat' :
  hybrid ? 'hybrid' :
  msf ? 'msf' :
  hsq ? 'hsq' :
  iqg ? 'iqg' :
  iqgsh ? 'iqgsh' :
  qq ? 'qq' :
  chrome ? 'chrome' :
  safari ? 'safari' :
  ie ? 'ie' :
  firefox ? 'firefox' :
  webkit ? 'webkit' :
  webview ? 'webview' :
  'unknown';

// 浏览器
// prettier-ignore
browser.name = chrome ? 'chrome' :
  safari ? 'safari' :
  ie ? 'ie' :
  firefox ? 'firefox' :
  webkit ? 'webkit' :
  webview ? 'webview' :
  'unknown';

// const getEls = function (el) {
//   return document.querySelectorAll(el)
// }
const getEl = el => {
  return document.querySelector(el);
};

// Minimal UI
const domMeta = getEl('meta[name="viewport"]');
if (os.name === 'ios') {
  const versionArr = os.version.split('.');
  device.minimalUi =
    !webview &&
    (iphone || ipod) &&
    (versionArr[0] * 1 === 7
      ? versionArr[1] * 1 >= 1
      : versionArr[0] * 1 > 7) &&
    domMeta &&
    domMeta.content.indexOf('minimal-ui') >= 0;
}

// Check for status bar and fullscreen app mode
// global screen
const { innerWidth, innerHeight, screen } = window; // $(window).width()
device.statusBar = false;
if (webview && innerWidth * innerHeight === screen.width * screen.height) {
  device.statusBar = true;
} else {
  device.statusBar = false;
}

/**
 * 页面跳转、环境变量描述
 * 默认同环境变量跳转，hybird 只跳转 hybrid 页面，H5只跳转 H5 待定？
 * 是否做存在性检测，默认检测
 * isHybrid     app hybrid 页面（包含 isHybridH5）
 * isHybridH5   app 加载远程 H5页面（有 jsBridge 权限）
 * isRemoteH5   app webview 加载远程 H5（无 jsBridge 权限）
 * isHsq/isInApp    H5在好食期 app 内
 * isOnlyH5     仅仅是 H5页面，未在 app 内
 */

// const locationHref = window.location.href;
// const regUrl = /^https?/;
// const isRemoteUrl = regUrl.test(locationHref);
// const hasJsBridge = !!('dwd' in window);
// device.isHybrid = hasJsBridge;
// device.isOnlyHybrid = hasJsBridge && !isRemoteUrl;
// device.isHybridH5 = hasJsBridge && isRemoteUrl;
// device.isRemoteH5 = isRemoteUrl && !hasJsBridge && device.isHsq;
// device.isOnlyH5 = isRemoteUrl && !device.isHsq;

// Classes
const classNames = [];

classNames.push(`host-${host.name}`, `system-${system}`, `os-${os.name}`);

// Pixel Ratio
device.pixelRatio = window.devicePixelRatio || 1;
classNames.push('pixel-ratio-' + Math.floor(device.pixelRatio));
if (device.pixelRatio >= 2) {
  classNames.push('retina');
}
if (device.isHandheld) {
  classNames.push('handheld');
}

// OS classes
if (os.name) {
  // classNames.push(
  //   os.name,
  //   os.name + '-' + os.version.split('.')[0],
  //   os.name + '-' + os.version.replace(/\./g, '-')
  // )
  if (os.name === 'ios') {
    const major = parseInt(os.version.split('.')[0], 10);
    for (let i = major - 1; i >= 6; i--) {
      classNames.push('ios-gt-' + i);
    }
  }
}
const domHtml = getEl('html');
// Status bar classes
if (device.statusBar) {
  classNames.push('with-statusbar-overlay');
} else {
  domHtml.classList.remove('with-statusbar-overlay');
}

// Add html classes
if (classNames.length > 0) {
  for (let j = classNames.length - 1; j > -1; j--) {
    domHtml.classList.add(classNames[j]);
  }
}

Object.assign(device, {
  system,
  os,
  host,
  browser,

  // 最常用的，提高一层
  iphone: !!iphone,
  android: !!android,
  wechat: !!wechat,
  alipay: !!alipay,
  webkit: !!webkit,
  hybrid: !!hybrid,
  iqg: !!iqg,
  hsq: !!hsq,
  msf: !!msf,
  qq: !!qq,
  dingtalk: !!dingtalk,
});

device.getSystemInfo = () => {
  // 当前项目 h5-newbee
  // 返回 端(手机/PC等) 品牌 型号
  // 当前 app 及版本 app（同宿主）
  // 当前操作系统级版本 os
  // 当前宿主 host
  // 当前浏览器 browser
  // 当前内核 kernel
  // js引擎 jsEngine
  // 当前语言 language
  return {
    system,
    platform,
    ua,
    os: os.name,
    osVersion: os.version,
    host: host.name,
    hostVersion: host.version,
    browser: browser.name,
    browserVersion: browser.version,
  };
};

console.log('device: ', device);
export default device;
