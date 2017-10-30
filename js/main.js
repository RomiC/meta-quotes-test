(function(global) {
  const init = () => {
    global.onFormUpdate(console.info);
    global.drawGraph([10, 50, 100, 150, 190]);
  };

  global.addEventListener('load', init);
})(window);