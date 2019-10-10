import Vue from 'vue';

// 自定义长按指令
Vue.directive('press', {
  bind: function(el, binding, vNode) {
    let timeOutEvent = null; // 定时器
    let moveY = 0;
    let hasMoved = false;
    // 定义函数处理程序
    // 创建计时器（1秒后执行函数）
    const start = e => {
      clearTimeout(timeOutEvent);
      if (e.type === 'click' && e.button !== 0) return;
      let startY = 0;
      if (e.type === 'touchstart' && e.button !== 0) {
        startY = Number(e.touches[0].pageY);
      }
      hasMoved = false;
      if (timeOutEvent === null) {
        timeOutEvent = setTimeout(() => {
          // 执行长按时要执行的内容
          if (!hasMoved || Math.abs(startY - moveY) < 10) {
            handle(el);
          }
        }, 650); // 这里设置定时
      }
    };
    const cancel = e => {
      if (timeOutEvent !== null) {
        clearTimeout(timeOutEvent);
        timeOutEvent = null;
      }
      if (e.type === 'click' && e.button !== 0) {
        return;
      }
    };
    const moved = e => {
      hasMoved = true;
      let touch = e.touches[0];
      moveY = touch.pageY;
      console.log('手指在移动');
      console.log(e);
    };
    const handle = e => {
      binding.value(e);
      return;
    };

    // 添加事件监听
    el.addEventListener('touchstart', start);
    el.addEventListener('mousedown', start);
    el.addEventListener('touchmove', moved);

    // 取消计时器
    el.addEventListener('mouseout', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchcancel', cancel);
    el.addEventListener('click', cancel);
  },
});
