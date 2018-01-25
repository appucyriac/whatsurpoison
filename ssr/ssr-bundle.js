(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Browse = exports.Login = exports.Home = undefined;

var _Home = __webpack_require__(3);

var _Home2 = _interopRequireDefault(_Home);

var _Login = __webpack_require__(5);

var _Login2 = _interopRequireDefault(_Login);

var _Browse = __webpack_require__(6);

var _Browse2 = _interopRequireDefault(_Browse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _Home2.default;
exports.Login = _Login2.default;
exports.Browse = _Browse2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n'], ['\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 3.5em;\n  text-align: center;\n  color: red;\n'], ['\n  font-size: 3.5em;\n  text-align: center;\n  color: red;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 4em;\n  background: papayawhip;\n  background-color: red;\n'], ['\n  padding: 4em;\n  background: papayawhip;\n  background-color: red;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: block;\n\n'], ['\n  display: block;\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var React = __webpack_require__(0);
var styled = __webpack_require__(1);
var Button = styled.default.button(_templateObject);
var Title = styled.default.h1(_templateObject2);
var Wrapper = styled.default.section(_templateObject3);
var Input = styled.default.input(_templateObject4);
var express = __webpack_require__(4);
var app = express();
function handleClick() {
  app.post('/', function (req, res) {
    res.redirect('/login');
    console.log(res);
  });
}

exports.default = function () {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Wrapper,
      null,
      React.createElement(
        Title,
        null,
        'Whats Your Poison?'
      ),
      React.createElement(
        Button,
        { onclick: handleClick },
        'Login'
      ),
      React.createElement(
        Button,
        null,
        'Browse'
      )
    )
  );
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n'], ['\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 3.5em;\n  text-align: center;\n  color: red;\n'], ['\n  font-size: 3.5em;\n  text-align: center;\n  color: red;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 4em;\n  background: papayawhip;\n  background-color: red;\n'], ['\n  padding: 4em;\n  background: papayawhip;\n  background-color: red;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: block;\n\n'], ['\n  display: block;\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var React = __webpack_require__(0);
var styled = __webpack_require__(1);
var Button = styled.default.button(_templateObject);
var Title = styled.default.h1(_templateObject2);
var Wrapper = styled.default.section(_templateObject3);
var Input = styled.default.input(_templateObject4);

exports.default = function () {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Wrapper,
      null,
      React.createElement(
        Title,
        null,
        'Whats Your Poison - Login'
      ),
      React.createElement('input', { placeholder: 'Username' }),
      React.createElement('input', { placeholder: 'Password' }),
      React.createElement(
        Button,
        null,
        'Sign In'
      )
    )
  );
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n'], ['\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 3.5em;\n  text-align: center;\n  color: red;\n'], ['\n  font-size: 3.5em;\n  text-align: center;\n  color: red;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 4em;\n  background: papayawhip;\n  background-color: red;\n'], ['\n  padding: 4em;\n  background: papayawhip;\n  background-color: red;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: block;\n\n'], ['\n  display: block;\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border: 2px solid red;\n'], ['\n  border: 2px solid red;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var React = __webpack_require__(0);
var styled = __webpack_require__(1);
var Button = styled.default.button(_templateObject);
var Title = styled.default.h1(_templateObject2);
var Wrapper = styled.default.section(_templateObject3);
var img = styled.default.img(_templateObject4);
var itemBox = styled.default.div(_templateObject5);

exports.default = function () {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Wrapper,
      null,
      React.createElement(
        Title,
        null,
        'Choose Your poison'
      ),
      React.createElement(
        'itemBox',
        null,
        React.createElement('img', { src: 'http://chavysliquor.com/wp-content/uploads/2017/03/grey_goose_vodka_750ml-270x360.jpg' })
      )
    )
  );
};

/***/ })
/******/ ])));