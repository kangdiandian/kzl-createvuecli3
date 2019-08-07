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
  getComputedStyle: document.defaultView.getComputedStyle.bind(
    document.defaultView
  ),
};
