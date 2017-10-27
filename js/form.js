(function(global) {
  const onFormUpdateCallbacks = [];

  const form = document.getElementsByClassName('form')[0];

  if (typeof form === 'undefined') {
    console.error('Form not found!');
    return;
  }

  const {
    from: inputFrom,
    to: inputTo,
    type: inputType
  } = form.elements;

  const syncFields = (attrToSync, field1, field2) => {
    field1.addEventListener('input', () => {
      field2.setAttribute(attrToSync, field1.value);
    });
  };

  syncFields('min', inputFrom, inputTo);
  syncFields('max', inputTo, inputFrom);

  form.addEventListener('change', debounce(() => {
    if (onFormUpdateCallbacks.length === 0) {
      return false;
    }

    const data = {
      date_from: inputFrom.value,
      date_to: inputTo.value,
      type: inputType.value
    }

    onFormUpdateCallbacks.forEach((callback) => callback.call(null, data));
  }, 1000));


  global.onFormUpdate = (callback) => {
    if (typeof callback === 'function') {
      onFormUpdateCallbacks.push(callback);
    }
  }
})(window);