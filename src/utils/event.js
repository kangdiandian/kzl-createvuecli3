const isServer = false;

export let supportsPassive = false;

if (!isServer) {
  try {
    const opts = {};
    Object.assign(opts, 'passive', {
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {
    // do something
  }
}

export function on(target, event, handler, passive = false) {
  !isServer &&
    target.addEventListener(
      event,
      handler,
      supportsPassive ? { capture: false, passive } : true
    );
}

export function off(target, event, handler) {
  !isServer && target.removeEventListener(event, handler);
}
