(function(global) {
  const container = document.getElementsByClassName('graph__container')[0];

  if (typeof container === 'undefined') {
    console.error('Graph container not found!');
  }

  let ctx = null;

  global.drawGraph = () => {
    if (ctx === null) {
      console.error('Graph context is null!');
      return;
    }

    ctx.fillRect(0, 0, 100, 100);
  };

  window.addEventListener('load', () => {
    container.heigh = container.offsetHeight;
    container.width = container.offsetWidth;
    ctx = container.getContext('2d');
  });
})(window);