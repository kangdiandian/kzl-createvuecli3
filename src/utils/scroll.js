export default {
  getScrollEventTarget(element, rootParent = window) {
    let currentNode = element;
    while (
      currentNode &&
      currentNode.nodeType === 1 &&
      currentNode.tagName !== 'HTML' &&
      currentNode.tagName !== 'BODY' &&
      currentNode !== rootParent
    ) {
      const { overflowY } = this.getComputedStyle(currentNode);
      if (overflowY == 'scroll' || overflowY == 'auto') {
        return currentNode;
      }
      currentNode = currentNode.parentNode;
    }
    return rootParent;
  },
  // 设置滚动高度
  setScrollTop(element, value) {
    'scrollTop' in element
      ? (element.scrollTop = value)
      : element.scrollTo(element.scrollX, value);
  },
  // 获取滚动高度
  getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },

  // 获取元素距离顶部高度
  getElementTop(element) {
    return (
      (element === window ? 0 : element.getBoundingClientRect().top) +
      this.getScrollTop(element)
    );
  },

  // 获取元素可见高度
  getVisibleHeight(element) {
    return element === window
      ? element.innerHeight
      : element.getBoundingClientRect().height;
  },
  getComputedStyle: document.defaultView.getComputedStyle.bind(
    document.defaultView
  ),
};
