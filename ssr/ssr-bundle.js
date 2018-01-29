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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginPage = exports.Browse = exports.Login = exports.Home = undefined;

var _Home = __webpack_require__(4);

var _Home2 = _interopRequireDefault(_Home);

var _Login = __webpack_require__(7);

var _Login2 = _interopRequireDefault(_Login);

var _Browse = __webpack_require__(8);

var _Browse2 = _interopRequireDefault(_Browse);

var _LoginPage = __webpack_require__(9);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _Home2.default;
exports.Login = _Login2.default;
exports.Browse = _Browse2.default;
exports.LoginPage = _LoginPage2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n'], ['\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 3.5em;\n  text-align: center;\n  color: red;\n'], ['\n  font-size: 3.5em;\n  text-align: center;\n  color: red;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 4em;\n  background: papayawhip;\n  background-color: red;\n'], ['\n  padding: 4em;\n  background: papayawhip;\n  background-color: red;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: block;\n\n'], ['\n  display: block;\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hypernovaReact = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = __webpack_require__(1);
var Button = styled.default.button(_templateObject);
var Title = styled.default.h1(_templateObject2);
var Wrapper = styled.default.section(_templateObject3);
var Input = styled.default.input(_templateObject4);
var express = __webpack_require__(6);
var app = express();

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'handleClick',
    value: function handleClick() {
      app.post('/', function (req, res) {
        res.redirect('/login');
        console.log(res);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          Wrapper,
          null,
          _react2.default.createElement(
            Title,
            null,
            'Whats Your Poison?'
          ),
          _react2.default.createElement(
            Button,
            { onClick: this.handleClick.bind(this) },
            'Login'
          ),
          _react2.default.createElement(
            Button,
            null,
            'Browse'
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("hypernova-react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
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
/* 8 */
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
var ItemBox = styled.default.div(_templateObject5);

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
        ItemBox,
        null,
        React.createElement('img', { src: 'http://chavysliquor.com/wp-content/uploads/2017/03/grey_goose_vodka_750ml-270x360.jpg' })
      )
    )
  );
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Auth = __webpack_require__(10);

var _Auth2 = _interopRequireDefault(_Auth);

var _LoginForm = __webpack_require__(11);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  /**
   * Class constructor.
   */
  function LoginPage(props, context) {
    _classCallCheck(this, LoginPage);

    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props, context));

    var storedMessage = localStorage.getItem('successMessage');
    var successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    _this.state = {
      errors: {},
      successMessage: successMessage,
      user: {
        email: '',
        password: ''
      }
    };

    _this.processForm = _this.processForm.bind(_this);
    _this.changeUser = _this.changeUser.bind(_this);
    return _this;
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */


  _createClass(LoginPage, [{
    key: 'processForm',
    value: function processForm(event) {
      var _this2 = this;

      // prevent default action. in this case, action is the form submission event
      event.preventDefault();

      // create a string for an HTTP body message
      var email = encodeURIComponent(this.state.user.email);
      var password = encodeURIComponent(this.state.user.password);
      var formData = 'email=' + email + '&password=' + password;

      // create an AJAX request
      var xhr = new XMLHttpRequest();
      xhr.open('post', '/auth/login');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          // success

          // change the component-container state
          _this2.setState({
            errors: {}
          });

          // save the token
          _Auth2.default.authenticateUser(xhr.response.token);

          // update authenticated state
          _this2.props.toggleAuthenticateStatus();

          // redirect signed in user to dashboard
          _this2.props.history.push('/dashboard');
        } else {
          // failure

          // change the component state
          var errors = xhr.response.errors ? xhr.response.errors : {};
          errors.summary = xhr.response.message;

          _this2.setState({
            errors: errors
          });
        }
      });
      xhr.send(formData);
    }

    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */

  }, {
    key: 'changeUser',
    value: function changeUser(event) {
      var field = event.target.name;
      var user = this.state.user;
      user[field] = event.target.value;

      this.setState({
        user: user
      });
    }

    /**
     * Render the component.
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_LoginForm2.default, {
        onSubmit: this.processForm,
        onChange: this.changeUser,
        errors: this.state.errors,
        successMessage: this.state.successMessage,
        user: this.state.user
      });
    }
  }]);

  return LoginPage;
}(_react2.default.Component);

exports.default = LoginPage;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: 'authenticateUser',


    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    value: function authenticateUser(token) {
      localStorage.setItem('token', token);
    }

    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */

  }, {
    key: 'isUserAuthenticated',
    value: function isUserAuthenticated() {
      return localStorage.getItem('token') !== null;
    }

    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */

  }, {
    key: 'deauthenticateUser',
    value: function deauthenticateUser() {
      localStorage.removeItem('token');
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */

  }, {
    key: 'getToken',
    value: function getToken() {
      return localStorage.getItem('token');
    }
  }]);

  return Auth;
}();

exports.default = Auth;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(12);

var _Card = __webpack_require__(13);

var _RaisedButton = __webpack_require__(14);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(15);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(_ref) {
  var onSubmit = _ref.onSubmit,
      onChange = _ref.onChange,
      errors = _ref.errors,
      successMessage = _ref.successMessage,
      user = _ref.user,
      toggleAuthenticateStatus = _ref.toggleAuthenticateStatus;
  return _react2.default.createElement(
    _Card.Card,
    { className: 'container' },
    _react2.default.createElement(
      'form',
      { action: '/', onSubmit: onSubmit },
      _react2.default.createElement(
        'h2',
        { className: 'card-heading' },
        'Login'
      ),
      successMessage && _react2.default.createElement(
        'p',
        { className: 'success-message' },
        successMessage
      ),
      errors.summary && _react2.default.createElement(
        'p',
        { className: 'error-message' },
        errors.summary
      ),
      _react2.default.createElement(
        'div',
        { className: 'field-line' },
        _react2.default.createElement(_TextField2.default, {
          floatingLabelText: 'Email',
          name: 'email',
          errorText: errors.email,
          onChange: onChange,
          value: user.email
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'field-line' },
        _react2.default.createElement(_TextField2.default, {
          floatingLabelText: 'Password',
          type: 'password',
          name: 'password',
          onChange: onChange,
          errorText: errors.password,
          value: user.password
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'button-line' },
        _react2.default.createElement(_RaisedButton2.default, { type: 'submit', label: 'Log in', primary: true })
      ),
      _react2.default.createElement(
        _Card.CardText,
        null,
        'Don\'t have an account? ',
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/signup' },
          'Create one'
        ),
        '.'
      )
    )
  );
};

LoginForm.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  errors: _propTypes2.default.object.isRequired,
  successMessage: _propTypes2.default.string.isRequired,
  user: _propTypes2.default.object.isRequired
};

exports.default = LoginForm;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ })
/******/ ])));