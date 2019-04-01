((doc, win) => {
  const docEl = doc.documentElement;
  const resizeEvent =
    'orientationchange' in window ? 'orientationchange' : 'resize';
  const recale = () => {
    let { clientWidth } = docEl;
    if (!clientWidth) return;
    if (clientWidth > 780) clientWidth = 780;
    if (clientWidth < 310) clientWidth = 310;
    // 以iphone6/7为准
    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvent, recale, false);
  doc.addEventListener(resizeEvent, recale, false);
})(document, window);
