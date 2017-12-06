/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var h = function h(tag, attrs) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var elem = document.createElement(tag);
  Object.keys(attrs).forEach(function (key) {
    return elem[key] = attrs[key];
  });
  children.forEach(function (child) {
    if (typeof child === "string") child = document.createTextNode(child);
    elem.appendChild(child);
  });
  return elem;
};

var Inline = Quill.import("blots/inline");

var MentionBlot = function (_Inline) {
  _inherits(MentionBlot, _Inline);

  function MentionBlot() {
    _classCallCheck(this, MentionBlot);

    return _possibleConstructorReturn(this, (MentionBlot.__proto__ || Object.getPrototypeOf(MentionBlot)).apply(this, arguments));
  }

  _createClass(MentionBlot, [{
    key: "format",
    value: function format(name, value) {
      if (name === "mention" && value) {
        this.domNode.dataset.label = value;
      } else {
        _get(MentionBlot.prototype.__proto__ || Object.getPrototypeOf(MentionBlot.prototype), "format", this).call(this, name, value);
      }
    }
  }, {
    key: "formats",
    value: function formats() {
      var formats = _get(MentionBlot.prototype.__proto__ || Object.getPrototypeOf(MentionBlot.prototype), "formats", this).call(this);
      formats["mention"] = MentionBlot.formats(this.domNode);
      return formats;
    }
  }], [{
    key: "create",
    value: function create(label) {
      var node = _get(MentionBlot.__proto__ || Object.getPrototypeOf(MentionBlot), "create", this).call(this);
      node.dataset.label = label;
      return node;
    }
  }, {
    key: "formats",
    value: function formats(node) {
      return node.dataset.label;
    }
  }]);

  return MentionBlot;
}(Inline);

MentionBlot.blotName = "mention";
MentionBlot.tagName = "SPAN";
MentionBlot.className = "mention";

Quill.register({
  "formats/mention": MentionBlot
});

