(function(global) {
  const init = () => {
    global.onFormUpdate(console.info);
    global.drawGraph();
  };

  global.addEventListener('load', init);
})(window);