const noop = () => {};
const error = url => {
  console.log(`load script error ${url}`);
};

const doc = document;
const docHead = doc.querySelector('head');
const docBody = doc.querySelector('body');

export function loadJS(scriptUrl, opts = {}) {
  const script = document.createElement('script');
  if (typeof opts === 'boolean') {
    // 默认是同步加载，同步模式又称阻塞模式
    // 同步加载流程是瀑布模型，异步加载流程是并发模型。
    opts = {
      async: true, // 异步加载
      defer: true, // 延迟加载
    };
  }
  script.async = opts.async;
  script.defer = opts.defer;
  script.src = scriptUrl;

  script.onload = () => {
    (opts.onload || noop)();
  };

  script.onerror = () => {
    (opts.onerror || error)(scriptUrl);
  };

  if (opts.first) {
    docHead.append(script);
  } else {
    docBody.append(script);
  }
}

export function loadCss(cssUrl) {
  const style = document.createElement('style');
  style.rel = 'stylesheet';
  style.href = cssUrl;
  docHead.appendChild(style);
}
