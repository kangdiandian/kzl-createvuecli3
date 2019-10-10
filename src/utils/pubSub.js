/**
 * 通过发布订阅模式，实现消息通信
  有个问题，如果发送订阅的页面先于订阅页面加载，此时发送订阅消息就会发现没有订阅项
  解决方案：可以在查到没有订阅项的时候把这个消息存在全局变量中，订阅消息页面加载的时候先去
  全局变量汇总查询，查询不到再订阅。
 */
const pubSub = {
  sub: [],
  subscribe(key, fun) {
    // 订阅消息
    console.log('订阅消息');
    if (!this.sub[key]) {
      this.sub[key] = [];
    }
    this.sub[key].push(fun);
  },
  publish(key, ...args) {
    let funs = this.sub[key];
    if (!funs || funs.length === 0) {
      console.warn('未查到订阅项');
      return;
    }
    funs.forEach(fun => {
      fun.apply(this, [...args]);
    });
  },
  unsubscribe(key) {
    delete this.sub[key];
  },
};

export default pubSub;