var Mentions = function () {
  function Mentions(quill, props) {
    _classCallCheck(this, Mentions);

    this.quill = quill;
    this.onClose = props.onClose;
    this.onOpen = props.onOpen;
    this.users = props.users;
    if (!this.users || this.users && this.users.length < 1) {
      return;
    }
    this.quill.root.setAttribute('data-gramm', false);
    this.container = this.quill.container.parentNode.querySelector(props.container);
    this.container = document.createElement("ul");
    this.container.classList.add("completions");
    this.quill.container.appendChild(this.container);
    this.container.style.position = "absolute";
    this.container.style.display = "none";
    this.onSelectionChange = this.maybeUnfocus.bind(this);
    this.onTextChange = this.update.bind(this);

    this.mentionBtnControl = document.createElement('div');
    this.mentionBtnControl.classList.add('textarea-mention-control');
    this.mentionBtnControl.style.position = "absolute";
    this.mentionBtnControl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50"><path fill="#000" fill-rule="evenodd" d="M24.7 20.92c-1.67 0-2.65 1.33-2.65 3.56 0 2.22.98 3.57 2.62 3.57 1.67 0 2.72-1.36 2.72-3.57 0-2.2-1.06-3.56-2.7-3.56zm.5-9.58c7.47 0 12.6 4.72 12.6 11.6 0 4.98-2.36 8.1-6.14 8.1-1.96 0-3.38-.95-3.72-2.45h-.28c-.66 1.57-1.94 2.38-3.75 2.38-3.24 0-5.4-2.62-5.4-6.6 0-3.8 2.13-6.36 5.25-6.36 1.67 0 3.03.8 3.66 2.2h.3v-1.86h3.14v8.28c0 1.1.55 1.75 1.5 1.75 1.58 0 2.6-2 2.6-5.18 0-5.66-3.9-9.34-9.85-9.34-6.05 0-10.26 4.34-10.26 10.57 0 6.35 4.2 10.35 10.85 10.35 1.66 0 3.36-.2 4.24-.52v2.55c-1.22.36-2.83.56-4.5.56C17.32 37.4 12 32.2 12 24.37c0-7.72 5.4-13.04 13.2-13.04z"/></svg>';
    this.quill.container.appendChild(this.mentionBtnControl);
    this.mentionBtnControl.addEventListener('click', this.clickMentionBtn.bind(this), false);

    this.open = false;
    this.atIndex = null;
    this.focusedButton = null;

    quill.keyboard.addBinding({
      key: 50,
      shiftKey: true
    }, this.onAtKey.bind(this));

    quill.keyboard.addBinding({
      key: 40,
      collapsed: true,
      format: ["mention"]
    }, this.handleArrow.bind(this));

    quill.keyboard.addBinding({
      key: 38,
      collapsed: true,
      format: ["mention"]
    }, this.handleArrow.bind(this));
  }

  _createClass(Mentions, [{
    key: "clickMentionBtn",
    value: function clickMentionBtn() {
      var users = this.users;
      this.renderMentionBox(users);
    }
  }, {
    key: "renderMentionBox",
    value: function renderMentionBox(users) {
      var _this2 = this;

      this.open = !this.open;
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }var buttons = Array(users.length);
      this.buttons = buttons;
      var handler = function handler(i, user) {
        return function (event) {
          if (event.key === "ArrowDown" || event.keyCode === 40) {
            event.preventDefault();
            buttons[Math.min(buttons.length - 1, i + 1)].focus();
          } else if (event.key === "ArrowUp" || event.keyCode === 38) {
            event.preventDefault();
            buttons[Math.max(0, i - 1)].focus();
          } else if (event.key === "Enter" || event.keyCode === 13 || event.key === " " || event.keyCode === 32 || event.key === "Tab" || event.keyCode === 9) {
            event.preventDefault();
            _this2.close(user);
          }
        };
      };
      users.forEach(function (user, i) {
        var li = h("li", {}, h("button", { type: "button" }, h("span", { className: "matched" }, "@" + user.username), h("span", { className: "mention--name" }, user.fullName)));
        _this2.container.appendChild(li);

        buttons[i] = li.firstChild;
        buttons[i].addEventListener("keydown", handler(i, user));
        buttons[i].addEventListener("mousedown", function () {
          return _this2.mentionBoxClose(user);
        });
        // buttons[i].addEventListener("focus", () => this.focusedButton = i);
        // buttons[i].addEventListener("unfocus", () => this.focusedButton = null);
      });
      var atSignBounds = this.quill.getBounds(this.quill.selection.savedRange.index);
      this.container.style.left = atSignBounds.left + "px";
      var windowHeight = window.innerHeight;
      var editorPos = this.quill.container.getBoundingClientRect().top;

      if (editorPos > windowHeight / 2) {
        this.container.style.top = "auto";
        this.container.style.bottom = atSignBounds.top + atSignBounds.height + 15 + "px";
      } else {
        this.container.style.top = atSignBounds.top + atSignBounds.height + 15 + "px";
        this.container.style.bottom = "auto";
      }

      this.container.style.zIndex = 99;
      if (this.open) {
        this.container.style.display = "block";
      } else {
        this.container.style.display = "none";
      }
    }
  }, {
    key: "onAtKey",
    value: function onAtKey(range) {
      if (this.open) return true;
      if (range.length > 0) {
        this.quill.deleteText(range.index, range.length, Quill.sources.USER);
      }
      this.quill.insertText(range.index, "@", "mention", "0", Quill.sources.USER);
      var atSignBounds = this.quill.getBounds(range.index);
      this.quill.setSelection(range.index + 1, Quill.sources.SILENT);

      this.atIndex = range.index;
      this.container.style.left = atSignBounds.left + "px";
      var windowHeight = window.innerHeight;
      var editorPos = this.quill.container.getBoundingClientRect().top;

      if (editorPos > windowHeight / 2) {
        this.container.style.top = "auto";
        this.container.style.bottom = atSignBounds.top + atSignBounds.height + 15 + "px";
      } else {
        this.container.style.top = atSignBounds.top + atSignBounds.height + 15 + "px";
        this.container.style.bottom = "auto";
      }

      this.container.style.zIndex = 99;
      this.open = true;
      this.quill.on("text-change", this.onTextChange);
      this.quill.once("selection-change", this.onSelectionChange);
      this.update();
      this.onOpen && this.onOpen();
      if (this.open) {
        this.container.style.display = "block";
      } else {
        this.container.style.display = "none";
      }
    }
  }, {
    key: "handleArrow",
    value: function handleArrow() {
      if (!this.open) return true;
      this.buttons[0].focus();
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      var sel = this.quill.getSelection().index;
      if (this.atIndex >= sel) {
        return this.close(null);
      }
      this.query = this.quill.getText(this.atIndex + 1, sel - this.atIndex - 1);
      var users = this.users.filter(function (u) {
        var searchPattern = new RegExp(_this3.query, "gi");
        if (searchPattern.test(u.username)) {
          u.searchKey = 'username';
          return u;
        } else if (searchPattern.test(u.fullName)) {
          u.searchKey = 'name';
          return u;
        }
      }).sort(function (u1, u2) {
        return u1.username > u2.username;
      });
      this.renderCompletions(users);
    }
  }, {
    key: "maybeUnfocus",
    value: function maybeUnfocus() {
      if (this.container.querySelector("*:focus")) return;
      this.close(null);
    }
  }, {
    key: "renderCompletions",
    value: function renderCompletions(users) {
      var _this4 = this;

      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }var buttons = Array(users.length);
      this.buttons = buttons;
      var handler = function handler(i, user) {
        return function (event) {
          if (event.key === "ArrowDown" || event.keyCode === 40) {
            event.preventDefault();
            buttons[Math.min(buttons.length - 1, i + 1)].focus();
          } else if (event.key === "ArrowUp" || event.keyCode === 38) {
            event.preventDefault();
            buttons[Math.max(0, i - 1)].focus();
          } else if (event.key === "Enter" || event.keyCode === 13 || event.key === " " || event.keyCode === 32 || event.key === "Tab" || event.keyCode === 9) {
            event.preventDefault();
            _this4.close(user);
          }
        };
      };
      users.forEach(function (user, i) {
        var li = h("li", {}, h("button", { type: "button" }, h("span", { className: "matched" }, "@" + (user.searchKey === 'username' ? _this4.query + user.username.slice(_this4.query.length) : user.username)), h("span", { className: "mention--name" }, ' ' + (user.searchKey === 'name' ? _this4.query + user.fullName.slice(_this4.query.length) : user.fullName))));
        _this4.container.appendChild(li);

        buttons[i] = li.firstChild;
        buttons[i].addEventListener("keydown", handler(i, user));
        buttons[i].addEventListener("mousedown", function () {
          return _this4.close(user);
        });
        buttons[i].addEventListener("focus", function () {
          return _this4.focusedButton = i;
        });
        buttons[i].addEventListener("unfocus", function () {
          return _this4.focusedButton = null;
        });
      });
      this.container.style.display = "block";
    }
  }, {
    key: "close",
    value: function close(value) {
      this.container.style.display = "none";
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }this.quill.off("selection-change", this.onSelectionChange);
      this.quill.off("text-change", this.onTextChange);
      if (value) {
        var label = value.label,
            username = value.username;

        this.quill.deleteText(this.atIndex, this.query.length + 1, Quill.sources.USER);
        this.quill.insertText(this.atIndex, "@" + username, "mention", label, Quill.sources.USER);
        this.quill.insertText(this.atIndex + username.length + 1, " ", "mention", false, Quill.sources.USER);
        this.quill.setSelection(this.atIndex + username.length + 2, 0, Quill.sources.SILENT);
      }
      this.quill.focus();
      this.open = false;
      this.onClose && this.onClose(value);
    }
  }, {
    key: "mentionBoxClose",
    value: function mentionBoxClose(value) {
      var range = this.quill.getSelection();
      if (value) {
        var label = value.label,
            username = value.username;

        this.quill.insertText(this.quill.selection.savedRange.index, "@" + username, "mention", label, Quill.sources.USER);
        this.quill.insertText(this.quill.selection.savedRange.index + username.length + 1, " ", "mention", false, Quill.sources.USER);
        this.quill.setSelection(this.quill.selection.savedRange.index + username.length + 2, 0, Quill.sources.SILENT);
      }
      this.container.style.display = "none";
      this.open = false;
      this.quill.focus();
    }
  }]);

  return Mentions;
}();

Quill.register("modules/mentions", Mentions);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

var _moduleMentions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);