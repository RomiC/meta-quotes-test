(function(global) {
  const container = document.getElementsByClassName('graph__container')[0];

  if (typeof container === 'undefined') {
    console.error('Graph container not found!');
  }

  let ctx = null;
  const step = 50;
  const margin = {
    top: 20,
    left: 20,
    bottom: 20,
    right: 20
  };

  global.drawGraph = (data) => {
    if (ctx === null) {
      console.error('Graph context is null!');
      return;
    }

    // ctx.moveTo(0, data[0]);
    // data.slice(1).forEach((value, index) => {
    //   ctx.lineTo((index + 1) * step, value);
    //   ctx.moveTo((index + 1) * step, value);
    // });
    for (let i = 0; i < data.length - 1; i++) {
      ctx.moveTo(i * 200 + margin.left, data[i] + margin.top);
      ctx.lineTo((i + 1) * 200 + margin.left, data[i + 1] + margin.top);

      // ctx.beginPath();
      // const from = {
      //   x: i * step + margin.left,
      //   y: data[i] + margin.top
      // };
      // const to = {
      //   x: (i + 1) * step + margin.left,
      //   y: data[i + 1] + margin.top
      // };

      // console.log(`line from {${from.x}, ${from.y}} to {${to.x}, ${to.y}}`)
      // ctx.moveTo(from.x, from.y);
      // ctx.lineTo(to.x, to.y);
      // const x = (i * 30 + 10);
      // const y = Math.round(Math.random() * 300);
      // console.log('x: ', x, 'y: ', y);
      // ctx.lineTo(10 * (i + 1), 100 * (i + 1));
    }
      ctx.stroke();

    // ctx.lineTo(100, 100);
    // ctx.lineTo(200, 150);
    // ctx.lineTo(300, 30);
    // ctx.closePath();
  };

  window.addEventListener('load', () => {
    container.height = container.offsetHeight;
    container.width = container.offsetWidth;
    ctx = container.getContext('2d');
    ctx.strokeStyle = 'blue';
  });
})(window);