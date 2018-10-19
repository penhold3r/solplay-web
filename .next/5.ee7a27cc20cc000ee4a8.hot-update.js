webpackHotUpdate(5,{

/***/ "./src/data/submit-form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------------
//>>   SUBMIT FORMS
//--------------------------------------------------------

/**
 *
 * @param {HTMLFormElement} form - reference to form elemnt
 * @param {Object.<string, *>} settings - settings before send
 */
var submitForm = function submitForm(form, settings) {
  if (!settings || !form) {
    console.warn('Must configure form settings');
    return false;
  } else if (!settings.dest) console.warn('Must set "dest" property: exaple – "dest":"/contact"');else if (!settings.fields) console.warn('Must set "fields" property value with input class name.');else {
    form.setAttribute('novalidate', '');
    submitFormData(form, settings);
  }
}; //


var submitFormData = function submitFormData(form, settings) {
  var fields = form.querySelectorAll(settings.fields);
  var msg = document.createElement('div');
  var validate = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  var formData = new FormData(form);
  var opt = {
    method: 'POST' //

  };
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _field = _step.value;

      if (_field.hasAttribute('required')) {
        if (_field.value === '' || _field.getAttribute('name') === 'email' && !validate.test(_field.value)) {
          _field.focus();

          return false;
        }
      }
    } //

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  msg.classList.add('output-msg');
  msg.innerHTML = '<p></p>';
  if (!document.body.contains(document.querySelector('.output-msg'))) form.append(msg); //

  if (settings.closeMsg == 'true') {
    var msgClose = document.createElement('div');
    msgClose.classList.add('close-form-msg');
    msg.appendChild(msgClose);
    msgClose.addEventListener('click', function (e) {
      return msg.classList.remove('visible');
    });
  } //


  if (settings.name) formData.append('form-name', settings.name);
  if (settings.reciever) formData.append('dest', settings.reciever); //

  opt.headers = {
    'Content-Type': settings.urlencoded ? 'application/x-www-form-urlencoded' : 'application/json'
  };
  opt.body = settings.urlencoded ? urlencodeFormData(formData) : formData; //

  console.log('data: ', opt); //

  fetch(settings.dest, opt).then(function (resp) {
    if (resp.ok) {
      msg.querySelector('p').innerHTML = !settings.successMsg ? 'ok' : settings.successMsg;
      msg.querySelector('p').className = 'msg-ok';
      msg.classList.add('visible');
      form.reset(); //

      console.log('successful', opt);
    } else {
      msg.querySelector('p').innerHTML = !settings.errorMsg ? 'error' : settings.errorMsg;
      msg.querySelector('p').className = 'msg-error';
      msg.classList.add('visible');
      form.reset(); //

      console.warn('failed');
    }
  }).catch(function (err) {
    return console.error('Error: ', err);
  });
}; //

/**
 *
 * @param {FormData} fd - FromData Object to encode
 * @returns {String}
 */


var urlencodeFormData = function urlencodeFormData(fd) {
  var str = '';

  var encode = function encode(str) {
    return encodeURIComponent(str).replace(/%20/g, '+');
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = fd.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _pair = _step2.value;

      if (typeof _pair[1] == 'string') {
        str += (str ? '&' : '') + encode(_pair[0]) + '=' + encode(_pair[1]);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return str;
}; //


/* harmony default export */ __webpack_exports__["a"] = (submitForm);

/***/ })

})
//# sourceMappingURL=5.ee7a27cc20cc000ee4a8.hot-update.js.map