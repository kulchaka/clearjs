"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  VgVj: [function (require, module, exports) {
    module.exports = "javascript-illustration.c65952e9.png";
  }, {}],
  MgTz: [function (require, module, exports) {
    "use strict";

    function t(t, c) {
      return '<div class="row" style="'.concat(c, '">').concat(t, "</div>");
    }

    function c(t) {
      return '<div class="col-sm">'.concat(t, "</div>");
    }

    function o() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Object.keys(t).map(function (c) {
        return "".concat(c, ": ").concat(t[c]);
      }).join(";");
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.row = t, exports.col = c, exports.css = o;
  }, {}],
  I0fB: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.TextBlock = exports.ColumnsBlock = exports.ImageBlock = exports.TitleBlock = void 0;

    var t = require("../utils");

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && n(t, e);
    }

    function n(t, e) {
      return (n = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function r(t) {
      var e = i();
      return function () {
        var o,
            n = s(t);

        if (e) {
          var r = s(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else o = n.apply(this, arguments);

        return c(this, o);
      };
    }

    function c(t, o) {
      return !o || "object" !== e(o) && "function" != typeof o ? u(t) : o;
    }

    function u(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function i() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }

    function s(t) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function l(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function a(t, e) {
      for (var o = 0; o < e.length; o++) {
        var n = e[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    function f(t, e, o) {
      return e && a(t.prototype, e), o && a(t, o), t;
    }

    var p = function () {
      function t(e, o) {
        l(this, t), this.value = e, this.options = o;
      }

      return f(t, [{
        key: "toHTML",
        value: function value() {
          throw new Error("method toHTML must be realised");
        }
      }]), t;
    }(),
        y = function (e) {
      o(c, p);
      var n = r(c);

      function c(t, e) {
        return l(this, c), n.call(this, t, e);
      }

      return f(c, [{
        key: "toHTML",
        value: function value() {
          var e = this.options,
              o = e.tag,
              n = void 0 === o ? "h1" : o,
              r = e.styles;
          return (0, t.row)((0, t.col)("<".concat(n, ">").concat(this.value, "</$tag>")), (0, t.css)(r));
        }
      }]), c;
    }();

    exports.TitleBlock = y;

    var h = function (e) {
      o(c, p);
      var n = r(c);

      function c(t, e) {
        return l(this, c), n.call(this, t, e);
      }

      return f(c, [{
        key: "toHTML",
        value: function value() {
          var e = this.options,
              o = e.imageStyles,
              n = e.alt,
              r = void 0 === n ? "" : n,
              c = e.styles;
          return (0, t.row)('<img src="'.concat(this.value, '" style="').concat((0, t.css)(o), '" alt="').concat(r, '">'), (0, t.css)(c));
        }
      }]), c;
    }();

    exports.ImageBlock = h;

    var v = function (e) {
      o(c, p);
      var n = r(c);

      function c(t, e) {
        return l(this, c), n.call(this, t, e);
      }

      return f(c, [{
        key: "toHTML",
        value: function value() {
          var e = this.value.map(t.col);
          return (0, t.row)(e.join(""), (0, t.css)(this.options.styles));
        }
      }]), c;
    }();

    exports.ColumnsBlock = v;

    var b = function (e) {
      o(c, p);
      var n = r(c);

      function c(t, e) {
        return l(this, c), n.call(this, t, e);
      }

      return f(c, [{
        key: "toHTML",
        value: function value() {
          return (0, t.row)((0, t.col)("<p>".concat(this.value, "</p>")), (0, t.css)(this.options.styles));
        }
      }]), c;
    }();

    exports.TextBlock = b;
  }, {
    "../utils": "MgTz"
  }],
  kRZE: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.model = void 0;

    var e = a(require("../img/javascript-illustration.png")),
        t = require("./classes/Blocks");

    function a(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = [new t.TitleBlock("Contructor on Vanilla JS", {
      tag: "h2",
      styles: {
        background: "linear-gradient(to right, #f68e43 0%, #fbda03 100%)",
        color: "#4b4d65",
        "text-align": "center",
        "text-shadow": "1px 1px 2px #383114",
        padding: "1rem"
      }
    }), new t.ImageBlock(e["default"], {
      styles: {
        padding: "2rem 0",
        display: "flex",
        "justify-content": "center"
      },
      imageStyles: {
        width: "500px",
        height: "auto"
      },
      alt: "javascript image"
    }), new t.ColumnsBlock(["Pure JavaScript application, without any libraries", "Learn how SOLID and OOP principles work in JavaScript", "JavaScript is easy, interesting."], {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold"
      }
    }), new t.TextBlock("Andrii Kulchytskyi - kulchaka@gmail.com", {
      styles: {
        background: "linear-gradient(to left, #f2994a, #f2c94c)",
        padding: "1rem",
        "font-weight": "bold"
      }
    })];
    exports.model = i;
  }, {
    "../img/javascript-illustration.png": "VgVj",
    "./classes/Blocks": "I0fB"
  }],
  V0si: [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function n(e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Site = void 0;

    var r = function () {
      function t(n) {
        e(this, t), this.el = document.querySelector(n);
      }

      return n(t, [{
        key: "render",
        value: function value(e) {
          var t = this;
          e.forEach(function (e) {
            console.log(e.toHTML()), t.el.insertAdjacentHTML("beforeend", e.toHTML());
          });
        }
      }]), t;
    }();

    exports.Site = r;
  }, {}],
  PhqT: [function (require, module, exports) {}, {}],
  L4bL: [function (require, module, exports) {
    "use strict";

    var e = require("./model"),
        r = require("./classes/Site");

    require("../styles/style.css");

    var s = new r.Site("#site");
    s.render(e.model);
  }, {
    "./model": "kRZE",
    "./classes/Site": "V0si",
    "../styles/style.css": "PhqT"
  }]
}, {}, ["L4bL"], null);