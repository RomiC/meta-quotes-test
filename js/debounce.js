(function(global) {
  global.debounce = (callback, delay) => {
    let timeout = 0;

    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
    }
  }
})(window);