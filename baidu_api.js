window.TILE_VERSION = {
  ditu: {
    normal: {
      version: "088",
      updateDate: "20210112",
    },
    satellite: {
      version: "009",
      updateDate: "20210112",
    },
    normalTraffic: {
      version: "081",
      updateDate: "20210112",
    },
    satelliteTraffic: {
      version: "083",
      updateDate: "20210112",
    },
    mapJS: {
      version: "104",
      updateDate: "20210112",
    },
    satelliteStreet: {
      version: "083",
      updateDate: "20210112",
    },
    earthVector: {
      version: "001",
      updateDate: "20210112",
    },
  },
  webapp: {
    high_normal: {
      version: "001",
      updateDate: "20210112",
    },
    lower_normal: {
      version: "002",
      updateDate: "20210112",
    },
  },
  api_for_mobile: {
    vector: {
      version: "002",
      updateDate: "20210112",
    },
    vectorIcon: {
      version: "002",
      updateDate: "20210112",
    },
  },
};
window.BMAP_AUTHENTIC_KEY = "biuHZmoAow03mjwThwt8f2whaf4mVdHf";
(function() {
  function ba(a) {
    throw a;
  }
  var l = void 0,
    p = !0,
    q = null,
    t = !1;

  function u() {
    return function() {};
  }

  function ca(a) {
    return function(b) {
      this[a] = b;
    };
  }

  function x(a) {
    return function() {
      return this[a];
    };
  }

  function ea(a) {
    return function() {
      return a;
    };
  }
  var fa,
    ga = [];

  function ha(a) {
    return function() {
      return ga[a].apply(this, arguments);
    };
  }

  function ia(a, b) {
    return (ga[a] = b);
  }
  var ja,
    A = (ja = A || {
      version: "1.3.4",
    });
  A.da = "$BAIDU$";
  window[A.da] = window[A.da] || {};
  A.object = A.object || {};
  A.extend = A.object.extend = function(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    return a;
  };
  A.U = A.U || {};
  A.U.fa = function(a) {
    return "string" == typeof a || a instanceof String
      ? document.getElementById(a)
      : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType)
      ? a
      : q;
  };
  A.fa = A.Hc = A.U.fa;
  A.U.aa = function(a) {
    a = A.U.fa(a);
    if (a === q) return a;
    a.style.display = "none";
    return a;
  };
  A.aa = A.U.aa;
  A.lang = A.lang || {};
  A.lang.Eg = function(a) {
    return "[object String]" == Object.prototype.toString.call(a);
  };
  A.Eg = A.lang.Eg;
  A.lang.jE = function(a) {
    if ("[object Object]" === Object.prototype.toString.call(a)) {
      for (var b in a) return t;
      return p;
    }
    return t;
  };
  A.jE = A.lang.jE;
  A.U.Yj = function(a) {
    return A.lang.Eg(a) ? document.getElementById(a) : a;
  };
  A.Yj = A.U.Yj;
  A.U.getElementsByClassName = function(a, b) {
    var c;
    if (a.getElementsByClassName) c = a.getElementsByClassName(b);
    else {
      var e = a;
      e == q && (e = document);
      c = [];
      var e = e.getElementsByTagName("*"),
        f = e.length,
        g = RegExp("(^|\\s)" + b + "(\\s|$)"),
        i,
        k;
      for (k = i = 0; i < f; i++)
        g.test(e[i].className) && ((c[k] = e[i]), k++);
    }
    return c;
  };
  A.getElementsByClassName = A.U.getElementsByClassName;
  A.U.contains = function(a, b) {
    var c = A.U.Yj,
      a = c(a),
      b = c(b);
    return a.contains
      ? a != b && a.contains(b)
      : !!(a.compareDocumentPosition(b) & 16);
  };
  A.ga = A.ga || {};
  /msie (\d+\.\d)/i.test(navigator.userAgent) &&
    (A.ga.oa = A.oa = document.documentMode || +RegExp.$1);
  var ka = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    usemap: "useMap",
    frameborder: "frameBorder",
  };
  8 > A.ga.oa
    ? ((ka["for"] = "htmlFor"), (ka["class"] = "className"))
    : ((ka.htmlFor = "for"), (ka.className = "class"));
  A.U.IG = ka;
  A.U.hF = function(a, b, c) {
    a = A.U.fa(a);
    if (a === q) return a;
    if ("style" == b) a.style.cssText = c;
    else {
      b = A.U.IG[b] || b;
      a.setAttribute(b, c);
    }
    return a;
  };
  A.hF = A.U.hF;
  A.U.iF = function(a, b) {
    a = A.U.fa(a);
    if (a === q) return a;
    for (var c in b) A.U.hF(a, c, b[c]);
    return a;
  };
  A.iF = A.U.iF;
  A.cl = A.cl || {};
  (function() {
    var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
    A.cl.trim = function(b) {
      return ("" + b).replace(a, "");
    };
  })();
  A.trim = A.cl.trim;
  A.cl.gp = function(a, b) {
    var a = "" + a,
      c = Array.prototype.slice.call(arguments, 1),
      e = Object.prototype.toString;
    if (c.length) {
      c =
        c.length == 1
          ? b !== q && /\[object Array\]|\[object Object\]/.test(e.call(b))
            ? b
            : c
          : c;
      return a.replace(/#\{(.+?)\}/g, function(a, b) {
        var i = c[b];
        "[object Function]" == e.call(i) && (i = i(b));
        return "undefined" == typeof i ? "" : i;
      });
    }
    return a;
  };
  A.gp = A.cl.gp;
  A.U.qc = function(a, b) {
    a = A.U.fa(a);
    if (a === q) return a;
    for (
      var c = a.className.split(/\s+/),
        e = b.split(/\s+/),
        f,
        g = e.length,
        i,
        k = 0;
      k < g;
      ++k
    ) {
      i = 0;
      for (f = c.length; i < f; ++i)
        if (c[i] == e[k]) {
          c.splice(i, 1);
          break;
        }
    }
    a.className = c.join(" ");
    return a;
  };
  A.qc = A.U.qc;
  A.U.Mx = function(a, b, c) {
    a = A.U.fa(a);
    if (a === q) return a;
    var e;
    if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
    else {
      e = a.ownerDocument.createRange();
      b = b.toUpperCase();
      if (b == "AFTERBEGIN" || b == "BEFOREEND") {
        e.selectNodeContents(a);
        e.collapse(b == "AFTERBEGIN");
      } else {
        b = b == "BEFOREBEGIN";
        e[b ? "setStartBefore" : "setEndAfter"](a);
        e.collapse(b);
      }
      e.insertNode(e.createContextualFragment(c));
    }
    return a;
  };
  A.Mx = A.U.Mx;
  A.U.show = function(a) {
    a = A.U.fa(a);
    if (a === q) return a;
    a.style.display = "";
    return a;
  };
  A.show = A.U.show;
  A.U.DD = function(a) {
    a = A.U.fa(a);
    return a === q ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document;
  };
  A.U.ib = function(a, b) {
    a = A.U.fa(a);
    if (a === q) return a;
    for (
      var c = b.split(/\s+/),
        e = a.className,
        f = " " + e + " ",
        g = 0,
        i = c.length;
      g < i;
      g++
    )
      f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
    a.className = e;
    return a;
  };
  A.ib = A.U.ib;
  A.U.CB = A.U.CB || {};
  A.U.Wl = A.U.Wl || [];
  A.U.Wl.filter = function(a, b, c) {
    for (var e = 0, f = A.U.Wl, g; (g = f[e]); e++) if ((g = g[c])) b = g(a, b);
    return b;
  };
  A.cl.wO = function(a) {
    return a.indexOf("-") < 0 && a.indexOf("_") < 0
      ? a
      : a.replace(/[-_][^-_]/g, function(a) {
          return a.charAt(1).toUpperCase();
        });
  };
  A.U.p0 = function(a) {
    A.U.ht(a, "expand") ? A.U.qc(a, "expand") : A.U.ib(a, "expand");
  };
  A.U.ht = function(a) {
    if (arguments.length <= 0 || typeof a === "function") return this;
    if (this.size() <= 0) return t;
    var a = a
        .replace(/^\s+/g, "")
        .replace(/\s+$/g, "")
        .replace(/\s+/g, " "),
      b = a.split(" "),
      c;
    A.forEach(this, function(a) {
      for (var a = a.className, f = 0; f < b.length; f++)
        if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
          c = t;
          return;
        }
      c !== t && (c = p);
    });
    return c;
  };
  A.U.Dg = function(a, b) {
    var c = A.U,
      a = c.fa(a);
    if (a === q) return a;
    var b = A.cl.wO(b),
      e = a.style[b];
    if (!e)
      var f = c.CB[b],
        e = a.currentStyle || (A.ga.oa ? a.style : getComputedStyle(a, q)),
        e = f && f.get ? f.get(a, e) : e[f || b];
    if ((f = c.Wl)) e = f.filter(b, e, "get");
    return e;
  };
  A.Dg = A.U.Dg;
  /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.opera = +RegExp.$1);
  A.ga.oM = /webkit/i.test(navigator.userAgent);
  A.ga.IY =
    /gecko/i.test(navigator.userAgent) &&
    !/like gecko/i.test(navigator.userAgent);
  A.ga.qE = "CSS1Compat" == document.compatMode;
  A.U.na = function(a) {
    a = A.U.fa(a);
    if (a === q) return a;
    var b = A.U.DD(a),
      c = A.ga,
      e = A.U.Dg;
    c.IY > 0 && b.getBoxObjectFor && e(a, "position");
    var f = {
        left: 0,
        top: 0,
      },
      g;
    if (a == (c.oa && !c.qE ? b.body : b.documentElement)) return f;
    if (a.getBoundingClientRect) {
      a = a.getBoundingClientRect();
      f.left =
        Math.floor(a.left) +
        Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
      f.top =
        Math.floor(a.top) +
        Math.max(b.documentElement.scrollTop, b.body.scrollTop);
      f.left = f.left - b.documentElement.clientLeft;
      f.top = f.top - b.documentElement.clientTop;
      a = b.body;
      b = parseInt(e(a, "borderLeftWidth"));
      e = parseInt(e(a, "borderTopWidth"));
      if (c.oa && !c.qE) {
        f.left = f.left - (isNaN(b) ? 2 : b);
        f.top = f.top - (isNaN(e) ? 2 : e);
      }
    } else {
      g = a;
      do {
        f.left = f.left + g.offsetLeft;
        f.top = f.top + g.offsetTop;
        if (c.oM > 0 && e(g, "position") == "fixed") {
          f.left = f.left + b.body.scrollLeft;
          f.top = f.top + b.body.scrollTop;
          break;
        }
        g = g.offsetParent;
      } while (g && g != a);
      if (c.opera > 0 || (c.oM > 0 && e(a, "position") == "absolute"))
        f.top = f.top - b.body.offsetTop;
      for (g = a.offsetParent; g && g != b.body; ) {
        f.left = f.left - g.scrollLeft;
        if (!c.opera || g.tagName != "TR") f.top = f.top - g.scrollTop;
        g = g.offsetParent;
      }
    }
    return f;
  };
  /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.Xe = +RegExp.$1);
  /BIDUBrowser/i.test(navigator.userAgent) && (A.ga.y2 = p);
  var la = navigator.userAgent;
  /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) &&
    !/chrome/i.test(la) &&
    (A.ga.wy = +(RegExp.$1 || RegExp.$2));
  /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.Kw = +RegExp.$1);
  A.nc = A.nc || {};
  A.nc.Pb = function(a, b) {
    var c,
      e,
      f = a.length;
    if ("function" == typeof b)
      for (e = 0; e < f; e++) {
        c = a[e];
        c = b.call(a, c, e);
        if (c === t) break;
      }
    return a;
  };
  A.Pb = A.nc.Pb;
  A.lang.da = function() {
    return "TANGRAM__" + (window[A.da]._counter++).toString(36);
  };
  window[A.da]._counter = window[A.da]._counter || 1;
  window[A.da]._instances = window[A.da]._instances || {};
  A.lang.vt = function(a) {
    return "[object Function]" == Object.prototype.toString.call(a);
  };
  A.lang.Ja = function(a) {
    this.da = a || A.lang.da();
    window[A.da]._instances[this.da] = this;
  };
  window[A.da]._instances = window[A.da]._instances || {};
  A.lang.Ja.prototype.gi = ha(0);
  A.lang.Ja.prototype.toString = function() {
    return "[object " + (this.xQ || "Object") + "]";
  };
  A.lang.Hu = function(a, b) {
    this.type = a;
    this.returnValue = p;
    this.target = b || q;
    this.currentTarget = q;
  };
  A.lang.Ja.prototype.addEventListener = function(a, b, c) {
    if (A.lang.vt(b)) {
      !b.nl && (b.nl = {});
      !this.Li && (this.Li = {});
      var e = this.Li,
        f;
      if (typeof c == "string" && c) {
        /[^\w\-]/.test(c) && ba("nonstandard key:" + c);
        f = b.Cx = c;
      }
      a.indexOf("on") != 0 && (a = "on" + a);
      typeof e[a] != "object" && (e[a] = {});
      typeof b.nl[a] != "object" && (b.nl[a] = {});
      f = f || A.lang.da();
      b.nl[a].Cx = f;
      e[a][f] = b;
    }
  };
  A.lang.Ja.prototype.removeEventListener = function(a, b) {
    a.indexOf("on") != 0 && (a = "on" + a);
    if (A.lang.vt(b)) {
      if (!b.nl || !b.nl[a]) return;
      b = b.nl[a].Cx;
    } else if (!A.lang.Eg(b)) return;
    !this.Li && (this.Li = {});
    var c = this.Li;
    c[a] && c[a][b] && delete c[a][b];
  };
  A.lang.Ja.prototype.dispatchEvent = function(a, b) {
    A.lang.Eg(a) && (a = new A.lang.Hu(a));
    !this.Li && (this.Li = {});
    var b = b || {},
      c;
    for (c in b) a[c] = b[c];
    var e = this.Li,
      f = a.type;
    a.target = a.target || this;
    a.currentTarget = this;
    f.indexOf("on") != 0 && (f = "on" + f);
    A.lang.vt(this[f]) && this[f].apply(this, arguments);
    if (typeof e[f] == "object") for (c in e[f]) e[f][c].apply(this, arguments);
    return a.returnValue;
  };
  A.lang.xa = function(a, b, c) {
    var e,
      f,
      g = a.prototype;
    f = new Function();
    f.prototype = b.prototype;
    f = a.prototype = new f();
    for (e in g) f[e] = g[e];
    a.prototype.constructor = a;
    a.c0 = b.prototype;
    if ("string" == typeof c) f.xQ = c;
  };
  A.xa = A.lang.xa;
  A.lang.Sc = function(a) {
    return window[A.da]._instances[a] || q;
  };
  A.platform = A.platform || {};
  A.platform.iM = /macintosh/i.test(navigator.userAgent);
  A.platform.J4 = /MicroMessenger/i.test(navigator.userAgent);
  A.platform.pM = /windows/i.test(navigator.userAgent);
  A.platform.RY = /x11/i.test(navigator.userAgent);
  A.platform.xj = /android/i.test(navigator.userAgent);
  /android (\d+(\.\d)?)/i.test(navigator.userAgent) &&
    (A.platform.ZB = A.ZB = RegExp.$1);
  A.platform.KY = /ipad/i.test(navigator.userAgent);
  A.platform.mE = /iphone/i.test(navigator.userAgent);

  function ma(a, b) {
    a.domEvent = b = window.event || b;
    a.clientX = b.clientX || b.pageX;
    a.clientY = b.clientY || b.pageY;
    a.offsetX = b.offsetX || b.layerX;
    a.offsetY = b.offsetY || b.layerY;
    a.screenX = b.screenX;
    a.screenY = b.screenY;
    a.ctrlKey = b.ctrlKey || b.metaKey;
    a.shiftKey = b.shiftKey;
    a.altKey = b.altKey;
    if (b.touches) {
      a.touches = [];
      for (var c = 0; c < b.touches.length; c++)
        a.touches.push({
          clientX: b.touches[c].clientX,
          clientY: b.touches[c].clientY,
          screenX: b.touches[c].screenX,
          screenY: b.touches[c].screenY,
          pageX: b.touches[c].pageX,
          pageY: b.touches[c].pageY,
          target: b.touches[c].target,
          identifier: b.touches[c].identifier,
        });
    }
    if (b.changedTouches) {
      a.changedTouches = [];
      for (c = 0; c < b.changedTouches.length; c++)
        a.changedTouches.push({
          clientX: b.changedTouches[c].clientX,
          clientY: b.changedTouches[c].clientY,
          screenX: b.changedTouches[c].screenX,
          screenY: b.changedTouches[c].screenY,
          pageX: b.changedTouches[c].pageX,
          pageY: b.changedTouches[c].pageY,
          target: b.changedTouches[c].target,
          identifier: b.changedTouches[c].identifier,
        });
    }
    if (b.targetTouches) {
      a.targetTouches = [];
      for (c = 0; c < b.targetTouches.length; c++)
        a.targetTouches.push({
          clientX: b.targetTouches[c].clientX,
          clientY: b.targetTouches[c].clientY,
          screenX: b.targetTouches[c].screenX,
          screenY: b.targetTouches[c].screenY,
          pageX: b.targetTouches[c].pageX,
          pageY: b.targetTouches[c].pageY,
          target: b.targetTouches[c].target,
          identifier: b.targetTouches[c].identifier,
        });
    }
    a.rotation = b.rotation;
    a.scale = b.scale;
    return a;
  }
  A.lang.Xw = function(a) {
    var b = window[A.da];
    b.DS && delete b.DS[a];
  };
  A.event = {};
  A.V = A.event.V = function(a, b, c) {
    if (!(a = A.fa(a))) return a;
    b = b.replace(/^on/, "");
    a.addEventListener
      ? a.addEventListener(b, c, t)
      : a.attachEvent && a.attachEvent("on" + b, c);
    return a;
  };
  A.gd = A.event.gd = function(a, b, c) {
    if (!(a = A.fa(a))) return a;
    b = b.replace(/^on/, "");
    a.removeEventListener
      ? a.removeEventListener(b, c, t)
      : a.detachEvent && a.detachEvent("on" + b, c);
    return a;
  };
  A.U.ht = function(a, b) {
    if (!a || !a.className || typeof a.className != "string") return t;
    var c = -1;
    try {
      c =
        a.className == b ||
        a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"));
    } catch (e) {
      return t;
    }
    return c > -1;
  };
  A.UK = (function() {
    function a(a) {
      document.addEventListener &&
        ((this.element = a),
        (this.XK = this.Lk ? "touchstart" : "mousedown"),
        (this.kD = this.Lk ? "touchmove" : "mousemove"),
        (this.jD = this.Lk ? "touchend" : "mouseup"),
        (this.yh = t),
        (this.pu = this.ou = 0),
        this.element.addEventListener(this.XK, this, t),
        ja.V(this.element, "mousedown", u()),
        this.handleEvent(q));
    }
    a.prototype = {
      Lk: "ontouchstart" in window || "createTouch" in document,
      start: function(a) {
        na(a);
        this.yh = t;
        this.ou = this.Lk ? a.touches[0].clientX : a.clientX;
        this.pu = this.Lk ? a.touches[0].clientY : a.clientY;
        this.element.addEventListener(this.kD, this, t);
        this.element.addEventListener(this.jD, this, t);
      },
      move: function(a) {
        oa(a);
        var c = this.Lk ? a.touches[0].clientY : a.clientY;
        if (
          10 <
            Math.abs((this.Lk ? a.touches[0].clientX : a.clientX) - this.ou) ||
          10 < Math.abs(c - this.pu)
        )
          this.yh = p;
      },
      end: function(a) {
        oa(a);
        this.yh ||
          ((a = document.createEvent("Event")),
          a.initEvent("tap", t, p),
          this.element.dispatchEvent(a));
        this.element.removeEventListener(this.kD, this, t);
        this.element.removeEventListener(this.jD, this, t);
      },
      handleEvent: function(a) {
        if (a)
          switch (a.type) {
            case this.XK:
              this.start(a);
              break;
            case this.kD:
              this.move(a);
              break;
            case this.jD:
              this.end(a);
          }
      },
    };
    return function(b) {
      return new a(b);
    };
  })();
  var D = window.BMap || {};
  D.version = "3.0";
  D.p2 = 0.34 > Math.random();
  0 <= D.version.indexOf("#") && (D.version = "3.0");
  D.Fr = [];
  D.df = function(a) {
    this.Fr.push(a);
  };
  D.wr = [];
  D.Rk = function(a) {
    this.wr.push(a);
  };
  D.NU = D.apiLoad || u();
  D.T0 =
    D.verify ||
    function() {
      D.version &&
        D.version >= 1.5 &&
        pa(D.td + "?qt=verify&ak=" + qa, function(a) {
          if (a && a.error !== 0) {
            if (typeof map !== "undefined") {
              map.Ta().innerHTML = "";
              map.Li = {};
            }
            D = q;
            var b =
              "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
            switch (a.error) {
              case 101:
                b =
                  "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                break;
              case 102:
                b =
                  "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
            }
            alert(b);
          }
        });
    };
  var qa = window.BMAP_AUTHENTIC_KEY;
  window.BMAP_AUTHENTIC_KEY = q;
  var ra = window.BMap_loadScriptTime,
    ua = new Date().getTime(),
    va = q,
    wa = p,
    xa = 5042,
    ya = 5002,
    za = 5003,
    Ba = "load_mapclick",
    Ca = 5038,
    Da = 5041,
    Ea = 5047,
    Fa = 5036,
    Ha = 5039,
    Ia = 5037,
    Ja = 5040,
    Ka = 5011,
    La = 7e3;
  var Ma = 0;

  function Na(a, b) {
    if ((a = A.fa(a))) {
      var c = this;
      A.lang.Ja.call(c);
      b = b || {};
      c.M = {
        lC: 200,
        jc: p,
        bx: t,
        $C: p,
        bp: p,
        dp: b.enableWheelZoom || t,
        SK: p,
        bD: p,
        cp: p,
        Ms: p,
        gD: p,
        $o: b.enable3DBuilding || t,
        Mc: 25,
        g1: 240,
        AU: 450,
        yc: H.yc,
        Kd: H.Kd,
        wt: !!b.wt,
        kc: Math.round(b.minZoom) || 1,
        pc: Math.round(b.maxZoom) || 19,
        Ua: b.mapType || Oa,
        J5: t,
        PK: b.drawer || Ma,
        ax: p,
        $w: 500,
        GW: b.enableHighResolution !== t,
        um: b.enableMapClick !== t,
        devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
        TF: 99,
        De: b.mapStyle || q,
        YY: b.logoControl === t ? t : p,
        UU: [],
        B2: b.beforeClickIcon || q,
        yg: t,
        yk: t,
        Uo: t,
        LE: p,
        WC: b.enableBizAuthLogo === t ? t : p,
        Ma: b.coordsType || 5,
        o6: b.touchZoomCenter || 0,
        dD: b.enablePinchDragging === t ? t : p,
      };
      c.M.De && (this.vY(c.M.De.controls), this.eM(c.M.De.geotableId));
      c.M.De && c.M.De.styleId && c.c4(c.M.De.styleId);
      c.M.oC = {
        dark: {
          backColor: "#2D2D2D",
          textColor: "#bfbfbf",
          iconUrl: "dicons",
        },
        normal: {
          backColor: "#F3F1EC",
          textColor: "#c61b1b",
          iconUrl: "icons",
        },
        light: {
          backColor: "#EBF8FC",
          textColor: "#017fb4",
          iconUrl: "licons",
        },
      };
      b.enableAutoResize && (c.M.Ms = b.enableAutoResize);
      b.enableStreetEntrance === t && (c.M.gD = b.enableStreetEntrance);
      b.enableDeepZoom === t && (c.M.SK = b.enableDeepZoom);
      var e = c.M.UU;
      if (I())
        for (var f = 0, g = e.length; f < g; f++)
          if (A.ga[e[f]]) {
            c.M.devicePixelRatio = 1;
            break;
          }
      e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
      f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
      if (
        -1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") ||
        (e && f)
      )
        c.M.TF = 99;
      c.cb = a;
      c.wB(a);
      a.unselectable = "on";
      a.innerHTML = "";
      a.appendChild(c.Ba());
      b.size && this.He(b.size);
      e = c.yb();
      c.width = e.width;
      c.height = e.height;
      c.offsetX = 0;
      c.offsetY = 0;
      c.platform = a.firstChild;
      c.Ee = c.platform.firstChild;
      c.Ee.style.width = c.width + "px";
      c.Ee.style.height = c.height + "px";
      c.be = {};
      c.ge = new J(0, 0);
      c.Vb = new J(0, 0);
      c.Za = 3;
      c.zc = 0;
      c.zC = q;
      c.yC = q;
      c.Ob = "";
      c.Lw = "";
      c.Oh = {};
      c.Oh.custom = {};
      c.Ni = {};
      c.$a = 0;
      b.useWebGL === t && Pa(t);
      c.W = new Qa(a, {
        Ye: "api",
        HS: p,
      });
      c.W.aa();
      c.W.oF(c);
      b = b || {};
      e = c.Ua = c.M.Ua;
      c.Ec = e.tj();
      e && e.rF(c.M.Ma);
      e === Ra && Sa(ya);
      e === Ta && Sa(za);
      e = c.M;
      e.PO = Math.round(b.minZoom);
      e.OO = Math.round(b.maxZoom);
      c.$u();
      c.ba = {
        Nc: t,
        oc: 0,
        Bt: 0,
        uM: 0,
        N4: 0,
        dC: t,
        WE: -1,
        xe: [],
      };
      c.platform.style.cursor = c.M.yc;
      for (f = 0; f < D.Fr.length; f++) D.Fr[f](c);
      c.ba.WE = f;
      c.ha();
      Ua.load("map", function() {
        c.ob();
      });
      c.M.um &&
        (setTimeout(function() {
          Sa(Ba);
        }, 1e3),
        Ua.load(
          "mapclick",
          function() {
            window.MPC_Mgr = window.MPC_Mgr || {};
            window.MPC_Mgr[c.da] = new Wa(c);
          },
          p
        ));
      Xa() &&
        Ua.load("oppc", function() {
          c.Pu();
        });
      I() &&
        Ua.load("opmb", function() {
          c.Pu();
        });
      a = q;
      c.KB = [];
    }
  }
  A.lang.xa(Na, A.lang.Ja, "Map");
  A.extend(Na.prototype, {
    Ba: function() {
      var a = L("div"),
        b = a.style;
      b.overflow = "visible";
      b.position = "absolute";
      b.zIndex = "0";
      b.top = b.left = "0px";
      var b = L("div", {
          class: "BMap_mask",
        }),
        c = b.style;
      c.position = "absolute";
      c.top = c.left = "0px";
      c.zIndex = "9";
      c.overflow = "hidden";
      c.WebkitUserSelect = "none";
      a.appendChild(b);
      return a;
    },
    wB: function(a) {
      var b = a.style;
      b.overflow = "hidden";
      "absolute" !== Ya(a).position &&
        ((b.position = "relative"), (b.zIndex = 0));
      b.backgroundColor = "#F3F1EC";
      b.color = "#000";
      b.textAlign = "left";
    },
    ha: function() {
      var a = this;
      a.Bo = function() {
        var b = a.yb();
        if (a.width !== b.width || a.height !== b.height) {
          var c = new N(a.width, a.height),
            e = new P("onbeforeresize");
          e.size = c;
          a.dispatchEvent(e);
          a.pk((b.width - a.width) / 2, (b.height - a.height) / 2);
          a.Ee.style.width = (a.width = b.width) + "px";
          a.Ee.style.height = (a.height = b.height) + "px";
          c = new P("onresize");
          c.size = b;
          a.dispatchEvent(c);
        }
      };
      a.M.Ms && (a.ba.hm = setInterval(a.Bo, 80));
    },
    pk: function(a, b, c, e) {
      var f = this.ya().$b(this.ka()),
        g = this.Ec,
        i = p;
      if (c && (c instanceof Q || c instanceof J)) c = Za(c, this.M.Ma);
      c && Q.lE(c) && ((this.ge = new J(c.lng, c.lat)), (i = t));
      if ((c = c && e ? g.ri(c, this.Ob) : this.Vb))
        if (
          ((this.Vb = new J(c.lng + a * f, c.lat - b * f)),
          (a = g.xh(this.Vb, this.Ob)) && i)
        )
          this.ge = a;
    },
    Rg: function(a, b) {
      if (
        $a(a) &&
        (this.$u(),
        this.dispatchEvent(new P("onzoomstart")),
        (a = this.Yn(a).zoom),
        a !== this.Za)
      ) {
        this.zc = this.Za;
        this.Za = a;
        var c;
        b ? (c = b) : this.qh() && (c = this.qh().na());
        c &&
          ((c = this.mo(Za(c, this.M.Ma), this.zc)),
          this.pk(
            this.width / 2 - c.x,
            this.height / 2 - c.y,
            this.pg(c, this.zc),
            p
          ));
        this.dispatchEvent(new P("onzoomstartcode"));
      }
    },
    Wc: function(a) {
      this.Rg(a);
    },
    $F: function(a) {
      this.Rg(this.Za + 1, a);
    },
    aG: function(a) {
      this.Rg(this.Za - 1, a);
    },
    zi: function(a) {
      if (a instanceof Q || a instanceof J)
        (a = Za(a, this.M.Ma)),
          (this.Vb = this.Ec.ri(a, this.Ob)),
          (this.ge = Q.lE(a)
            ? new J(a.lng, a.lat)
            : this.Ec.xh(this.Vb, this.Ob));
    },
    Kg: function(a, b) {
      a = Math.round(a) || 0;
      b = Math.round(b) || 0;
      this.pk(-a, -b);
    },
    cs: function(a) {
      a &&
        ab(a.Me) &&
        (a.Me(this), this.dispatchEvent(new P("onaddcontrol", a)));
    },
    DN: function(a) {
      a &&
        ab(a.remove) &&
        (a.remove(), this.dispatchEvent(new P("onremovecontrol", a)));
    },
    bm: function(a) {
      a &&
        ab(a.za) &&
        (a.za(this), this.dispatchEvent(new P("onaddcontextmenu", a)));
    },
    Op: function(a) {
      a &&
        ab(a.remove) &&
        (this.dispatchEvent(new P("onremovecontextmenu", a)), a.remove());
    },
    Ra: function(a) {
      a &&
        ab(a.Me) &&
        (a.Me(this), this.dispatchEvent(new P("onaddoverlay", a)));
    },
    Jb: function(a) {
      a &&
        ab(a.remove) &&
        (a.remove(), this.dispatchEvent(new P("onremoveoverlay", a)));
    },
    lK: function() {
      this.dispatchEvent(new P("onclearoverlays"));
    },
    Ue: function(a) {
      a && this.dispatchEvent(new P("onaddtilelayer", a));
    },
    cg: function(a) {
      a && this.dispatchEvent(new P("onremovetilelayer", a));
    },
    Og: function(a) {
      if (this.Ua !== a) {
        this.M.aZ && this.A_(a);
        var b = new P("onsetmaptype");
        b.A5 = this.Ua;
        this.Ua = this.M.Ua = a;
        this.Ec = this.Ua.tj();
        this.pk(0, 0, this.lv(), p);
        this.$u();
        var c = this.Yn(this.ka()).zoom;
        this.Rg(c);
        this.dispatchEvent(b);
        b = new P("onmaptypechange");
        b.Za = c;
        b.Ua = a;
        this.dispatchEvent(b);
        a.rF(this.M.Ma);
        (a === bb || a === Ta) && Sa(za);
      }
    },
    A_: function(a) {
      a === bb || a === Ta
        ? (this.Ay(p), this.VN(t), (this.M.yg = t), (this.M.yk = t))
        : (this.Ay(t), this.VN(p), (this.M.yg = p), (this.M.yk = p));
    },
    zf: function(a) {
      var b = this;
      if (a instanceof Q || a instanceof J)
        b.zi(a, {
          noAnimation: p,
        });
      else if (cb(a))
        if (b.Ua === Ra) {
          var c = H.hC[a];
          c && ((pt = c.o), b.zf(pt));
        } else {
          var e = this.JH();
          e.du(function(c) {
            0 === e.Em() &&
              2 === e.Ka.result.type &&
              ((c = c.Ik(0).point),
              (c = new J(c.lng, c.lat)),
              (c = db(c, b.M.Ma)),
              b.zf(c),
              Ra.Ck(a) && b.kF(a));
          });
          e.search(a, {
            log: "center",
          });
        }
    },
    ud: function(a, b) {
      "[object Undefined]" !== Object.prototype.toString.call(b) &&
        (b = parseInt(b));
      D.Bq("cus.fire", "time", {
        z_loadscripttime: ua - ra,
      });
      var c = this;
      if (cb(a))
        if (c.Ua === Ra) {
          var e = H.hC[a];
          e && ((pt = e.o), c.ud(pt, b));
        } else {
          var f = c.JH();
          f.du(function(e) {
            if (
              0 === f.Em() &&
              (2 === f.Ka.result.type || 11 === f.Ka.result.type)
            ) {
              var g = e.Ik(0).point,
                e = b || eb.hx(f.Ka.content.level, c),
                g = new J(g.lng, g.lat);
              c.ud(g, e);
              Ra.Ck(a) && c.kF(a);
            }
          });
          f.search(a, {
            log: "center",
          });
        }
      else if ((a instanceof Q || a instanceof J) && b) {
        b = c.Yn(b).zoom;
        c.zc = c.Za || b;
        c.Za = b;
        e = c.ge;
        a = Za(a, this.M.Ma);
        c.ge = new J(a.lng, a.lat);
        c.Vb = c.Ec.ri(c.ge, c.Ob);
        c.zC = c.zC || c.Za;
        c.yC = c.yC || c.ge;
        var g = new P("onload"),
          i = new P("onloadcode");
        g.point = new J(a.lng, a.lat);
        g.pixel = c.mo(c.ge, c.Za);
        g.zoom = b;
        c.loaded || ((c.loaded = p), c.dispatchEvent(g), va || (va = fb()));
        c.dispatchEvent(i);
        g = new P("onmoveend");
        g.Rz = "centerAndZoom";
        e.Ub(c.ge) || c.dispatchEvent(g);
        c.dispatchEvent(new P("onmoveend"));
        c.zc !== c.Za &&
          ((e = new P("onzoomend")),
          (e.Rz = "centerAndZoom"),
          c.dispatchEvent(e));
        c.M.$o && c.$o();
      }
    },
    JH: function() {
      this.ba.FM || (this.ba.FM = new gb(1));
      return this.ba.FM;
    },
    reset: function() {
      this.ud(this.yC, this.zC, p);
    },
    enableDragging: function() {
      this.M.jc = p;
    },
    disableDragging: function() {
      this.M.jc = t;
    },
    enableInertialDragging: function() {
      this.M.ax = p;
    },
    disableInertialDragging: function() {
      this.M.ax = t;
    },
    enableScrollWheelZoom: function() {
      this.M.dp = p;
    },
    disableScrollWheelZoom: function() {
      this.M.dp = t;
    },
    enableContinuousZoom: function() {
      this.M.bp = p;
    },
    disableContinuousZoom: function() {
      this.M.bp = t;
    },
    enableDoubleClickZoom: function() {
      this.M.$C = p;
    },
    disableDoubleClickZoom: function() {
      this.M.$C = t;
    },
    enableKeyboard: function() {
      this.M.bx = p;
    },
    disableKeyboard: function() {
      this.M.bx = t;
    },
    enablePinchToZoom: function() {
      this.M.cp = p;
    },
    disablePinchToZoom: function() {
      this.M.cp = t;
    },
    enableAutoResize: function() {
      this.M.Ms = p;
      this.Bo();
      this.ba.hm || (this.ba.hm = setInterval(this.Bo, 80));
    },
    disableAutoResize: function() {
      this.M.Ms = t;
      this.ba.hm && (clearInterval(this.ba.hm), (this.ba.hm = q));
    },
    enableBizAuthLogo: function() {
      this.M.WC = p;
      this.Jo && this.Jo.show();
    },
    disableBizAuthLogo: function() {
      this.M.WC = t;
      this.Jo && this.Jo.aa();
    },
    enableMapClick: function() {
      this.M.um = p;
      var a = this;
      window.MPC_Mgr && window.MPC_Mgr[a.da]
        ? window.MPC_Mgr[a.da].open()
        : (setTimeout(function() {
            Sa(Ba);
          }, 1e3),
          Ua.load(
            "mapclick",
            function() {
              window.MPC_Mgr = window.MPC_Mgr || {};
              window.MPC_Mgr[a.da] = new Wa(a);
            },
            p
          ));
    },
    disableMapClick: function() {
      window.MPC_Mgr &&
        window.MPC_Mgr[this.da] &&
        window.MPC_Mgr[this.da].close();
      this.M.um = t;
    },
    $o: function() {
      this.M.$o = p;
      this.Mn ||
        ((this.Mn = new BuildingLayer({
          k3: p,
        })),
        this.Ue(this.Mn));
    },
    fW: function() {
      this.M.$o = t;
      this.Mn && (this.cg(this.Mn), (this.Mn = q), delete this.Mn);
    },
    yb: function() {
      return this.zs && this.zs instanceof N
        ? new N(this.zs.width, this.zs.height)
        : new N(this.cb.clientWidth, this.cb.clientHeight);
    },
    He: function(a) {
      a && a instanceof N
        ? ((this.zs = a),
          (this.cb.style.width = a.width + "px"),
          (this.cb.style.height = a.height + "px"))
        : (this.zs = q);
    },
    Qb: function() {
      return db(this.ge, this.M.Ma);
    },
    lv: x("ge"),
    ka: x("Za"),
    tV: function() {
      this.Bo();
    },
    Yn: function(a) {
      var b = this.M.kc,
        c = this.M.pc,
        e = t,
        a = Math.round(a);
      a < b && ((e = p), (a = b));
      a > c && ((e = p), (a = c));
      return {
        zoom: a,
        lD: e,
      };
    },
    Ta: x("cb"),
    Ac: function(a, b) {
      a = Za(a, this.M.Ma);
      b = b || this.ka();
      return this.Ec.Ac(a, b, this.Vb, this.yb(), this.Ob);
    },
    mo: function(a, b) {
      b = b || this.ka();
      return this.Ec.Ac(a, b, this.Vb, this.yb(), this.Ob);
    },
    pg: function(a, b) {
      b = b || this.ka();
      return this.Ec.bc(a, b, this.Vb, this.yb(), this.Ob);
    },
    bc: function(a, b) {
      return db(this.pg(a, b), this.M.Ma);
    },
    cf: function(a, b) {
      if (a) {
        var a = Za(a, this.M.Ma),
          c = this.mo(new J(a.lng, a.lat), b);
        c.x -= this.offsetX;
        c.y -= this.offsetY;
        return c;
      }
    },
    dZ: function(a, b) {
      b = b || this.ka();
      return this.Ec.eZ(a, b, this.Vb, this.yb(), this.Ob);
    },
    cZ: function(a, b) {
      if (a) {
        var c = this.dZ(new J(a.lng, a.lat), b);
        c.x -= this.offsetX;
        c.y -= this.offsetY;
        return c;
      }
    },
    oN: function(a, b) {
      if (a) {
        var c = new R(a.x, a.y);
        c.x += this.offsetX;
        c.y += this.offsetY;
        return this.bc(c, b);
      }
    },
    jT: function(a, b) {
      if (a) {
        var c = new R(a.x, a.y);
        c.x += this.offsetX;
        c.y += this.offsetY;
        return this.pg(c, b);
      }
    },
    pointToPixelFor3D: function(a, b) {
      var c = map.Ob;
      this.Ua === Ra && c && hb.rK(a, this, b);
    },
    r5: function(a, b) {
      var c = map.Ob;
      this.Ua === Ra && c && hb.qK(a, this, b);
    },
    s5: function(a, b) {
      var c = this,
        e = map.Ob;
      c.Ua === Ra &&
        e &&
        hb.rK(a, c, function(a) {
          a.x -= c.offsetX;
          a.y -= c.offsetY;
          b && b(a);
        });
    },
    p5: function(a, b) {
      var c = map.Ob;
      this.Ua === Ra &&
        c &&
        ((a.x += this.offsetX), (a.y += this.offsetY), hb.qK(a, this, b));
    },
    ke: function(a) {
      if (!this.Px()) return new ib();
      var b = a || {},
        a = b.margins || [0, 0, 0, 0],
        c = b.zoom || q,
        b = this.bc(
          {
            x: a[3],
            y: this.height - a[2],
          },
          c
        ),
        a = this.bc(
          {
            x: this.width - a[1],
            y: a[0],
          },
          c
        );
      return new ib(b, a);
    },
    Px: function() {
      return !!this.loaded;
    },
    MR: function(a, b) {
      for (
        var c = this.ya(),
          e = b.margins || [10, 10, 10, 10],
          f = b.zoomFactor || 0,
          g = e[1] + e[3],
          e = e[0] + e[2],
          i = c.rf(),
          k = (c = c.Ze());
        k >= i;
        k--
      ) {
        var m = this.ya().$b(k);
        if (a.LF().lng / m < this.width - g && a.LF().lat / m < this.height - e)
          break;
      }
      k += f;
      k < i && (k = i);
      k > c && (k = c);
      return k;
    },
    gt: function(a, b) {
      var c = {
        center: this.Qb(),
        zoom: this.ka(),
      };
      if (
        !a ||
        (!a instanceof ib && 0 === a.length) ||
        (a instanceof ib && a.zj())
      )
        return c;
      var e = [];
      a instanceof ib ? (e.push(a.sf()), e.push(a.Ae())) : (e = a.slice(0));
      for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) {
        var k = Za(e[g], this.M.Ma);
        f.push(this.Ec.ri(k, this.Ob));
      }
      e = new ib();
      for (g = f.length - 1; 0 <= g; g--) e.extend(f[g]);
      if (e.zj()) return c;
      c = e.Qb();
      f = this.MR(e, b);
      b.margins &&
        ((e = b.margins),
        (g = (e[1] - e[3]) / 2),
        (e = (e[0] - e[2]) / 2),
        (i = this.ya().$b(f)),
        b.offset && ((g = b.offset.width), (e = b.offset.height)),
        (c.lng += i * g),
        (c.lat += i * e));
      c = this.Ec.xh(c, this.Ob);
      return {
        center: db(new J(c.lng, c.lat), this.M.Ma),
        zoom: f,
      };
    },
    Pg: function(a, b) {
      var c;
      c = a && a.center ? a : this.gt(a, b);
      var b = b || {},
        e = b.delay || 200;
      if (c.zoom === this.Za && b.enableAnimation !== t) {
        var f = this;
        setTimeout(function() {
          f.zi(c.center, {
            duration: 210,
          });
        }, e);
      } else this.ud(c.center, c.zoom);
    },
    Wf: x("be"),
    qh: function() {
      return this.ba.tb && this.ba.tb.eb() ? this.ba.tb : q;
    },
    getDistance: function(a, b) {
      if (a && b) {
        if (a.Ub(b)) return 0;
        var c = this.M ? this.M.Ma : 5,
          a = Za(a, c),
          b = Za(b, c),
          c = 0,
          c = T.Ek(a, b);
        if (c === q || c === l) c = 0;
        return c;
      }
    },
    ux: function() {
      var a = [],
        b = this.ta,
        c = this.Je;
      if (b) for (var e in b) b[e] instanceof jb && a.push(b[e]);
      if (c) {
        e = 0;
        for (b = c.length; e < b; e++) a.push(c[e]);
      }
      return a;
    },
    ya: function() {
      this.Ua.rF(this.M.Ma);
      return this.Ua;
    },
    YX: x("Hd"),
    Pu: function() {
      for (var a = this.ba.WE; a < D.Fr.length; a++) D.Fr[a](this);
      this.ba.WE = a;
    },
    kF: function(a) {
      this.Ob = Ra.Ck(a);
      this.Lw = Ra.mL(this.Ob);
      this.Ua === Ra && this.Ec instanceof kb && (this.Ec.kj = this.Ob);
    },
    setDefaultCursor: function(a) {
      this.M.yc = a;
      this.platform && (this.platform.style.cursor = this.M.yc);
    },
    getDefaultCursor: function() {
      return this.M.yc;
    },
    setDraggingCursor: function(a) {
      this.M.Kd = a;
    },
    getDraggingCursor: function() {
      return this.M.Kd;
    },
    Hx: function() {
      return this.M.GW && 1.5 <= this.M.devicePixelRatio;
    },
    QB: function(a, b) {
      b ? this.Oh[b] || (this.Oh[b] = {}) : (b = "custom");
      a.tag = b;
      a instanceof lb && ((this.Oh[b][a.da] = a), a.za(this));
      var c = this;
      Ua.load(
        "hotspot",
        function() {
          c.Pu();
        },
        p
      );
    },
    YZ: function(a, b) {
      b || (b = "custom");
      this.Oh[b][a.da] && delete this.Oh[b][a.da];
    },
    Nw: function(a) {
      a || (a = "custom");
      this.Oh[a] = {};
    },
    $u: function() {
      var a = this.Ua.rf(),
        b = this.Ua.Ze(),
        c = this.M;
      c.kc = c.PO || a;
      c.pc = c.OO || b;
      c.kc < a && (c.kc = a);
      c.pc > b && (c.pc = b);
    },
    setMinZoom: function(a) {
      a = Math.round(a);
      a > this.M.pc && (a = this.M.pc);
      this.M.PO = a;
      this.wJ();
    },
    setMaxZoom: function(a) {
      a = Math.round(a);
      a < this.M.kc && (a = this.M.kc);
      this.M.OO = a;
      this.wJ();
    },
    wJ: function() {
      this.$u();
      var a = this.M;
      this.Za < a.kc ? this.Wc(a.kc) : this.Za > a.pc && this.Wc(a.pc);
      var b = new P("onzoomspanchange");
      b.kc = a.kc;
      b.pc = a.pc;
      this.dispatchEvent(b);
    },
    g4: x("KB"),
    getKey: function() {
      return qa;
    },
    C_: function(a) {
      function b(a) {
        c.Z_ = a;
        var b = D.td + "custom/v2/mapstyle",
          g = "version=4&ak=" + qa + "&",
          g =
            g +
            "is_all=true&is_new=1&" +
            ("styles=" + encodeURIComponent(c.EF(a, f)));
        mb(b, g, window[e + "cb"]);
      }
      var c = this,
        e = this.da;
      D.Bq("cus.fire", "count", "z_setmapstylev2count");
      this.Ay(t);
      this.M.aZ = p;
      window.MPC_Mgr && window.MPC_Mgr[c.da] && window.MPC_Mgr[c.da].close();
      c.M.um = t;
      this.addEventListener("hidecopyright", function() {
        c.vk.aa();
        c.M.Uo = !!a.customEditor;
        c.M.Uo === t && c.jF(new N(1, 1));
      });
      c.vk && c.vk.aa();
      this.M.Uo = !!a.customEditor;
      this.M.Y5 = !!a.sharing;
      this.M.E5 = !!a.preview;
      this.M.Uo === t && this.jF(new N(1, 1));
      Ua.load(
        "hotspot",
        function() {
          c.Pu();
        },
        p
      );
      window[e + "zoomRegion"] = {};
      window.J6 = [];
      window[e + "zoomStyleBody"] = [];
      window[e + "zoomFrontStyle"] = {};
      var f = this.ka();
      A.extend({}, a);
      window[e + "cb"] = function(a) {
        a = JSON.parse(a);
        0 === a.status &&
          (3 === a.data.style.length
            ? ((window[e + "_bmap_baseFs"] = a.data.style),
              (window[e + "StyleBody"] = a.data.style[2]))
            : (window[e + "StyleBody"] = a.data.style),
          c.KO(),
          c.CY());
      };
      if (a.styleId) {
        var g = "jsapi";
        a.sharing ? (g = "sharing") : a.preview && (g = "preview");
        this.xX(a.styleId, g, b);
      } else b(a.styleJson);
      window.iconSetInfo_high ||
        pa(
          D.url.proto +
            D.url.domain.TILE_ONLINE_URLS[0] +
            "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi"
        );
    },
    xX: function(a, b, c) {
      var e = this,
        f = this.da,
        g = (1e5 * Math.random()).toFixed(0);
      window[f + "_cbk_si_phpui" + g] = function(a) {
        var b = [];
        a.result &&
          (0 === a.result.error && a.content && 0 === a.content.status) &&
          (b = e.jy(a.content.data.json));
        c && c(b);
      };
      window[f + "_cbk_si_api" + g] = function(a) {
        var b = [];
        0 === a.status && (b = a.info ? e.jy(a.info.json) : e.jy(a.data.json));
        c && c(b);
      };
      var i = "/apiconsole/custommap/";
      switch (b) {
        case "jsapi":
          i = D.td + "?qt=custom_map&v=3.0";
          i += "&style_id=" + a + "&type=publish&ak=" + qa;
          i += "&callback=" + f + "_cbk_si_phpui" + g;
          break;
        case "sharing":
          i =
            i +
            "getSharingJson" +
            ("?styleid=" + a + "&type=edit") +
            ("&ck=" + f + "_cbk_si_api" + g);
          break;
        case "preview":
          i =
            i +
            "getJson" +
            ("?styleid=" + a + "&type=edit") +
            ("&ck=" + f + "_cbk_si_api" + g);
      }
      pa(i);
    },
    $V: function() {
      Array.prototype.map ||
        (Array.prototype.map = function(a, b) {
          var c, e, f;
          this == q && ba(new TypeError(" this is null or not defined"));
          var g = Object(this),
            i = g.length >>> 0;
          "[object Function]" != Object.prototype.toString.call(a) &&
            ba(new TypeError(a + " is not a function"));
          b && (c = b);
          e = Array(i);
          for (f = 0; f < i; ) {
            var k;
            f in g && ((k = g[f]), (k = a.call(c, k, f, g)), (e[f] = k));
            f++;
          }
          return e;
        });
    },
    jy: function(a) {
      if (a === q || "" === a) return [];
      this.$V();
      var b = {
          t: "featureType",
          e: "elementType",
          v: "visibility",
          c: "color",
          l: "lightness",
          s: "saturation",
          w: "weight",
          z: "level",
          h: "hue",
          f: "fontsize",
          zri: "curZoomRegionId",
          zr: "curZoomRegion",
        },
        c = {
          all: "all",
          g: "geometry",
          "g.f": "geometry.fill",
          "g.s": "geometry.stroke",
          l: "labels",
          "l.t.f": "labels.text.fill",
          "l.t.s": "labels.text.stroke",
          "l.t": "labels.text",
          "l.i": "labels.icon",
          "g.tf": "geometry.fill",
        };
      return a.split(",").map(function(a) {
        var a = a.split("|").map(function(a) {
            var e = b[a.split(":")[0]],
              a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
            switch (a) {
              case "poi":
                a = "poilabel";
                break;
              case "districtlabel":
                a = "districtlabel";
            }
            var f = {};
            f[e] = a;
            return f;
          }),
          f = a[0],
          g = 1;
        a[1].elementType && ((g = 2), A.extend(f, a[1]));
        for (var i = {}; g < a.length; g++) A.extend(i, a[g]);
        return A.extend(f, {
          stylers: i,
        });
      });
    },
    cY: function() {
      return this.ef.lg;
    },
    R3: function(a, b) {
      var c = this,
        e = this.da,
        f = (1e5 * Math.random()).toFixed(0);
      window[e + "_cbk" + f] = function(b) {
        b = JSON.parse(b);
        b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
        c.I0(b, a);
        c.KO(a);
        b = new P("onzoomfeatureload" + a);
        c.dispatchEvent(b);
        delete window[e + "_cbk" + f];
      };
      var g = D.td + "custom/v2/mapstyle",
        i = "ak=" + qa + "&",
        i = i + "is_all=true&is_new=1&";
      b.styleJson
        ? (i +=
            "styles=" +
            encodeURIComponent(this.EF(b.styleJson, parseInt(a, 10))))
        : b.styleId &&
          (i += "styles=" + encodeURIComponent(c.EF(c.Z_, parseInt(a, 10))));
      mb(g, i, window[e + "_cbk" + f]);
    },
    jF: function(a, b) {
      var c = new P("oncopyrightoffsetchange", {
        BE: a,
        OV: b,
      });
      this.M.vK = b;
      this.dispatchEvent(c);
    },
    au: function(a) {
      var b = this;
      window.MPC_Mgr && window.MPC_Mgr[b.da] && window.MPC_Mgr[b.da].close();
      b.M.um = t;
      D.Bq("cus.fire", "count", "z_setmapstylecount");
      if (a) {
        b = this;
        a.styleJson && (a.styleStr = b.$_(a.styleJson));
        I() && A.ga.wy
          ? setTimeout(function() {
              b.M.De = a;
              b.dispatchEvent(new P("onsetcustomstyles", a));
            }, 50)
          : ((this.M.De = a),
            this.dispatchEvent(new P("onsetcustomstyles", a)),
            this.eM(b.M.De.geotableId));
        var c = {
          style: a.style,
        };
        a.features && 0 < a.features.length && (c.features = p);
        a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
        Sa(5050, c);
        a.style &&
          (c = b.M.oC[a.style]
            ? b.M.oC[a.style].backColor
            : b.M.oC.normal.backColor) &&
          (this.Ta().style.backgroundColor = c);
      }
    },
    vY: function(a) {
      this.controls ||
        (this.controls = {
          navigationControl: new nb(),
          scaleControl: new ob(),
          overviewMapControl: new pb(),
          mapTypeControl: new qb(),
        });
      var b = this,
        c;
      for (c in this.controls) b.DN(b.controls[c]);
      a = a || [];
      A.nc.Pb(a, function(a) {
        b.cs(b.controls[a]);
      });
    },
    eM: function(a) {
      a
        ? (this.xs && this.xs.If === a) ||
          (this.cg(this.xs),
          (this.xs = new rb({
            geotableId: a,
          })),
          this.Ue(this.xs))
        : this.cg(this.xs);
    },
    Ud: function() {
      var a = this.ka() >= this.M.TF && this.ya() === Oa && 18 >= this.ka(),
        b = t;
      try {
        document.createElement("canvas").getContext("2d"), (b = p);
      } catch (c) {
        b = t;
      }
      return a && b;
    },
    getCurrentCity: function() {
      return {
        name: this.lh,
        code: this.gs,
      };
    },
    at: function() {
      this.W.co();
      return this.W;
    },
    zY: function(a) {
      Oa.setMaxZoom(a.maxZoom || 19);
      var b = new P("oninitindoorlayer");
      b.af = a;
      this.dispatchEvent(b);
      this.M.yg = t;
    },
    CY: function(a) {
      if (this.M.yg) {
        var b = new P("onupdatestyles");
        this.dispatchEvent(b);
      } else
        (b = new P("oninitindoorlayer")),
          (b.af = a),
          this.dispatchEvent(b),
          (this.M.yg = p),
          (this.M.yk = p);
    },
    Ay: function(a) {
      this.M.LE = a;
      this.ef.Kb || (this.ef.Kb = this.ef.Bj[0].Kb);
      this.ef.Kb.parentElement.style.display = a ? "block" : "none";
    },
    VN: function(a) {
      this.ef.lg.style.display = a ? "block" : "none";
    },
    setPanorama: function(a) {
      this.W = a;
      this.W.oF(this);
    },
    EF: function(a, b) {
      for (
        var c = this.da,
          e = {
            featureType: "t",
            elementType: "e",
            visibility: "v",
            color: "c",
            lightness: "l",
            saturation: "s",
            weight: "w",
            level: "z",
            hue: "h",
            fontsize: "f",
          },
          f = {
            all: "all",
            geometry: "g",
            "geometry.fill": "g.f",
            "geometry.stroke": "g.s",
            labels: "l",
            "labels.text.fill": "l.t.f",
            "labels.text.stroke": "l.t.s",
            "labels.text": "l.t",
            "labels.icon": "l.i",
            "geometry.topfill": "g.f",
          },
          g = [],
          i = this.Ua.rf();
        i <= this.Ua.Ze();
        i++
      )
        window[c + "zoomFrontStyle"][i] = {};
      window[c + "zoomFrontStyle"].main = {};
      for (var i = 0, k; (k = a[i]); i++)
        if (!this.LY(k)) {
          b = this.rX(k, b);
          if (
            ("land" === k.featureType ||
              "all" === k.featureType ||
              "background" === k.featureType) &&
            "string" === typeof k.elementType &&
            ("geometry" === k.elementType ||
              "geometry.fill" === k.elementType ||
              "all" === k.elementType) &&
            k.stylers
          )
            k.stylers.color &&
              (window[c + "zoomFrontStyle"][b].bmapLandColor = k.stylers.color),
              k.stylers.visibility &&
                "off" === k.stylers.visibility &&
                (window[c + "zoomFrontStyle"][b].bmapLandColor = "#00000000");
          "railway" === k.featureType &&
            ("string" === typeof k.elementType && k.stylers) &&
            (k.stylers.color &&
              ("geometry" === k.elementType &&
                ((window[c + "zoomFrontStyle"][b].bmapRailwayFillColor =
                  k.stylers.color),
                (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor =
                  k.stylers.color)),
              "geometry.fill" === k.elementType &&
                (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor =
                  k.stylers.color),
              "geometry.stroke" === k.elementType &&
                (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor =
                  k.stylers.color)),
            k.stylers.visibility &&
              (window[c + "zoomFrontStyle"][b].bmapRailwayVisibility =
                k.stylers.visibility));
          "roadarrow" === k.featureType &&
            ("labels.icon" === k.elementType && k.stylers) &&
            (window[c + "zoomFrontStyle"][b].bmapRoadarrowVisibility =
              k.stylers.visibility);
          var m = {};
          A.extend(m, k);
          k = m.stylers;
          delete m.stylers;
          A.extend(m, k);
          k = [];
          for (var n in e)
            if (m[n] && !this.HY(n))
              if ("elementType" === n) k.push(e[n] + ":" + f[m[n]]);
              else {
                switch (m[n]) {
                  case "poilabel":
                    m[n] = "poi";
                    break;
                  case "districtlabel":
                    m[n] = "label";
                }
                k.push(e[n] + ":" + m[n]);
              }
          2 < k.length && g.push(k.join("|"));
        }
      return g.join(",");
    },
    $_: function(a) {
      for (
        var b = {
            featureType: "t",
            elementType: "e",
            visibility: "v",
            color: "c",
            lightness: "l",
            saturation: "s",
            weight: "w",
            zoom: "z",
            hue: "h",
          },
          c = {
            all: "all",
            geometry: "g",
            "geometry.fill": "g.f",
            "geometry.stroke": "g.s",
            labels: "l",
            "labels.text.fill": "l.t.f",
            "labels.text.stroke": "l.t.s",
            "lables.text": "l.t",
            "labels.icon": "l.i",
          },
          e = [],
          f = 0,
          g;
        (g = a[f]);
        f++
      ) {
        var i = g.stylers;
        delete g.stylers;
        A.extend(g, i);
        var i = [],
          k;
        for (k in b)
          if (g[k])
            if ("elementType" === k) i.push(b[k] + ":" + c[g[k]]);
            else {
              switch (g[k]) {
                case "poilabel":
                  g[k] = "poi";
                  break;
                case "districtlabel":
                  g[k] = "label";
              }
              i.push(b[k] + ":" + g[k]);
            }
        2 < i.length && e.push(i.join("|"));
      }
      return e.join(",");
    },
    rX: function(a) {
      a = a.stylers.level;
      return a === l ? "main" : parseInt(a, 10);
    },
    LY: function(a) {
      var b = {};
      A.extend(b, a.stylers);
      delete b.curZoomRegionId;
      delete b.curZoomRegion;
      delete b.level;
      return A.jE(b) ? p : t;
    },
    F4: function(a, b) {
      var c = a.stylers.level;
      return c === l ? p : c === b + "" ? p : t;
    },
    HY: function(a) {
      return {
        curZoomRegionId: p,
        curZoomRegion: p,
      }[a]
        ? p
        : t;
    },
    h4: function(a, b) {
      var c = a.stylers.level,
        e = {};
      A.extend(e, b);
      c !== l && (e[parseInt(c, 10)] = p);
      return e;
    },
    I0: function(a, b) {
      var c = this.da;
      window[c + "zoomStyleBody"][b] = a;
      if (!window[c + "zoomRegion"][b])
        for (var e = this.Ua.rf(), f = this.Ua.Ze(); e <= f; e++)
          window[c + "zoomRegion"][e] || (window[c + "zoomStyleBody"][e] = a);
    },
    KO: function() {
      var a = this.da;
      if (window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility)
        for (var b = this.Ua.rf(); b <= this.Ua.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility ||
            (window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility =
              window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility);
      if (window[a + "zoomFrontStyle"].main.bmapLandColor)
        for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapLandColor ||
            (window[a + "zoomFrontStyle"][b].bmapLandColor =
              window[a + "zoomFrontStyle"].main.bmapLandColor);
      if (window[a + "zoomFrontStyle"].main.bmapRailwayFillColor)
        for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapRailwayFillColor ||
            (window[a + "zoomFrontStyle"][b].bmapRailwayFillColor =
              window[a + "zoomFrontStyle"].main.bmapRailwayFillColor);
      if (window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor)
        for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor ||
            (window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor =
              window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor);
      if (window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
        for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapRailwayVisibility ||
            (window[a + "zoomFrontStyle"][b].bmapRailwayVisibility =
              window[a + "zoomFrontStyle"].main.bmapRailwayVisibility);
    },
    E2: function(a, b) {
      var c = {};
      A.extend(c, a);
      if (c[b]) {
        for (var e = this.Ua.rf(), f = this.Ua.Ze(); e <= f; e++)
          if (!c[e]) {
            c[e] = p;
            break;
          }
        delete c[b];
      }
      return c;
    },
    D4: function(a) {
      return a.ut || "0" === a.uid ? t : p;
    },
    xV: function() {
      delete this.Ni.NZ;
    },
    J2: function() {
      this.Ni = {};
    },
    Eo: function(a, b, c) {
      if (!this.M.Uo) return t;
      a = a || "sp" + this.ba.b6++;
      if (b && 0 !== b.length)
        return (
          (c = c || {}),
          (this.Ni[a] = this.Ni[a] || {
            polygon: [],
            polyline: [],
          }),
          (this.Ni = this.Ni || {}),
          this.Ni[a][c.type].push({
            zF: b,
            Xb: c.Xb,
            type: c.type,
            style: c.style,
          }),
          a
        );
    },
    XF: function(a) {
      return sb / Math.pow(2, 18 - a);
    },
  });
  var sb = 4.007545274461451e7;

  function Sa(a, b) {
    if (a) {
      var b = b || {},
        c = "",
        e;
      for (e in b) c = c + "&" + e + "=" + encodeURIComponent(b[e]);
      var f = function(a) {
          a &&
            ((tb = p),
            setTimeout(function() {
              ub.src = D.td + "images/blank.gif?" + a.src;
            }, 50));
        },
        g = function() {
          var a = vb.shift();
          a && f(a);
        };
      e = (1e8 * Math.random()).toFixed(0);
      tb
        ? vb.push({
            src:
              "product=jsapi&sub_product=jsapi&v=" +
              D.version +
              "&sub_product_v=" +
              D.version +
              "&t=" +
              e +
              "&code=" +
              a +
              "&da_src=" +
              a +
              c,
          })
        : f({
            src:
              "product=jsapi&sub_product=jsapi&v=" +
              D.version +
              "&sub_product_v=" +
              D.version +
              "&t=" +
              e +
              "&code=" +
              a +
              "&da_src=" +
              a +
              c,
          });
      wb ||
        (A.V(ub, "load", function() {
          tb = t;
          g();
        }),
        A.V(ub, "error", function() {
          tb = t;
          g();
        }),
        (wb = p));
    }
  }
  var tb,
    wb,
    vb = [],
    ub = new Image();
  Sa(5e3, {
    device_pixel_ratio: window.devicePixelRatio,
    platform: navigator.platform,
  });
  D.ZL = {
    TILE_BASE_URLS: [
      "gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu",
      "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu",
      "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu",
      "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu",
      "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu",
    ],
    TILE_ONLINE_URLS: [
      "maponline0.bdimg.com",
      "maponline1.bdimg.com",
      "maponline2.bdimg.com",
      "maponline3.bdimg.com",
    ],
    TIlE_PERSPECT_URLS: [
      "gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a",
      "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a",
      "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a",
      "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a",
    ],
    geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
    TILES_YUN_HOST: [
      "gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy",
      "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy",
      "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy",
      "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy",
    ],
    traffic: "its.map.baidu.com",
    iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
    message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
    baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
    wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
    pano: [
      "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
      "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_",
      "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_",
    ],
    main_domain_nocdn: {
      baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
      other: "api.map.baidu.com",
    },
    main_domain_cdn: {
      baidu: [
        "gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv",
        "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv",
        "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv",
      ],
      other: ["api.map.baidu.com"],
      webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"],
    },
    map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
    vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a",
  };
  D.mY = {
    TILE_BASE_URLS: [
      "shangetu0.map.bdimg.com",
      "shangetu1.map.bdimg.com",
      "shangetu2.map.bdimg.com",
      "shangetu3.map.bdimg.com",
      "shangetu4.map.bdimg.com",
    ],
    TILE_ONLINE_URLS: [
      "maponline0.bdimg.com",
      "maponline1.bdimg.com",
      "maponline2.bdimg.com",
      "maponline3.bdimg.com",
    ],
    TIlE_PERSPECT_URLS: [
      "d0.map.baidu.com",
      "d1.map.baidu.com",
      "d2.map.baidu.com",
      "d3.map.baidu.com",
    ],
    geolocControl: "loc.map.baidu.com",
    TILES_YUN_HOST: [
      "g0.api.map.baidu.com",
      "g1.api.map.baidu.com",
      "g2.api.map.baidu.com",
      "g3.api.map.baidu.com",
    ],
    traffic: "its.map.baidu.com",
    iw_pano: "mapsv0.bdimg.com",
    message: "j.map.baidu.com",
    baidumap: "map.baidu.com",
    wuxian: "wuxian.baidu.com",
    pano: ["mapsv0.bdimg.com", "mapsv1.bdimg.com"],
    main_domain_nocdn: {
      baidu: "api.map.baidu.com",
    },
    main_domain_cdn: {
      baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
      webmap: ["webmap0.map.bdimg.com"],
    },
    map_click: "mapclick.map.baidu.com",
    vector_traffic: "or.map.bdimg.com",
  };
  D.J0 = {
    "0": {
      proto: "http://",
      domain: D.mY,
    },
    1: {
      proto: "https://",
      domain: D.ZL,
    },
    2: {
      proto: "https://",
      domain: D.ZL,
    },
  };
  window.BMAP_PROTOCOL &&
    "https" === window.BMAP_PROTOCOL &&
    (window.HOST_TYPE = 2);
  D.zu = window.HOST_TYPE || "0";
  D.url = D.J0[D.zu];
  D.Fp = D.url.proto + D.url.domain.baidumap + "/";
  D.td =
    D.url.proto +
    ("2" == D.zu
      ? D.url.domain.main_domain_nocdn.other
      : D.url.domain.main_domain_nocdn.baidu) +
    "/";
  D.pa =
    D.url.proto +
    ("2" == D.zu
      ? D.url.domain.main_domain_cdn.other[0]
      : D.url.domain.main_domain_nocdn.baidu) +
    "/";
  D.ij = "";
  D.mi = function(a, b) {
    var c,
      e,
      b = b || "";
    switch (a) {
      case "main_domain_nocdn":
        c = D.td + b;
        break;
      case "main_domain_cdn":
        c = D.pa + b;
        break;
      default:
        (e = D.url.domain[a]),
          "[object Array]" == Object.prototype.toString.call(e)
            ? ((c = []),
              A.nc.Pb(e, function(a, e) {
                c[e] = D.url.proto + a + "/" + b;
              }))
            : (c = D.url.proto + D.url.domain[a] + "/" + b);
    }
    return c;
  };

  function xb(a) {
    var b = {
      duration: 1e3,
      Mc: 30,
      Xo: 0,
      dc: yb.CM,
      Mt: u(),
    };
    this.fg = [];
    if (a) for (var c in a) b[c] = a[c];
    this.m = b;
    if ($a(b.Xo)) {
      var e = this;
      setTimeout(function() {
        e.start();
      }, b.Xo);
    } else b.Xo != zb && this.start();
  }
  var zb = "INFINITE";
  xb.prototype.start = function() {
    this.Ru = fb();
    this.Qz = this.Ru + this.m.duration;
    Ab(this);
  };
  xb.prototype.add = function(a) {
    this.fg.push(a);
  };

  function Ab(a) {
    var b = fb();
    b >= a.Qz
      ? (ab(a.m.Ba) && a.m.Ba(a.m.dc(1)),
        ab(a.m.finish) && a.m.finish(),
        0 < a.fg.length &&
          ((b = a.fg[0]), (b.fg = [].concat(a.fg.slice(1))), b.start()))
      : ((a.xy = a.m.dc((b - a.Ru) / a.m.duration)),
        ab(a.m.Ba) && a.m.Ba(a.xy),
        a.FF ||
          (a.Xr = setTimeout(function() {
            Ab(a);
          }, 1e3 / a.m.Mc)));
  }
  xb.prototype.stop = function(a) {
    this.FF = p;
    for (var b = 0; b < this.fg.length; b++)
      this.fg[b].stop(), (this.fg[b] = q);
    this.fg.length = 0;
    this.Xr && (clearTimeout(this.Xr), (this.Xr = q));
    this.m.Mt(this.xy);
    a && ((this.Qz = this.Ru), Ab(this));
  };
  xb.prototype.cancel = ha(1);
  var yb = {
    CM: function(a) {
      return a;
    },
    reverse: function(a) {
      return 1 - a;
    },
    UC: function(a) {
      return a * a;
    },
    SC: function(a) {
      return Math.pow(a, 3);
    },
    Ks: function(a) {
      return -(a * (a - 2));
    },
    QK: function(a) {
      return Math.pow(a - 1, 3) + 1;
    },
    TC: function(a) {
      return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1;
    },
    a3: function(a) {
      return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1;
    },
    b3: function(a) {
      return (1 - Math.cos(Math.PI * a)) / 2;
    },
  };
  yb["ease-in"] = yb.UC;
  yb["ease-out"] = yb.Ks;
  var H = {
    dG: 34,
    eG: 21,
    fG: new N(21, 32),
    eP: new N(10, 32),
    dP: new N(24, 36),
    cP: new N(12, 36),
    bG: new N(13, 1),
    ua: D.pa + "images/",
    x4: "http://api0.map.bdimg.com/images/",
    cG: D.pa + "images/markers_new.png",
    aP: 24,
    bP: 73,
    hC: {
      北京: {
        ly: "bj",
        o: new J(116.403874, 39.914889),
      },
      上海: {
        ly: "sh",
        o: new J(121.487899, 31.249162),
      },
      深圳: {
        ly: "sz",
        o: new J(114.025974, 22.546054),
      },
      广州: {
        ly: "gz",
        o: new J(113.30765, 23.120049),
      },
    },
    fontFamily: "arial,sans-serif",
  };
  A.ga.Xe
    ? (A.extend(H, {
        CK: "url(" + H.ua + "ruler.cur),crosshair",
        yc: "-moz-grab",
        Kd: "-moz-grabbing",
      }),
      A.platform.pM && (H.fontFamily = "arial,simsun,sans-serif"))
    : A.ga.Kw || A.ga.wy
    ? A.extend(H, {
        CK: "url(" + H.ua + "ruler.cur) 2 6,crosshair",
        yc: "url(" + H.ua + "openhand.cur) 8 8,default",
        Kd: "url(" + H.ua + "closedhand.cur) 8 8,move",
      })
    : A.extend(H, {
        CK: "url(" + H.ua + "ruler.cur),crosshair",
        yc: "url(" + H.ua + "openhand.cur),default",
        Kd: "url(" + H.ua + "closedhand.cur),move",
      });

  function Bb(a, b) {
    var c = a.style;
    c.left = b[0] + "px";
    c.top = b[1] + "px";
  }

  function Cb(a) {
    0 < A.ga.oa ? (a.unselectable = "on") : (a.style.MozUserSelect = "none");
  }

  function Db(a) {
    return a && a.parentNode && 11 !== a.parentNode.nodeType;
  }

  function Eb(a, b) {
    A.U.Mx(a, "beforeEnd", b);
    return a.lastChild;
  }

  function Fb(a) {
    for (
      var b = {
        left: 0,
        top: 0,
      };
      a && a.offsetParent;

    )
      (b.left += a.offsetLeft), (b.top += a.offsetTop), (a = a.offsetParent);
    return b;
  }

  function na(a) {
    a = window.event || a;
    a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = p);
  }

  function Gb(a) {
    a = window.event || a;
    a.preventDefault ? a.preventDefault() : (a.returnValue = t);
    return t;
  }

  function oa(a) {
    na(a);
    return Gb(a);
  }

  function Hb() {
    var a = document.documentElement,
      b = document.body;
    return a && (a.scrollTop || a.scrollLeft)
      ? [a.scrollTop, a.scrollLeft]
      : b
      ? [b.scrollTop, b.scrollLeft]
      : [0, 0];
  }

  function Ib(a, b) {
    if (a && b)
      return Math.round(
        Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
      );
  }

  function Jb(a, b) {
    var c = [],
      b =
        b ||
        function(a) {
          return a;
        },
      e;
    for (e in a) c.push(e + "=" + b(a[e]));
    return c.join("&");
  }

  function L(a, b, c) {
    var e = document.createElement(a);
    c && (e = document.createElementNS(c, a));
    return A.U.iF(e, b || {});
  }

  function Ya(a) {
    if (a.currentStyle) return a.currentStyle;
    if (a.ownerDocument && a.ownerDocument.defaultView)
      return a.ownerDocument.defaultView.getComputedStyle(a, q);
  }

  function ab(a) {
    return "function" === typeof a;
  }

  function $a(a) {
    return "number" === typeof a;
  }

  function cb(a) {
    return "string" == typeof a;
  }

  function Kb(a) {
    return "undefined" != typeof a;
  }

  function Lb(a) {
    return "object" == typeof a;
  }
  var Mb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  function Nb(a) {
    for (var b = "", c = 0; c < a.length; c++) {
      var e = a.charCodeAt(c) << 1,
        f = (e = e.toString(2));
      8 > e.length && ((f = "00000000" + e), (f = f.substr(e.length, 8)));
      b += f;
    }
    a = 5 - (b.length % 5);
    e = [];
    for (c = 0; c < a; c++) e[c] = "0";
    b = e.join("") + b;
    f = [];
    for (c = 0; c < b.length / 5; c++)
      (e = b.substr(5 * c, 5)),
        f.push(String.fromCharCode(parseInt(e, 2) + 50));
    return f.join("") + a.toString();
  }

  function Ob(a) {
    var b = "",
      c,
      e,
      f = "",
      g,
      i = "",
      k = 0;
    g = /[^A-Za-z0-9\+\/\=]/g;
    if (!a || g.exec(a)) return a;
    a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do
      (c = Mb.indexOf(a.charAt(k++))),
        (e = Mb.indexOf(a.charAt(k++))),
        (g = Mb.indexOf(a.charAt(k++))),
        (i = Mb.indexOf(a.charAt(k++))),
        (c = (c << 2) | (e >> 4)),
        (e = ((e & 15) << 4) | (g >> 2)),
        (f = ((g & 3) << 6) | i),
        (b += String.fromCharCode(c)),
        64 != g && (b += String.fromCharCode(e)),
        64 != i && (b += String.fromCharCode(f));
    while (k < a.length);
    return b;
  }
  var P = A.lang.Hu;

  function I() {
    return !(!A.platform.mE && !A.platform.KY && !A.platform.xj);
  }

  function Xa() {
    return !(!A.platform.pM && !A.platform.iM && !A.platform.RY);
  }

  function fb() {
    return new Date().getTime();
  }

  function Pb() {
    var a = document.body.appendChild(L("div"));
    a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
    var b = a.firstChild;
    if (!b.style) return t;
    b.style.behavior = "url(#default#VML)";
    b = b ? "object" === typeof b.adj : p;
    a.parentNode.removeChild(a);
    return b;
  }

  function Qb() {
    return !!document.implementation.hasFeature(
      "http://www.w3.org/TR/SVG11/feature#Shape",
      "1.1"
    );
  }

  function Rb() {
    return !!L("canvas").getContext;
  }

  function U(a) {
    return (a * Math.PI) / 180;
  }
  D.XY = (function() {
    var a = p,
      b = p,
      c = p,
      e = p,
      f = 0,
      g = 0,
      i = 0,
      k = 0;
    return {
      IQ: function() {
        f += 1;
        a &&
          ((a = t),
          setTimeout(function() {
            Sa(5054, {
              pic: f,
            });
            a = p;
            f = 0;
          }, 1e4));
      },
      C1: function() {
        g += 1;
        b &&
          ((b = t),
          setTimeout(function() {
            Sa(5055, {
              move: g,
            });
            b = p;
            g = 0;
          }, 1e4));
      },
      E1: function() {
        i += 1;
        c &&
          ((c = t),
          setTimeout(function() {
            Sa(5056, {
              zoom: i,
            });
            c = p;
            i = 0;
          }, 1e4));
      },
      D1: function(a) {
        k += a;
        e &&
          ((e = t),
          setTimeout(function() {
            Sa(5057, {
              tile: k,
            });
            e = p;
            k = 0;
          }, 5e3));
      },
    };
  })();
  D.tq = {
    tG: "#83a1ff",
    vq: "#808080",
  };

  function Sb(a, b, c) {
    b.EE || ((b.EE = []), (b.handle = {}));
    b.EE.push({
      filter: c,
      Qs: a,
    });
    b.addEventListener ||
      (b.addEventListener = function(a, c) {
        b.attachEvent("on" + a, c);
      });
    b.handle.click ||
      (b.addEventListener(
        "click",
        function(a) {
          for (var c = a.target || a.srcElement; c != b; ) {
            Tb(b.EE, function(b, i) {
              RegExp(i.filter).test(c.getAttribute("filter")) &&
                i.Qs.call(c, a, c.getAttribute("filter"));
            });
            c = c.parentNode;
          }
        },
        t
      ),
      (b.handle.click = p));
  }

  function Tb(a, b) {
    for (var c = 0, e = a.length; c < e; c++) b(c, a[c]);
  }
  void (function(a, b, c) {
    void (function(a, b, c) {
      function i(a) {
        if (!a.Wo) {
          for (var c = p, e = [], g = a.a_, k = 0; g && k < g.length; k++) {
            var m = g[k],
              n = (da[m] = da[m] || {});
            if (n.Wo || n == a) e.push(n.Sc);
            else {
              c = t;
              if (
                !n.aW &&
                ((m = (Aa.get("alias") || {})[m] || m + ".js"), !K[m])
              ) {
                K[m] = p;
                var o = b.createElement("script"),
                  s = b.getElementsByTagName("script")[0];
                o.async = p;
                o.src = m;
                s.parentNode.insertBefore(o, s);
              }
              n.Sy = n.Sy || {};
              n.Sy[a.name] = a;
            }
          }
          if (c) {
            a.Wo = p;
            a.xK && (a.Sc = a.xK.apply(a, e));
            for (var v in a.Sy) i(a.Sy[v]);
          }
        }
      }

      function k(a) {
        return (a || new Date()) - E;
      }

      function m(a, b, c) {
        if (a) {
          "string" == typeof a && ((c = b), (b = a), (a = O));
          try {
            a == O
              ? ((M[b] = M[b] || []), M[b].unshift(c))
              : a.addEventListener
              ? a.addEventListener(b, c, t)
              : a.attachEvent && a.attachEvent("on" + b, c);
          } catch (e) {}
        }
      }

      function n(a, b, c) {
        if (a) {
          "string" == typeof a && ((c = b), (b = a), (a = O));
          try {
            if (a == O) {
              var e = M[b];
              if (e) for (var f = e.length; f--; ) e[f] === c && e.splice(f, 1);
            } else
              a.removeEventListener
                ? a.removeEventListener(b, c, t)
                : a.detachEvent && a.detachEvent("on" + b, c);
          } catch (g) {}
        }
      }

      function o(a) {
        var b = M[a],
          c = 0;
        if (b) {
          for (var e = [], f = arguments, g = 1; g < f.length; g++)
            e.push(f[g]);
          for (g = b.length; g--; ) b[g].apply(this, e) && c++;
          return c;
        }
      }

      function s(a, b) {
        if (a && b) {
          var c = new Image(1, 1),
            e = [],
            f = "img_" + +new Date(),
            g;
          for (g in b) b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
          O[f] = c;
          c.onload = c.onerror = function() {
            O[f] = c = c.onload = c.onerror = q;
            delete O[f];
          };
          c.src = a + "?" + e.join("&");
        }
      }

      function v() {
        var a = arguments,
          b = a[0];
        if (this.wK || /^(on|un|set|get|create)$/.test(b)) {
          for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++)
            c.push(a[e]);
          "function" == typeof b && b.apply(this, c);
        } else this.VJ.push(a);
      }

      function w(a, b) {
        var c = {},
          e;
        for (e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
        for (e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
        return c;
      }

      function y(a) {
        this.name = a;
        this.Os = {
          protocolParameter: {
            postUrl: q,
            protocolParameter: q,
          },
        };
        this.VJ = [];
        this.alog = O;
      }

      function z(a) {
        a = a || "default";
        if ("*" == a) {
          var a = [],
            b;
          for (b in S) a.push(S[b]);
          return a;
        }
        (b = S[a]) || (b = S[a] = new y(a));
        return b;
      }
      var B = c.alog;
      if (!B || !B.Wo) {
        var C = b.all && a.attachEvent,
          E = (B && B.uE) || +new Date(),
          F =
            a.Q4 ||
            (+new Date()).toString(36) +
              Math.random()
                .toString(36)
                .substr(2, 3),
          G = 0,
          K = {},
          O = function(a) {
            var b = arguments,
              c,
              e,
              f,
              g;
            if ("define" == a || "require" == a) {
              for (e = 1; e < b.length; e++)
                switch (typeof b[e]) {
                  case "string":
                    c = b[e];
                    break;
                  case "object":
                    f = b[e];
                    break;
                  case "function":
                    g = b[e];
                }
              "require" == a && (c && !f && (f = [c]), (c = q));
              c = !c ? "#" + G++ : c;
              e = da[c] = da[c] || {};
              e.Wo ||
                ((e.name = c),
                (e.a_ = f),
                (e.xK = g),
                "define" == a && (e.aW = p),
                i(e));
            } else
              "function" == typeof a
                ? a(O)
                : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(
                    a,
                    c,
                    e
                  ) {
                    b[0] = e;
                    v.apply(O.PF(c), b);
                  });
          },
          M = {},
          S = {},
          da = {
            s2: {
              name: "alog",
              Wo: p,
              Sc: O,
            },
          };
        y.prototype.start = y.prototype.create = function(a) {
          if (!this.wK) {
            "object" == typeof a && this.set(a);
            this.wK = new Date();
            for (this.Ps("create", this); (a = this.VJ.shift()); )
              v.apply(this, a);
          }
        };
        y.prototype.send = function(a, b) {
          var c = w(
            {
              ts: k().toString(36),
              t: a,
              sid: F,
            },
            this.Os
          );
          if ("object" == typeof b) c = w(c, b);
          else {
            var e = arguments;
            switch (a) {
              case "pageview":
                e[1] && (c.page = e[1]);
                e[2] && (c.title = e[2]);
                break;
              case "event":
                e[1] && (c.eventCategory = e[1]);
                e[2] && (c.eventAction = e[2]);
                e[3] && (c.eventLabel = e[3]);
                e[4] && (c.eventValue = e[4]);
                break;
              case "timing":
                e[1] && (c.timingCategory = e[1]);
                e[2] && (c.timingVar = e[2]);
                e[3] && (c.timingValue = e[3]);
                e[4] && (c.timingLabel = e[4]);
                break;
              case "exception":
                e[1] && (c.exDescription = e[1]);
                e[2] && (c.exFatal = e[2]);
                break;
              default:
                return;
            }
          }
          this.Ps("send", c);
          var f;
          if ((e = this.Os.protocolParameter)) {
            var g = {};
            for (f in c) e[f] !== q && (g[e[f] || f] = c[f]);
            f = g;
          } else f = c;
          s(this.Os.postUrl, f);
        };
        y.prototype.set = function(a, b) {
          if ("string" == typeof a)
            "protocolParameter" == a &&
              (b = w(
                {
                  postUrl: q,
                  protocolParameter: q,
                },
                b
              )),
              (this.Os[a] = b);
          else if ("object" == typeof a) for (var c in a) this.set(c, a[c]);
        };
        y.prototype.get = function(a, b) {
          var c = this.Os[a];
          "function" == typeof b && b(c);
          return c;
        };
        y.prototype.Ps = function(a, b) {
          return O.Ps(this.name + "." + a, b);
        };
        y.prototype.V = function(a, b) {
          O.V(this.name + "." + a, b);
        };
        y.prototype.gd = function(a, b) {
          O.gd(this.name + "." + a, b);
        };
        O.name = "alog";
        O.Xb = F;
        O.Wo = p;
        O.timestamp = k;
        O.gd = n;
        O.V = m;
        O.Ps = o;
        O.PF = z;
        O("init");
        var aa = y.prototype;
        V(aa, {
          start: aa.start,
          create: aa.create,
          send: aa.send,
          set: aa.set,
          get: aa.get,
          on: aa.V,
          un: aa.gd,
          fire: aa.Ps,
        });
        var Aa = z();
        Aa.set("protocolParameter", {
          r2: q,
        });
        if (B) {
          aa = [].concat(B.Ab || [], B.Tt || []);
          B.Ab = B.Tt = q;
          for (var ta in O) O.hasOwnProperty(ta) && (B[ta] = O[ta]);
          O.Ab = O.Tt = {
            push: function(a) {
              O.apply(O, a);
            },
          };
          for (B = 0; B < aa.length; B++) O.apply(O, aa[B]);
        }
        c.alog = O;
        C &&
          m(b, "mouseup", function(a) {
            a = a.target || a.srcElement;
            1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href);
          });
        var Ga = t;
        a.onerror = function(a, b, e, f) {
          var i = p;
          !b && /^script error/i.test(a) && (Ga ? (i = t) : (Ga = p));
          i &&
            c.alog("exception.send", "exception", {
              It: a,
              tE: b,
              Et: e,
              nm: f,
            });
          return t;
        };
        c.alog("exception.on", "catch", function(a) {
          c.alog("exception.send", "exception", {
            It: a.It,
            tE: a.path,
            Et: a.Et,
            method: a.method,
            aL: "catch",
          });
        });
      }
    })(a, b, c);
    void (function(a, b, c) {
      var i = "18_3";
      I() && (i = "18_4");
      var k = "http://static.tieba.baidu.com";
      "https:" === a.location.protocol &&
        (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
      var m = Math.random,
        k = k + "/tb/pms/img/st.gif",
        n = {
          Ch: "0.1",
        },
        o = {
          Ch: "0.1",
        },
        s = {
          Ch: "0.1",
        },
        v = {
          Ch: "0",
        };
      if (n && n.Ch && m() < n.Ch) {
        var w = c.alog.PF("monkey"),
          y,
          n = a.screen,
          z = b.referrer;
        w.set("ver", 5);
        w.set("pid", 241);
        n && w.set("px", n.width + "*" + n.height);
        w.set("ref", z);
        c.alog("monkey.on", "create", function() {
          y = c.alog.timestamp;
          w.set("protocolParameter", {
            reports: q,
          });
        });
        c.alog("monkey.on", "send", function(a) {
          "pageview" == a.t && (a.cmd = "open");
          a.now && ((a.ts = y(a.now).toString(36)), (a.now = ""));
        });
        c.alog("monkey.create", {
          page: i,
          pid: "241",
          p: "18",
          dv: 6,
          postUrl: k,
          reports: {
            refer: 1,
          },
        });
        c.alog("monkey.send", "pageview", {
          now: +new Date(),
        });
      }
      if (o && o.Ch && m() < o.Ch) {
        var B = t;
        a.onerror = function(a, b, e, f) {
          var i = p;
          !b && /^script error/i.test(a) && (B ? (i = t) : (B = p));
          i &&
            c.alog("exception.send", "exception", {
              It: a,
              tE: b,
              Et: e,
              nm: f,
            });
          return t;
        };
        c.alog("exception.on", "catch", function(a) {
          c.alog("exception.send", "exception", {
            It: a.It,
            tE: a.path,
            Et: a.Et,
            method: a.method,
            aL: "catch",
          });
        });
        c.alog("exception.create", {
          postUrl: k,
          dv: 7,
          page: i,
          pid: "170",
          p: "18",
        });
      }
      s &&
        (s.Ch && m() < s.Ch) &&
        (c.alog("cus.on", "time", function(a) {
          var b = {},
            e = t,
            f;
          if ("[object Object]" === a.toString()) {
            for (var i in a)
              "page" == i
                ? (b.page = a[i])
                : ((f = parseInt(a[i])),
                  0 < f && /^z_/.test(i) && ((e = p), (b[i] = f)));
            e && c.alog("cus.send", "time", b);
          }
        }),
        c.alog("cus.on", "count", function(a) {
          var b = {},
            e = t;
          "string" === typeof a && (a = [a]);
          if (a instanceof Array)
            for (var f = 0; f < a.length; f++)
              /^z_/.test(a[f])
                ? ((e = p), (b[a[f]] = 1))
                : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
          e && c.alog("cus.send", "count", b);
        }),
        c.alog("cus.create", {
          dv: 3,
          postUrl: k,
          page: i,
          p: "18",
        }));
      if (v && v.Ch && m() < v.Ch) {
        var C = ["Moz", "O", "ms", "Webkit"],
          E = ["-webkit-", "-moz-", "-o-", "-ms-"],
          F = function() {
            return typeof b.createElement !== "function"
              ? b.createElement(arguments[0])
              : b.createElement.apply(b, arguments);
          },
          G = F("dpFeatureTest").style,
          K = function(a) {
            return O(a, l, l);
          },
          O = function(a, b, c) {
            var e = a.charAt(0).toUpperCase() + a.slice(1),
              f = (a + " " + C.join(e + " ") + e).split(" ");
            if (typeof b === "string" || typeof b === "undefined")
              return M(f, b);
            f = (a + " " + C.join(e + " ") + e).split(" ");
            a: {
              var a = f,
                g;
              for (g in a)
                if (a[g] in b) {
                  if (c === t) {
                    b = a[g];
                    break a;
                  }
                  g = b[a[g]];
                  b = typeof g === "function" ? fnBind(g, c || b) : g;
                  break a;
                }
              b = t;
            }
            return b;
          },
          M = function(a, b) {
            var c, e, f;
            e = a.length;
            for (c = 0; c < e; c++) {
              f = a[c];
              ~("" + f).indexOf("-") && (f = S(f));
              if (G[f] !== l) return b == "pfx" ? f : p;
            }
            return t;
          },
          S = function(a) {
            return a
              .replace(/([a-z])-([a-z])/g, function(a, b, c) {
                return b + c.toUpperCase();
              })
              .replace(/^-/, "");
          },
          da = function(a, b, c) {
            if (a.indexOf("@") === 0) return atRule(a);
            a.indexOf("-") != -1 && (a = S(a));
            return !b ? O(a, "pfx") : O(a, b, c);
          },
          aa = function() {
            var a = F("canvas");
            return !(!a.getContext || !a.getContext("2d"));
          },
          Aa = function() {
            var a = F("div");
            return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
          },
          ta = function() {
            try {
              localStorage.setItem("localStorage", "localStorage");
              localStorage.removeItem("localStorage");
              return p;
            } catch (a) {
              return t;
            }
          },
          Ga = function() {
            return "content" in b.createElement("template");
          },
          sa = function() {
            return "createShadowRoot" in b.createElement("a");
          },
          Va = function() {
            return "registerElement" in b;
          },
          He = function() {
            return "import" in b.createElement("link");
          },
          Yc = function() {
            return "getItems" in b;
          },
          nj = function() {
            return "EventSource" in window;
          },
          Ie = function(a, b) {
            var c = new Image();
            c.onload = function() {
              b(a, c.width > 0 && c.height > 0);
            };
            c.onerror = function() {
              b(a, t);
            };
            c.src =
              "data:image/webp;base64," +
              {
                T4: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                S4: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                alpha:
                  "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                sk:
                  "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
              }[a];
          },
          Je = function(a, b) {
            return (bc.ii["WebP-" + a] = b);
          },
          oj = function() {
            return "openDatabase" in a;
          },
          pj = function() {
            return "performance" in a && "timing" in a.performance;
          },
          qj = function() {
            return "performance" in a && "mark" in a.performance;
          },
          rj = function() {
            return !(
              !Array.prototype ||
              !Array.prototype.every ||
              !Array.prototype.filter ||
              !Array.prototype.forEach ||
              !Array.prototype.indexOf ||
              !Array.prototype.lastIndexOf ||
              !Array.prototype.map ||
              !Array.prototype.some ||
              !Array.prototype.reduce ||
              !Array.prototype.reduceRight ||
              !Array.isArray
            );
          },
          sj = function() {
            return (
              "Promise" in a &&
              "cast" in a.wq &&
              "resolve" in a.wq &&
              "reject" in a.wq &&
              "all" in a.wq &&
              "race" in a.wq &&
              (function() {
                var b;
                new a.wq(function(a) {
                  b = a;
                });
                return typeof b === "function";
              })()
            );
          },
          tj = function() {
            var b = !!a.o1,
              c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
            return !!a.s1 && b && c;
          },
          uj = function() {
            return "geolocation" in navigator;
          },
          vj = function() {
            var b = F("canvas"),
              c =
                "probablySupportsContext" in b
                  ? "probablySupportsContext"
                  : "supportsContext";
            return c in b
              ? b[c]("webgl") || b[c]("experimental-webgl")
              : "WebGLRenderingContext" in a;
          },
          wj = function() {
            return (
              !!b.createElementNS &&
              !!b.createElementNS("http://www.w3.org/2000/svg", "svg").P2
            );
          },
          xj = function() {
            return !!a.z1;
          },
          yj = function() {
            return "WebSocket" in a && a.w1.k1 === 2;
          },
          zj = function() {
            return !!b.createElement("video").canPlayType;
          },
          Aj = function() {
            return !!b.createElement("audio").canPlayType;
          },
          Bj = function() {
            return !!(a.history && "pushState" in a.history);
          },
          Cj = function() {
            return !(!a.m1 || !a.n1);
          },
          Dj = function() {
            return "postMessage" in window;
          },
          Ej = function() {
            return (
              !!a.webkitNotifications ||
              ("Notification" in a &&
                "permission" in a.xP &&
                "requestPermission" in a.xP)
            );
          },
          Fj = function() {
            for (
              var b = ["webkit", "moz", "o", "ms"],
                c = a.requestAnimationFrame,
                f = 0;
              f < b.length && !c;
              ++f
            )
              c = a[b[f] + "RequestAnimationFrame"];
            return !!c;
          },
          Gj = function() {
            return "JSON" in a && "parse" in JSON && "stringify" in JSON;
          },
          Hj = function() {
            return !(
              !da("exitFullscreen", b, t) && !da("cancelFullScreen", b, t)
            );
          },
          Ij = function() {
            return !!da("Intl", a);
          },
          Jj = function() {
            return K("flexBasis");
          },
          Kj = function() {
            return !!K("perspective");
          },
          Lj = function() {
            return K("shapeOutside");
          },
          Mj = function() {
            var a = F("div");
            a.style.cssText = E.join("filter:blur(2px); ");
            return (
              !!a.style.length && (b.documentMode === l || b.documentMode > 9)
            );
          },
          Nj = function() {
            return (
              "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest()
            );
          },
          Oj = function() {
            return F("progress").max !== l;
          },
          Pj = function() {
            return F("meter").max !== l;
          },
          Qj = function() {
            return "sendBeacon" in navigator;
          },
          Rj = function() {
            return K("borderRadius");
          },
          Sj = function() {
            return K("boxShadow");
          },
          Tj = function() {
            var a = F("div").style;
            a.cssText = E.join("opacity:.55;");
            return /^0.55$/.test(a.opacity);
          },
          Uj = function() {
            return M(["textShadow"], l);
          },
          Vj = function() {
            return K("animationName");
          },
          Wj = function() {
            return K("transition");
          },
          Xj = function() {
            return (
              navigator.userAgent.indexOf("Android 2.") === -1 && K("transform")
            );
          },
          bc = {
            ii: {},
            sa: function(a, b, c) {
              this.ii[a] = b.apply(this, [].slice.call(arguments, 2));
            },
            Id: function(a, b) {
              a.apply(this, [].slice.call(arguments, 1));
            },
            f_: function() {
              this.sa("bdrs", Rj);
              this.sa("bxsd", Sj);
              this.sa("opat", Tj);
              this.sa("txsd", Uj);
              this.sa("anim", Vj);
              this.sa("trsi", Wj);
              this.sa("trfm", Xj);
              this.sa("flex", Jj);
              this.sa("3dtr", Kj);
              this.sa("shpe", Lj);
              this.sa("fltr", Mj);
              this.sa("cavs", aa);
              this.sa("dgdp", Aa);
              this.sa("locs", ta);
              this.sa("wctem", Ga);
              this.sa("wcsdd", sa);
              this.sa("wccse", Va);
              this.sa("wchti", He);
              this.Id(Ie, "lossy", Je);
              this.Id(Ie, "lossless", Je);
              this.Id(Ie, "alpha", Je);
              this.Id(Ie, "animation", Je);
              this.sa("wsql", oj);
              this.sa("natm", pj);
              this.sa("ustm", qj);
              this.sa("arra", rj);
              this.sa("prms", sj);
              this.sa("xhr2", tj);
              this.sa("wbgl", vj);
              this.sa("geol", uj);
              this.sa("svg", wj);
              this.sa("work", xj);
              this.sa("wbsk", yj);
              this.sa("vido", zj);
              this.sa("audo", Aj);
              this.sa("hsty", Bj);
              this.sa("file", Cj);
              this.sa("psmg", Dj);
              this.sa("wknf", Ej);
              this.sa("rqaf", Fj);
              this.sa("json", Gj);
              this.sa("flsc", Hj);
              this.sa("i18n", Ij);
              this.sa("cors", Nj);
              this.sa("prog", Oj);
              this.sa("metr", Pj);
              this.sa("becn", Qj);
              this.sa("mcrd", Yc);
              this.sa("esrc", nj);
            },
          },
          w = c.alog.PF("feature");
        w.V("commit", function() {
          bc.f_();
          var a = setInterval(function() {
            if (
              "WebP-lossy" in bc.ii &&
              "WebP-lossless" in bc.ii &&
              "WebP-alpha" in bc.ii &&
              "WebP-animation" in bc.ii
            ) {
              for (var b in bc.ii) bc.ii[b] = bc.ii[b] ? "y" : "n";
              w.send("feature", bc.ii);
              clearInterval(a);
            }
          }, 500);
        });
        c.alog("feature.create", {
          Y2: 4,
          w5: k,
          page: i,
          Ab: "18",
        });
        c.alog("feature.fire", "commit");
      }
    })(a, b, c);
  })(window, document, D);
  D.Bq = D.alog || u();
  D.alog("cus.fire", "count", "z_loadscriptcount");
  "https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");

  function Ub(a) {
    var b = window.TILE_VERSION,
      c = "20190410";
    b &&
      b.ditu &&
      ((b = b.ditu), b[a] && b[a].updateDate && (c = b[a].updateDate));
    return c;
  }
  var Vb = [72.6892532, 0.1939743381, 136.1168614, 54.392257],
    Wb = [72.69566833, 0.1999420909, 136.1232863, 54.39791217],
    Xb = 158,
    Yb = [
      98.795985,
      122.960792,
      107.867379,
      118.093451,
      119.139658,
      128.035888,
      79.948212,
      99.029524,
      119.923388,
      122.094977,
      127.918527,
      130.94789,
      106.50606,
      108.076783,
      119.8329,
      126.382207,
      111.803567,
      119.324928,
      100.749858,
      102.227985,
      99.860885,
      100.788921,
      97.529435,
      98.841564,
      99.100017,
      99.90035,
      122.917416,
      123.774367,
      123.728314,
      125.507211,
      123.736065,
      124.767299,
      125.488463,
      126.410675,
      125.484326,
      126.07764,
      130.830784,
      133.620042,
      127.912178,
      128.668957,
      128.658937,
      129.638599,
      132.894179,
      134.119086,
      117.379378,
      119.244569,
      116.086736,
      117.431212,
      114.420233,
      116.137458,
      116.492775,
      119.605527,
      110.579401,
      111.86488,
      74.468228,
      80.001908,
      82.867432,
      91.353788,
      85.721075,
      98.976964,
      127.664757,
      129.546833,
      129.476893,
      130.22449,
      133.730358,
      134.745235,
      134.381034,
      135.1178,
      130.868117,
      131.34409,
      115.513245,
      117.544751,
      115.779271,
      116.748045,
      108.536254,
      110.614326,
      121.365534,
      124.626434,
      126.165992,
      127.347013,
      91.281869,
      95.611754,
      79.879648,
      82.945041,
      76.413314,
      78.345207,
      78.275229,
      80.002329,
      83.956612,
      85.734098,
      85.510186,
      89.356499,
      97.997001,
      98.948845,
      106.653208,
      108.610811,
      111.400183,
      111.824179,
      111.592224,
      111.817136,
      116.00682,
      117.024631,
      116.258574,
      116.689291,
      119.436876,
      119.922961,
      120.659806,
      121.395479,
      120.349116,
      120.676014,
      124.59389,
      125.787788,
      126.221756,
      126.788962,
      95.572955,
      102.046581,
      95.583772,
      96.165551,
      95.564318,
      97.806095,
      91.30446,
      93.356438,
      93.330319,
      94.698145,
      89.349129,
      90.548677,
      82.268802,
      82.892025,
      78.335615,
      80.032266,
      76.625755,
      78.361413,
      73.498248,
      74.490992,
      74.846872,
      76.488771,
      91.563521,
      94.878444,
      88.768214,
      89.244787,
      83.247076,
      83.974127,
      82.29595,
      83.256003,
      81.885315,
      83.26249,
      80.760619,
      81.472404,
      86.470983,
      88.276988,
      102.207537,
      104.234614,
      112.164795,
      116.833667,
      108.965663,
      113.032246,
      111.166575,
      117.983363,
    ],
    Zb = [
      22.551183,
      42.284787,
      17.227969,
      22.738314,
      41.300981,
      50.749638,
      30.368087,
      42.332701,
      21.705055,
      22.696452,
      42.426047,
      48.944674,
      21.432184,
      22.651387,
      50.657409,
      52.92296,
      42.212192,
      45.206905,
      21.137031,
      22.57186,
      21.444502,
      22.586566,
      23.741571,
      25.301472,
      22.006806,
      22.56637,
      38.985114,
      41.346531,
      40.295617,
      41.338581,
      39.740021,
      40.351012,
      40.974644,
      41.331562,
      40.726852,
      41.067192,
      44.877158,
      48.018285,
      41.344597,
      42.451798,
      42.016305,
      42.443235,
      45.880906,
      48.214001,
      45.140027,
      46.792775,
      45.141083,
      46.400433,
      45.156418,
      45.748281,
      47.485889,
      50.071879,
      42.223667,
      43.469487,
      37.019867,
      40.668675,
      42.226823,
      47.321605,
      27.72944,
      30.469853,
      48.919002,
      49.650614,
      48.840188,
      49.443166,
      46.949801,
      48.382798,
      47.660603,
      48.472692,
      42.859946,
      44.913298,
      47.605896,
      48.445914,
      48.41698,
      48.909667,
      42.23507,
      42.914193,
      52.8281,
      53.585952,
      50.709311,
      51.662219,
      42.29968,
      44.399225,
      42.302746,
      45.391958,
      34.680866,
      37.03377,
      30.743515,
      37.07228,
      28.245649,
      30.408935,
      47.277693,
      48.504255,
      25.241528,
      27.780726,
      42.223363,
      42.548418,
      43.435888,
      44.696952,
      44.693193,
      45.00187,
      48.886267,
      49.326755,
      49.288642,
      49.632304,
      50.717486,
      51.314369,
      52.914204,
      53.33964,
      52.910094,
      53.115926,
      52.908382,
      53.258095,
      51.64533,
      52.408305,
      42.236825,
      42.699126,
      43.068466,
      43.898632,
      42.670403,
      43.082219,
      44.379045,
      45.187742,
      44.382336,
      44.981379,
      47.310362,
      48.06019,
      45.359099,
      46.814439,
      40.569751,
      42.047741,
      40.587956,
      41.41263,
      38.519192,
      40.185033,
      35.790476,
      37.029005,
      26.825605,
      27.763896,
      27.199658,
      27.751649,
      29.150192,
      30.381073,
      29.573886,
      30.065162,
      30.047775,
      30.384089,
      30.001277,
      30.388525,
      48.494118,
      49.173841,
      22.398528,
      22.601198,
      7.441114,
      11.505968,
      3.767491,
      9.005209,
      12.642067,
      17.410886,
    ],
    $b = 95,
    ac = [
      110.3961374,
      105.0743788,
      96.8991824,
      95.61810411,
      93.82412598,
      91.3892353,
      91.38931858,
      89.08325955,
      87.22469808,
      86.26278402,
      85.17353,
      85.23741211,
      82.86627441,
      81.90481038,
      79.59687147,
      80.39829237,
      79.93319363,
      77.80279948,
      75.2557704,
      73.49357829,
      73.1892532,
      73.87758816,
      74.4064738,
      74.10215224,
      75.46409695,
      76.77739692,
      78.28299615,
      78.15499485,
      78.37920654,
      78.89145345,
      79.69282199,
      81.19938178,
      81.80830295,
      83.89093424,
      85.94149523,
      87.86447266,
      89.03414958,
      90.05918132,
      91.10026937,
      92.15733832,
      93.74361735,
      95.82597331,
      97.95655545,
      97.12363037,
      98.2129739,
      99.2068571,
      101.6587874,
      102.5239084,
      102.2356106,
      105.0249238,
      106.0992342,
      107.8617093,
      111.6439372,
      109.591869,
      112.284586,
      117.7961157,
      118.9495128,
      114.2076584,
      118.693565,
      123.1475225,
      122.730705,
      120.9361393,
      123.4207441,
      122.3787782,
      122.1385425,
      121.5904281,
      121.1773763,
      120.6805404,
      120.2483355,
      122.795807,
      122.8759077,
      121.3060262,
      122.1392177,
      123.7418799,
      126.4177599,
      128.5647409,
      129.7194884,
      131.2259136,
      131.9950494,
      133.6289931,
      135.6168614,
      131.3875545,
      130.8743365,
      128.6303223,
      126.0997773,
      124.4015375,
      122.22161,
      119.6586483,
      119.7866827,
      118.5685878,
      116.5177976,
      114.819101,
      119.0812964,
      116.453265,
      111.7431171,
    ],
    cc = [
      43.2190351,
      42.38053385,
      43.17417589,
      44.42226915,
      45.09863634,
      45.56708116,
      47.33599718,
      48.68832709,
      49.62448486,
      48.9482175,
      48.4800472,
      47.33564399,
      47.43948676,
      46.03452067,
      45.20221788,
      43.34563043,
      42.32965739,
      41.39690972,
      40.82972331,
      39.95567654,
      39.25892877,
      38.36098768,
      38.05441569,
      37.16878445,
      36.38899414,
      35.36126817,
      34.30953451,
      32.58503879,
      31.56975694,
      30.77800266,
      30.43559814,
      29.7744892,
      30.0931977,
      28.71103299,
      27.70739665,
      27.5775472,
      27.01096137,
      27.77857883,
      27.50707954,
      26.50328315,
      26.70387804,
      27.95548557,
      27.29428901,
      23.64685493,
      23.62310601,
      21.67493381,
      20.77751465,
      21.32070991,
      22.1824113,
      22.31232964,
      22.51316054,
      16.80037679,
      13.19749864,
      0.6939743381,
      1.541660428,
      10.50208252,
      15.58926975,
      17.89090007,
      19.94928467,
      22.18490153,
      25.37285292,
      25.61456434,
      30.62532552,
      31.08099284,
      31.89238173,
      32.50092692,
      32.80325765,
      34.25546956,
      35.15486138,
      36.90170139,
      37.8348272,
      37.941604,
      38.6480797,
      38.96797201,
      40.98146918,
      41.25573296,
      42.07218153,
      42.49132813,
      44.65259766,
      44.69330702,
      48.62286865,
      48.09383952,
      49.19628499,
      50.03402317,
      53.27678901,
      53.62976345,
      53.89420546,
      52.98933322,
      52.01872884,
      50.23210259,
      50.18807048,
      47.49769857,
      47.34362712,
      46.50502143,
      45.24770128,
    ],
    dc = [
      98.7895,
      122.954182,
      107.860913,
      118.087007,
      119.133165,
      128.029533,
      79.941749,
      99.023087,
      119.916883,
      122.08841,
      127.912143,
      130.941471,
      106.499502,
      108.070244,
      119.826245,
      126.375818,
      111.797006,
      119.318387,
      100.743285,
      102.221517,
      99.854448,
      100.782445,
      97.522928,
      98.835028,
      99.093518,
      99.893783,
      122.910927,
      123.767769,
      123.721954,
      125.50077,
      123.729657,
      124.760724,
      125.481902,
      126.404079,
      125.477737,
      126.071019,
      130.824331,
      133.613395,
      127.905767,
      128.662524,
      128.652527,
      129.6321,
      132.887552,
      134.11249,
      117.37297,
      119.237999,
      116.080154,
      117.424589,
      114.413586,
      116.130948,
      116.486264,
      119.598927,
      110.5728,
      111.858437,
      74.465162,
      79.995337,
      82.860821,
      91.347291,
      85.716024,
      98.970481,
      127.658331,
      129.540202,
      129.470528,
      130.21808,
      133.723748,
      134.738785,
      134.374555,
      135.111443,
      130.861475,
      131.337438,
      115.506627,
      117.538123,
      115.772783,
      116.741632,
      108.529656,
      110.60782,
      121.358945,
      124.619773,
      126.159424,
      127.340582,
      91.275275,
      95.605228,
      79.874427,
      82.938601,
      76.413314,
      78.338763,
      78.275229,
      79.995765,
      83.956612,
      85.727511,
      85.503554,
      89.349858,
      97.990418,
      98.942257,
      106.646704,
      108.604437,
      111.393667,
      111.817723,
      111.585811,
      111.810645,
      116.000232,
      117.018216,
      116.252108,
      116.682705,
      119.430384,
      119.916417,
      120.653168,
      121.38883,
      120.342727,
      120.669383,
      124.587426,
      125.781376,
      126.215282,
      126.782323,
      95.566367,
      102.040026,
      95.577158,
      96.159009,
      95.557772,
      97.799728,
      91.298032,
      93.350057,
      93.323794,
      94.691771,
      89.342471,
      90.542019,
      82.264229,
      82.885485,
      78.335615,
      80.025844,
      76.623947,
      78.355027,
      73.495149,
      74.484473,
      74.846872,
      76.482208,
      91.560117,
      94.871859,
      88.761692,
      89.23822,
      83.240549,
      83.967602,
      82.292367,
      83.2495,
      81.878825,
      83.256003,
      80.75421,
      81.465955,
      86.465421,
      88.270356,
      102.201019,
      104.228033,
      112.158282,
      116.827153,
      108.965663,
      113.025767,
      111.166575,
      117.97687,
    ],
    ec = [
      22.545421,
      42.279053,
      17.226272,
      22.731982,
      41.294917,
      50.743316,
      30.361986,
      42.326603,
      21.699185,
      22.690751,
      42.419757,
      48.938435,
      21.426505,
      22.64567,
      50.651745,
      52.916705,
      42.20641,
      45.201064,
      21.131326,
      22.565685,
      21.438288,
      22.580379,
      23.735785,
      25.295582,
      22.001087,
      22.560315,
      38.979333,
      41.340757,
      40.28938,
      41.332289,
      39.734164,
      40.344718,
      40.968803,
      41.325813,
      40.721073,
      41.061503,
      44.871533,
      48.012179,
      41.338366,
      42.445601,
      42.010343,
      42.436934,
      45.875217,
      48.208327,
      45.134237,
      46.786509,
      45.135376,
      46.394665,
      45.150734,
      45.742257,
      47.480099,
      50.065931,
      42.217982,
      43.46329,
      37.014057,
      40.662848,
      42.221079,
      47.315558,
      27.723432,
      30.46385,
      48.913298,
      49.644555,
      48.83396,
      49.436824,
      46.944059,
      48.376613,
      47.654503,
      48.466331,
      42.854333,
      44.907682,
      47.600253,
      48.440245,
      48.410926,
      48.903468,
      42.229292,
      42.908294,
      52.822466,
      53.58012,
      50.703491,
      51.656037,
      42.29378,
      44.393379,
      42.296912,
      45.385809,
      34.679282,
      37.027699,
      30.740622,
      37.066377,
      28.241967,
      30.403134,
      47.271949,
      48.49848,
      25.235818,
      27.774976,
      42.217425,
      42.542102,
      43.429763,
      44.691016,
      44.687044,
      44.995758,
      48.880431,
      49.320551,
      49.282865,
      49.626267,
      50.711607,
      51.308382,
      52.908547,
      53.333963,
      52.904419,
      53.109706,
      52.902338,
      53.251938,
      51.639701,
      52.402205,
      42.231045,
      42.693581,
      43.062756,
      43.892771,
      42.664519,
      43.075927,
      44.372942,
      45.1815,
      44.376327,
      44.975476,
      47.304623,
      48.054453,
      45.353174,
      46.808493,
      40.563653,
      42.041556,
      40.582164,
      41.4064,
      38.51618,
      40.179105,
      35.789745,
      37.023144,
      26.825402,
      27.757641,
      27.193806,
      27.745766,
      29.144229,
      30.375186,
      29.567889,
      30.059102,
      30.041938,
      30.378006,
      29.995047,
      30.382338,
      48.48834,
      49.169021,
      22.392816,
      22.595333,
      7.439914,
      11.500161,
      3.766676,
      9.000793,
      12.640512,
      17.406563,
    ],
    fc = 3e3,
    gc = 2.0e-5,
    hc = 3.0e-6,
    ic = 0.0174532925194,
    jc = 0.0065,
    kc = 0.006,
    lc = 4e4,
    mc = 0,
    nc = 3,
    oc = 1.0e-10,
    pc = 6370996.81,
    qc = 1e8;

  function rc(a, b, c) {
    for (var e = Xb, f = 0; f < e; f += 2)
      if (
        a.lng >= b[f] &&
        a.lng <= b[f + 1] &&
        a.lat >= c[f] &&
        a.lat <= c[f + 1]
      )
        return p;
    return t;
  }

  function sc(a) {
    var b = a.lng,
      c = a.lat,
      a = Math.sqrt(b * b + c * c) + Math.sin(c * fc * ic) * gc,
      b = Math.atan2(c, b) + Math.cos(b * fc * ic) * hc;
    return {
      lng: a * Math.cos(b) + jc,
      lat: a * Math.sin(b) + kc,
    };
  }

  function tc(a) {
    var b = uc,
      c = {},
      e = a.lng,
      f = a.lat,
      g = 1,
      i = a.lng,
      k = a.lat,
      m = e - g,
      n = 0,
      o = f + g,
      s = 0,
      v = e - g,
      w = 0,
      y = f - g,
      z = 0,
      B = e + g,
      C = 0,
      E = f - g,
      F = 0,
      G = e + g,
      K = 0,
      O = f + g,
      M = 0,
      o = (m = 0),
      o = vc(b, e, f),
      m = o.lng,
      o = o.lat;
    if (1.0e-6 >= wc(m, o, i, k)) return (c.lng = e), (c.lat = f), c;
    for (;;) {
      m = e - g;
      o = f + g;
      v = e - g;
      y = f - g;
      B = e + g;
      E = f - g;
      G = e + g;
      O = f + g;
      e = vc(b, m, o);
      n = e.lng;
      s = e.lat;
      e = vc(b, v, y);
      w = e.lng;
      z = e.lat;
      e = vc(b, B, E);
      C = e.lng;
      F = e.lat;
      e = vc(b, G, O);
      K = e.lng;
      M = e.lat;
      e = wc(n, s, i, k);
      n = wc(w, z, i, k);
      w = wc(C, F, i, k);
      K = wc(K, M, i, k);
      if (1.0e-6 > e) return (c.lng = m), (c.lat = o), c;
      if (1.0e-6 > n) return (c.lng = v), (c.lat = y), c;
      if (1.0e-6 > w) return (c.lng = B), (c.lat = E), c;
      if (1.0e-6 > K) return (c.lng = G), (c.lat = O), c;
      C = 1 / e;
      n = 1 / n;
      w = 1 / w;
      K = 1 / K;
      e = (m * C + v * n + B * w + G * K) / (C + n + w + K);
      f = (o * C + y * n + E * w + O * K) / (C + n + w + K);
      o = vc(b, e, f);
      m = o.lng;
      o = o.lat;
      if (1.0e-6 >= wc(m, o, i, k)) return (c.lng = e), (c.lat = f), c;
      g *= 0.6;
      if (1.0e-6 > g) {
        a: {
          c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0e-4 + 0.5;
          g = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0e-4 + 0.5;
          i = a.lng * qc;
          k = a.lat * qc;
          y = 1.0e-4 * qc;
          m = i - y;
          o = i + y;
          v = k - y;
          B = k + y;
          C = n = w = K = l;
          G = n = y = E = w = K = 0;
          b(a);
          C = l;
          for (O = 0; O <= c; O++) {
            for (e = 0; e <= g; e++)
              if (
                ((C = b(l)),
                (K = l.lng * qc),
                (w = l.lat * qc),
                (n = C.lng * qc),
                (C = C.lat * qc),
                !(n < m || C < v || n > o || C > B))
              ) {
                K -= n;
                w -= C;
                n = Math.sqrt((i - n) * (i - n) + (k - C) * (k - C));
                if (1 > n) {
                  c = {};
                  c.lng = l.lng;
                  c.lat = l.lat;
                  break a;
                }
                E += (1 * K) / n;
                y += (1 * w) / n;
                G += 1 / n;
              }
            E /= G * qc;
            y /= G * qc;
          }
          b = (E * qc) / qc;
          g = (y * qc) / qc;
          c = {};
          c.lng = a.lng + b;
          c.lat = a.lat + g;
        }
        return c;
      }
    }
  }

  function vc(a, b, c) {
    a = a({
      lng: b,
      lat: c,
    });
    b = {};
    b.lng = a.lng;
    b.lat = a.lat;
    return b;
  }

  function xc(a, b, c, e) {
    var f = arguments.length;
    this.Gg = {};
    this.Ng = {};
    0 !== f && 4 === f && this.normalize(a, b, c, e);
  }
  xc.prototype.contains = function(a) {
    return a.lng > this.Gg.lng &&
      a.lng < this.Ng.lng &&
      a.lat > this.Gg.lat &&
      a.lat < this.Ng.lat
      ? nc
      : Math.abs(a.lng - this.Gg.lng) < oc ||
        Math.abs(a.lng - this.Ng.lng) < oc ||
        Math.abs(a.lat - this.Gg.lat) < oc ||
        Math.abs(a.y - this.Ng.lat) > oc
      ? 2
      : mc;
  };
  xc.prototype.normalize = function(a, b, c, e) {
    a > c
      ? ((this.Gg.lng = c), (this.Ng.lng = a))
      : ((this.Gg.lng = a), (this.Ng.lng = c));
    b > e
      ? ((this.Gg.lat = e), (this.Ng.lat = b))
      : ((this.Gg.lat = b), (this.Ng.lat = e));
  };

  function yc(a, b, c, e) {
    this.lu = {
      lng: a,
      lat: b,
    };
    this.dx = {
      lng: c,
      lat: e,
    };
    this.Zx = new xc(a, b, c, e);
  }

  function zc(a, b) {
    var c = a.lat * ic,
      e = b.lat * ic,
      f = c - e,
      g = a.lng * ic - b.lng * ic;
    return (
      2 *
      Math.asin(
        Math.sqrt(
          Math.sin(f / 2) * Math.sin(f / 2) +
            Math.cos(c) * Math.cos(e) * Math.sin(g / 2) * Math.sin(g / 2)
        )
      ) *
      pc
    );
  }

  function wc(a, b, c, e) {
    return Math.sqrt((a - c) * (a - c) + (b - e) * (b - e));
  }

  function Ac(a, b, c) {
    return (
      (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
    );
  }

  function uc(a) {
    var b = {};
    if (
      a.lng < Vb[0] - 0.4 ||
      a.lat < Vb[1] - 0.4 ||
      a.lng > Vb[2] + 0.4 ||
      a.lat > Vb[3] + 0.4
    )
      return (b.lng = a.lng), (b.lat = a.lat), b;
    if (rc(a, dc, ec)) return (b = sc(a));
    for (var b = 0, c = lc, e = 0, f = new xc(), g = 0, e = 0; e < $b; ++e)
      cc[e] <= a.lat
        ? cc[(e + 1) % $b] > a.lat &&
          0 <
            Ac(
              {
                lng: ac[e],
                lat: cc[e],
              },
              {
                lng: ac[(e + 1) % $b],
                lat: cc[(e + 1) % $b],
              },
              a
            ) &&
          ++g
        : cc[(e + 1) % $b] <= a.lat &&
          0 >
            Ac(
              {
                lng: ac[e],
                lat: cc[e],
              },
              {
                lng: ac[(e + 1) % $b],
                lat: cc[(e + 1) % $b],
              },
              a
            ) &&
          --g;
    if ((0 === g ? mc : nc) === mc) {
      for (g = 0; g < $b; ++g)
        if (
          ((e = new yc(ac[g], cc[g], ac[(g + 1) % $b], cc[(g + 1) % $b])),
          (f.Gg.lng = e.Zx.Gg.lng - 0.5),
          (f.Gg.lat = e.Zx.Gg.lat - 0.5),
          (f.Ng.lng = e.Zx.Ng.lng + 0.5),
          (f.Ng.lat = e.Zx.Ng.lat + 0.5),
          f.contains(a) !== mc)
        ) {
          var i;
          var k = e.lu.lng,
            m = e.lu.lat,
            n = e.dx.lng,
            o = e.dx.lat;
          i = o - m;
          var s = k - n;
          !(Math.abs(i - 0) > oc) && !(Math.abs(s - 0) > oc)
            ? (i = e.lu)
            : ((k = n * m - k * o),
              (m = s * a.lng - i * a.lat),
              (n = i * i - s * s),
              (i = {
                lng: (s * m - i * k) / n,
                lat: -(i * m + s * k) / n,
              }));
          s = 180;
          k = 90;
          m = -180;
          n = -90;
          n = e.lu;
          o = e.dx;
          s = n.lng < o.lng ? n.lng : o.lng;
          k = n.lat < o.lat ? n.lat : o.lat;
          m = n.lng < o.lng ? n.lng : o.lng;
          n = n.lat < o.lat ? n.lat : o.lat;
          i.lng <= m && i.lng >= s && i.lng <= n && i.lat >= k
            ? ((e = a.lat * ic),
              (s = a.lng * ic),
              (k = i.lat * ic),
              (i = i.lng * ic),
              (m = Math.cos(e) * Math.cos(k)),
              (e =
                m * Math.cos(s) * Math.cos(i) +
                m * Math.sin(s) * Math.sin(i) +
                Math.sin(e) * Math.sin(k)),
              -1 > e ? (e = -1) : 1 < e && (e = 1),
              (e = Math.acos(e) * pc))
            : ((i = zc(a, e.lu)), (e = zc(a, e.dx)), (e = i < e ? i : e));
          e < c && (c = e);
        }
      c < lc && (b = (lc - c) / lc);
    } else b = 1;
    c = sc(a);
    return (b = {
      lng: a.lng + (c.lng - a.lng) * b,
      lat: a.lat + (c.lat - a.lat) * b,
    });
  }

  function Bc(a) {
    var b = {};
    if (
      a.lng < Wb[0] - 0.4 ||
      a.lat < Wb[1] - 0.4 ||
      a.lng > Wb[2] + 0.4 ||
      a.lat > Wb[3] + 0.4
    )
      return (b.lng = a.lng), (b.lat = a.lat), b;
    if (rc(a, Yb, Zb)) {
      var b = a.lng - jc,
        c = a.lat - kc,
        a = Math.sqrt(b * b + c * c) - Math.sin(c * fc * ic) * gc,
        b = Math.atan2(c, b) - Math.cos(b * fc * ic) * hc;
      return (b = {
        lng: a * Math.cos(b),
        lat: a * Math.sin(b),
      });
    }
    c = uc(a);
    return a.lng === c.lng && a.lat === c.lng
      ? ((b.lng = a.lng), (b.lat = a.lat), b)
      : tc(a);
  }

  function Za(a, b) {
    if (3 === b && a instanceof Q) {
      var c = uc(a);
      return new J(c.lng, c.lat);
    }
    return a;
  }

  function db(a, b) {
    if (3 === b && a instanceof J) {
      var c = Bc(a);
      return new Q(c.lng, c.lat);
    }
    return 5 === b && a instanceof J ? new Q(a.lng, a.lat) : a;
  }

  function pa(a, b) {
    //////
    if (/^http/.test(a)) return; // ！！！！！这里加判断，如果是调用外部资源就退出去
    //////
    if (b) {
      var c = (1e5 * Math.random()).toFixed(0);
      D._rd["_cbk" + c] = function(a) {
        b && b(a);
        delete D._rd["_cbk" + c];
      };
      a += "&callback=BMap._rd._cbk" + c;
    }
    var e = L("script", {
      type: "text/javascript",
    });
    e.charset = "utf-8";
    e.src = a;
    e.addEventListener
      ? e.addEventListener(
          "load",
          function(a) {
            a = a.target;
            a.parentNode.removeChild(a);
          },
          t
        )
      : e.attachEvent &&
        e.attachEvent("onreadystatechange", function() {
          var a = window.event.srcElement;
          a &&
            ("loaded" == a.readyState || "complete" == a.readyState) &&
            a.parentNode.removeChild(a);
        });
    setTimeout(function() {
      document.getElementsByTagName("head")[0].appendChild(e);
      e = q;
    }, 1);
  }
  var Cc = {
    map: "llus0x",
    common: "e4w0ou",
    style: "3a2vx0",
    tile: "d3rw4s",
    groundoverlay: "uydtkg",
    pointcollection: "wl1skv",
    marker: "fixh3w",
    symbol: "ynxll4",
    canvablepath: "hcmlbw",
    vmlcontext: "uc4jcg",
    markeranimation: "impelq",
    poly: "zg5bvv",
    draw: "cf5ehc",
    drawbysvg: "nqv5a3",
    drawbyvml: "wxrhq1",
    drawbycanvas: "5tv3y3",
    infowindow: "cepfgu",
    oppc: "fgayez",
    opmb: "q2hhlu",
    menu: "2c4y5w",
    control: "qryej0",
    navictrl: "fccnlv",
    geoctrl: "qpheuz",
    copyrightctrl: "bc22pv",
    citylistcontrol: "zfvtlq",
    scommon: "hnv4ly",
    local: "kq01zu",
    route: "da2v0v",
    othersearch: "z52kze",
    mapclick: "iuhtki",
    buslinesearch: "mzvndw",
    hotspot: "em1h1q",
    autocomplete: "5eqmvs",
    coordtrans: "z4orcm",
    coordtransutils: "bd5zfv",
    convertor: "kuzhql",
    clayer: "wlz4qi",
    pservice: "twrfpr",
    pcommon: "14u5iw",
    panorama: "4ve5ja",
    panoramaflash: "d1gjlo",
  };
  A.Ky = (function() {
    function a(a) {
      return e && !!c[b + a + "_" + Cc[a]];
    }
    var b = "BMap_",
      c = window.localStorage,
      e = "localStorage" in window && c !== q && c !== l;
    return {
      MY: e,
      set: function(a, g) {
        if (e) {
          for (var i = b + a + "_", k = c.length, m; k--; )
            (m = c.key(k)), -1 < m.indexOf(i) && c.removeItem(m);
          try {
            c.setItem(b + a + "_" + Cc[a], g);
          } catch (n) {
            c.clear();
          }
        }
      },
      get: function(f) {
        return e && a(f) ? c.getItem(b + f + "_" + Cc[f]) : t;
      },
      iK: a,
    };
  })();

  function Ua() {}
  A.object.extend(Ua, {
    Lj: {
      uG: -1,
      MP: 0,
      oq: 1,
    },
    pL: function() {
      var a = "canvablepath";
      if (!I() || !Rb()) Qb() || (Pb() ? (a = "vmlcontext") : Rb());
      return {
        tile: ["style"],
        control: [],
        marker: ["symbol"],
        symbol: ["canvablepath", "common"],
        canvablepath: "canvablepath" === a ? [] : [a],
        vmlcontext: [],
        style: [],
        poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
        drawbysvg: ["draw"],
        drawbyvml: ["draw"],
        drawbycanvas: ["draw"],
        infowindow: ["common", "marker"],
        menu: [],
        oppc: [],
        opmb: [],
        scommon: [],
        local: ["scommon"],
        route: ["scommon"],
        othersearch: ["scommon"],
        autocomplete: ["scommon"],
        citylistcontrol: ["autocomplete"],
        mapclick: ["scommon"],
        buslinesearch: ["route"],
        hotspot: [],
        coordtransutils: ["coordtrans"],
        convertor: [],
        clayer: ["tile"],
        pservice: [],
        pcommon: ["style", "pservice"],
        panorama: ["pcommon"],
        panoramaflash: ["pcommon"],
      };
    },
    z5: {},
    lG: {
      XP: D.pa + "getmodules?v=3.0",
      sU: 5e3,
    },
    BC: t,
    Wd: {
      El: {},
      Gn: [],
      aw: [],
    },
    load: function(a, b, c) {
      var e = this.qb(a);
      if (e.Se == this.Lj.oq) c && b();
      else {
        if (e.Se == this.Lj.uG) {
          this.nK(a);
          this.zN(a);
          var f = this;
          f.BC == t &&
            ((f.BC = p),
            setTimeout(function() {
              for (var a = [], b = 0, c = f.Wd.Gn.length; b < c; b++) {
                var e = f.Wd.Gn[b],
                  n = "";
                ja.Ky.iK(e)
                  ? (n = ja.Ky.get(e))
                  : ((n = ""), a.push(e + "_" + Cc[e]));
                f.Wd.aw.push({
                  RM: e,
                  IE: n,
                });
              }
              f.BC = t;
              f.Wd.Gn.length = 0;
              //!!!!!!!!!!!!!!!!!!!!
              // console.log("打印所需模块");
              // console.log(a); //！！！！！打印所需模块，这很重要
              //!!!!!!!!!!!!!!!!!!!!
              // 0 == a.length ? f.WK() : pa(f.lG.XP + "&mod=" + a.join(","))
              if (a.length > 0) {
                for (let i = 0; i < a.length; i++) {
                  let mf = "./baidu_source/" + a[i] + ".js";
                  pa(mf);
                  // console.dir("加载模块文件:" + mf); //IE error
                }
              } else {
                f.WK();
              }
            }, 1));
          e.Se = this.Lj.MP;
        }
        e.Wu.push(b);
      }
    },
    nK: function(a) {
      if (a && this.pL()[a])
        for (var a = this.pL()[a], b = 0; b < a.length; b++)
          this.nK(a[b]), this.Wd.El[a[b]] || this.zN(a[b]);
    },
    zN: function(a) {
      for (var b = 0; b < this.Wd.Gn.length; b++)
        if (this.Wd.Gn[b] == a) return;
      this.Wd.Gn.push(a);
    },
    e_: function(a, b) {
      var c = this.qb(a);
      try {
        eval(b);
      } catch (e) {
        return;
      }
      c.Se = this.Lj.oq;
      for (var f = 0, g = c.Wu.length; f < g; f++) c.Wu[f]();
      c.Wu.length = 0;
    },
    iK: function(a, b) {
      var c = this;
      c.timeout = setTimeout(function() {
        c.Wd.El[a].Se != c.Lj.oq
          ? (c.remove(a), c.load(a, b))
          : clearTimeout(c.timeout);
      }, c.lG.sU);
    },
    qb: function(a) {
      this.Wd.El[a] ||
        ((this.Wd.El[a] = {}),
        (this.Wd.El[a].Se = this.Lj.uG),
        (this.Wd.El[a].Wu = []));
      return this.Wd.El[a];
    },
    remove: function(a) {
      delete this.qb(a);
    },
    qV: function(a, b) {
      for (var c = this.Wd.aw, e = p, f = 0, g = c.length; f < g; f++)
        "" == c[f].IE && (c[f].RM == a ? (c[f].IE = b) : (e = t));
      e && this.WK();
    },
    WK: function() {
      for (var a = this.Wd.aw, b = 0, c = a.length; b < c; b++)
        this.e_(a[b].RM, a[b].IE);
      this.Wd.aw.length = 0;
    },
  });

  function R(a, b) {
    this.x = a || 0;
    this.y = b || 0;
    this.x = this.x;
    this.y = this.y;
  }
  R.prototype.Ub = function(a) {
    return a && a.x == this.x && a.y == this.y;
  };

  function N(a, b) {
    this.width = a || 0;
    this.height = b || 0;
  }
  N.prototype.Ub = function(a) {
    return a && this.width == a.width && this.height == a.height;
  };

  function mb(a, b, c) {
    var e = new XMLHttpRequest();
    e.open("POST", a, p);
    e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    e.timeout = 1e4;
    e.ontimeout = u();
    e.onreadystatechange = function() {
      4 === this.readyState && 200 === this.status && c && c(e.responseText);
    };
    e.send(b);
  }

  function lb(a, b) {
    a &&
      ((this.Mb = a),
      (this.da = "spot" + lb.da++),
      (b = b || {}),
      (this.ih = b.text || ""),
      (this.Hv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5]),
      (this.IB = b.userData || q),
      (this.Qh = b.minZoom || q),
      (this.Nf = b.maxZoom || q));
  }
  lb.da = 0;
  A.extend(lb.prototype, {
    za: function(a) {
      this.Qh == q && (this.Qh = a.M.kc);
      this.Nf == q && (this.Nf = a.M.pc);
    },
    va: function(a) {
      if (a instanceof Q || a instanceof J) this.Mb = a;
    },
    na: x("Mb"),
    eu: ca("ih"),
    SD: x("ih"),
    setUserData: ca("IB"),
    getUserData: x("IB"),
  });

  function Dc() {
    this.P = q;
    this.Nb = "control";
    this.Wa = this.$J = p;
  }
  A.lang.xa(Dc, A.lang.Ja, "Control");
  A.extend(Dc.prototype, {
    initialize: function(a) {
      this.P = a;
      if (this.R) return a.cb.appendChild(this.R), this.R;
    },
    Me: function(a) {
      !this.R &&
        (this.initialize && ab(this.initialize)) &&
        (this.R = this.initialize(a));
      this.m = this.m || {
        Mg: t,
      };
      this.wB();
      this.Nr();
      this.R && (this.R.or = this);
    },
    wB: function() {
      var a = this.R;
      if (a) {
        var b = a.style;
        b.position = "absolute";
        b.zIndex = this.Tu || "10";
        b.MozUserSelect = "none";
        b.WebkitTextSizeAdjust = "none";
        this.m.Mg || A.U.ib(a, "BMap_noprint");
        I() || A.V(a, "contextmenu", oa);
      }
    },
    remove: function() {
      this.P = q;
      this.R &&
        (this.R.parentNode && this.R.parentNode.removeChild(this.R),
        (this.R = this.R.or = q));
    },
    Ha: function() {
      this.R = Eb(this.P.cb, "<div unselectable='on'></div>");
      this.Wa == t && A.U.aa(this.R);
      return this.R;
    },
    Nr: function() {
      this.uc(this.m.anchor);
    },
    uc: function(a) {
      if (this.t2 || !$a(a) || isNaN(a) || a < Ec || 3 < a)
        a = this.defaultAnchor;
      this.m = this.m || {
        Mg: t,
      };
      this.m.Ga = this.m.Ga || this.defaultOffset;
      var b = this.m.anchor;
      this.m.anchor = a;
      if (this.R) {
        var c = this.R,
          e = this.m.Ga.width,
          f = this.m.Ga.height;
        c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
        switch (a) {
          case Ec:
            c.style.top = f + "px";
            c.style.left = e + "px";
            break;
          case Fc:
            c.style.top = f + "px";
            c.style.right = e + "px";
            break;
          case Gc:
            c.style.bottom = f + "px";
            c.style.left = e + "px";
            break;
          case 3:
            (c.style.bottom = f + "px"), (c.style.right = e + "px");
        }
        c = ["TL", "TR", "BL", "BR"];
        A.U.qc(this.R, "anchor" + c[b]);
        A.U.ib(this.R, "anchor" + c[a]);
      }
    },
    vD: function() {
      return this.m.anchor;
    },
    getContainer: x("R"),
    Rd: function(a) {
      a instanceof N &&
        ((this.m = this.m || {
          Mg: t,
        }),
        (this.m.Ga = new N(a.width, a.height)),
        this.R && this.uc(this.m.anchor));
    },
    rj: function() {
      return this.m.Ga;
    },
    cd: x("R"),
    show: function() {
      this.Wa != p && ((this.Wa = p), this.R && A.U.show(this.R));
    },
    aa: function() {
      this.Wa != t && ((this.Wa = t), this.R && A.U.aa(this.R));
    },
    isPrintable: function() {
      return !!this.m.Mg;
    },
    Tc: function() {
      return !this.R && !this.P ? t : !!this.Wa;
    },
  });
  var Ec = 0,
    Fc = 1,
    Gc = 2;

  function nb(a) {
    Dc.call(this);
    a = a || {};
    this.m = {
      Mg: t,
      yF: a.showZoomInfo || p,
      anchor: a.anchor,
      Ga: a.offset,
      type: a.type,
      FW: a.enableGeolocation || t,
    };
    this.defaultAnchor = I() ? 3 : Ec;
    this.defaultOffset = new N(10, 10);
    this.uc(a.anchor);
    this.kn(a.type);
    this.Ef();
  }
  A.lang.xa(nb, Dc, "NavigationControl");
  A.extend(nb.prototype, {
    initialize: function(a) {
      this.P = a;
      return this.R;
    },
    kn: function(a) {
      this.m.type = $a(a) && 0 <= a && 3 >= a ? a : 0;
    },
    sp: function() {
      return this.m.type;
    },
    Ef: function() {
      var a = this;
      Ua.load("navictrl", function() {
        a.Df();
      });
    },
  });

  function Hc(a) {
    Dc.call(this);
    a = a || {};
    this.m = {
      anchor: a.anchor || Gc,
      Ga: a.offset || new N(10, 30),
      P_: a.showAddressBar !== t,
      d3: a.enableAutoLocation || t,
      JM: a.locationIcon || q,
    };
    var b = this;
    this.Tu = 1200;
    b.M0 = [];
    this.ue = [];
    Ua.load("geoctrl", function() {
      (function e() {
        if (0 !== b.ue.length) {
          var a = b.ue.shift();
          b[a.method].apply(b, a.arguments);
          e();
        }
      })();
      b.WP();
    });
    Sa(La);
  }
  A.lang.xa(Hc, Dc, "GeolocationControl");
  A.extend(Hc.prototype, {
    location: function() {
      this.ue.push({
        method: "location",
        arguments: arguments,
      });
    },
    getAddressComponent: ea(q),
  });

  function Ic(a) {
    Dc.call(this);
    a = a || {};
    this.m = {
      Mg: t,
      anchor: a.anchor,
      Ga: a.offset,
    };
    this.gc = [];
    this.defaultAnchor = Gc;
    this.defaultOffset = new N(5, 2);
    this.uc(a.anchor);
    this.$J = t;
    this.Ef();
  }
  A.lang.xa(Ic, Dc, "CopyrightControl");
  A.object.extend(Ic.prototype, {
    initialize: function(a) {
      this.P = a;
      return this.R;
    },
    zw: function(a) {
      if (a && $a(a.id) && !isNaN(a.id)) {
        var b = {
            bounds: q,
            content: "",
          },
          c;
        for (c in a) b[c] = a[c];
        if ((a = this.xm(a.id))) for (var e in b) a[e] = b[e];
        else this.gc.push(b);
      }
    },
    xm: function(a) {
      for (var b = 0, c = this.gc.length; b < c; b++)
        if (this.gc[b].id == a) return this.gc[b];
    },
    CD: x("gc"),
    XE: function(a) {
      for (var b = 0, c = this.gc.length; b < c; b++)
        this.gc[b].id == a &&
          ((r = this.gc.splice(b, 1)), b--, (c = this.gc.length));
    },
    Ef: function() {
      var a = this;
      Ua.load("copyrightctrl", function() {
        a.Df();
      });
    },
  });

  function pb(a) {
    Dc.call(this);
    a = a || {};
    this.m = {
      Mg: t,
      size: a.size || new N(150, 150),
      padding: 5,
      eb: a.isOpen === p ? p : t,
      e1: 4,
      Ga: a.offset,
      anchor: a.anchor,
    };
    this.defaultAnchor = 3;
    this.defaultOffset = new N(0, 0);
    this.Gq = this.Hq = 13;
    this.uc(a.anchor);
    this.He(this.m.size);
    this.Ef();
  }
  A.lang.xa(pb, Dc, "OverviewMapControl");
  A.extend(pb.prototype, {
    initialize: function(a) {
      this.P = a;
      return this.R;
    },
    uc: function(a) {
      Dc.prototype.uc.call(this, a);
    },
    ve: function() {
      this.ve.po = p;
      this.m.eb = !this.m.eb;
      this.R || (this.ve.po = t);
    },
    He: function(a) {
      a instanceof N || (a = new N(150, 150));
      a.width = 0 < a.width ? a.width : 150;
      a.height = 0 < a.height ? a.height : 150;
      this.m.size = a;
    },
    yb: function() {
      return this.m.size;
    },
    eb: function() {
      return this.m.eb;
    },
    Ef: function() {
      var a = this;
      Ua.load("control", function() {
        a.Df();
      });
    },
  });

  function Jc(a) {
    Dc.call(this);
    a = a || {};
    this.defaultAnchor = Ec;
    this.oV = a.canCheckSize === t ? t : p;
    this.kj = "";
    this.defaultOffset = new N(10, 10);
    this.onChangeBefore = [];
    this.onChangeAfter = [];
    this.onChangeSuccess = [];
    this.m = {
      Mg: t,
      Ga: a.offset || this.defaultOffset,
      anchor: a.anchor || this.defaultAnchor,
      expand: !!a.expand,
    };
    a.onChangeBefore &&
      ab(a.onChangeBefore) &&
      this.onChangeBefore.push(a.onChangeBefore);
    a.onChangeAfter &&
      ab(a.onChangeAfter) &&
      this.onChangeAfter.push(a.onChangeAfter);
    a.onChangeSuccess &&
      ab(a.onChangeSuccess) &&
      this.onChangeSuccess.push(a.onChangeSuccess);
    this.uc(a.anchor);
    this.Ef();
  }
  A.lang.xa(Jc, Dc, "CityListControl");
  A.object.extend(Jc.prototype, {
    initialize: function(a) {
      this.P = a;
      return this.R;
    },
    Ef: function() {
      var a = this;
      Ua.load(
        "citylistcontrol",
        function() {
          a.Df();
        },
        p
      );
    },
  });

  function ob(a) {
    Dc.call(this);
    a = a || {};
    this.m = {
      Mg: t,
      color: "black",
      hd: "metric",
      Ga: a.offset,
    };
    this.defaultAnchor = Gc;
    this.defaultOffset = new N(81, 18);
    this.uc(a.anchor);
    this.Zh = {
      metric: {
        name: "metric",
        pK: 1,
        dM: 1e3,
        IO: "\u7c73",
        JO: "\u516c\u91cc",
      },
      us: {
        name: "us",
        pK: 3.2808,
        dM: 5280,
        IO: "\u82f1\u5c3a",
        JO: "\u82f1\u91cc",
      },
    };
    this.Zh[this.m.hd] || (this.m.hd = "metric");
    this.TI = q;
    this.oI = {};
    this.Ef();
  }
  A.lang.xa(ob, Dc, "ScaleControl");
  A.object.extend(ob.prototype, {
    initialize: function(a) {
      this.P = a;
      return this.R;
    },
    Wk: function(a) {
      this.m.color = a + "";
    },
    z3: function() {
      return this.m.color;
    },
    uF: function(a) {
      this.m.hd = (this.Zh[a] && this.Zh[a].name) || this.m.hd;
    },
    bY: function() {
      return this.m.hd;
    },
    Ef: function() {
      var a = this;
      Ua.load("control", function() {
        a.Df();
      });
    },
  });
  var Kc = 0;

  function qb(a) {
    Dc.call(this);
    a = a || {};
    this.defaultAnchor = Fc;
    this.defaultOffset = new N(10, 10);
    this.m = {
      Mg: t,
      vh: [Oa, bb, Ta, Ra],
      ZV: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
      type: a.type || Kc,
      Ga: a.offset || this.defaultOffset,
      JW: p,
    };
    this.uc(a.anchor);
    "[object Array]" == Object.prototype.toString.call(a.mapTypes) &&
      (this.m.vh = a.mapTypes.slice(0));
    this.Ef();
  }
  A.lang.xa(qb, Dc, "MapTypeControl");
  A.object.extend(qb.prototype, {
    initialize: function(a) {
      this.P = a;
      return this.R;
    },
    Ly: function(a) {
      this.P.ao = a;
    },
    Ef: function() {
      var a = this;
      Ua.load(
        "control",
        function() {
          a.Df();
        },
        p
      );
    },
  });

  function Lc(a) {
    Dc.call(this);
    a = a || {};
    this.m = {
      Mg: t,
      Ga: a.offset,
      anchor: a.anchor,
    };
    this.Wi = t;
    this.fw = q;
    this.yI = new Mc({
      Ye: "api",
    });
    this.zI = new Nc(q, {
      Ye: "api",
    });
    this.defaultAnchor = Fc;
    this.defaultOffset = new N(10, 10);
    this.uc(a.anchor);
    this.Ef();
    Sa(xa);
  }
  A.lang.xa(Lc, Dc, "PanoramaControl");
  A.extend(Lc.prototype, {
    initialize: function(a) {
      this.P = a;
      return this.R;
    },
    Ef: function() {
      var a = this;
      Ua.load("control", function() {
        a.Df();
      });
    },
  });

  function Oc(a) {
    A.lang.Ja.call(this);
    this.m = {
      cb: q,
      cursor: "default",
    };
    this.m = A.extend(this.m, a);
    this.Nb = "contextmenu";
    this.P = q;
    this.Da = [];
    this.Pf = [];
    this.Ke = [];
    this.Uw = this.rs = q;
    this.Ph = t;
    var b = this;
    Ua.load("menu", function() {
      b.ob();
    });
  }
  A.lang.xa(Oc, A.lang.Ja, "ContextMenu");
  A.object.extend(Oc.prototype, {
    za: function(a, b) {
      this.P = a;
      this.Jl = b || q;
    },
    remove: function() {
      this.P = this.Jl = q;
    },
    ds: function(a) {
      if (a && !("menuitem" != a.Nb || "" == a.ih || 0 >= a.fj)) {
        for (var b = 0, c = this.Da.length; b < c; b++)
          if (this.Da[b] === a) return;
        this.Da.push(a);
        this.Pf.push(a);
      }
    },
    removeItem: function(a) {
      if (a && "menuitem" == a.Nb) {
        for (var b = 0, c = this.Da.length; b < c; b++)
          this.Da[b] === a && (this.Da[b].remove(), this.Da.splice(b, 1), c--);
        b = 0;
        for (c = this.Pf.length; b < c; b++)
          this.Pf[b] === a && (this.Pf[b].remove(), this.Pf.splice(b, 1), c--);
      }
    },
    TB: function() {
      this.Da.push({
        Nb: "divider",
        Tj: this.Ke.length,
      });
      this.Ke.push({
        U: q,
      });
    },
    $E: function(a) {
      if (this.Ke[a]) {
        for (var b = 0, c = this.Da.length; b < c; b++)
          this.Da[b] &&
            ("divider" == this.Da[b].Nb && this.Da[b].Tj == a) &&
            (this.Da.splice(b, 1), c--),
            this.Da[b] &&
              ("divider" == this.Da[b].Nb && this.Da[b].Tj > a) &&
              this.Da[b].Tj--;
        this.Ke.splice(a, 1);
      }
    },
    cd: x("R"),
    show: function() {
      this.Ph != p && (this.Ph = p);
    },
    aa: function() {
      this.Ph != t && (this.Ph = t);
    },
    t_: function(a) {
      a && (this.m.cursor = a);
    },
    getItem: function(a) {
      return this.Pf[a];
    },
  });
  var Pc = H.ua + "menu_zoom_in.png",
    Qc = H.ua + "menu_zoom_out.png";

  function Rc(a, b, c) {
    if (a && ab(b)) {
      A.lang.Ja.call(this);
      this.m = {
        width: 100,
        id: "",
        Km: "",
      };
      c = c || {};
      this.m.width = 1 * c.width ? c.width : 100;
      this.m.id = c.id ? c.id : "";
      this.m.Km = c.iconUrl ? c.iconUrl : "";
      this.ih = a + "";
      this.uz = b;
      this.P = q;
      this.Nb = "menuitem";
      this.Ur = this.xv = this.R = this.Kh = q;
      this.Nh = p;
      var e = this;
      Ua.load("menu", function() {
        e.ob();
      });
    }
  }
  A.lang.xa(Rc, A.lang.Ja, "MenuItem");
  A.object.extend(Rc.prototype, {
    za: function(a, b) {
      this.P = a;
      this.Kh = b;
    },
    remove: function() {
      this.P = this.Kh = q;
    },
    eu: function(a) {
      a && (this.ih = a + "");
    },
    Wb: function(a) {
      a && (this.m.Km = a);
    },
    cd: x("R"),
    enable: function() {
      this.Nh = p;
    },
    disable: function() {
      this.Nh = t;
    },
  });

  function ib(a, b) {
    a && !b && (b = a);
    this.Ne = this.ae = this.Te = this.de = this.Xl = this.Hl = q;
    a &&
      ((this.Xl = new Q(a.lng, a.lat)),
      (this.Hl = new Q(b.lng, b.lat)),
      (this.Te = a.lng),
      (this.de = a.lat),
      (this.Ne = b.lng),
      (this.ae = b.lat));
  }
  A.object.extend(ib.prototype, {
    zj: function() {
      return !this.Xl || !this.Hl;
    },
    Ub: function(a) {
      return !(a instanceof ib) || this.zj()
        ? t
        : this.Ae().Ub(a.Ae()) && this.sf().Ub(a.sf());
    },
    Ae: x("Xl"),
    sf: x("Hl"),
    FV: function(a) {
      return !(a instanceof ib) || this.zj() || a.zj()
        ? t
        : a.Te > this.Te && a.Ne < this.Ne && a.de > this.de && a.ae < this.ae;
    },
    Qb: function() {
      return this.zj()
        ? q
        : new Q((this.Te + this.Ne) / 2, (this.de + this.ae) / 2);
    },
    nt: function(a) {
      if (
        !(a instanceof ib) ||
        Math.max(a.Te, a.Ne) < Math.min(this.Te, this.Ne) ||
        Math.min(a.Te, a.Ne) > Math.max(this.Te, this.Ne) ||
        Math.max(a.de, a.ae) < Math.min(this.de, this.ae) ||
        Math.min(a.de, a.ae) > Math.max(this.de, this.ae)
      )
        return q;
      var b = Math.max(this.Te, a.Te),
        c = Math.min(this.Ne, a.Ne),
        e = Math.max(this.de, a.de),
        a = Math.min(this.ae, a.ae);
      return new ib(new Q(b, e), new Q(c, a));
    },
    ls: function(a) {
      return !(a instanceof Q || a instanceof J) || this.zj()
        ? t
        : a.lng >= this.Te &&
            a.lng <= this.Ne &&
            a.lat >= this.de &&
            a.lat <= this.ae;
    },
    extend: function(a) {
      if (a instanceof Q || a instanceof J) {
        var b = a.lng,
          a = a.lat;
        this.Xl || (this.Xl = new Q(0, 0));
        this.Hl || (this.Hl = new Q(0, 0));
        if (!this.Te || this.Te > b) this.Xl.lng = this.Te = b;
        if (!this.Ne || this.Ne < b) this.Hl.lng = this.Ne = b;
        if (!this.de || this.de > a) this.Xl.lat = this.de = a;
        if (!this.ae || this.ae < a) this.Hl.lat = this.ae = a;
      }
    },
    LF: function() {
      return this.zj()
        ? new Q(0, 0)
        : new Q(Math.abs(this.Ne - this.Te), Math.abs(this.ae - this.de));
    },
  });

  function Q(a, b) {
    isNaN(a) && ((a = Ob(a)), (a = isNaN(a) ? 0 : a));
    cb(a) && (a = parseFloat(a));
    isNaN(b) && ((b = Ob(b)), (b = isNaN(b) ? 0 : b));
    cb(b) && (b = parseFloat(b));
    this.lng = a;
    this.lat = b;
  }
  Q.lE = function(a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat;
  };
  Q.prototype.Ub = function(a) {
    return a && this.lat == a.lat && this.lng == a.lng;
  };

  function J(a, b) {
    isNaN(a) && ((a = Ob(a)), (a = isNaN(a) ? 0 : a));
    cb(a) && (a = parseFloat(a));
    isNaN(b) && ((b = Ob(b)), (b = isNaN(b) ? 0 : b));
    cb(b) && (b = parseFloat(b));
    this.lng = a;
    this.lat = b;
    this.Ye = "inner";
  }
  J.lE = function(a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat;
  };
  J.prototype.Ub = function(a) {
    return a && this.lat == a.lat && this.lng == a.lng;
  };

  function Sc() {}
  Sc.prototype.Hg = function() {
    ba("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0");
  };
  Sc.prototype.Dj = function() {
    ba("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0");
  };

  function Tc() {}
  var hb = {
    rK: function(a, b, c) {
      Ua.load(
        "coordtransutils",
        function() {
          hb.QU(a, b, c);
        },
        p
      );
    },
    qK: function(a, b, c) {
      Ua.load(
        "coordtransutils",
        function() {
          hb.PU(a, b, c);
        },
        p
      );
    },
  };

  function Uc() {
    this.Qa = [];
    var a = this;
    Ua.load("convertor", function() {
      a.UP();
    });
  }
  A.xa(Uc, A.lang.Ja, "Convertor");
  A.extend(Uc.prototype, {
    translate: function(a, b, c, e) {
      this.Qa.push({
        method: "translate",
        arguments: [a, b, c, e],
      });
    },
  });
  V(Uc.prototype, {
    translate: Uc.prototype.translate,
  });

  function T() {}
  T.prototype = new Sc();
  A.extend(T, {
    oP: 6370996.81,
    yG: [1.289059486e7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    Ku: [86, 60, 45, 30, 15, 0],
    uP: [
      [
        1.410526172116255e-8,
        8.98305509648872e-6,
        -1.9939833816331,
        200.9824383106796,
        -187.2403703815547,
        91.6087516669843,
        -23.38765649603339,
        2.57121317296198,
        -0.03801003308653,
        1.73379812e7,
      ],
      [
        -7.435856389565537e-9,
        8.983055097726239e-6,
        -0.78625201886289,
        96.32687599759846,
        -1.85204757529826,
        -59.36935905485877,
        47.40033549296737,
        -16.50741931063887,
        2.28786674699375,
        1.026014486e7,
      ],
      [
        -3.030883460898826e-8,
        8.98305509983578e-6,
        0.30071316287616,
        59.74293618442277,
        7.357984074871,
        -25.38371002664745,
        13.45380521110908,
        -3.29883767235584,
        0.32710905363475,
        6856817.37,
      ],
      [
        -1.981981304930552e-8,
        8.983055099779535e-6,
        0.03278182852591,
        40.31678527705744,
        0.65659298677277,
        -4.44255534477492,
        0.85341911805263,
        0.12923347998204,
        -0.04625736007561,
        4482777.06,
      ],
      [
        3.09191371068437e-9,
        8.983055096812155e-6,
        6.995724062e-5,
        23.10934304144901,
        -2.3663490511e-4,
        -0.6321817810242,
        -0.00663494467273,
        0.03430082397953,
        -0.00466043876332,
        2555164.4,
      ],
      [
        2.890871144776878e-9,
        8.983055095805407e-6,
        -3.068298e-8,
        7.47137025468032,
        -3.53937994e-6,
        -0.02145144861037,
        -1.234426596e-5,
        1.0322952773e-4,
        -3.23890364e-6,
        826088.5,
      ],
    ],
    vG: [
      [
        -0.0015702102444,
        111320.7020616939,
        1704480524535203,
        -10338987376042340,
        26112667856603880,
        -35149669176653700,
        26595700718403920,
        -10725012454188240,
        1800819912950474,
        82.5,
      ],
      [
        8.277824516172526e-4,
        111320.7020463578,
        6.477955746671607e8,
        -4.082003173641316e9,
        1.077490566351142e10,
        -1.517187553151559e10,
        1.205306533862167e10,
        -5.124939663577472e9,
        9.133119359512032e8,
        67.5,
      ],
      [
        0.00337398766765,
        111320.7020202162,
        4481351.045890365,
        -2.339375119931662e7,
        7.968221547186455e7,
        -1.159649932797253e8,
        9.723671115602145e7,
        -4.366194633752821e7,
        8477230.501135234,
        52.5,
      ],
      [
        0.00220636496208,
        111320.7020209128,
        51751.86112841131,
        3796837.749470245,
        992013.7397791013,
        -1221952.21711287,
        1340652.697009075,
        -620943.6990984312,
        144416.9293806241,
        37.5,
      ],
      [
        -3.441963504368392e-4,
        111320.7020576856,
        278.2353980772752,
        2485758.690035394,
        6070.750963243378,
        54821.18345352118,
        9540.606633304236,
        -2710.55326746645,
        1405.483844121726,
        22.5,
      ],
      [
        -3.218135878613132e-4,
        111320.7020701615,
        0.00369383431289,
        823725.6402795718,
        0.46104986909093,
        2351.343141331292,
        1.58060784298199,
        8.77738589078284,
        0.37238884252424,
        7.45,
      ],
    ],
    F3: function(a, b) {
      if (!a || !b) return 0;
      var c,
        e,
        a = this.hc(a);
      if (!a) return 0;
      c = this.el(a.lng);
      e = this.el(a.lat);
      b = this.hc(b);
      return !b ? 0 : this.Md(c, this.el(b.lng), e, this.el(b.lat));
    },
    Ek: function(a, b) {
      if (!a || !b) return 0;
      a.lng = this.JD(a.lng, -180, 180);
      a.lat = this.OD(a.lat, -74, 74);
      b.lng = this.JD(b.lng, -180, 180);
      b.lat = this.OD(b.lat, -74, 74);
      return this.Md(
        this.el(a.lng),
        this.el(b.lng),
        this.el(a.lat),
        this.el(b.lat)
      );
    },
    hc: function(a) {
      if (a === q || a === l) return new J(0, 0);
      var b, c;
      b = new J(Math.abs(a.lng), Math.abs(a.lat));
      for (var e = 0; e < this.yG.length; e++)
        if (b.lat >= this.yG[e]) {
          c = this.uP[e];
          break;
        }
      a = this.sK(a, c);
      return (a = new J(a.lng, a.lat));
    },
    Ya: function(a) {
      if (
        a === q ||
        a === l ||
        180 < a.lng ||
        -180 > a.lng ||
        90 < a.lat ||
        -90 > a.lat
      )
        return new J(0, 0);
      var b, c;
      a.lng = this.JD(a.lng, -180, 180);
      a.lat = this.OD(a.lat, -85, 85);
      b = new J(a.lng, a.lat);
      for (var e = 0; e < this.Ku.length; e++)
        if (b.lat >= this.Ku[e]) {
          c = this.vG[e];
          break;
        }
      if (!c)
        for (e = 0; e < this.Ku.length; e++)
          if (b.lat <= -this.Ku[e]) {
            c = this.vG[e];
            break;
          }
      a = this.sK(a, c);
      return (a = new J(a.lng, a.lat));
    },
    sK: function(a, b) {
      if (a && b) {
        var c = b[0] + b[1] * Math.abs(a.lng),
          e = Math.abs(a.lat) / b[9],
          e =
            b[2] +
            b[3] * e +
            b[4] * e * e +
            b[5] * e * e * e +
            b[6] * e * e * e * e +
            b[7] * e * e * e * e * e +
            b[8] * e * e * e * e * e * e,
          c = c * (0 > a.lng ? -1 : 1),
          e = e * (0 > a.lat ? -1 : 1);
        return new J(c, e);
      }
    },
    Md: function(a, b, c, e) {
      return (
        this.oP *
        Math.acos(
          Math.sin(c) * Math.sin(e) +
            Math.cos(c) * Math.cos(e) * Math.cos(b - a)
        )
      );
    },
    el: function(a) {
      return (Math.PI * a) / 180;
    },
    i6: function(a) {
      return (180 * a) / Math.PI;
    },
    OD: function(a, b, c) {
      b != q && (a = Math.max(a, b));
      c != q && (a = Math.min(a, c));
      return a;
    },
    JD: function(a, b, c) {
      for (; a > c; ) a -= c - b;
      for (; a < b; ) a += c - b;
      return a;
    },
  });
  A.extend(T.prototype, {
    ri: function(a) {
      return T.Ya(a);
    },
    Hg: function(a) {
      a = T.Ya(a);
      return new R(a.lng, a.lat);
    },
    xh: function(a) {
      return T.hc(a);
    },
    Dj: function(a) {
      a = new J(a.x, a.y);
      a = T.hc(a);
      return new Q(a.lng, a.lat);
    },
    Ac: function(a, b, c, e, f) {
      if (a)
        return (
          (a = this.ri(a, f)),
          (b = this.$b(b)),
          new R(
            Math.round((a.lng - c.lng) / b + e.width / 2),
            Math.round((c.lat - a.lat) / b + e.height / 2)
          )
        );
    },
    eZ: function(a, b, c, e) {
      if (a)
        return (
          (b = this.$b(b)),
          new R(
            Math.round((a.lng - c.lng) / b + e.width / 2),
            Math.round((c.lat - a.lat) / b + e.height / 2)
          )
        );
    },
    bc: function(a, b, c, e, f) {
      if (a)
        return (
          (b = this.$b(b)),
          this.xh(
            new J(
              c.lng + b * (a.x - e.width / 2),
              c.lat - b * (a.y - e.height / 2)
            ),
            f
          )
        );
    },
    $b: function(a) {
      return Math.pow(2, 18 - a);
    },
    TN: ca("Ma"),
  });

  function kb() {
    this.kj = "bj";
  }
  kb.prototype = new T();
  A.extend(kb.prototype, {
    ri: function(a, b) {
      return this.FQ(b, T.Ya(a));
    },
    xh: function(a, b) {
      return T.hc(this.GQ(b, a));
    },
    lngLatToPointFor3D: function(a, b) {
      var c = this,
        e = T.Ya(a);
      Ua.load(
        "coordtrans",
        function() {
          var a = Tc.MD(c.kj || "bj", e),
            a = new R(a.x, a.y);
          b && b(a);
        },
        p
      );
    },
    pointToLngLatFor3D: function(a, b) {
      var c = this,
        e = new Q(a.x, a.y);
      Ua.load(
        "coordtrans",
        function() {
          var a = Tc.KD(c.kj || "bj", e),
            a = new Q(a.lng, a.lat),
            a = T.hc(a);
          b && b(a);
        },
        p
      );
    },
    FQ: function(a, b) {
      if (Ua.qb("coordtrans").Se == Ua.Lj.oq) {
        var c = Tc.MD(a || "bj", b);
        return new Q(c.x, c.y);
      }
      Ua.load("coordtrans", u());
      return new Q(0, 0);
    },
    GQ: function(a, b) {
      if (Ua.qb("coordtrans").Se == Ua.Lj.oq) {
        var c = Tc.KD(a || "bj", b);
        return new Q(c.lng, c.lat);
      }
      Ua.load("coordtrans", u());
      return new Q(0, 0);
    },
    $b: function(a) {
      return Math.pow(2, 20 - a);
    },
    TN: ca("Ma"),
  });

  function Vc() {
    this.Nb = "overlay";
  }
  A.lang.xa(Vc, A.lang.Ja, "Overlay");
  Vc.Kk = function(a) {
    a *= 1;
    return !a ? 0 : (-1e5 * a) << 1;
  };
  A.extend(Vc.prototype, {
    Me: function(a) {
      if (!this.ca && ab(this.initialize) && (this.ca = this.initialize(a)))
        this.ca.style.WebkitUserSelect = "none";
      this.draw();
    },
    initialize: function() {
      ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    draw: function() {
      ba("draw\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    remove: function() {
      this.ca && this.ca.parentNode && this.ca.parentNode.removeChild(this.ca);
      this.ca = q;
      this.dispatchEvent(new P("onremove"));
    },
    aa: function() {
      this.ca && A.U.aa(this.ca);
    },
    show: function() {
      this.ca && A.U.show(this.ca);
    },
    Tc: function() {
      return !this.ca ||
        "none" == this.ca.style.display ||
        "hidden" == this.ca.style.visibility
        ? t
        : p;
    },
  });
  D.df(function(a) {
    function b(a, b) {
      var c = L("div"),
        i = c.style;
      i.position = "absolute";
      i.top = i.left = i.width = i.height = "0";
      i.zIndex = b;
      a.appendChild(c);
      return c;
    }
    var c = a.ba;
    c.Vc = a.Vc = b(a.platform, 200);
    a.be.oD = b(c.Vc, 800);
    a.be.DE = b(c.Vc, 700);
    a.be.bL = b(c.Vc, 600);
    a.be.vE = b(c.Vc, 500);
    a.be.NM = b(c.Vc, 400);
    a.be.OM = b(c.Vc, 300);
    a.be.UO = b(c.Vc, 201);
    a.be.Ft = b(c.Vc, 200);
  });

  function jb() {
    A.lang.Ja.call(this);
    Vc.call(this);
    this.map = q;
    this.Wa = p;
    this.Fb = q;
    this.kH = 0;
  }
  A.lang.xa(jb, Vc, "OverlayInternal");
  A.extend(jb.prototype, {
    initialize: function(a) {
      this.map = a;
      A.lang.Ja.call(this, this.da);
      return q;
    },
    qx: x("map"),
    draw: u(),
    Nj: u(),
    remove: function() {
      this.map = q;
      A.lang.Xw(this.da);
      Vc.prototype.remove.call(this);
    },
    aa: function() {
      this.Wa !== t && (this.Wa = t);
    },
    show: function() {
      this.Wa !== p && (this.Wa = p);
    },
    Tc: function() {
      return !this.ca ? t : !!this.Wa;
    },
    Ta: x("ca"),
    SN: function(a) {
      var a = a || {},
        b;
      for (b in a) this.K[b] = a[b];
    },
    bq: ca("zIndex"),
    pj: function() {
      this.K.pj = p;
    },
    hW: function() {
      this.K.pj = t;
    },
    bm: ca("og"),
    Op: function() {
      this.og = q;
    },
  });

  function Wc() {
    this.map = q;
    this.ta = {};
    this.Je = [];
  }
  D.df(function(a) {
    var b = new Wc();
    b.map = a;
    a.ta = b.ta;
    a.Je = b.Je;
    a.addEventListener("load", function(a) {
      b.draw(a);
    });
    a.addEventListener("moveend", function(a) {
      b.draw(a);
    });
    (A.ga.oa && 8 > A.ga.oa) || "BackCompat" === document.compatMode
      ? a.addEventListener("zoomend", function(a) {
          setTimeout(function() {
            b.draw(a);
          }, 20);
        })
      : a.addEventListener("zoomend", function(a) {
          b.draw(a);
        });
    a.addEventListener("maptypechange", function(a) {
      b.draw(a);
    });
    a.addEventListener("addoverlay", function(a) {
      a = a.target;
      if (a instanceof jb) b.ta[a.da] || (b.ta[a.da] = a);
      else {
        for (var e = t, f = 0, g = b.Je.length; f < g; f++)
          if (b.Je[f] === a) {
            e = p;
            break;
          }
        e || b.Je.push(a);
      }
    });
    a.addEventListener("removeoverlay", function(a) {
      a = a.target;
      if (a instanceof jb) delete b.ta[a.da];
      else
        for (var e = 0, f = b.Je.length; e < f; e++)
          if (b.Je[e] === a) {
            b.Je.splice(e, 1);
            break;
          }
    });
    a.addEventListener("clearoverlays", function() {
      this.Lc();
      for (var a in b.ta) b.ta[a].K.pj && (b.ta[a].remove(), delete b.ta[a]);
      a = 0;
      for (var e = b.Je.length; a < e; a++)
        b.Je[a].enableMassClear !== t &&
          (b.Je[a].remove(), (b.Je[a] = q), b.Je.splice(a, 1), a--, e--);
    });
    a.addEventListener("infowindowopen", function() {
      var a = this.Fb;
      a && (A.U.aa(a.Bc), A.U.aa(a.cc));
    });
    a.addEventListener("movestart", function() {
      this.qh() && this.qh().ZI();
    });
    a.addEventListener("moveend", function() {
      this.qh() && this.qh().NI();
    });
  });
  Wc.prototype.draw = function(a) {
    if (D.rq) {
      var b = D.rq.Ws(this.map);
      "canvas" === b.Nb && b.canvas && b.AQ(b.canvas.getContext("2d"));
    }
    for (var c in this.ta) this.ta[c].draw(a);
    A.nc.Pb(this.Je, function(a) {
      a.draw();
    });
    this.map.ba.tb && this.map.ba.tb.va();
    D.rq && b.qF();
  };

  function Xc(a) {
    jb.call(this);
    a = a || {};
    this.K = {
      strokeColor: a.strokeColor || "#3a6bdb",
      rc: a.strokeWeight || 5,
      zd: a.strokeOpacity || 0.65,
      strokeStyle: a.strokeStyle || "solid",
      pj: a.enableMassClear === t ? t : p,
      Hk: q,
      Cm: q,
      pf: a.enableEditing === p ? p : t,
      SM: 5,
      K0: t,
      mf: a.enableClicking === t ? t : p,
      oi: a.icons && 0 < a.icons.length ? a.icons : q,
      cX: a.geodesic === p ? p : t,
      zE: a.linkRight === p ? p : t,
    };
    0 >= this.K.rc && (this.K.rc = 5);
    if (0 > this.K.zd || 1 < this.K.zd) this.K.zd = 0.65;
    if (0 > this.K.zg || 1 < this.K.zg) this.K.zg = 0.65;
    "solid" != this.K.strokeStyle &&
      "dashed" != this.K.strokeStyle &&
      (this.K.strokeStyle = "solid");
    this.ca = q;
    this.Su = new ib(0, 0);
    this.kf = [];
    this.tc = [];
    this.Xa = {};
  }
  A.lang.xa(Xc, jb, "Graph");
  Xc.mx = function(a) {
    var b = [];
    if (!a) return b;
    cb(a) &&
      A.nc.Pb(a.split(";"), function(a) {
        a = a.split(",");
        b.push(new Q(a[0], a[1]));
      });
    "[object Array]" == Object.prototype.toString.apply(a) &&
      0 < a.length &&
      (b = a);
    return b;
  };
  Xc.OE = [0.09, 0.005, 1.0e-4, 1.0e-5];
  A.extend(Xc.prototype, {
    initialize: function(a) {
      this.map = a;
      return q;
    },
    draw: u(),
    Mr: function(a) {
      this.kf.length = 0;
      this.la = Xc.mx(a).slice(0);
      this.Hh();
    },
    re: function(a) {
      this.Mr(a);
    },
    Hh: function() {
      if (this.la) {
        var a = this;
        a.Su = new ib();
        A.nc.Pb(this.la, function(b) {
          a.Su.extend(b);
        });
      }
    },
    $e: x("la"),
    jn: function(a, b) {
      b &&
        this.la[a] &&
        ((this.kf.length = 0), (this.la[a] = new Q(b.lng, b.lat)), this.Hh());
    },
    setStrokeColor: function(a) {
      this.K.strokeColor = a;
    },
    UX: function() {
      return this.K.strokeColor;
    },
    aq: function(a) {
      0 < a && (this.K.rc = a);
    },
    FL: function() {
      return this.K.rc;
    },
    Zp: function(a) {
      a == l || (1 < a || 0 > a) || (this.K.zd = a);
    },
    VX: function() {
      return this.K.zd;
    },
    Zt: function(a) {
      1 < a || 0 > a || (this.K.zg = a);
    },
    pX: function() {
      return this.K.zg;
    },
    $p: function(a) {
      ("solid" != a && "dashed" != a) || (this.K.strokeStyle = a);
    },
    EL: function() {
      return this.K.strokeStyle;
    },
    setFillColor: function(a) {
      this.K.fillColor = a || "";
    },
    oX: function() {
      return this.K.fillColor;
    },
    ke: x("Su"),
    remove: function() {
      this.map && this.map.removeEventListener("onmousemove", this.uv);
      jb.prototype.remove.call(this);
      this.kf.length = 0;
    },
    pf: function() {
      if (!(2 > this.la.length)) {
        this.K.pf = p;
        var a = this;
        Ua.load(
          "poly",
          function() {
            a.dm();
          },
          p
        );
      }
    },
    gW: function() {
      this.K.pf = t;
      var a = this;
      Ua.load(
        "poly",
        function() {
          a.uk();
        },
        p
      );
    },
    lX: function() {
      return this.K.pf;
    },
    sX: function() {
      for (var a = [], b = 0; b < this.la.length - 1; b++)
        var c = this.jV(this.la[b], this.la[b + 1]), a = a.concat(c);
      return (a = a.concat(this.la[this.la.length - 1]));
    },
    jV: function(a, b) {
      if (a.Ub(b)) return [a];
      var c = T.Md(U(a.lng), U(a.lat), U(b.lng), U(b.lat)),
        c = T.Ek(a, b);
      if (25e4 > c) return [a];
      var e = [],
        c = Math.round(c / 15e4),
        f = this.cK(a, b);
      e.push(a);
      for (var g = 0; g < c; g++) {
        var i = this.dK(a, b, g / c, f);
        e.push(i);
      }
      e.push(b);
      return e;
    },
    dK: function(a, b, c, e) {
      var f = U(a.lat),
        g = U(b.lat),
        a = U(a.lng),
        i = U(b.lng),
        b = Math.sin((1 - c) * e) / Math.sin(e),
        c = Math.sin(c * e) / Math.sin(e),
        e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i),
        a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
      return new Q(
        180 * (Math.atan2(a, e) / Math.PI),
        180 *
          (Math.atan2(
            b * Math.sin(f) + c * Math.sin(g),
            Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2))
          ) /
            Math.PI)
      );
    },
    cK: function(a, b) {
      var c = U(a.lat),
        e = U(b.lat);
      return Math.acos(
        Math.sin(c) * Math.sin(e) +
          Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(U(b.lng) - U(a.lng)))
      );
    },
  });

  function Zc(a) {
    jb.call(this);
    this.ca = this.map = q;
    this.K = {
      width: 0,
      height: 0,
      Ga: new N(0, 0),
      opacity: 1,
      background: "transparent",
      Ux: 1,
      AM: "#000",
      WY: "solid",
      point: q,
    };
    this.SN(a);
    this.point = this.K.point;
  }
  A.lang.xa(Zc, jb, "Division");
  A.extend(Zc.prototype, {
    Nj: function() {
      var a = this.K,
        b = this.content,
        c = ['<div class="BMap_Division" style="position:absolute;'];
      c.push("width:" + a.width + "px;display:block;");
      c.push("overflow:hidden;");
      "none" != a.borderColor &&
        c.push("border:" + a.Ux + "px " + a.WY + " " + a.AM + ";");
      c.push(
        "opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")"
      );
      c.push("background:" + a.background + ";");
      c.push('z-index:60;">');
      c.push(b);
      c.push("</div>");
      this.ca = Eb(this.map.Wf().DE, c.join(""));
    },
    initialize: function(a) {
      this.map = a;
      this.Nj();
      this.ca &&
        A.V(this.ca, I() ? "touchstart" : "mousedown", function(a) {
          na(a);
        });
      return this.ca;
    },
    draw: function() {
      var a = this.map.cf(this.K.point);
      this.K.Ga = new N(
        -Math.round(this.K.width / 2) - Math.round(this.K.Ux),
        -Math.round(this.K.height / 2) - Math.round(this.K.Ux)
      );
      this.ca.style.left = a.x + this.K.Ga.width + "px";
      this.ca.style.top = a.y + this.K.Ga.height + "px";
    },
    na: function() {
      return this.K.point;
    },
    T1: function() {
      return this.map.mo(this.na());
    },
    va: function(a) {
      this.K.point = a;
      this.draw();
    },
    u_: function(a, b) {
      this.K.width = Math.round(a);
      this.K.height = Math.round(b);
      this.ca &&
        ((this.ca.style.width = this.K.width + "px"),
        (this.ca.style.height = this.K.height + "px"),
        this.draw());
    },
  });

  function $c(a, b, c) {
    a &&
      b &&
      ((this.imageUrl = a),
      (this.size = b),
      (a = new N(Math.floor(b.width / 2), Math.floor(b.height / 2))),
      (c = c || {}),
      (a = c.anchor || a),
      (b = c.imageOffset || new N(0, 0)),
      (this.imageSize = c.imageSize),
      (this.anchor = a),
      (this.imageOffset = b),
      (this.infoWindowAnchor = c.infoWindowAnchor || this.anchor),
      (this.printImageUrl = c.printImageUrl || ""));
  }
  A.extend($c.prototype, {
    UN: function(a) {
      a && (this.imageUrl = a);
    },
    L_: function(a) {
      a && (this.printImageUrl = a);
    },
    He: function(a) {
      a && (this.size = new N(a.width, a.height));
    },
    uc: function(a) {
      a && (this.anchor = new N(a.width, a.height));
    },
    $t: function(a) {
      a && (this.imageOffset = new N(a.width, a.height));
    },
    z_: function(a) {
      a && (this.infoWindowAnchor = new N(a.width, a.height));
    },
    w_: function(a) {
      a && (this.imageSize = new N(a.width, a.height));
    },
    toString: ea("Icon"),
  });

  function ad(a, b) {
    if (a) {
      b = b || {};
      this.style = {
        anchor: b.anchor || new N(0, 0),
        fillColor: b.fillColor || "#000",
        zg: b.fillOpacity || 0,
        scale: b.scale || 1,
        rotation: b.rotation || 0,
        strokeColor: b.strokeColor || "#000",
        zd: b.strokeOpacity || 1,
        rc: b.strokeWeight,
      };
      this.Nb = "number" === typeof a ? a : "UserDefined";
      this.Mi = this.style.anchor;
      this.tr = new N(0, 0);
      this.anchor = q;
      this.iB = a;
      var c = this;
      Ua.load(
        "symbol",
        function() {
          c.Ln();
        },
        p
      );
    }
  }
  A.extend(ad.prototype, {
    setPath: ca("iB"),
    setAnchor: function(a) {
      this.Mi = this.style.anchor = a;
    },
    setRotation: function(a) {
      this.style.rotation = a;
    },
    setScale: function(a) {
      this.style.scale = a;
    },
    setStrokeWeight: function(a) {
      this.style.rc = a;
    },
    setStrokeColor: function(a) {
      a = A.js.rC(a, this.style.zd);
      this.style.strokeColor = a;
    },
    setStrokeOpacity: function(a) {
      this.style.zd = a;
    },
    setFillOpacity: function(a) {
      this.style.zg = a;
    },
    setFillColor: function(a) {
      this.style.fillColor = a;
    },
  });

  function bd(a, b, c, e) {
    a &&
      ((this.Mv = {}),
      (this.$K = e ? !!e : t),
      (this.$c = []),
      (this.d0 = a instanceof ad ? a : q),
      (this.EI = b === l ? p : !!(b.indexOf("%") + 1)),
      (this.ik = isNaN(parseFloat(b))
        ? 1
        : this.EI
        ? parseFloat(b) / 100
        : parseFloat(b)),
      (this.FI = !!(c.indexOf("%") + 1)),
      (this.repeat =
        c != l ? (this.FI ? parseFloat(c) / 100 : parseFloat(c)) : 0));
  }

  function cd(a, b) {
    A.lang.Ja.call(this);
    this.content = a;
    this.map = q;
    b = b || {};
    this.K = {
      width: b.width || 0,
      height: b.height || 0,
      maxWidth: b.maxWidth || 730,
      Ga: b.offset || new N(0, 0),
      title: b.title || "",
      FE: b.maxContent || "",
      oh: b.enableMaximize || t,
      Ls: b.enableAutoPan === t ? t : p,
      YC: b.enableCloseOnClick === t ? t : p,
      margin: b.margin || [10, 10, 40, 10],
      nC: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
      pY: t,
      uZ: b.onClosing || ea(p),
      TK: t,
      cD: b.enableParano === p ? p : t,
      message: b.message,
      fD: b.enableSearchTool === p ? p : t,
      Dx: b.headerContent || "",
      ZC: b.enableContentScroll || t,
    };
    if (
      0 != this.K.width &&
      (220 > this.K.width && (this.K.width = 220), 730 < this.K.width)
    )
      this.K.width = 730;
    if (
      0 != this.K.height &&
      (60 > this.K.height && (this.K.height = 60), 650 < this.K.height)
    )
      this.K.height = 650;
    if (
      0 != this.K.maxWidth &&
      (220 > this.K.maxWidth && (this.K.maxWidth = 220), 730 < this.K.maxWidth)
    )
      this.K.maxWidth = 730;
    this.le = t;
    this.Hi = H.ua;
    this.ub = q;
    var c = this;
    Ua.load("infowindow", function() {
      c.ob();
    });
  }
  A.lang.xa(cd, A.lang.Ja, "InfoWindow");
  A.extend(cd.prototype, {
    setWidth: function(a) {
      (!a && 0 != a) ||
        (isNaN(a) || 0 > a) ||
        (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)),
        (this.K.width = a));
    },
    setHeight: function(a) {
      (!a && 0 != a) ||
        (isNaN(a) || 0 > a) ||
        (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)),
        (this.K.height = a));
    },
    YN: function(a) {
      (!a && 0 != a) ||
        (isNaN(a) || 0 > a) ||
        (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)),
        (this.K.maxWidth = a));
    },
    Gc: function(a) {
      this.K.title = a;
    },
    getTitle: function() {
      return this.K.title;
    },
    Oc: ca("content"),
    Dk: x("content"),
    bu: function(a) {
      this.K.FE = a + "";
    },
    qe: u(),
    Ls: function() {
      this.K.Ls = p;
    },
    disableAutoPan: function() {
      this.K.Ls = t;
    },
    enableCloseOnClick: function() {
      this.K.YC = p;
    },
    disableCloseOnClick: function() {
      this.K.YC = t;
    },
    oh: function() {
      this.K.oh = p;
    },
    Zw: function() {
      this.K.oh = t;
    },
    show: function() {
      this.Wa = p;
    },
    aa: function() {
      this.Wa = t;
    },
    close: function() {
      this.aa();
    },
    Yx: function() {
      this.le = p;
    },
    restore: function() {
      this.le = t;
    },
    Tc: function() {
      return this.eb();
    },
    eb: ea(t),
    na: function() {
      if (this.ub && this.ub.na) return this.ub.na();
    },
    rj: function() {
      return this.K.Ga;
    },
  });
  Na.prototype.Uc = function(a, b) {
    if (a instanceof cd && (b instanceof Q || b instanceof J)) {
      var c = this.ba;
      c.Om
        ? c.Om.va(b)
        : ((c.Om = new W(b, {
            icon: new $c(H.ua + "blank.gif", {
              width: 1,
              height: 1,
            }),
            offset: new N(0, 0),
            clickable: t,
          })),
          (c.Om.AR = 1));
      this.Ra(c.Om);
      c.Om.Uc(a);
    }
  };
  Na.prototype.Lc = function() {
    var a = this.ba.tb || this.ba.yl;
    a && a.ub && a.ub.Lc();
  };
  jb.prototype.Uc = function(a) {
    this.map &&
      (this.map.Lc(),
      (a.Wa = p),
      (this.map.ba.yl = a),
      (a.ub = this),
      A.lang.Ja.call(a, a.da));
  };
  jb.prototype.Lc = function() {
    this.map &&
      this.map.ba.yl &&
      ((this.map.ba.yl.Wa = t),
      A.lang.Xw(this.map.ba.yl.da),
      (this.map.ba.yl = q));
  };

  function dd(a, b) {
    jb.call(this);
    this.content = a;
    this.ca = this.map = q;
    b = b || {};
    this.K = {
      width: 0,
      Ga: b.offset || new N(0, 0),
      gq: {
        backgroundColor: "#fff",
        border: "1px solid #f00",
        padding: "1px",
        whiteSpace: "nowrap",
        font: "12px " + H.fontFamily,
        zIndex: "80",
        MozUserSelect: "none",
      },
      position: b.position || q,
      pj: b.enableMassClear === t ? t : p,
      mf: p,
      left: b.left === p ? p : t,
      right: b.right === p ? p : t,
    };
    0 > this.K.width && (this.K.width = 0);
    Kb(b.enableClicking) && (this.K.mf = b.enableClicking);
    this.point = this.K.position;
    var c = this;
    Ua.load("marker", function() {
      c.ob();
    });
  }
  A.lang.xa(dd, jb, "Label");
  A.extend(dd.prototype, {
    na: function() {
      return this.fo
        ? this.fo.na()
        : this.map
        ? db(this.point, this.map.M.Ma)
        : this.point;
    },
    $j: function() {
      return this.fo ? this.fo.$j() : this.point;
    },
    va: function(a) {
      if ((a instanceof Q || a instanceof J) && !this.sx())
        this.point = this.K.position = new Q(a.lng, a.lat);
    },
    Oc: ca("content"),
    pF: function(a) {
      0 <= a && 1 >= a && (this.K.opacity = a);
    },
    Rd: function(a) {
      a instanceof N && (this.K.Ga = new N(a.width, a.height));
    },
    rj: function() {
      return this.K.Ga;
    },
    Sd: function(a) {
      a = a || {};
      this.K.gq = A.extend(this.K.gq, a);
    },
    Ci: function(a) {
      return this.Sd(a);
    },
    Gc: function(a) {
      this.K.title = a || "";
    },
    getTitle: function() {
      return this.K.title;
    },
    XN: function(a) {
      this.point = (this.fo = a)
        ? (this.K.position = a.$j())
        : (this.K.position = q);
    },
    sx: function() {
      return this.fo || q;
    },
    Dk: x("content"),
  });

  function ed(a, b) {
    if (0 !== arguments.length) {
      jb.apply(this, arguments);
      b = b || {};
      this.K = {
        jb: a,
        opacity: b.opacity || 1,
        xp: b.imageURL || "",
        Cs: b.displayOnMinLevel || 1,
        pj: b.enableMassClear === t ? t : p,
        Bs: b.displayOnMaxLevel || 19,
        Y_: b.stretch || t,
      };
      0 === b.opacity && (this.K.opacity = 0);
      var c = this;
      Ua.load("groundoverlay", function() {
        c.ob();
      });
    }
  }
  A.lang.xa(ed, jb, "GroundOverlay");
  A.extend(ed.prototype, {
    setBounds: function(a) {
      this.K.jb = a;
    },
    getBounds: function() {
      return this.K.jb;
    },
    setOpacity: function(a) {
      this.K.opacity = a;
    },
    getOpacity: function() {
      return this.K.opacity;
    },
    setImageURL: function(a) {
      this.K.xp = a;
    },
    getImageURL: function() {
      return this.K.xp;
    },
    setDisplayOnMinLevel: function(a) {
      this.K.Cs = a;
    },
    getDisplayOnMinLevel: function() {
      return this.K.Cs;
    },
    setDisplayOnMaxLevel: function(a) {
      this.K.Bs = a;
    },
    getDisplayOnMaxLevel: function() {
      return this.K.Bs;
    },
  });
  var fd = 3,
    gd = 4;

  function hd() {
    var a = document.createElement("canvas");
    return !(!a.getContext || !a.getContext("2d"));
  }

  function id(a, b) {
    var c = this;
    hd() &&
      (a === l && ba(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
      "[object Array]" !== Object.prototype.toString.call(a) &&
        ba(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
      (b = b || {}),
      jb.apply(c, arguments),
      (c.ia = {
        la: a,
      }),
      (c.K = {
        shape: b.shape || fd,
        size: b.size || gd,
        color: b.color || "#fa937e",
        pj: p,
      }),
      (this.fB = []),
      (this.ue = []),
      Ua.load("pointcollection", function() {
        for (var a = 0, b; (b = c.fB[a]); a++)
          c[b.method].apply(c, b.arguments);
        for (a = 0; (b = c.ue[a]); a++) c[b.method].apply(c, b.arguments);
      }));
  }
  A.lang.xa(id, jb, "PointCollection");
  A.extend(id.prototype, {
    initialize: function(a) {
      this.fB &&
        this.fB.push({
          method: "initialize",
          arguments: arguments,
        });
    },
    setPoints: function(a) {
      this.ue &&
        this.ue.push({
          method: "setPoints",
          arguments: arguments,
        });
    },
    setStyles: function(a) {
      this.ue &&
        this.ue.push({
          method: "setStyles",
          arguments: arguments,
        });
    },
    clear: function() {
      this.ue &&
        this.ue.push({
          method: "clear",
          arguments: arguments,
        });
    },
    remove: function() {
      this.ue &&
        this.ue.push({
          method: "remove",
          arguments: arguments,
        });
    },
  });
  var jd = new $c(H.ua + "marker_red_sprite.png", new N(19, 25), {
      anchor: new N(10, 25),
      infoWindowAnchor: new N(10, 0),
    }),
    kd = new $c(H.ua + "marker_red_sprite.png", new N(20, 11), {
      anchor: new N(6, 11),
      imageOffset: new N(-19, -13),
    });

  function W(a, b) {
    jb.call(this);
    b = b || {};
    this.point = a;
    this.Ma = (this.Dq = this.map = q) ? this.map.M.Ma : 5;
    this.K = {
      Ga: b.offset || new N(0, 0),
      Be: b.icon || jd,
      Yk: kd,
      title: b.title || "",
      label: q,
      YJ: b.baseZIndex || 0,
      mf: p,
      I6: t,
      rE: t,
      pj: b.enableMassClear === t ? t : p,
      jc: t,
      BN: b.raiseOnDrag === p ? p : t,
      IN: t,
      Kd: b.draggingCursor || H.Kd,
      rotation: b.rotation || 0,
      left: b.left === p ? p : t,
      right: b.right === p ? p : t,
    };
    b.icon && !b.shadow && (this.K.Yk = q);
    b.enableDragging && (this.K.jc = b.enableDragging);
    Kb(b.enableClicking) && (this.K.mf = b.enableClicking);
    var c = this;
    Ua.load("marker", function() {
      c.ob();
    });
  }
  W.Nu = Vc.Kk(-90) + 1e6;
  W.pG = W.Nu + 1e6;
  A.lang.xa(W, jb, "Marker");
  A.extend(W.prototype, {
    Wb: function(a) {
      if (a instanceof $c || a instanceof ad) this.K.Be = a;
    },
    kp: function() {
      return this.K.Be;
    },
    Dy: function(a) {
      a instanceof $c && (this.K.Yk = a);
    },
    getShadow: function() {
      return this.K.Yk;
    },
    Ej: function(a) {
      this.K.label = a || q;
    },
    Xs: function() {
      return this.K.label;
    },
    jc: function() {
      this.K.jc = p;
    },
    As: function() {
      this.K.jc = t;
    },
    $j: x("point"),
    na: function() {
      return this.point instanceof Q || this.point instanceof J
        ? this.map
          ? db(this.point, this.map.M.Ma)
          : new Q(this.point.lng, this.point.lat)
        : this.point;
    },
    va: function(a) {
      if (a instanceof Q || a instanceof J)
        this.point = this.map ? Za(a, this.map.M.Ma) : new J(a.lng, a.lat);
    },
    Di: function(a, b) {
      this.K.rE = !!a;
      a && (this.NG = b || 0);
    },
    Gc: function(a) {
      this.K.title = a + "";
    },
    getTitle: function() {
      return this.K.title;
    },
    Rd: function(a) {
      a instanceof N && (this.K.Ga = a);
    },
    rj: function() {
      return this.K.Ga;
    },
    dn: ca("Dq"),
    Yp: function(a) {
      this.K.rotation = a;
    },
    CL: function() {
      return this.K.rotation;
    },
  });

  function ld(a) {
    this.options = a || {};
    this.yZ = this.options.paneName || "labelPane";
    this.zIndex = this.options.zIndex || 0;
    this.GV = this.options.contextType || "2d";
  }
  ld.prototype = new Vc();
  ld.prototype.initialize = function(a) {
    this.P = a;
    var b = (this.canvas = document.createElement("canvas")),
      c = this.canvas.getContext(this.GV);
    b.style.cssText =
      "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
    md(this);
    nd(c);
    a.getPanes()[this.yZ].appendChild(b);
    var e = this;
    a.addEventListener("resize", function() {
      md(e);
      nd(c);
      e.ob();
    });
    return this.canvas;
  };

  function md(a) {
    var b = a.P.yb(),
      a = a.canvas;
    a.width = b.width;
    a.height = b.height;
    a.style.width = a.width + "px";
    a.style.height = a.height + "px";
  }

  function nd(a) {
    var b =
        (window.devicePixelRatio || 1) /
        (a.TU || a.D6 || a.a5 || a.b5 || a.f5 || a.TU || 1),
      c = a.canvas.width,
      e = a.canvas.height;
    a.canvas.width = c * b;
    a.canvas.height = e * b;
    a.canvas.style.width = c + "px";
    a.canvas.style.height = e + "px";
    a.scale(b, b);
  }
  ld.prototype.draw = function() {
    var a = this,
      b = arguments;
    clearTimeout(a.m0);
    a.m0 = setTimeout(function() {
      a.ob.apply(a, b);
    }, 15);
  };
  fa = ld.prototype;
  fa.ob = function() {
    var a = this.P;
    this.canvas.style.left = -a.offsetX + "px";
    this.canvas.style.top = -a.offsetY + "px";
    this.dispatchEvent("draw");
    this.options.update && this.options.update.apply(this, arguments);
  };
  fa.Ta = x("canvas");
  fa.show = function() {
    this.canvas || this.P.Ra(this);
    this.canvas.style.display = "block";
  };
  fa.aa = function() {
    this.canvas.style.display = "none";
  };
  fa.bq = function(a) {
    this.canvas.style.zIndex = a;
  };
  fa.Kk = x("zIndex");

  function od(a, b) {
    Xc.call(this, b);
    b = b || {};
    this.K.zg = b.fillOpacity ? b.fillOpacity : 0.65;
    this.K.fillColor =
      "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
    this.re(a);
    var c = this;
    Ua.load("poly", function() {
      c.ob();
    });
  }
  A.lang.xa(od, Xc, "Polygon");
  A.extend(od.prototype, {
    re: function(a, b) {
      this.zo = Xc.mx(a).slice(0);
      var c = Xc.mx(a).slice(0);
      1 < c.length && c.push(new Q(c[0].lng, c[0].lat));
      Xc.prototype.re.call(this, c, b);
    },
    jn: function(a, b) {
      this.zo[a] &&
        ((this.zo[a] = new Q(b.lng, b.lat)),
        (this.la[a] = new Q(b.lng, b.lat)),
        0 == a &&
          !this.la[0].Ub(this.la[this.la.length - 1]) &&
          (this.la[this.la.length - 1] = new Q(b.lng, b.lat)),
        this.Hh());
    },
    $e: function() {
      var a = this.zo;
      0 == a.length && (a = this.la);
      return a;
    },
  });

  function pd(a, b) {
    Xc.call(this, b);
    this.Mr(a);
    var c = this;
    Ua.load("poly", function() {
      c.ob();
    });
  }
  A.lang.xa(pd, Xc, "Polyline");

  function qd(a, b, c) {
    this.point = a;
    this.Fa = Math.abs(b);
    od.call(this, [], c);
  }
  qd.OE = [0.01, 1.0e-4, 1.0e-5, 4.0e-6];
  A.lang.xa(qd, od, "Circle");
  A.extend(qd.prototype, {
    initialize: function(a) {
      this.map = a;
      this.la = this.ov(this.point, this.Fa);
      this.Hh();
      return q;
    },
    Qb: function() {
      return this.map ? db(this.point, this.map.M.Ma) : this.point;
    },
    lv: x("point"),
    zf: function(a) {
      a && (this.point = a);
    },
    AL: x("Fa"),
    Af: function(a) {
      this.Fa = Math.abs(a);
    },
    ov: function(a, b) {
      if (!a || !b || !this.map) return [];
      for (
        var c = [],
          e = b / 6378800,
          f = (Math.PI / 180) * a.lat,
          g = (Math.PI / 180) * a.lng,
          i = 0;
        360 > i;
        i += 9
      ) {
        var k = (Math.PI / 180) * i,
          m = Math.asin(
            Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)
          ),
          k = new Q(
            (((g -
              Math.atan2(
                Math.sin(k) * Math.sin(e) * Math.cos(f),
                Math.cos(e) - Math.sin(f) * Math.sin(m)
              ) +
              Math.PI) %
              (2 * Math.PI)) -
              Math.PI) *
              (180 / Math.PI),
            m * (180 / Math.PI)
          );
        c.push(k);
      }
      e = c[0];
      c.push(new Q(e.lng, e.lat));
      return c;
    },
  });
  var rd = {};

  function sd(a) {
    this.map = a;
    this.Bj = [];
    this.dg = [];
    this.Qg = [];
    this.hV = 300;
    this.UE = 0;
    this.Ig = {};
    this.jj = {};
    this.Ok = 0;
    this.kE = p;
    this.WV = {};
    this.eo = this.Nq(1);
    this.tg = this.Nq(2);
    this.Il = this.Nq(3);
    this.lg = this.Nq(4);
    a.platform.appendChild(this.eo);
    a.platform.appendChild(this.tg);
    a.platform.appendChild(this.Il);
    a.platform.appendChild(this.lg);
    var b = 256 * Math.pow(2, 15),
      c = 3 * b,
      a = T.Ya(new J(180, 0)).lng,
      c = c - a,
      b = -3 * b,
      e = T.Ya(new J(-180, 0)).lng;
    this.OA = a;
    this.PA = e;
    this.LA = c + (e - b);
    this.iI = a - e;
  }
  D.df(function(a) {
    var b = new sd(a);
    b.za();
    a.ef = b;
  });
  A.extend(sd.prototype, {
    za: function() {
      var a = this,
        b = a.map;
      b.addEventListener("loadcode", function() {
        a.Ep();
      });
      b.addEventListener("addtilelayer", function(b) {
        a.Ue(b);
      });
      b.addEventListener("removetilelayer", function(b) {
        a.cg(b);
      });
      b.addEventListener("setmaptype", function(b) {
        a.Og(b);
      });
      b.addEventListener("zoomstartcode", function(b) {
        a.Qc(b);
      });
      b.addEventListener("setcustomstyles", function(b) {
        a.au(b.target);
        a.ag(p);
      });
      b.addEventListener("initindoorlayer", function(b) {
        a.gE(b);
      });
    },
    Ep: function() {
      var a = this;
      if (A.ga.oa)
        try {
          document.execCommand("BackgroundImageCache", t, p);
        } catch (b) {}
      this.loaded || a.Kx();
      a.ag();
      this.loaded ||
        ((this.loaded = p),
        Ua.load("tile", function() {
          a.VP();
        }));
    },
    gE: function(a) {
      this.Au = new td(this);
      this.Au.Ue(new ud(this.map, this.Au, a.af));
    },
    Kx: function() {
      for (var a = this.map.ya().jf, b = 0; b < a.length; b++) {
        var c = new vd();
        A.extend(c, a[b]);
        this.Bj.push(c);
        c.za(this.map, this.eo);
      }
      this.au();
    },
    Nq: function(a) {
      var b = L("div");
      b.style.position = "absolute";
      b.style.overflow = "visible";
      b.style.left = b.style.top = "0";
      b.style.zIndex = a;
      return b;
    },
    Ff: function() {
      this.Ok--;
      var a = this;
      this.kE &&
        (this.map.dispatchEvent(new P("onfirsttileloaded")), (this.kE = t));
      0 == this.Ok &&
        (this.Ri && (clearTimeout(this.Ri), (this.Ri = q)),
        (this.Ri = setTimeout(function() {
          if (a.Ok == 0) {
            a.map.dispatchEvent(new P("ontilesloaded"));
            a.kE = p;
          }
          a.Ri = q;
        }, 80)));
    },
    TD: function(a, b) {
      return "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2];
    },
    Gx: function(a) {
      var b = a.Hb;
      b && Db(b) && b.parentNode.removeChild(b);
      delete this.Ig[a.name];
      a.loaded || (wd(a), (a.Hb = q), (a.Pm = q));
    },
    KL: function(a, b, c) {
      var e = this.map,
        f = e.ya(),
        g = e.Za,
        i = e.Vb,
        k = f.$b(g),
        m = this.iX(),
        n = m[0],
        o = m[1],
        s = m[2],
        v = m[3],
        w = m[4],
        c = "undefined" != typeof c ? c : 0,
        f = f.Nd(),
        m = e.da.replace(/^TANGRAM_/, "");
      for (this.Ie ? (this.Ie.length = 0) : (this.Ie = []); n < s; n++)
        for (var y = o; y < v; y++) {
          var z = n,
            B = y;
          this.Ie.push([z, B]);
          z = m + "_" + b + "_" + z + "_" + B + "_" + g;
          this.WV[z] = z;
        }
      this.Ie.sort(
        (function(a) {
          return function(b, c) {
            return (
              0.4 * Math.abs(b[0] - a[0]) +
              0.6 * Math.abs(b[1] - a[1]) -
              (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            );
          };
        })([w[0] - 1, w[1] - 1])
      );
      i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
      n = -e.offsetY + e.height / 2;
      a.style.left = -e.offsetX + e.width / 2 + "px";
      a.style.top = n + "px";
      this.Ve ? (this.Ve.length = 0) : (this.Ve = []);
      n = 0;
      for (e = a.childNodes.length; n < e; n++)
        (y = a.childNodes[n]), (y.lr = t), this.Ve.push(y);
      if ((n = this.Tm)) for (var C in n) delete n[C];
      else this.Tm = {};
      this.We ? (this.We.length = 0) : (this.We = []);
      n = 0;
      for (e = this.Ie.length; n < e; n++) {
        C = this.Ie[n][0];
        k = this.Ie[n][1];
        y = 0;
        for (o = this.Ve.length; y < o; y++)
          if (
            ((s = this.Ve[y]),
            s.id == m + "_" + b + "_" + C + "_" + k + "_" + g)
          ) {
            s.lr = p;
            this.Tm[s.id] = s;
            break;
          }
      }
      n = 0;
      for (e = this.Ve.length; n < e; n++)
        (s = this.Ve[n]), s.lr || this.We.push(s);
      this.IF = [];
      y = (f + c) * this.map.M.devicePixelRatio;
      n = 0;
      for (e = this.Ie.length; n < e; n++)
        (C = this.Ie[n][0]),
          (k = this.Ie[n][1]),
          (v = C * f + i[0] - c / 2),
          (w = (-1 - k) * f + i[1] - c / 2),
          (z = m + "_" + b + "_" + C + "_" + k + "_" + g),
          (o = this.Tm[z]),
          (s = q),
          o
            ? ((s = o.style),
              (s.left = v + "px"),
              (s.top = w + "px"),
              o.Sn || this.IF.push([C, k, o]))
            : (0 < this.We.length
                ? ((o = this.We.shift()),
                  o.getContext("2d").clearRect(-c / 2, -c / 2, y, y),
                  (s = o.style))
                : ((o = document.createElement("canvas")),
                  (s = o.style),
                  (s.position = "absolute"),
                  (s.width = f + c + "px"),
                  (s.height = f + c + "px"),
                  this.PY() && (s.WebkitTransform = "scale(1.001)"),
                  o.setAttribute("width", y),
                  o.setAttribute("height", y),
                  a.appendChild(o)),
              (o.id = z),
              (s.left = v + "px"),
              (s.top = w + "px"),
              -1 < z.indexOf("bg") &&
                ((v = "#F3F1EC"),
                this.map.M.RU && (v = this.map.M.RU),
                (s.background = v ? v : "")),
              this.IF.push([C, k, o])),
          (o.style.visibility = "");
      n = 0;
      for (e = this.We.length; n < e; n++)
        this.We[n].style.visibility = "hidden";
      return this.IF;
    },
    PY: function() {
      return /M040/i.test(navigator.userAgent);
    },
    iX: function() {
      var a = this.map,
        b = a.ya(),
        c = b.PL(a.Za),
        e = a.Vb,
        f = Math.ceil(e.lng / c),
        g = Math.ceil(e.lat / c),
        b = b.Nd(),
        c = [f, g, ((e.lng - f * c) / c) * b, ((e.lat - g * c) / c) * b];
      return [
        c[0] - Math.ceil((a.width / 2 - c[2]) / b),
        c[1] - Math.ceil((a.height / 2 - c[3]) / b),
        c[0] + Math.ceil((a.width / 2 + c[2]) / b),
        c[1] + Math.ceil((a.height / 2 + c[3]) / b),
        c,
      ];
    },
    S_: function(a, b, c, e) {
      var f = this;
      f.H2 = b;
      var g = this.map.ya(),
        i = f.TD(a, c),
        k = g.Nd(),
        b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]],
        m = this.Ig[i];
      if (this.map.ya() !== bb && this.map.ya() !== Ta) {
        var n = this.Gw(a[0], a[2]).offsetX;
        b[0] += n;
        b.a2 = n;
      }
      m && m.Hb
        ? (Bb(m.Hb, b),
          e &&
            ((e = new R(a[0], a[1])),
            (g = this.map.M.De ? this.map.M.De.style : "normal"),
            (e = c.getTilesUrl(e, a[2], g)),
            (m.loaded = t),
            xd(m, e)),
          m.loaded
            ? this.Ff()
            : yd(m, function() {
                f.Ff();
              }))
        : (m = this.jj[i]) && m.Hb
        ? (c.Kb.insertBefore(m.Hb, c.Kb.lastChild),
          (this.Ig[i] = m),
          Bb(m.Hb, b),
          e &&
            ((e = new R(a[0], a[1])),
            (g = this.map.M.De ? this.map.M.De.style : "normal"),
            (e = c.getTilesUrl(e, a[2], g)),
            (m.loaded = t),
            xd(m, e)),
          m.loaded
            ? this.Ff()
            : yd(m, function() {
                f.Ff();
              }))
        : ((m = k * Math.pow(2, g.Ze() - a[2])),
          new J(a[0] * m, a[1] * m),
          (e = new R(a[0], a[1])),
          (g = this.map.M.De ? this.map.M.De.style : "normal"),
          (e = c.getTilesUrl(e, a[2], g)),
          (m = new zd(this, e, b, a, c)),
          yd(m, function() {
            f.Ff();
          }),
          m.co(),
          (this.Ig[i] = m));
    },
    Ff: function() {
      this.Ok--;
      var a = this;
      0 == this.Ok &&
        (this.Ri && (clearTimeout(this.Ri), (this.Ri = q)),
        (this.Ri = setTimeout(function() {
          if (a.Ok == 0) {
            a.map.dispatchEvent(new P("ontilesloaded"));
            if (wa) {
              if (ra && ua && va) {
                var b = fb(),
                  c = a.map.yb();
                setTimeout(function() {
                  Sa(5030, {
                    load_script_time: ua - ra,
                    load_tiles_time: b - va,
                    map_width: c.width,
                    map_height: c.height,
                    map_size: c.width * c.height,
                  });
                }, 1e4);
                D.Bq("cus.fire", "time", {
                  z_imgfirstloaded: b - va,
                });
              }
              wa = t;
            }
          }
          a.Ri = q;
        }, 80)));
    },
    TD: function(a, b) {
      return this.map.ya() === Ra
        ? "TILE-" +
            b.da +
            "-" +
            this.map.Lw +
            "-" +
            a[0] +
            "-" +
            a[1] +
            "-" +
            a[2]
        : "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2];
    },
    Gx: function(a) {
      var b = a.Hb;
      b && (Ad(b), Db(b) && b.parentNode.removeChild(b));
      delete this.Ig[a.name];
      a.loaded || (Ad(b), wd(a), (a.Hb = q), (a.Pm = q));
    },
    Gw: function(a, b) {
      for (
        var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2;
        a > f;

      )
        (a -= e), (c -= this.LA);
      for (; a < g; ) (a += e), (c += this.LA);
      c = Math.round(c / Math.pow(2, 18 - b));
      return {
        offsetX: c,
        nm: a,
      };
    },
    lV: function(a) {
      for (var b = a.lng; b > this.OA; ) b -= this.iI;
      for (; b < this.PA; ) b += this.iI;
      a.lng = b;
      return a;
    },
    mV: function(a, b) {
      for (
        var c = 256 * Math.pow(2, 18 - b),
          e = Math.floor(this.OA / c),
          f = Math.floor(this.PA / c),
          c = Math.floor(this.LA / c),
          g = [],
          i = 0;
        i < a.length;
        i++
      ) {
        var k = a[i],
          m = k[0],
          k = k[1];
        if (m >= e) {
          var m = m + c,
            n = "id_" + m + "_" + k + "_" + b;
          a[n] || ((a[n] = p), g.push([m, k]));
        } else
          m <= f &&
            ((m -= c),
            (n = "id_" + m + "_" + k + "_" + b),
            a[n] || ((a[n] = p), g.push([m, k])));
      }
      for (i = 0; i < g.length; i++) a.push(g[i]);
      return a;
    },
    ag: function(a) {
      if (!this.map.M.yg) {
        var b = this;
        if (b.map.ya() == Ra)
          Ua.load(
            "coordtrans",
            function() {
              b.map.Ob ||
                ((b.map.Ob = Ra.Ck(b.map.lh)), (b.map.Lw = Ra.mL(b.map.Ob)));
              b.kI();
            },
            p
          );
        else {
          if (a && a) for (var c in this.jj) delete this.jj[c];
          b.kI(a);
        }
      }
    },
    kI: function(a) {
      var b = this.Bj.concat(this.dg),
        c = b.length,
        e = this.map,
        f = e.ya(),
        g = e.Vb,
        i = e.width,
        i = e.ya().$b(e.Za) * i,
        i = this.FY(g.lng - i / 2, g.lng + i / 2);
      this.map.ya() !== bb && this.map.ya() !== Ta && (g = this.lV(g));
      for (var k = 0; k < c; k++) {
        var m = b[k];
        if (m.kc && e.Za < m.kc) break;
        if (m.Fw) {
          var n = (this.Kb = m.Kb);
          if (a) {
            var o = n;
            if (o && o.childNodes)
              for (var s = o.childNodes.length, v = s - 1; 0 <= v; v--)
                (s = o.childNodes[v]), o.removeChild(s), (s = q);
          }
          if (this.map.Ud()) {
            this.tg.style.display = "block";
            n.style.display = "none";
            this.map.dispatchEvent(new P("vectorchanged"), {
              isvector: p,
            });
            continue;
          } else
            (n.style.display = "block"),
              (this.tg.style.display = "none"),
              this.map.dispatchEvent(new P("vectorchanged"), {
                isvector: t,
              });
        }
        if (!m.Z1 && !((m.Qx && !this.map.Ud()) || (m.nM && this.map.Ud()))) {
          e = this.map;
          f = e.ya();
          n = f.tj();
          s = e.Za;
          g = e.Vb;
          f == Ra && g.Ub(new J(0, 0)) && (g = e.Vb = n.ri(e.ge, e.Ob));
          var w = f.$b(s),
            n = f.PL(s),
            o = Math.ceil(g.lng / n),
            y = Math.ceil(g.lat / n),
            z = f.Nd(),
            n = [o, y, ((g.lng - o * n) / n) * z, ((g.lat - y * n) / n) * z],
            y = i ? 1.5 * (e.width / 2) : e.width / 2,
            v = n[0] - Math.ceil((y - n[2]) / z),
            o = n[1] - Math.ceil((e.height / 2 - n[3]) / z),
            y = n[0] + Math.ceil((y + n[2]) / z),
            B = 0;
          f === Ra && 15 == e.ka() && (B = 1);
          f = n[1] + Math.ceil((e.height / 2 + n[3]) / z) + B;
          this.TJ = new J(g.lng, g.lat);
          var C = this.Ig,
            z = -this.TJ.lng / w,
            B = this.TJ.lat / w,
            g = [Math.ceil(z), Math.ceil(B)],
            w = e.ka(),
            E;
          for (E in C) {
            var F = C[E],
              G = F.info;
            (G[2] != w ||
              (G[2] == w &&
                (v > G[0] || y <= G[0] || o > G[1] || f <= G[1]))) &&
              this.Gx(F);
          }
          C = -e.offsetX + e.width / 2;
          F = -e.offsetY + e.height / 2;
          m.Kb &&
            ((m.Kb.style.left = Math.ceil(z + C) - g[0] + "px"),
            (m.Kb.style.top = Math.ceil(B + F) - g[1] + "px"),
            (m.Kb.style.WebkitTransform = "translate3d(0,0,0)"));
          z = [];
          for (e.KB = []; v < y; v++)
            for (B = o; B < f; B++)
              z.push([v, B]),
                e.KB.push({
                  x: v,
                  y: B,
                });
          this.map.ya() !== bb && this.map.ya() !== Ta && (z = this.mV(z, s));
          z.sort(
            (function(a) {
              return function(b, c) {
                return (
                  0.4 * Math.abs(b[0] - a[0]) +
                  0.6 * Math.abs(b[1] - a[1]) -
                  (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                );
              };
            })([n[0] - 1, n[1] - 1])
          );
          s = z.length;
          this.Ok += s;
          for (v = 0; v < s; v++) this.S_([z[v][0], z[v][1], w], g, m, a);
        }
      }
    },
    FY: function(a, b) {
      return a < this.PA || b > this.OA;
    },
    Ue: function(a) {
      var b = this,
        c = a.target;
      b.map.Ud();
      c.vn && this.map.Ue(c.vn);
      if (c.Qx) {
        for (a = 0; a < b.Qg.length; a++) if (b.Qg[a] == c) return;
        Ua.load(
          "vector",
          function() {
            c.za(b.map, b.tg);
            b.Qg.push(c);
          },
          p
        );
      } else {
        for (a = 0; a < b.dg.length; a++) if (b.dg[a] == c) return;
        c.za(this.map, this.Il);
        b.dg.push(c);
      }
    },
    cg: function(a) {
      a = a.target;
      this.map.Ud();
      a.vn && this.map.cg(a.vn);
      if (a.Qx)
        for (var b = 0, c = this.Qg.length; b < c; b++)
          a == this.Qg[b] && this.Qg.splice(b, 1);
      else {
        b = 0;
        for (c = this.dg.length; b < c; b++)
          a == this.dg[b] && this.dg.splice(b, 1);
      }
      a.remove();
    },
    Og: function() {
      for (var a = this.Bj, b = 0, c = a.length; b < c; b++) a[b].remove();
      delete this.Kb;
      this.Bj = [];
      this.jj = this.Ig = {};
      this.Kx();
      this.ag();
    },
    Qc: function() {
      var a = this;
      a.Bd && A.U.aa(a.Bd);
      setTimeout(function() {
        a.ag();
        a.map.dispatchEvent(new P("onzoomend"));
      }, 10);
    },
    w6: u(),
    au: function(a) {
      var b = this.map.ya();
      if (!this.map.Ud() && (a ? (this.map.M.a0 = a) : (a = this.map.M.a0), a))
        for (
          var c = q,
            c =
              "2" == D.zu
                ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] + "/"]
                : [
                    D.url.proto + D.url.domain.main_domain_cdn.baidu[0] + "/",
                    D.url.proto + D.url.domain.main_domain_cdn.baidu[1] + "/",
                    D.url.proto + D.url.domain.main_domain_cdn.baidu[2] + "/",
                  ],
            e = 0,
            f;
          (f = this.Bj[e]);
          e++
        )
          if (f.N_ == p) {
            b.m.pc = 18;
            f.getTilesUrl = function(b, e) {
              var f = b.x,
                f = this.map.ef.Gw(f, e).nm,
                m = b.y,
                n = Ub("normal"),
                o = 1;
              this.map.Hx() && (o = 2);
              n =
                "customimage/tile?&x=" +
                f +
                "&y=" +
                m +
                "&z=" +
                e +
                "&udt=" +
                n +
                "&scale=" +
                o +
                "&ak=" +
                qa;
              n = a.styleStr
                ? n + ("&styles=" + encodeURIComponent(a.styleStr))
                : n + ("&customid=" + a.style);
              return c[Math.abs(f + m) % c.length] + n;
            };
            break;
          }
    },
  });

  function zd(a, b, c, e, f) {
    this.Pm = a;
    this.position = c;
    this.Yu = [];
    this.name = a.TD(e, f);
    this.info = e;
    this.vJ = f.zt();
    e = L("img");
    Cb(e);
    e.fL = t;
    var g = e.style,
      a = a.map.ya();
    g.position = "absolute";
    g.border = "none";
    g.width = a.Nd() + "px";
    g.height = a.Nd() + "px";
    g.left = c[0] + "px";
    g.top = c[1] + "px";
    g.maxWidth = "none";
    this.Hb = e;
    this.src = b;
    Bd && (this.Hb.style.opacity = 0);
    var i = this;
    this.Hb.onload = function() {
      D.XY.IQ();
      i.loaded = p;
      if (i.Pm) {
        var a = i.Pm,
          b = a.jj;
        if (!b[i.name]) {
          a.UE++;
          b[i.name] = i;
        }
        if (i.Hb && !Db(i.Hb) && f.Kb) {
          f.Kb.appendChild(i.Hb);
          if (A.ga.oa <= 6 && A.ga.oa > 0 && i.vJ)
            i.Hb.style.cssText =
              i.Hb.style.cssText +
              (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
                i.src +
                '",sizingMethod=scale);');
        }
        var c = a.UE - a.hV,
          e;
        for (e in b) {
          if (c <= 0) break;
          if (!a.Ig[e]) {
            b[e].Pm = q;
            var g = b[e].Hb;
            if (g && g.parentNode) {
              g.parentNode.removeChild(g);
              Ad(g);
            }
            g = q;
            b[e].Hb = q;
            delete b[e];
            a.UE--;
            c--;
          }
        }
        Bd &&
          new xb({
            Mc: 20,
            duration: 200,
            Ba: function(a) {
              if (i.Hb && i.Hb.style) i.Hb.style.opacity = a * 1;
            },
            finish: function() {
              i.Hb && i.Hb.style && delete i.Hb.style.opacity;
            },
          });
        wd(i);
      }
    };
    this.Hb.onerror = function() {
      wd(i);
      if (i.Pm) {
        var a = i.Pm.map.ya();
        if (a.m.iD) {
          i.error = p;
          i.Hb.src = a.m.iD;
          i.Hb && !Db(i.Hb) && f.Kb.appendChild(i.Hb);
        }
      }
    };
    e = q;
  }

  function yd(a, b) {
    a.Yu.push(b);
  }
  zd.prototype.co = function() {
    this.Hb.src =
      0 < A.ga.oa && 6 >= A.ga.oa && this.vJ
        ? H.ua + "blank.gif"
        : "" !== this.src && this.Hb.src == this.src
        ? this.src + "&t = " + Date.now()
        : this.src;
  };

  function wd(a) {
    for (var b = 0; b < a.Yu.length; b++) a.Yu[b]();
    a.Yu.length = 0;
  }

  function Ad(a) {
    if (a) {
      a.onload = a.onerror = q;
      var b = a.attributes,
        c,
        e,
        f;
      if (b) {
        e = b.length;
        for (c = 0; c < e; c += 1) (f = b[c].name), ab(a[f]) && (a[f] = q);
      }
      if ((b = a.children)) {
        e = b.length;
        for (c = 0; c < e; c += 1) Ad(a.children[c]);
      }
    }
  }

  function xd(a, b) {
    a.src = b;
    a.co();
  }
  var Bd = !A.ga.oa || 8 < A.ga.oa;

  function vd(a) {
    this.af = a || {};
    this.IV = this.af.copyright || q;
    this.E0 = this.af.transparentPng || t;
    this.Fw = this.af.baseLayer || t;
    this.zIndex = this.af.zIndex || 0;
    this.da = vd.rS++;
  }
  vd.rS = 0;
  A.lang.xa(vd, A.lang.Ja, "TileLayer");
  A.extend(vd.prototype, {
    za: function(a, b) {
      this.Fw && (this.zIndex = -100);
      this.map = a;
      if (!this.Kb) {
        var c = L("div"),
          e = c.style;
        e.position = "absolute";
        e.overflow = "visible";
        e.zIndex = this.zIndex;
        e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
        e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
        b.appendChild(c);
        this.Kb = c;
      }
    },
    remove: function() {
      this.Kb &&
        this.Kb.parentNode &&
        ((this.Kb.innerHTML = ""), this.Kb.parentNode.removeChild(this.Kb));
      delete this.Kb;
    },
    zt: x("E0"),
    getTilesUrl: function(a, b) {
      if (this.map.ya() !== bb && this.map.ya() !== Ta)
        var c = this.map.ef.Gw(a.x, b).nm;
      var e = "";
      this.af.tileUrlTemplate &&
        ((e = this.af.tileUrlTemplate.replace(/\{X\}/, c)),
        (e = e.replace(/\{Y\}/, a.y)),
        (e = e.replace(/\{Z\}/, b)));
      return e;
    },
    xm: x("IV"),
    ya: function() {
      return this.Ua || Oa;
    },
  });

  function Cd(a) {
    vd.call(this, a);
    this.m = a || {};
    this.nM = p;
    if (this.m.predictDate) {
      if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday)
        this.m.predictDate = 1;
      if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour)
        this.m.predictDate.hour = 0;
    }
    this.rU = D.url.proto + D.url.domain.traffic + "/traffic/";
  }
  Cd.prototype = new vd();
  Cd.prototype.za = function(a, b) {
    vd.prototype.za.call(this, a, b);
    this.P = a;
  };
  Cd.prototype.zt = ea(p);
  Cd.prototype.getTilesUrl = function(a, b) {
    var c = "";
    this.m.predictDate
      ? (c =
          "HistoryService?day=" +
          (this.m.predictDate.weekday - 1) +
          "&hour=" +
          this.m.predictDate.hour +
          "&t=" +
          new Date().getTime() +
          "&")
      : ((c = "TrafficTileService?time=" + new Date().getTime() + "&"),
        (c += "label=web2D&v=016&"));
    var c = this.rU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
      e = 1;
    this.P.Hx() && (e = 2);
    return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1");
  };
  var Dd = [
      D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss",
      D.url.proto + D.url.domain.TILES_YUN_HOST[1] + "/georender/gss",
      D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss",
      D.url.proto + D.url.domain.TILES_YUN_HOST[3] + "/georender/gss",
    ],
    Ed =
      D.url.proto +
      D.url.domain.main_domain_nocdn.baidu +
      "/style/poi/rangestyle",
    Fd = 100;

  function rb(a, b) {
    vd.call(this);
    var c = this;
    this.nM = p;
    try {
      document.createElement("canvas").getContext("2d");
    } catch (e) {}
    Lb(a) ? (b = a || {}) : ((c.Rn = a), (b = b || {}));
    b.geotableId && (c.If = b.geotableId);
    b.databoxId && (c.Rn = b.databoxId);
    var f = D.td + "geosearch";
    c.fb = {
      vN: b.pointDensity || Fd,
      kY: f + "/detail/",
      lY: f + "/v2/detail/",
      QJ: b.age || 36e5,
      Tt: b.q || "",
      l0: "png",
      u4: [5, 5, 5, 5],
      TY: {
        backgroundColor: "#FFFFD5",
        borderColor: "#808080",
      },
      YB: b.ak || qa,
      rO: b.tags || "",
      filter: b.filter || "",
      iO: b.sortby || "",
      ZD: b.hotspotName || "tile_md_" + (1e5 * Math.random()).toFixed(0),
      SF: p,
    };
    Ua.load("clayer", function() {
      c.Dd();
    });
  }
  rb.prototype = new vd();
  rb.prototype.za = function(a, b) {
    vd.prototype.za.call(this, a, b);
    this.P = a;
  };
  rb.prototype.getTilesUrl = function(a, b) {
    var c = a.x,
      e = a.y,
      f = this.fb,
      c =
        Dd[Math.abs(c + e) % Dd.length] +
        "/image?grids=" +
        c +
        "_" +
        e +
        "_" +
        b +
        "&q=" +
        f.Tt +
        "&tags=" +
        f.rO +
        "&filter=" +
        f.filter +
        "&sortby=" +
        f.iO +
        "&ak=" +
        this.fb.YB +
        "&age=" +
        f.QJ +
        "&page_size=" +
        f.vN +
        "&format=" +
        f.l0;
    f.SF || ((f = (1e5 * Math.random()).toFixed(0)), (c += "&timeStamp=" + f));
    this.If
      ? (c += "&geotable_id=" + this.If)
      : this.Rn && (c += "&databox_id=" + this.Rn);
    return c;
  };
  rb.prototype.enableUseCache = function() {
    this.fb.SF = p;
  };
  rb.prototype.disableUseCache = function() {
    this.fb.SF = t;
  };
  rb.QT = /^point\(|\)$/gi;
  rb.RT = /\s+/;
  rb.TT = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  var Gd = {};

  function Hd(a, b) {
    this.nd = a;
    this.YP = 18;
    this.m = {
      Oy: 256,
      Ec: new T(),
    };
    A.extend(this.m, b || {});
  }
  var Id = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
    Jd = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
    Kd = [
      0,
      0,
      0,
      3,
      5,
      5,
      7,
      7,
      9,
      9,
      10,
      12,
      12,
      12,
      15,
      15,
      17,
      17,
      19,
      19,
      19,
      19,
    ],
    Ld = [
      0,
      0,
      0,
      256,
      256,
      512,
      256,
      512,
      256,
      512,
      256,
      256,
      512,
      1024,
      256,
      512,
      512,
      1024,
      512,
      1024,
      2048,
      4096,
    ];
  Hd.prototype = {
    getName: x("nd"),
    Nd: function(a) {
      return "na" === this.nd ? Ld[a] : this.m.Oy;
    },
    Vs: function(a) {
      return "na" === this.nd ? Kd[a] : a;
    },
    tj: function() {
      return this.m.Ec;
    },
    $b: function(a) {
      return Math.pow(2, this.YP - a);
    },
    LD: function(a) {
      return "na" === this.nd ? Jd[Id[a]] : this.$b(a) * this.Nd(a);
    },
  };
  var Md = {
    drawPoly: function(a, b, c, e, f, g) {
      var i = a[1];
      if (i)
        for (var a = a[6], k = 0; k < i.length; k++) {
          var m = i[k][0],
            n = f.vj(m, "polygon", c, g);
          if (n && n.length)
            for (var o = i[k][1], s = 0; s < o.length; s++) {
              var v = o[s][1];
              f.Tc(v[0], c) &&
                (v["cache" + c] || (v["cache" + c] = f.Vm(v[1], c, e, a)),
                (v = v["cache" + c]),
                f.P.Eo(b.canvas.id, v, {
                  type: "polygon",
                  Xb: m,
                  style: n,
                }),
                this.yW(b, v, n, c));
            }
        }
    },
    yW: function(a, b, c, e) {
      c = c[0];
      if (
        !c.Xb ||
        !(
          (6 < e && (71013 === c.Xb || 71012 === c.Xb || 71011 === c.Xb)) ||
          (6 === e && (71011 === c.Xb || 71012 === c.Xb)) ||
          (5 === e && (71011 === c.Xb || 71013 === c.Xb)) ||
          (5 > e && (71012 === c.Xb || 71013 === c.Xb))
        )
      ) {
        a.fillStyle = c.gx;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
        a.closePath();
        c.borderWidth &&
          ((a.strokeStyle = c.Ko),
          (a.lineWidth = c.borderWidth / 2),
          a.stroke());
        a.fill();
      }
    },
    drawGaoqingRoadBorder: function(a, b, c, e, f) {
      var g = a[1];
      if (g)
        for (var a = a[6], i = 0; i < g.length; i++) {
          var k = g[i][0],
            m = f.vj(k, "polygon", c);
          if (m && m.length && m[0].borderWidth)
            for (var n = g[i][1], o = 0; o < n.length; o++) {
              var s = n[o][1];
              f.Tc(s[0], c) &&
                (s["cache" + c] || (s["cache" + c] = f.Vm(s[1], c, e, a)),
                (s = s["cache" + c]),
                f.P.Eo(b.canvas.id, s, {
                  type: "polygon",
                  Xb: k,
                  style: m,
                }),
                this.AW(b, s, m));
            }
        }
    },
    drawGaoqingRoadFill: function(a, b, c, e, f) {
      var g = a[1];
      if (g)
        for (var a = a[6], i = 0; i < g.length; i++) {
          var k = g[i][0],
            m = f.vj(k, "polygon", c);
          if (m && m.length)
            for (var n = g[i][1], o = 0; o < n.length; o++) {
              var s = n[o][1];
              f.Tc(s[0], c) &&
                (s["cache" + c] || (s["cache" + c] = f.Vm(s[1], c, e, a)),
                (s = s["cache" + c]),
                f.P.Eo(b.canvas.id, s, {
                  type: "polygon",
                  Xb: k,
                  style: m,
                }),
                this.BW(b, s, m));
            }
        }
    },
    AW: function(a, b, c) {
      c = c[0];
      a.beginPath();
      a.moveTo(b[0], b[1]);
      for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
      a.closePath();
      a.strokeStyle = c.Ko;
      a.lineWidth = c.borderWidth / 2;
      a.stroke();
    },
    BW: function(a, b, c) {
      a.fillStyle = c[0].gx;
      a.beginPath();
      a.moveTo(b[0], b[1]);
      for (var c = 2, e = b.length; c < e; c += 2) a.lineTo(b[c], b[c + 1]);
      a.closePath();
      a.fill();
    },
  };
  var Nd = {
    drawArrow: function(a, b, c, e, f, g) {
      b.lineWidth = 1.5;
      b.lineCap = "butt";
      b.lineJoin = "miter";
      b.strokeStyle = "rgba(153,153,153,1)";
      var i = a[7];
      if (i) {
        a = i[1];
        e = g.Vm(i[0], c, e);
        for (i = 0; i < a.length; i++)
          if (g.Tc(a[i], c)) {
            var k = e[4 * i],
              m = e[4 * i + 1],
              n = e[4 * i + 2],
              o = e[4 * i + 3],
              s = (k + n) / 2,
              v = (m + o) / 2,
              n = (k - n) / f,
              o = (m - o) / f,
              k = s + n / 2,
              n = s - n / 2,
              m = v + o / 2,
              o = v - o / 2;
            this.rW(b, k, m, n, o);
          }
      }
    },
    rW: function(a, b, c, e, f) {
      a.beginPath();
      a.moveTo(b, c);
      a.lineTo(e, f);
      a.stroke();
      c = this.iV([b, c], [e, f]);
      b = c[0];
      c = c[1];
      a.beginPath();
      a.moveTo(b[0], b[1]);
      a.lineTo(c[0], c[1]);
      a.lineTo(e, f);
      a.closePath();
      a.stroke();
    },
    iV: function(a, b) {
      var c = b[0] - a[0],
        e = b[1] - a[1],
        f = 1.8 * Math.sqrt(c * c + e * e),
        g = b[0] + 4.8410665352790705 * (c / f),
        f = b[1] + 4.8410665352790705 * (e / f),
        c = Math.atan2(e, c) + Math.PI;
      return [
        [
          g + 4.8410665352790705 * Math.cos(c - 0.3),
          f + 4.8410665352790705 * Math.sin(c - 0.3),
        ],
        [
          g + 4.8410665352790705 * Math.cos(c + 0.3),
          f + 4.8410665352790705 * Math.sin(c + 0.3),
        ],
      ];
    },
  };
  var Od = {
    drawHregion: function(a, b, c, e, f) {
      var g = a[1];
      if (g)
        for (var a = a[6], i = 0; i < g.length; i++) {
          var k = g[i][0],
            m = f.vj(k, "polygon3d", c);
          if (m && m.length)
            for (var n = g[i][1], o = 0; o < n.length; o++) {
              var s = n[o][2];
              if (f.Tc(s[0], c)) {
                var v = s[2];
                s["cache" + c] || (s["cache" + c] = f.Vm(s[1], c, e, a));
                s = s["cache" + c];
                f.P.Eo(b.canvas.id, s, {
                  type: "polygon",
                  Xb: k,
                  style: m,
                });
                this.zW(b, s, v, m);
              }
            }
        }
    },
    zW: function(a, b, c, e) {
      e = e[0];
      if (!(c < e.filter)) {
        a.fillStyle = e.SW;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
        a.closePath();
        e.borderWidth &&
          ((a.strokeStyle = e.Ko),
          (a.lineWidth = e.borderWidth / 2),
          a.stroke());
        a.fill();
      }
    },
  };
  var Pd = {
    parse: function(a, b, c, e, f) {
      for (
        var g = e.P,
          i = g.ka(),
          k = Math.pow(2, 18 - i),
          m = g.Ec.ri(g.Qb()),
          n = m.lng,
          o = m.lat,
          m = g.yb(),
          s = m.width,
          v = m.height,
          m = [],
          w = 0;
        w < a.length;
        w++
      ) {
        var y = [],
          z = a[w].j0;
        y.x = z[0];
        y.y = z[1];
        y.H6 = z[2];
        for (
          var B = (z[0] * c * k - n) / k + s / 2,
            C = (o - (z[1] + 1) * c * k) / k + v / 2,
            E = 0;
          E < a[w].length;
          E++
        )
          a[w][E].tM
            ? this.rN(a[w][E].tM, z, e, b, c, B, C, i, k, s, v, y)
            : a[w][E].rY
            ? this.rN(a[w][E].rY, z, e, b, c, B, C, i, k, s, v, y, p, window.y4)
            : this.EZ(a[w][E].UY, z, e, b, c, B, C, i, k, s, v, y, f);
        m.push(y);
      }
      if (/collision=0/.test(location.search)) {
        a = [];
        for (w = 0; w < m.length; w++)
          for (E = 0; E < m[w].length; E++) a.push(m[w][E]);
      } else a = this.SZ(m, e.P.ka());
      g.xV();
      for (w = 0; w < a.length; w++)
        if (((c = a[w]), !c.ut))
          if (
            ((E = [c.Zf, c.$f, c.Zf, c.vi, c.ui, c.vi, c.ui, c.$f, c.Zf, c.$f]),
            c.style &&
              g.Eo("poi", E, {
                type: "polygon",
                Xb: c.style.Xb,
                style: c.style,
              }),
            "fixed" === c.type)
          ) {
            E = t;
            c.Be && (c.style && 4 === c.direction) && (E = p);
            if (c.Be)
              if (E) {
                var F = this;
                this.Js(b, c, e, E, function(a) {
                  for (var c = 0; c < a.Bf.length; c++)
                    F.NK(b, a.Bf[c].he, a.Bf[c].ie, a.Bf[c].text, a.style, e);
                });
              } else this.Js(b, c, e);
            if (c.style && !E)
              for (E = 0; E < c.Bf.length; E++)
                this.NK(b, c.Bf[E].he, c.Bf[E].ie, c.Bf[E].text, c.style, e);
          } else if ("line" === c.type)
            for (E = 0; E < c.ZO.length; E++)
              (f = c.ZO[E]),
                Pd.uW(b, f.he, f.ie, f.MU, f.XO, f.width, f.height, c.style, e);
      return m;
    },
    rN: function(a, b, c, e, f, g, i, k, m, n, o, s, v, w) {
      if ((a = a[1]))
        for (b = 0; b < a.length; b++) {
          var y = a[b],
            z = y[0],
            B = c.vj(z, "point", k, w),
            z = c.vj(z, "pointText", k, w),
            y = y[1],
            C = q,
            E = 100,
            F = 0,
            G = 0;
          B && B[0] && ((B = B[0]), (C = B.Be), (E = B.zoom || 100));
          z = z && z[0] ? z[0] : q;
          for (B = 0; B < y.length; B++) {
            var K = y[B][4];
            if (K && c.Tc(K[2], k)) {
              var O = Math.round(K[0] / 100) / m + g,
                M = f - Math.round(K[1] / 100) / m + i;
              if (v || !(-50 > O || -50 > M || O > n + 50 || M > o + 50)) {
                var S = K[7] || "",
                  da = {
                    type: "fixed",
                    uid: K[3] || "",
                    name: S,
                    ty: K[4],
                    kt: q,
                    Bf: [],
                    fy: [O, M],
                    style: z,
                  };
                if (C) {
                  var aa =
                    window.iconSetInfo_high[C] ||
                    window.iconSetInfo_high["MapRes/" + C];
                  if (!aa) {
                    var Aa = C.charCodeAt(0);
                    48 <= Aa &&
                      57 >= Aa &&
                      (aa = window.iconSetInfo_high["_" + C]);
                  }
                  aa &&
                    ((F = aa[2]),
                    (G = aa[3]),
                    (F = ((F / 2) * E) / 100),
                    (G = ((G / 2) * E) / 100),
                    (da.kt = {
                      he: O - F / 2,
                      ie: M - G / 2,
                      width: F,
                      height: G,
                    }),
                    (da.Be = C));
                }
                if (z) {
                  K = K[5];
                  "number" !== typeof K && (K = 0);
                  var ta = (aa = 0),
                    Aa = (z.fontSize || 12) / 2,
                    Ga = 0.2 * Aa;
                  e.font = Pd.lx(z, c);
                  var S = S.split("\\"),
                    sa = S.length;
                  da.direction = K;
                  for (var Va = 0; Va < sa; Va++) {
                    var He = S[Va],
                      Yc = e.measureText(He).width;
                    switch (K) {
                      case 3:
                        ta = M - (Aa / 2) * sa - (Ga * (sa - 1)) / 2;
                        aa = O - Yc - F / 2;
                        ta = ta + Aa * Va + Ga * Va;
                        break;
                      case 1:
                        ta = M - (Aa / 2) * sa - (Ga * (sa - 1)) / 2;
                        aa = O + F / 2;
                        ta = ta + Aa * Va + Ga * Va;
                        break;
                      case 2:
                        ta = M - G / 2 - Aa * sa - Ga * (sa - 1) - Ga;
                        aa = O - Yc / 2;
                        ta = ta + Aa * Va + Ga * Va;
                        break;
                      case 0:
                        ta = M + G / 2 + Ga / 2;
                        aa = O - Yc / 2;
                        ta = ta + Aa * Va + Ga * Va;
                        break;
                      case 4:
                        (ta = M - (Aa / 2) * sa - (Ga * (sa - 1)) / 2),
                          (aa = O - Yc / 2),
                          (ta = ta + Aa * Va + Ga * Va);
                    }
                    da.Bf.push({
                      he: aa,
                      ie: ta,
                      width: Yc,
                      height: Aa,
                      text: He,
                    });
                  }
                }
                s.push(da);
              }
            }
          }
        }
    },
    EZ: function(a, b, c, e, f, g, i, k, m, n, o, s, v) {
      b = a[7].length;
      if ((n = c.vj(a[0], "pointText", k)) && n.length) {
        n = n[0];
        e.font = Pd.lx(n, c);
        for (
          var o = n.fontSize / 2,
            w = a[1],
            y = a[2],
            z = y.split("").length,
            B = a[4],
            C = B.slice(0, 2),
            E = 2;
          E < B.length;
          E += 2
        )
          (C[E] = C[E - 2] + B[E]), (C[E + 1] = C[E - 1] + B[E + 1]);
        for (E = 2; E < B.length; E += 2)
          0 === E % (2 * z) ||
            1 === E % (2 * z) ||
            ((C[E] = C[E - 2] + B[E] / v),
            (C[E + 1] = C[E - 1] + B[E + 1] / v));
        for (v = 0; v < b; v++)
          if (c.Tc(a[7][v], k)) {
            var E = [],
              F = l,
              G = l,
              K = l,
              O = l,
              M = y.split("");
            a[6][v] && M.reverse();
            for (
              var B = 2 * v * z, B = C.slice(B, B + 2 * z), S = 0;
              S < z;
              S++
            ) {
              var da = a[5][z * v + S],
                aa = B[2 * S] / 100 / m + g,
                Aa = f - B[2 * S + 1] / 100 / m + i,
                ta = M[S],
                Ga = e.measureText(ta).width;
              if (F === l)
                (F = aa - Ga / 2), (G = Aa - o / 2), (K = F + Ga), (O = G + o);
              else {
                var sa = aa - Ga / 2,
                  Va = Aa - o / 2;
                sa < F && (F = sa);
                Va < G && (G = Va);
                sa + Ga > K && (K = sa + Ga);
                Va + o > O && (O = Va + o);
              }
              E.push({
                XO: ta,
                he: aa,
                ie: Aa,
                MU: da,
                width: Ga,
                height: o,
              });
            }
            s.push({
              type: "line",
              ty: w,
              style: n,
              ZO: E,
              Zf: F,
              $f: G,
              ui: K,
              vi: O,
            });
          }
      }
    },
    Js: function(a, b, c, e, f) {
      var g = b.Be;
      if ("lanche" !== g)
        if (Pd.Ix[g]) this.KK(a, b, Pd.Ix[g], e, f);
        else if ((c = c.tL(g))) {
          var i = new Image();
          i.setAttribute("crossOrigin", "anonymous");
          var k = this;
          i.onload = function() {
            Pd.Ix[g] = this;
            k.KK(a, b, this, e, f);
            i.onload = q;
          };
          i.src = c;
        }
    },
    KK: function(a, b, c, e, f) {
      var g = b.kt,
        i = g.he,
        k = g.ie,
        m = q,
        n = q,
        o = p,
        s = b.style ? b.style.Xb : q;
      if (b.style && 62203 === s) {
        for (var v = (n = m = 0); v < b.Bf.length; v++)
          m < b.Bf[v].width && (m = b.Bf[v].width), (n += 20);
        m = Math.ceil(m) + 10;
      }
      e && 519 === s && (o = t);
      m !== q && n !== q
        ? this.xW(a, b, c, 8, m, n)
        : e && o
        ? ((m = Math.ceil(b.Bf[0].width) + 6),
          this.qW(a, b, c, 12, m, c.height / 2))
        : a.drawImage(c, i, k, g.width, g.height);
      f && f(b);
    },
    xW: function(a, b, c, e, f, g) {
      var i = b.fy[0] - f / 2,
        b = b.fy[1] - g / 2;
      0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
      var k = e / 2;
      a.drawImage(c, 0, 0, e, e, i, b, k, k);
      a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
      a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
      a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
      a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
      a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
      a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
      a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
      a.drawImage(
        c,
        c.width - e,
        c.height - e,
        e,
        e,
        i + f - k,
        b + g - k,
        k,
        k
      );
    },
    qW: function(a, b, c, e, f, g) {
      var i = b.fy[0] - f / 2,
        b = b.fy[1] - g / 2,
        g = e / 2;
      a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
      a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
      a.drawImage(
        c,
        c.width - e,
        0,
        e,
        c.height,
        i + f - g,
        b,
        g,
        c.height / 2
      );
    },
    uW: function(a, b, c, e, f, g, i, k, m) {
      a.font = Pd.lx(k, m);
      a.fillStyle = k.cL;
      g /= 2;
      i /= 2;
      a.save();
      a.translate(b, c);
      a.rotate((-e / 180) * Math.PI);
      0 < k.Ax &&
        ((a.lineWidth = k.Ax), (a.strokeStyle = k.UL), a.strokeText(f, -g, -i));
      a.fillText(f, -g, -i);
      a.restore();
    },
    NK: function(a, b, c, e, f, g) {
      a.font = Pd.lx(f, g);
      a.fillStyle = f.cL;
      0 < f.Ax &&
        ((a.lineWidth = f.Ax), (a.strokeStyle = f.UL), a.strokeText(e, b, c));
      a.fillText(e, b, c);
    },
    lx: function(a, b) {
      var c = a.fontSize / 2,
        e = 10 * a.fontWeight;
      return (e = b.mE
        ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif'
        : e + (" " + c + "px") + " arial, sans-serif");
    },
    SZ: function(a, b) {
      var c = [],
        e = 0;
      5 === b && (e = 1);
      a.sort(function(a, b) {
        return a.x * a.y < b.x * b.y ? -1 : 1;
      });
      for (var f = 0, g = a.length; f < g; f++)
        for (var i = a[f], k = 0, m = i.length; k < m; k++) {
          var n = i[k],
            o = l,
            s = l,
            v = l,
            w = l;
          if ("fixed" === n.type) {
            var y = n.kt,
              z = n.Bf;
            y &&
              ((o = y.he),
              (s = y.ie),
              (v = y.he + y.width),
              (w = y.ie + y.height));
            for (y = 0; y < z.length; y++) {
              var B = z[y];
              o !== l
                ? (B.he < o && (o = B.he),
                  B.ie < s && (s = B.ie),
                  B.he + B.width > v && (v = B.he + B.width),
                  B.ie + B.height > w && (w = B.ie + B.height))
                : ((o = B.he),
                  (s = B.ie),
                  (v = B.he + B.width),
                  (w = B.ie + B.height));
            }
          } else
            "line" === n.type
              ? ((o = n.Zf), (s = n.$f), (v = n.ui), (w = n.vi))
              : "biaopai" === n.type &&
                ((w = n.v5),
                (o = w.he),
                (s = w.ie),
                (v = w.he + w.width),
                (w = w.ie + w.height));
          o !== l &&
            ((n.Zf = o), (n.$f = s), (n.ui = v), (n.vi = w), c.push(n));
        }
      c.sort(function(a, b) {
        return b.ty - a.ty || b.Zf - a.Zf || b.$f - a.$f;
      });
      f = 0;
      for (g = c.length; f < g; f++) {
        m = c[f];
        m.ut = t;
        m.WJ = [];
        for (k = f + 1; k < g; k++)
          (i = c[k]),
            m.ui - e < i.Zf ||
              (m.Zf > i.ui - e || m.vi - e < i.$f || m.$f > i.vi - e) ||
              m.WJ.push(k);
      }
      f = 0;
      for (g = c.length; f < g; f++)
        if (((k = c[f]), k.ut === t)) {
          e = k.WJ;
          k = 0;
          for (m = e.length; k < m; k++) c[e[k]].ut = p;
        }
      return c;
    },
    Ix: {},
  };
  var Qd = ["round", "butt", "square"],
    Rd = ["miter", "round", "bevel"],
    Sd = {
      daojiao: [
        {
          stroke: "#FF6600",
          Db: 1,
          Bb: "round",
          Cb: "round",
          yd: [4, 3],
        },
      ],
      daojiao_bai: [
        {
          stroke: "#f5f3f0",
          Db: 1,
          Bb: "round",
          Cb: "round",
          yd: [4, 3],
        },
      ],
      junhuoxian: [
        {
          stroke: "#DB7093",
          Db: 1,
          Bb: "round",
          Cb: "round",
          yd: [4, 3],
        },
      ],
      lundu: [
        {
          stroke: "#5c91c5",
          Db: 1,
          Bb: "round",
          Cb: "round",
          yd: [10, 11],
        },
      ],
      shengjie: [
        {
          stroke: "#737373",
          Db: 1,
          Bb: "round",
          Cb: "round",
          yd: [6, 3],
        },
      ],
      weidingguojie: [
        {
          stroke: "#aea08a",
          Db: 1,
          Bb: "round",
          Cb: "round",
          yd: [4, 3],
        },
      ],
      weidingguojie_guowai: [
        {
          stroke: "#a29e96",
          Db: 2,
          Bb: "round",
          Cb: "round",
          yd: [4, 3],
        },
      ],
      weidingguojie_guonei: [
        {
          stroke: "#b5a37c",
          Db: 2,
          Bb: "round",
          Cb: "round",
          yd: [4, 3],
        },
      ],
    },
    Td = {};

  function Ud(a, b, c) {
    if (/^tielu|^MapRes\/tielu/.test(a)) {
      if ("off" === window[c + "zoomFrontStyle"][b].bmapRailwayVisibility)
        return [];
      var e = "#ffffff",
        f = "#949494";
      window[c + "zoomFrontStyle"] &&
        (window[c + "zoomFrontStyle"][b] &&
          window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor) &&
        (e = window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor);
      window[c + "zoomFrontStyle"] &&
        (window[c + "zoomFrontStyle"][b] &&
          window[c + "zoomFrontStyle"][b].bmapRailwayFillColor) &&
        (f = window[c + "zoomFrontStyle"][b].bmapRailwayFillColor);
      if ((4 <= b && 9 >= b) || (10 <= b && 16 >= b))
        return [
          {
            stroke: e,
            Db: 1.5,
            Bb: "butt",
            Cb: "round",
            yd: [10, 11],
          },
          {
            stroke: f,
            Db: 2,
            Bb: "round",
            Cb: "round",
          },
        ];
      if (17 <= b && 18 >= b)
        return [
          {
            stroke: e,
            Db: 2.5,
            Bb: "butt",
            Cb: "round",
            yd: [15, 16],
          },
          {
            stroke: f,
            Db: 5,
            Bb: "round",
            Cb: "round",
          },
        ];
      if (19 <= b && 20 >= b)
        return [
          {
            stroke: e,
            Db: 4.5,
            Bb: "butt",
            Cb: "round",
            yd: [25, 26],
          },
          {
            stroke: f,
            Db: 5,
            Bb: "round",
            Cb: "round",
          },
        ];
    } else if (
      0 === a.indexOf("ditie_zj") ||
      0 === a.indexOf("MapRes/ditie_zj")
    ) {
      if (12 <= b && 16 >= b)
        return [
          {
            stroke: "#868686",
            Db: 1,
            Bb: "round",
            Cb: "round",
            yd: [7, 4],
          },
        ];
      if ((17 <= b && 18 >= b) || (19 <= b && 20 >= b))
        return [
          {
            stroke: "#6e6e6e",
            Db: 1,
            Bb: "round",
            Cb: "round",
            yd: [7, 4],
          },
        ];
    } else if (/^tongdaomian|^MapRes\/tongdaomian/.test(a)) {
      if (17 === b)
        return [
          {
            stroke: "#e5e5e5",
            Db: 4,
            Bb: "square",
            Cb: "round",
          },
          {
            stroke: "#a8a8a8",
            Db: 6,
            Bb: "square",
            Cb: "round",
          },
        ];
      if (18 === b)
        return [
          {
            stroke: "#e5e5e5",
            Db: 6,
            Bb: "square",
            Cb: "round",
          },
          {
            stroke: "#a8a8a8",
            Db: 8,
            Bb: "square",
            Cb: "round",
          },
        ];
      if (19 <= b && 21 >= b)
        return [
          {
            stroke: "#e5e5e5",
            Db: 8,
            Bb: "square",
            Cb: "round",
          },
          {
            stroke: "#a8a8a8",
            Db: 10,
            Bb: "square",
            Cb: "round",
          },
        ];
    } else if (
      /^jietizhongduan|^dixiatongdaojieti|^MapRes\/jietizhongduan|^MapRes\/dixiatongdaojieti/.test(
        a
      )
    ) {
      if (17 === b)
        return [
          {
            stroke: "#e5e5e5",
            Db: 4,
            Bb: "butt",
            Cb: "round",
            yd: [2, 1],
          },
          {
            stroke: "#bebebe",
            Db: 6,
            Bb: "butt",
            Cb: "round",
          },
        ];
      if (18 === b)
        return [
          {
            stroke: "#e5e5e5",
            Db: 6,
            Bb: "butt",
            Cb: "round",
            yd: [3, 1],
          },
          {
            stroke: "#bebebe",
            Db: 8,
            Bb: "butt",
            Cb: "round",
          },
        ];
      if (19 <= b && 21 >= b)
        return [
          {
            stroke: "#e5e5e5",
            Db: 8,
            Bb: "butt",
            Cb: "round",
            yd: [4, 2],
          },
          {
            stroke: "#bebebe",
            Db: 10,
            Bb: "butt",
            Cb: "round",
          },
        ];
    } else if (/^guojietianqiao|^MapRes\/guojietianqiao/.test(a))
      return 18 === b
        ? [
            {
              stroke: "#ffffff",
              Db: 6,
              Bb: "butt",
              Cb: "round",
              yd: [4, 2],
            },
            {
              stroke: "#bebebe",
              Db: 8,
              Bb: "butt",
              Cb: "round",
            },
          ]
        : [
            {
              stroke: "#ffffff",
              Db: 8,
              Bb: "butt",
              Cb: "round",
              yd: [4, 2],
            },
            {
              stroke: "#bebebe",
              Db: 10,
              Bb: "butt",
              Cb: "round",
            },
          ];
    return Sd[a] || Sd[a.replace("MapRes/", "")];
  }
  var Vd = {
    drawLink: function(a, b, c, e, f) {
      this.da = f.P.da;
      var g = a[1];
      g &&
        ((a = a[6]),
        this.HO(g, c, e, b, a, f, p),
        this.HO(g, c, e, b, a, f, t));
    },
    HO: function(a, b, c, e, f, g, i) {
      for (var k = 0; k < a.length; k++) {
        var m = a[k][0],
          n = g.vj(m, "line", b);
        if (n && n.length && (!i || n[0].borderWidth))
          if (!n[0].fp || Ud(n[0].fp, b, this.da))
            for (var o = a[k][1], s = 0; s < o.length; s++) {
              var v = o[s][3];
              g.Tc(v[0], b) &&
                (v["cache" + b] || (v["cache" + b] = g.Vm(v[1], b, c, f)),
                (v = v["cache" + b]),
                g.P.Eo(e.canvas.id, v, {
                  type: "polyline",
                  Xb: m,
                  style: n,
                }),
                this.vW(e, v, n, i, b));
            }
      }
    },
    drawSingleTexture: function(a, b, c, e, f) {
      var g = a[1];
      if (g)
        for (var a = a[6], i = 0; i < g.length; i++) {
          var k = f.vj(g[i][0], "line", c);
          if (k && k.length)
            for (var m = g[i][1], n = 0; n < m.length; n++) {
              var o = m[n][11];
              if (f.Tc(o[0], c)) {
                var s;
                o["cache" + c] || (o["cache" + c] = f.Vm(o[1], c, e, a));
                s = o["cache" + c];
                o = o[3];
                o *= Math.pow(2, c - f.d1[c].Rc);
                this.wW(b, s, k, o, f);
              }
            }
        }
    },
    wW: function(a, b, c, e, f) {
      var g = c[0].fp,
        i = this;
      if (Td[g]) i.Js(b, e, a, Td[g]);
      else if ((c = f.tL(g))) {
        var k = new Image();
        k.onload = function() {
          Td[g] = k;
          i.Js(b, e, a, k);
          k.onload = q;
        };
        k.src = c;
      }
    },
    Js: function(a, b, c, e) {
      var f = [a[0], a[1]],
        g = [a[2], a[3]],
        a = g[0] - f[0],
        g = g[1] - f[1],
        f = [f[0] + a / 2, f[1] + g / 2],
        i = Math.sqrt(a * a + g * g),
        b = b / 10,
        a = Math.atan2(g, a);
      c.save();
      c.translate(f[0], f[1]);
      c.rotate(Math.PI / 2 + a);
      c.drawImage(e, -b / 2, -i / 2, b, i);
      c.restore();
    },
    vW: function(a, b, c, e, f) {
      c = c[0];
      if (!e && c.fp && Ud(c.fp, f, this.da))
        this.DW(a, b, c, Ud(c.fp, f, this.da));
      else {
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var f = 2, g = b.length; f < g; f += 2) a.lineTo(b[f], b[f + 1]);
        c.borderWidth && e
          ? ((a.strokeStyle = c.Ko),
            (a.lineCap = Qd[c.bV]),
            (a.lineJoin = Rd[1]),
            (a.lineWidth = c.borderWidth / 2),
            a.stroke())
          : e ||
            ((a.strokeStyle = c.gx),
            (a.lineCap = Qd[c.RW]),
            (a.lineJoin = Rd[1]),
            (a.lineWidth = c.ZK / 2),
            a.stroke());
      }
    },
    DW: function(a, b, c, e) {
      if ((c = e[1])) {
        a.strokeStyle = c.stroke;
        a.lineCap = c.Bb;
        a.lineJoin = c.Cb;
        a.lineWidth = c.Db;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
        a.stroke();
      }
      if ((e = e[0]))
        if (e.yd) this.tW(a, b, e);
        else {
          a.strokeStyle = e.stroke;
          a.lineCap = e.Bb;
          a.lineJoin = e.Cb;
          a.lineWidth = e.Db;
          a.beginPath();
          a.moveTo(b[0], b[1]);
          c = 2;
          for (f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
          a.stroke();
        }
    },
    tW: function(a, b, c) {
      a.strokeStyle = c.stroke;
      a.lineCap = c.Bb;
      a.lineJoin = c.Cb;
      a.lineWidth = c.Db;
      var e = p,
        c = c.yd[0];
      a.beginPath();
      for (var f = 0; f < b.length - 2; f += 2) {
        var g = b[f],
          i = b[f + 1],
          k = b[f + 2] - g,
          m = b[f + 3] - i,
          n = 0 !== k ? m / k : 0 < m ? 1e15 : -1e15,
          m = Math.sqrt(k * k + m * m),
          o = c;
        for (a.moveTo(g, i); 0.1 <= m; ) {
          o > m && (o = m);
          var s = Math.sqrt((o * o) / (1 + n * n));
          0 > k && (s = -s);
          g += s;
          i += n * s;
          a[e ? "lineTo" : "moveTo"](g, i);
          m -= o;
          e = !e;
        }
      }
      a.stroke();
    },
  };
  var Wd = 3,
    Xd = 4,
    Yd = 7,
    Zd = 8,
    $d = 15,
    ae = 16,
    be = {},
    ce = {},
    de = {},
    ee,
    fe = {
      3: {
        start: 3,
        Rc: 3,
      },
      4: {
        start: 4,
        Rc: 5,
      },
      5: {
        start: 4,
        Rc: 5,
      },
      6: {
        start: 6,
        Rc: 7,
      },
      7: {
        start: 6,
        Rc: 7,
      },
      8: {
        start: 8,
        Rc: 9,
      },
      9: {
        start: 8,
        Rc: 9,
      },
      10: {
        start: 10,
        Rc: 10,
      },
      11: {
        start: 11,
        Rc: 12,
      },
      12: {
        start: 11,
        Rc: 12,
      },
      13: {
        start: 11,
        Rc: 12,
      },
      14: {
        start: 14,
        Rc: 15,
      },
      15: {
        start: 14,
        Rc: 15,
      },
      16: {
        start: 16,
        Rc: 17,
      },
      17: {
        start: 16,
        Rc: 17,
      },
      18: {
        start: 18,
        Rc: 19,
      },
      19: {
        start: 18,
        Rc: 19,
      },
      20: {
        start: 18,
        Rc: 19,
      },
      21: {
        start: 18,
        Rc: 19,
      },
    };

  function ge(a) {
    this.P = a;
    this.Kc = a.M.devicePixelRatio;
    this.d1 = fe;
  }
  ge.prototype = {
    OC: function(a, b, c, e, f, g, i, k, m) {
      this.P.mO = {};
      var n = this,
        o = n.P.da;
      m || (m = 0);
      if (!window[o + "StyleBody"] && 100 > m)
        setTimeout(function() {
          n.OC(a, b, c, e, f, g, i, k, m + 1);
        }, 100);
      else {
        ee || (ee = k);
        var s = b.getContext("2d"),
          v = b.parentNode;
        v.removeChild(b);
        s.clearRect(0, 0, g, g);
        v.appendChild(b);
        v = this.Kc;
        1 < v && !b._scale && (s.scale(v, v), (b._scale = p));
        s.fillStyle = this.qN("#F5F3F0");
        window[o + "zoomFrontStyle"][f].bmapLandColor &&
          (s.fillStyle = this.qN(
            window[o + "zoomFrontStyle"][f].bmapLandColor
          ));
        o = b.style.width;
        b.style.width = "0px";
        b.style.width = o;
        s.fillRect(0, 0, g, g);
        if (a[0])
          for (o = 0; o < a[0].length; o++)
            (v = a[0][o]), v[0] === Yd && Md.drawPoly(v, s, f, g, this);
        17 <= this.P.ka()
          ? (n.MK(a, s, f, g, i, c, e), (b.Sn = p))
          : setTimeout(function() {
              if (!b.oH) {
                n.MK(a, s, f, g, i, c, e);
                b.Sn = p;
              }
            }, 1);
      }
    },
    MK: function(a, b, c, e) {
      var f = this.P.da;
      if (a[0])
        for (var g = 0; g < a[0].length; g++) {
          var i = a[0][g],
            k = i[0];
          k === Xd
            ? Vd.drawLink(i, b, c, e, this)
            : k === ae
            ? Vd.drawLink(i, b, c, e, this)
            : k === $d
            ? (Md.drawGaoqingRoadBorder(i, b, c, e, this),
              Md.drawGaoqingRoadFill(i, b, c, e, this))
            : 18 === k
            ? window[f + "zoomFrontStyle"] &&
              (window[f + "zoomFrontStyle"][c] &&
                "off" !==
                  window[f + "zoomFrontStyle"][c].bmapRoadarrowVisibility) &&
              Nd.drawArrow(i, b, c, e, Math.pow(2, c - fe[c].Rc), this)
            : k === Zd
            ? Od.drawHregion(i, b, c, e, this)
            : 19 === k && Vd.drawSingleTexture(i, b, c, e, this);
        }
    },
    LK: function(a, b, c, e, f, g, i) {
      var k = this,
        m = k.P.da;
      i || (i = 0);
      !window[m + "StyleBody"] && 100 > i
        ? setTimeout(function() {
            k.LK(a, b, c, e, f, g, i + 1);
          }, 100)
        : (ee || (ee = b), (a.LZ = Pd.parse(a, c, e, this, f)));
    },
    vj: function(a, b, c, e) {
      var f = a + "-" + b + "-" + c;
      if (e) return be[f] || (be[f] = this.Dg(a, b, c, e)), be[f];
      this.P.mO[f] = this.Dg(a, b, c);
      return this.P.mO[f];
    },
    Dg: function(a, b, c, e) {
      var f = this.P.da,
        g;
      g = e || window[f + "_bmap_baseFs"];
      f = window[f + "StyleBody"];
      e = g[2];
      if ("arrow" === b) return this.AZ(e[2]);
      switch (b) {
        case "point":
          e = e[0];
          f = f[0] || {};
          break;
        case "pointText":
          e = e[1];
          f = f[1] || {};
          break;
        case "line":
          e = e[3];
          f = f[3] || {};
          break;
        case "polygon":
          e = e[4];
          f = f[4] || {};
          break;
        case "polygon3d":
          (e = e[5]), (f = f[5] || {});
      }
      var i = [],
        c = g[1][c - 1][0][a];
      if (!c) return i;
      for (g = 0; g < c.length; g++) {
        var k = f[c[g]] || e[c[g]];
        if (k) {
          switch (b) {
            case "polygon":
              k = this.JZ(k, a);
              break;
            case "line":
              k = this.FZ(k, a);
              break;
            case "pointText":
              k = this.HZ(k, a);
              break;
            case "point":
              k = this.GZ(k, a);
              break;
            case "polygon3d":
              k = this.IZ(k, a);
          }
          k.c6 = c[g];
          i[i.length] = k;
        }
      }
      return i;
    },
    HZ: function(a, b) {
      return {
        Xb: b,
        cL: this.Lg(a[0]),
        UL: this.Lg(a[1]),
        x2: this.Lg(a[2]),
        fontSize: a[3],
        Ax: a[4],
        fontWeight: a[5],
        fontStyle: a[6],
        cW: a[7],
      };
    },
    GZ: function(a, b) {
      return {
        Xb: b,
        ty: a[0],
        u6: a[1],
        Be: a[2],
        nY: a[3],
        d5: a[4],
        cW: a[5],
        zoom: a[6],
      };
    },
    FZ: function(a, b) {
      return {
        Xb: b,
        Ko: this.Lg(a[0]),
        gx: this.Lg(a[1]),
        borderWidth: a[2],
        ZK: a[3],
        bV: a[4],
        RW: a[5],
        m4: a[6],
        n4: a[7],
        o4: a[8],
        G4: a[9],
        H4: a[10],
        cV: a[11],
        fp: a[12],
        dV: a[13],
        j3: a[14],
        E4: a[15],
        k4: a[16],
        c5: a[17],
        H5: a[18],
      };
    },
    JZ: function(a, b) {
      return {
        Xb: b,
        gx: this.Lg(a[0]),
        Ko: this.Lg(a[1]),
        borderWidth: a[2],
        cV: a[3],
        dV: a[4],
        C6: a[5],
        j4: a[6],
        g6: a[7],
        h6: this.Lg(a[8]),
      };
    },
    IZ: function(a, b) {
      return {
        Xb: b,
        filter: a[0],
        CN: a[1],
        l4: a[2],
        borderWidth: a[3],
        Ko: this.Lg(a[4]),
        SW: this.Lg(a[5]),
        i3: this.Lg(a[6]),
        t5: a[7],
      };
    },
    AZ: function(a) {
      for (var b in a)
        return (
          (a = a[b]),
          {
            color: this.Lg(a[0]),
            nY: a[1],
            Be: a[2],
          }
        );
    },
    Lg: function(a) {
      var b = a;
      if (de[b]) return de[b];
      a >>>= 0;
      de[b] =
        "rgba(" +
        (a & 255) +
        "," +
        ((a >> 8) & 255) +
        "," +
        ((a >> 16) & 255) +
        "," +
        ((a >> 24) & 255) / 255 +
        ")";
      return de[b];
    },
    qN: function(a) {
      a = a.replace("#", "");
      6 === a.length && (a += "ff");
      for (var b = "rgba(", c = 0; 8 > c; c += 2)
        b =
          6 > c
            ? b + (parseInt(a.slice(c, c + 2), 16) + ",")
            : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
      return b;
    },
    Tc: function(a, b) {
      var c;
      ce[a] ||
        ((c = a.toString(2)),
        8 > c.length && (c = Array(8 - c.length + 1).join("0") + c),
        (ce[a] = c));
      c = ce[a];
      return "1" === c[b - fe[b].start];
    },
    Vm: function(a, b, c) {
      var e = [],
        b = Math.pow(2, b - fe[b].Rc) / 100,
        f = a[0] * b,
        g = a[1] * b;
      e[e.length] = f;
      e[e.length] = c - g;
      for (var i = 2; i < a.length; i += 2)
        (f += a[i] * b),
          (g += a[i + 1] * b),
          (e[e.length] = f),
          (e[e.length] = c - g);
      return e;
    },
    tL: function(a) {
      if (a) {
        var b = a.length % ee.length,
          c = this.uX();
        return ee[b] + a + ".png?v=" + c.UF + "&udt=" + c.QF;
      }
    },
    uX: function() {
      if (this.bE) return this.bE;
      var a = "undefined" !== typeof MSV ? MSV.V4 : {};
      return (this.bE = {
        UF: a.version ? a.version : "001",
        QF: a.F0 ? a.F0 : "20150621",
      });
    },
  };
  P = A.lang.Hu;
  Wd = 3;
  Xd = 4;
  Yd = 7;
  Zd = 8;
  $d = 15;
  ae = 16;

  function ud(a, b, c) {
    c = c || {};
    this.P = a;
    this.nw = b;
    this.Kc = b.CN;
    this.fb = {
      k0: "na",
      zIndex: 0,
      tO: c.tileUrls || {
        http: [
          "http://online0.map.bdimg.com/pvd/?qt=vtile",
          "http://online1.map.bdimg.com/pvd/?qt=vtile",
          "http://online2.map.bdimg.com/pvd/?qt=vtile",
          "http://online3.map.bdimg.com/pvd/?qt=vtile",
          "http://online4.map.bdimg.com/pvd/?qt=vtile",
        ],
        https: [
          "https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
          "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
          "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
          "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
          "https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
        ],
      },
      aE: c.iconUrls || [
        "https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/",
        "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/",
      ],
      wF: p,
    };
    this.HB = "";
    this.OS = {};
    var c = c.urlOpts || {
        styles: "pl",
        extdata: 1,
        textimg: 0,
        mesh3d: 0,
        limit: 30,
      },
      e;
    for (e in c)
      c.hasOwnProperty(e) && (this.HB = this.HB + "&" + e + "=" + c[e]);
    this.nh = {};
    this.ss = [];
    this.At = 0;
    this.Ox = t;
    this.Ix = {};
    a = this.fb.k0;
    Gd[a] ? (a = Gd[a]) : ((b = new Hd(a, l)), (a = Gd[a] = b));
    this.Hd = a;
    this.P.Hd = this.Hd;
  }
  window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
  fa = ud.prototype;
  fa.za = function() {
    var a = this.P,
      b = a.ef;
    if (!this.Ao) {
      var c = b.Nq(this.fb.zIndex);
      c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
      this.Ao = c;
    }
    b.lg.appendChild(this.Ao);
    b.z4 = c;
    if (this.fb.wF) {
      he(this);
      var e = this;
      a.addEventListener("checkvectorclick", function(a) {
        var b;
        a: {
          b = a.offsetX;
          var c = a.offsetY,
            k = e.ss.LZ;
          if (k)
            for (var m = 0; m < k.length; m++)
              for (var n = k[m], o = 0; o < n.length; o++)
                if (
                  ((a = n[o]),
                  !a.ut && a.kt && b > a.Zf && b < a.ui && c > a.$f && c < a.vi)
                ) {
                  b = a.kt;
                  b = {
                    type: 9,
                    name: a.name,
                    uid: a.uid,
                    point: {
                      x: b.he + b.width / 2,
                      y: b.ie + 6,
                    },
                  };
                  break a;
                }
          b = q;
        }
        b &&
          ((a = new P("onvectorclick")),
          (a.v4 = b),
          (a.Ye = "base"),
          this.dispatchEvent(a));
      });
    }
  };

  function he(a) {
    var b = a.P,
      c = b.ef,
      e = a.Kc,
      f = b.yb(),
      g = f.width,
      f = f.height,
      i = L("canvas");
    i.style.cssText =
      "position: absolute;left:0;top:0;width:" +
      g +
      "px;height:" +
      f +
      "px;z-index:2;";
    i.width = g * e;
    i.height = f * e;
    a.Sx = i;
    a.Bp = i.getContext("2d");
    a.Bp.scale(e, e);
    a.Bp.textBaseline = "top";
    c.lg.appendChild(i);
    b.yS = i;
  }
  fa.YX = x("Hd");
  fa.update = function(a, b) {
    b = b || {};
    this.RF = b.RF;
    b.vm && (this.G0 = b.vm);
    if (this.fb.wF && (b.lm && this.lm(), b.T_)) {
      var c = this.Kc,
        e = this.P.yb(),
        f = e.width,
        e = e.height,
        g = this.Sx,
        i = g.style;
      i.width = f + "px";
      i.height = e + "px";
      g.width = f * c;
      g.height = e * c;
      this.Bp.scale(c, c);
      this.Bp.textBaseline = "top";
    }
    if (b.x6) {
      c = this.Ao;
      f = 0;
      for (e = c.childNodes.length; f < e; f++) c.childNodes[f].Sn = t;
    }
    this.Vw = a;
    this.Ep(a);
  };
  fa.Ep = function(a) {
    this.ss = [];
    var b = this.P,
      c = b.ka(),
      e = b.Ec.ri(b.ge),
      f = this.Hd.$b(c),
      e = [Math.round(-e.lng / f), Math.round(e.lat / f)],
      f = this.Hd.Nd(c),
      g = b.da.replace(/^TANGRAM_/, ""),
      i = this.Hd.Vs(c),
      b = this.P,
      k = -b.offsetY + b.height / 2,
      m = this.Ao;
    m.style.left = -b.offsetX + b.width / 2 + "px";
    m.style.top = k + "px";
    this.Ve ? (this.Ve.length = 0) : (this.Ve = []);
    b = 0;
    for (k = m.childNodes.length; b < k; b++) {
      var n = m.childNodes[b];
      n.lr = t;
      this.Ve.push(n);
    }
    if ((b = this.Tm)) for (var o in b) delete b[o];
    else this.Tm = {};
    this.We ? (this.We.length = 0) : (this.We = []);
    b = 0;
    for (k = a.length; b < k; b++) {
      var n = a[b][0],
        s = a[b][1];
      o = 0;
      for (var v = this.Ve.length; o < v; o++) {
        var w = this.Ve[o];
        if (w.id === g + "_" + n + "_" + s + "_" + i + "_" + c) {
          w.lr = p;
          this.Tm[w.id] = w;
          break;
        }
      }
    }
    b = 0;
    for (k = this.Ve.length; b < k; b++)
      (w = this.Ve[b]),
        w.lr || ((w.LB = q), delete w.LB, (w.Sn = t), this.We.push(w));
    o = [];
    v = f * this.Kc;
    b = 0;
    for (k = a.length; b < k; b++) {
      var n = a[b][0],
        s = a[b][1],
        w = n * f + e[0],
        y = (-1 - s) * f + e[1],
        z = g + "_" + n + "_" + s + "_" + i + "_" + c,
        B = this.Tm[z],
        C = q;
      if (B)
        (C = B.style),
          (C.left = w + "px"),
          (C.top = y + "px"),
          (C.width = f + "px"),
          (C.height = f + "px"),
          B.Sn
            ? B.HF && B.HF && this.ss.push(B.HF)
            : ((B.oH = p), (B.LB = q), delete B.LB, o.push([n, s, B]));
      else {
        if (0 < this.We.length) {
          var B = this.We.shift(),
            E = B.getContext("2d");
          B.getAttribute("width") !== v && (B._scale = t);
          B.setAttribute("width", v);
          B.setAttribute("height", v);
          C = B.style;
          C.width = f + "px";
          C.height = f + "px";
          E.clearRect(0, 0, v, v);
        } else
          (B = document.createElement("canvas")),
            (C = B.style),
            (C.position = "absolute"),
            this.fb.backgroundColor && (C.background = this.fb.backgroundColor),
            (C.width = f + "px"),
            (C.height = f + "px"),
            B.setAttribute("width", v),
            B.setAttribute("height", v),
            m.appendChild(B);
        B.id = z;
        C.left = w + "px";
        C.top = y + "px";
        o.push([n, s, B]);
      }
      B.style.visibility = "";
    }
    b = 0;
    for (k = this.We.length; b < k; b++) this.We[b].style.visibility = "hidden";
    if (0 === o.length) {
      ie(this);
      a = this.P.da.replace(/^TANGRAM_/, "");
      c = this.P.ka();
      e = this.Hd.Vs(c);
      f = {};
      for (g = 0; g < this.Vw.length; g++)
        (i = this.Vw[g]),
          (i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c),
          this.nh[i] &&
            ((f[i] = this.nh[i]),
            this.RF &&
              this.nw.PC.OC(
                this.nh[i].U0,
                this.nh[i].i0,
                this.nh[i].nm,
                this.nh[i].an,
                this.nh[i].CE,
                this.Hd.Nd(this.nh[i].CE),
                this.Hd.LD(this.nh[i].CE),
                this.fb.aE
              ));
      this.nh = f;
    } else {
      this.At = o.length;
      this.Ox = t;
      c = this.Hd.Vs(this.P.ka());
      for (e = 0; e < a.length; e++) a[e][3] = c;
      for (e = 0; e < o.length; e++)
        (a = o[e][2]),
          (f = o[e][0]),
          (g = o[e][1]),
          (o[e][3] = c),
          (a.Sn = t),
          (a.oH = t),
          je(this, f, g, c, a);
    }
  };

  function je(a, b, c, e, f) {
    var g = b + "_" + c + "_" + e,
      i = a.OS;
    if (i[g]) {
      if ("loading" === i[g].status) return;
    } else
      i[g] = {
        status: "init",
        JN: 0,
      };
    var k = a,
      m = k.P,
      n = [],
      n = "0" === D.zu ? k.fb.tO.http : k.fb.tO.https,
      o = Math.abs(b + c) % n.length,
      s = "x=" + b + "&y=" + c + "&z=" + e,
      v = ke(a.nw),
      w = v.UF,
      v = v.QF,
      y =
        "_" +
        (0 > b ? "_" : "") +
        (0 > c ? "$" : "") +
        parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36),
      s = s + a.HB + "v=" + w + "&udt=" + v + "&fn=window." + y,
      w = n[o] + "&" + s,
      w = n[o] + "&param=" + window.encodeURIComponent(Nb(s));
    window[y] = function(a) {
      clearTimeout(i[g].dl);
      i[g] = q;
      if (a) {
        var n = m.ka(),
          o;
        a: {
          for (o = 0; o < k.Vw.length; o++) {
            var s = k.Vw[o];
            if (s[0] === b && s[1] === c && s[3] === e) {
              o = p;
              break a;
            }
          }
          o = t;
        }
        if (o !== t) {
          o = new P("updateindoor");
          o.IndoorCanvas = [];
          o.IndoorCanvas.push({
            canvasDom: f,
            data: a,
            canvasID: f.id,
            ratio: k.Kc,
          });
          m.dispatchEvent(o);
          if (m.M.yk) {
            if (
              ((k.nh[f.id] = {
                U0: a,
                i0: f,
                nm: b,
                an: c,
                CE: n,
              }),
              k.nw.PC.OC(a, f, b, c, n, k.Hd.Nd(n), k.Hd.LD(n), k.fb.aE),
              k.fb.wF)
            ) {
              n = [];
              n.j0 = [b, c, e];
              if (a[0])
                for (o = 0; o < a[0].length; o++)
                  a[0][o][0] === Wd &&
                    n.push({
                      tM: a[0][o],
                    });
              if (a[2])
                for (o = 0; o < a[2].length; o++)
                  n.push({
                    UY: a[2][o],
                  });
              f.HF = n;
              k.ss.push(n);
              k.Ox === t && k.At--;
              (0 === k.At || k.Ox === p) && ie(k);
            }
          } else k.At--, (0 === k.At || k.Ox === p) && ie(k);
          delete window[y];
        }
      }
    };
    pa(w);
    i[g].status = "loading";
    k = a;
    i[g].dl = setTimeout(function() {
      3 > i[g].JN
        ? (i[g].JN++, (i[g].status = "init"), je(k, b, c, e, f))
        : (i[g] = q);
    }, 4e3);
  }

  function ie(a) {
    if (a.Sx) {
      var b = a.P;
      a.Sx.style.left = -b.offsetX + "px";
      a.Sx.style.top = -b.offsetY + "px";
      var c = new P("updateindoorlabel");
      c.labelCanvasDom = b.yS;
      b.dispatchEvent(c);
      if (b.M.yk) {
        a.lm();
        var c = a.Hd,
          e = b.ka(),
          f = c.Vs(b.ka());
        a.nw.PC.LK(a.ss, a.fb.aE, a.Bp, c.Nd(e), Math.pow(2, e - f), e);
        "moving" !== a.G0 && b.dispatchEvent(new P("ontilesloaded"));
      }
    }
  }
  fa.lm = function() {
    var a = this.P.yb(),
      b = this.Kc;
    this.Bp.clearRect(0, 0, a.width * b, a.height * b);
  };
  fa.remove = function() {
    var a = this.P.ef;
    this.Ao && a.lg.removeChild(this.Ao);
  };

  function td(a) {
    this.P = a.map;
    this.jf = [];
    this.Wr = {};
    this.CN = this.P.M.devicePixelRatio;
    this.PC = new ge(this.P);
    this.za();
  }
  window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
  fa = td.prototype;
  fa.za = function() {
    var a = this,
      b = this.P;
    b.addEventListener("addtilelayer", function(b) {
      a.Ue(b.target);
    });
    b.addEventListener("removetilelayer", function(b) {
      a.cg(b.target);
    });
    setTimeout(function() {
      b.addEventListener("onmoveend", function(b) {
        "centerAndZoom" !== b.Rz &&
          a.update({
            vm: "moveend",
          });
      });
      b.addEventListener("onmoving", function() {
        a.update({
          vm: "moving",
        });
      });
      b.addEventListener("onzoomend", function(b) {
        "centerAndZoom" !== b.Rz &&
          a.update({
            lm: p,
            vm: "zoomend",
          });
      });
      b.addEventListener("centerandzoom", function() {
        a.update({
          lm: p,
          vm: "centerandzoom",
        });
      });
      b.addEventListener("onupdatestyles", function() {
        a.update({
          lm: p,
          RF: p,
          vm: "updatestyles",
        });
        a.P.zf(a.P.Qb());
        setTimeout(function() {
          a.P.dispatchEvent(new P("onvectordrawend"));
        }, 10);
      });
      b.addEventListener("onmaptypechange", function(b) {
        b.Ua === Oa &&
          a.update({
            lm: p,
            vm: "maptypechange",
          });
      });
    }, 1);
    b.addEventListener("indoor_data_refresh", u());
    b.addEventListener("onresize", function() {
      a.update({
        T_: p,
      });
    });
    a.update();
  };
  fa.Ue = function(a) {
    if (a instanceof ud) {
      for (var b = 0; b < this.jf.length; b++) if (this.jf[b] === a) return;
      this.jf.push(a);
      a.za();
      this.P.loaded && this.update();
    }
  };
  fa.cg = function(a) {
    if (a instanceof ud) {
      for (var b = 0; b < this.jf.length; b++)
        if (this.jf[b] === a) {
          this.jf.splice(b, 1);
          break;
        }
      a.remove();
    }
  };
  fa.KL = function(a) {
    var b = a.getName();
    if (this.Wr[b]) return this.Wr[b];
    var c = this.P,
      e = c.ka(),
      f = c.Vb,
      g = a.LD(e);
    c.da.replace(/^TANGRAM_/, "");
    var i = Math.ceil(f.lng / g),
      k = Math.ceil(f.lat / g),
      a = a.Nd(e),
      m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a],
      e = m[0] - Math.ceil((c.width / 2 - m[2]) / a),
      f = m[1] - Math.ceil((c.height / 2 - m[3]) / a),
      g = m[0] + Math.ceil((c.width / 2 + m[2]) / a),
      c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
    this.Ie ? (this.Ie.length = 0) : (this.Ie = []);
    for (a = e; a < g; a++) for (e = f; e < c; e++) this.Ie.push([a, e]);
    this.Ie.sort(
      (function(a) {
        return function(b, c) {
          return (
            0.4 * Math.abs(b[0] - a[0]) +
            0.6 * Math.abs(b[1] - a[1]) -
            (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
          );
        };
      })([i, k])
    );
    this.Wr[b] = this.Ie.slice(0);
    return this.Wr[b];
  };

  function ke(a) {
    if (a.VF) return a.VF;
    a.VF = {
      UF: "001",
      QF: Ub("normal"),
    };
    return a.VF;
  }
  fa.update = function(a) {
    this.Wr = {};
    for (var b = 0; b < this.jf.length; b++) {
      var c = this.jf[b],
        e = this.KL(c.Hd);
      c.update(e, a);
    }
  };

  function le(a, b, c) {
    this.nd = a;
    this.jf = b instanceof vd ? [b] : b.slice(0);
    c = c || {};
    this.m = {
      n0: c.tips || "",
      wE: "",
      kc: c.minZoom || 4,
      pc: c.maxZoom || 18,
      t4: c.minZoom || 4,
      s4: c.maxZoom || 18,
      Oy: 256,
      GF: c.textColor || "black",
      iD: c.errorImageUrl || "",
      jb: new ib(new Q(-21364736, -16023552), new Q(23855104, 19431424)),
      Ec: c.projection || new T(),
    };
    1 <= this.jf.length && (this.jf[0].Fw = p);
    A.extend(this.m, c);
  }
  A.extend(le.prototype, {
    getName: x("nd"),
    dt: function() {
      return this.m.n0;
    },
    N3: function() {
      return this.m.wE;
    },
    XX: function() {
      return this.jf[0];
    },
    d4: x("jf"),
    Nd: function() {
      return this.m.Oy;
    },
    rf: function() {
      return this.m.kc;
    },
    Ze: function() {
      return this.m.pc;
    },
    setMaxZoom: function(a) {
      this.m.pc = a;
    },
    Gm: function() {
      return this.m.GF;
    },
    tj: function() {
      return this.m.Ec;
    },
    G3: function() {
      return this.m.iD;
    },
    Nd: function() {
      return this.m.Oy;
    },
    $b: function(a) {
      return Math.pow(2, 18 - a);
    },
    PL: function(a) {
      return this.$b(a) * this.Nd();
    },
    rF: function(a) {
      this.tj().TN(a);
    },
  });
  var ne = [
      D.url.proto + D.url.domain.TILE_BASE_URLS[0] + "/it/",
      D.url.proto + D.url.domain.TILE_BASE_URLS[1] + "/it/",
      D.url.proto + D.url.domain.TILE_BASE_URLS[2] + "/it/",
      D.url.proto + D.url.domain.TILE_BASE_URLS[3] + "/it/",
      D.url.proto + D.url.domain.TILE_BASE_URLS[4] + "/it/",
    ],
    oe = [
      D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/tile/",
      D.url.proto + D.url.domain.TILE_ONLINE_URLS[1] + "/tile/",
      D.url.proto + D.url.domain.TILE_ONLINE_URLS[2] + "/tile/",
      D.url.proto + D.url.domain.TILE_ONLINE_URLS[3] + "/tile/",
    ],
    pe = {
      dark: "dl",
      light: "ll",
      normal: "pl",
    },
    qe = new vd();
  qe.N_ = p;
  qe.getTilesUrl = function(a, b, c) {
    var e = a.x,
      a = a.y,
      f = Ub("normal"),
      g = 1,
      c = pe[c];
    // this.map.Hx() && (g = 2);
    // e = this.map.ef.Gw(e, b).nm;
    // return (
    //   oe[Math.abs(e + a) % oe.length] +
    //   "?qt=vtile&x=" +
    //   (e + "").replace(/-/gi, "M") +
    //   "&y=" +
    //   (a + "").replace(/-/gi, "M") +
    //   "&z=" +
    //   b +
    //   "&styles=" +
    //   c +
    //   "&scaler=" +
    //   g +
    //   (6 == A.ga.oa ? "&color_dep=32&colors=50" : "") +
    //   "&udt=" +
    //   f +
    //   "&from=jsapi3_0"
    // ).replace(/-(\d+)/gi, "M$1");
    let tdir =
      bmapcfg.tiles_dir.length > 0 ? bmapcfg.tiles_dir : bmapcfg.home + "tiles";
    // console.log(
    //   "本地瓦片路径",
    //   tdir + "/" + b + "/" + e + "/" + a + bmapcfg.imgext
    // );
    return tdir + "/" + b + "/" + e + "/" + a + bmapcfg.imgext; // 使用本地的瓦片
  };
  var Oa = new le("\u5730\u56fe", qe, {
      tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
      maxZoom: 19,
    }),
    re = new vd();
  re.sO = [
    D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/",
    D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/",
    D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/",
    D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/",
  ];
  re.getTilesUrl = function(a, b) {
    var c = a.x,
      e = a.y,
      f = 256 * Math.pow(2, 20 - b),
      e = Math.round((9998336 - f * e) / f) - 1;
    return (url =
      this.sO[Math.abs(c + e) % this.sO.length] +
      this.map.Ob +
      "/" +
      this.map.Lw +
      "/3/lv" +
      (21 - b) +
      "/" +
      c +
      "," +
      e +
      ".jpg");
  };
  var Ra = new le("\u4e09\u7ef4", re, {
    tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
    minZoom: 15,
    maxZoom: 20,
    textColor: "white",
    projection: new kb(),
  });
  Ra.$b = function(a) {
    return Math.pow(2, 20 - a);
  };
  Ra.Ck = function(a) {
    if (!a) return "";
    var b = H.hC,
      c;
    for (c in b) if (-1 < a.search(c)) return b[c].ly;
    return "";
  };
  Ra.mL = function(a) {
    return {
      bj: 2,
      gz: 1,
      sz: 14,
      sh: 4,
    }[a];
  };
  var se = new vd({
    Fw: p,
  });
  se.getTilesUrl = function(a, b) {
    var c = a.x,
      e = a.y;
    return (
      ne[Math.abs(c + e) % ne.length] +
      "u=x=" +
      c +
      ";y=" +
      e +
      ";z=" +
      b +
      ";v=009;type=sate&fm=46&udt=" +
      Ub("satellite")
    ).replace(/-(\d+)/gi, "M$1");
  };
  var bb = new le("\u536b\u661f", se, {
      tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
      minZoom: 4,
      maxZoom: 19,
      textColor: "white",
    }),
    te = new vd({
      transparentPng: p,
    });
  te.getTilesUrl = function(a, b) {
    var c = a.x,
      e = a.y,
      f = Ub("satelliteStreet");
    return (
      oe[Math.abs(c + e) % oe.length] +
      "?qt=vtile&x=" +
      (c + "").replace(/-/gi, "M") +
      "&y=" +
      (e + "").replace(/-/gi, "M") +
      "&z=" +
      b +
      "&styles=sl" +
      (6 == A.ga.oa ? "&color_dep=32&colors=50" : "") +
      "&udt=" +
      f
    ).replace(/-(\d+)/gi, "M$1");
  };
  var Ta = new le("\u6df7\u5408", [se, te], {
    tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
    labelText: "\u8def\u7f51",
    minZoom: 4,
    maxZoom: 19,
    textColor: "white",
  });
  var ue = 1,
    X = {};
  window.h1 = X;

  function Y(a, b) {
    A.lang.Ja.call(this);
    this.md = {};
    this.fn(a);
    b = b || {};
    b.ma = b.renderOptions || {};
    this.m = {
      ma: {
        Aa: b.ma.panel || q,
        map: b.ma.map || q,
        vg: b.ma.autoViewport || p,
        Xt: b.ma.selectFirstResult,
        Im: b.ma.highlightMode,
        jc: b.ma.enableDragging || t,
      },
      Lt: b.onSearchComplete || u(),
      gN: b.onMarkersSet || u(),
      fN: b.onInfoHtmlSet || u(),
      iN: b.onResultsHtmlSet || u(),
      eN: b.onGetBusListComplete || u(),
      dN: b.onGetBusLineComplete || u(),
      bN: b.onBusListHtmlSet || u(),
      aN: b.onBusLineHtmlSet || u(),
      ME: b.onPolylinesSet || u(),
      Pp: b.reqFrom || "",
    };
    this.m.ma.vg =
      "undefined" != typeof b &&
      "undefined" != typeof b.renderOptions &&
      "undefined" != typeof b.renderOptions.autoViewport
        ? b.renderOptions.autoViewport
        : p;
    this.m.ma.Aa = A.Hc(this.m.ma.Aa);
  }
  A.xa(Y, A.lang.Ja);
  A.extend(Y.prototype, {
    getResults: function() {
      return this.Jc ? this.Oi : this.ja;
    },
    enableAutoViewport: function() {
      this.m.ma.vg = p;
    },
    disableAutoViewport: function() {
      this.m.ma.vg = t;
    },
    fn: function(a) {
      a && (this.md.src = a);
    },
    du: function(a) {
      this.m.Lt = a || u();
    },
    setMarkersSetCallback: function(a) {
      this.m.gN = a || u();
    },
    setPolylinesSetCallback: function(a) {
      this.m.ME = a || u();
    },
    setInfoHtmlSetCallback: function(a) {
      this.m.fN = a || u();
    },
    setResultsHtmlSetCallback: function(a) {
      this.m.iN = a || u();
    },
    Em: x("Se"),
  });
  var ve = {
    AG: D.td,
    lb: function(a, b, c, e, f) {
      this.VZ(b);
      var g = (1e5 * Math.random()).toFixed(0);
      D._rd["_cbk" + g] = function(b) {
        b.result && b.result.error && 202 === b.result.error
          ? alert(
              "\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01"
            )
          : ((c = c || {}), a && a(b, c), delete D._rd["_cbk" + g]);
      };
      e = e || "";
      b = c && c.L0 ? Jb(b, encodeURI) : Jb(b, encodeURIComponent);
      this.AG = c && c.VK ? (c.HN ? c.HN : D.Fp) : D.td;
      e = this.AG + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi&v=3.0";
      f || (e += "&res=api");
      e += "&ak=" + qa;
      pa(e + ("&callback=BMap._rd._cbk" + g));
    },
    VZ: function(a) {
      if (a.qt) {
        var b = "";
        switch (a.qt) {
          case "bt":
            b = "z_qt|bt";
            break;
          case "nav":
            b = "z_qt|nav";
            break;
          case "walk":
            b = "z_qt|walk";
            break;
          case "bse":
            b = "z_qt|bse";
            break;
          case "nse":
            b = "z_qt|nse";
            break;
          case "drag":
            b = "z_qt|drag";
        }
        "" !== b && D.alog("cus.fire", "count", b);
      }
    },
  };
  window.v1 = ve;
  D._rd = {};
  var eb = {};
  window.u1 = eb;
  eb.YE = function(a) {
    a = a.replace(/<\/?[^>]*>/g, "");
    return (a = a.replace(/[ | ]* /g, " "));
  };
  eb.BZ = function(a) {
    return a.replace(
      /([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g,
      "$1,$2;"
    );
  };
  eb.CZ = function(a, b) {
    return a.replace(
      RegExp(
        "(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" +
          b +
          "}",
        "ig"
      ),
      "$1"
    );
  };
  var we = 2,
    xe = 6,
    ye = 8,
    ze = 2,
    Ae = 3,
    Be = 6,
    Ce = 0,
    De = "bt",
    Ee = "nav",
    Fe = "walk",
    Ge = "bl",
    Ke = "bsl",
    Le = "ride",
    Me = 15,
    Ne = 18;
  D.I = window.Instance = A.lang.Sc;

  function Oe(a, b, c) {
    A.lang.Ja.call(this);
    if (a) {
      this.cb = "object" == typeof a ? a : A.Hc(a);
      this.page = 1;
      this.Od = 100;
      this.UJ = "pg";
      this.bg = 4;
      this.eK = b;
      this.update = p;
      a = {
        page: 1,
        m6: 100,
        Od: 100,
        bg: 4,
        UJ: "pg",
        update: p,
      };
      c || (c = a);
      for (var e in c) "undefined" != typeof c[e] && (this[e] = c[e]);
      this.Ba();
    }
  }
  A.extend(Oe.prototype, {
    Ba: function() {
      this.za();
    },
    za: function() {
      this.sV();
      this.cb.innerHTML = this.RV();
    },
    sV: function() {
      isNaN(parseInt(this.page)) && (this.page = 1);
      isNaN(parseInt(this.Od)) && (this.Od = 1);
      1 > this.page && (this.page = 1);
      1 > this.Od && (this.Od = 1);
      this.page > this.Od && (this.page = this.Od);
      this.page = parseInt(this.page);
      this.Od = parseInt(this.Od);
    },
    U3: function() {
      location.search.match(RegExp("[?&]?" + this.UJ + "=([^&]*)[&$]?", "gi"));
      this.page = RegExp.$1;
    },
    RV: function() {
      var a = [],
        b = this.page - 1,
        c = this.page + 1;
      a.push('<p style="margin:0;padding:0;white-space:nowrap">');
      if (!(1 > b)) {
        if (this.page >= this.bg) {
          var e;
          a.push(
            '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace(
              "{temp1}",
              "BMap.I('" + this.da + "').toPage(1);"
            )
          );
        }
        a.push(
          '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace(
            "{temp2}",
            "BMap.I('" + this.da + "').toPage(" + b + ");"
          )
        );
      }
      if (this.page < this.bg)
        (e =
          0 == this.page % this.bg
            ? this.page - this.bg - 1
            : this.page - (this.page % this.bg) + 1),
          (b = e + this.bg - 1);
      else {
        e = Math.floor(this.bg / 2);
        var f = (this.bg % 2) - 1,
          b = this.Od > this.page + e ? this.page + e : this.Od;
        e = this.page - e - f;
      }
      this.page > this.Od - this.bg &&
        this.page >= this.bg &&
        ((e = this.Od - this.bg + 1), (b = this.Od));
      for (f = e; f <= b; f++)
        0 < f &&
          (f == this.page
            ? a.push('<span style="margin-right:3px">' + f + "</span>")
            : 1 <= f &&
              f <= this.Od &&
              ((e =
                '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' +
                f +
                "]</a></span>"),
              a.push(
                e.replace(
                  "{temp3}",
                  "BMap.I('" + this.da + "').toPage(" + f + ");"
                )
              )));
      c > this.Od ||
        a.push(
          '<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace(
            "{temp4}",
            "BMap.I('" + this.da + "').toPage(" + c + ");"
          )
        );
      a.push("</p>");
      return a.join("");
    },
    toPage: function(a) {
      a = a ? a : 1;
      "function" == typeof this.eK && (this.eK(a), (this.page = a));
      this.update && this.Ba();
    },
  });

  function gb(a, b) {
    Y.call(this, a, b);
    b = b || {};
    b.renderOptions = b.renderOptions || {};
    this.gn(b.pageCapacity);
    "undefined" != typeof b.renderOptions.selectFirstResult &&
    !b.renderOptions.selectFirstResult
      ? this.HC()
      : this.aD();
    this.ta = [];
    this.Cf = [];
    this.La = -1;
    this.Qa = [];
    var c = this;
    Ua.load(
      "local",
      function() {
        c.xz();
      },
      p
    );
  }
  A.xa(gb, Y, "LocalSearch");
  gb.qq = 10;
  gb.q1 = 1;
  gb.Dn = 100;
  gb.oG = 2e3;
  gb.xG = 1e5;
  A.extend(gb.prototype, {
    search: function(a, b) {
      this.Qa.push({
        method: "search",
        arguments: [a, b],
      });
    },
    bn: function(a, b, c) {
      this.Qa.push({
        method: "searchInBounds",
        arguments: [a, b, c],
      });
    },
    Vp: function(a, b, c, e) {
      this.Qa.push({
        method: "searchNearby",
        arguments: [a, b, c, e],
      });
    },
    we: function() {
      delete this.Ka;
      delete this.Se;
      delete this.ja;
      delete this.ra;
      this.La = -1;
      this.Va();
      this.m.ma.Aa && (this.m.ma.Aa.innerHTML = "");
    },
    Hm: u(),
    aD: function() {
      this.m.ma.Xt = p;
    },
    HC: function() {
      this.m.ma.Xt = t;
    },
    gn: function(a) {
      this.m.Qk =
        "number" == typeof a && !isNaN(a)
          ? 1 > a
            ? gb.qq
            : a > gb.Dn
            ? gb.qq
            : a
          : gb.qq;
    },
    tf: function() {
      return this.m.Qk;
    },
    toString: ea("LocalSearch"),
  });
  var Pe = gb.prototype;
  V(Pe, {
    clearResults: Pe.we,
    setPageCapacity: Pe.gn,
    getPageCapacity: Pe.tf,
    gotoPage: Pe.Hm,
    searchNearby: Pe.Vp,
    searchInBounds: Pe.bn,
    search: Pe.search,
    enableFirstResultSelection: Pe.aD,
    disableFirstResultSelection: Pe.HC,
  });

  function Qe(a, b) {
    Y.call(this, a, b);
  }
  A.xa(Qe, Y, "BaseRoute");
  A.extend(Qe.prototype, {
    we: u(),
  });

  function Re(a, b) {
    Y.call(this, a, b);
    b = b || {};
    this.hn(b.policy);
    this.nF(b.intercityPolicy);
    this.sF(b.transitTypePolicy);
    this.gn(b.pageCapacity);
    this.Eb = De;
    this.En = ue;
    this.ta = [];
    this.La = -1;
    this.m.sl = b.enableTraffic || t;
    this.Qa = [];
    var c = this;
    Ua.load("route", function() {
      c.Dd();
    });
  }
  Re.Dn = 100;
  Re.pP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
  Re.qP = [0, 3, 4, 0, 0, 0, 5];
  A.xa(Re, Qe, "TransitRoute");
  A.extend(Re.prototype, {
    hn: function(a) {
      this.m.Pd = 0 <= a && 5 >= a ? a : 0;
    },
    nF: function(a) {
      this.m.Mm = 0 <= a && 2 >= a ? a : 0;
    },
    sF: function(a) {
      this.m.nn = 0 <= a && 2 >= a ? a : 0;
    },
    yA: function(a, b) {
      this.Qa.push({
        method: "_internalSearch",
        arguments: [a, b],
      });
    },
    search: function(a, b) {
      this.Qa.push({
        method: "search",
        arguments: [a, b],
      });
    },
    gn: function(a) {
      if ("string" === typeof a && ((a = parseInt(a, 10)), isNaN(a))) {
        this.m.Qk = Re.Dn;
        return;
      }
      this.m.Qk =
        "number" !== typeof a
          ? Re.Dn
          : 1 <= a && a <= Re.Dn
          ? Math.round(a)
          : Re.Dn;
    },
    toString: ea("TransitRoute"),
    i2: function(a) {
      return a.replace(/\(.*\)/, "");
    },
  });
  var Se = Re.prototype;
  V(Se, {
    _internalSearch: Se.yA,
  });

  function Te(a, b) {
    Y.call(this, a, b);
    this.ta = [];
    this.La = -1;
    this.Qa = [];
    var c = this,
      e = this.m.ma;
    1 !== e.Im && 2 !== e.Im && (e.Im = 1);
    this.Un = this.m.ma.jc ? p : t;
    Ua.load("route", function() {
      c.Dd();
    });
    this.Lx && this.Lx();
  }
  Te.FP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(
    " "
  );
  A.xa(Te, Qe, "DWRoute");
  A.extend(Te.prototype, {
    search: function(a, b, c) {
      this.Qa.push({
        method: "search",
        arguments: [a, b, c],
      });
    },
  });

  function Ue(a, b) {
    Te.call(this, a, b);
    b = b || {};
    this.m.sl = b.enableTraffic || t;
    this.hn(b.policy);
    this.Eb = Ee;
    this.En = Ae;
  }
  A.xa(Ue, Te, "DrivingRoute");
  Ue.prototype.hn = function(a) {
    this.m.Pd = 0 <= a && 5 >= a ? a : 0;
  };

  function Ve(a, b) {
    Te.call(this, a, b);
    this.Eb = Fe;
    this.En = ze;
    this.Un = t;
  }
  A.xa(Ve, Te, "WalkingRoute");

  function We(a, b) {
    Te.call(this, a, b);
    b = b || {};
    this.m.sl = b.enableTraffic || t;
    this.JS = b.renderOptions.lineType || 0;
    this.Eb = Ee;
    this.En = Ae;
  }
  A.xa(We, Te, "TruckRoute");
  We.prototype.hn = function(a) {
    this.m.Pd = 0 <= a && 5 >= a ? a : 0;
  };

  function Xe(a, b) {
    Te.call(this, a, b);
    this.Eb = Le;
    this.En = Be;
    this.Un = t;
  }
  A.xa(Xe, Te, "RidingRoute");

  function Ye(a, b) {
    A.lang.Ja.call(this);
    this.Yf = [];
    this.Sk = [];
    this.m = b;
    this.Aj = a;
    this.map = this.m.ma.map || q;
    this.PN = this.m.PN;
    this.Fb = q;
    this.wk = 0;
    this.DF = "";
    this.qf = 1;
    this.hD = "";
    this.Qp = [0, 0, 0, 0, 0, 0, 0];
    this.EM = [];
    this.qs = [1, 1, 1, 1, 1, 1, 1];
    this.AO = [1, 1, 1, 1, 1, 1, 1];
    this.Rp = [0, 0, 0, 0, 0, 0, 0];
    this.$m = [0, 0, 0, 0, 0, 0, 0];
    this.Ib = [
      {
        B: "",
        Id: 0,
        qn: 0,
        x: 0,
        y: 0,
        sa: -1,
      },
      {
        B: "",
        Id: 0,
        qn: 0,
        x: 0,
        y: 0,
        sa: -1,
      },
      {
        B: "",
        Id: 0,
        qn: 0,
        x: 0,
        y: 0,
        sa: -1,
      },
      {
        B: "",
        Id: 0,
        qn: 0,
        x: 0,
        y: 0,
        sa: -1,
      },
      {
        B: "",
        Id: 0,
        qn: 0,
        x: 0,
        y: 0,
        sa: -1,
      },
      {
        B: "",
        Id: 0,
        qn: 0,
        x: 0,
        y: 0,
        sa: -1,
      },
      {
        B: "",
        Id: 0,
        qn: 0,
        x: 0,
        y: 0,
        sa: -1,
      },
    ];
    this.fi = -1;
    this.uu = [];
    this.OF = [];
    Ua.load("route", u());
  }
  A.lang.xa(Ye, A.lang.Ja, "RouteAddr");
  var Ze = navigator.userAgent;
  /ipad|iphone|ipod|iph/i.test(Ze);
  var $e = /android/i.test(Ze);

  function af(a) {
    this.af = a || {};
  }
  A.extend(af.prototype, {
    ON: function(a, b, c) {
      var e = this;
      Ua.load("route", function() {
        e.Dd(a, b, c);
      });
    },
  });

  function bf(a) {
    this.m = {};
    A.extend(this.m, a);
    this.Qa = [];
    var b = this;
    Ua.load("othersearch", function() {
      b.Dd();
    });
  }
  A.xa(bf, A.lang.Ja, "Geocoder");
  A.extend(bf.prototype, {
    Dm: function(a, b, c) {
      this.Qa.push({
        method: "getPoint",
        arguments: [a, b, c],
      });
    },
    Am: function(a, b, c) {
      this.Qa.push({
        method: "getLocation",
        arguments: [a, b, c],
      });
    },
    toString: ea("Geocoder"),
  });
  var cf = bf.prototype;
  V(cf, {
    getPoint: cf.Dm,
    getLocation: cf.Am,
  });

  function Geolocation(a) {
    a = a || {};
    this.M = {
      timeout: a.timeout || 1e4,
      maximumAge: a.maximumAge || 6e5,
      enableHighAccuracy: a.enableHighAccuracy || t,
      Ii: a.SDKLocation || t,
    };
    this.ue = [];
    var b = this;
    Ua.load("othersearch", function() {
      for (var a = 0, e; (e = b.ue[a]); a++) b[e.method].apply(b, e.arguments);
    });
  }
  A.extend(Geolocation.prototype, {
    getCurrentPosition: function(a, b) {
      this.ue.push({
        method: "getCurrentPosition",
        arguments: arguments,
      });
    },
    getStatus: function() {
      return we;
    },
    enableSDKLocation: function() {
      I() && (this.M.Ii = p);
    },
    disableSDKLocation: function() {
      this.M.Ii = t;
    },
  });

  function df(a) {
    a = a || {};
    a.ma = a.renderOptions || {};
    this.m = {
      ma: {
        map: a.ma.map || q,
      },
    };
    this.Qa = [];
    var b = this;
    Ua.load("othersearch", function() {
      b.Dd();
    });
  }
  A.xa(df, A.lang.Ja, "LocalCity");
  A.extend(df.prototype, {
    get: function(a) {
      this.Qa.push({
        method: "get",
        arguments: [a],
      });
    },
    toString: ea("LocalCity"),
  });

  function ef() {
    this.Qa = [];
    var a = this;
    Ua.load("othersearch", function() {
      a.Dd();
    });
  }
  A.xa(ef, A.lang.Ja, "Boundary");
  A.extend(ef.prototype, {
    get: function(a, b) {
      this.Qa.push({
        method: "get",
        arguments: [a, b],
      });
    },
    toString: ea("Boundary"),
  });

  function ff(a, b) {
    Y.call(this, a, b);
    this.CP = Ge;
    this.EP = Me;
    this.BP = Ke;
    this.DP = Ne;
    this.Qa = [];
    var c = this;
    Ua.load("buslinesearch", function() {
      c.Dd();
    });
  }
  ff.yv = H.ua + "iw_plus.gif";
  ff.xS = H.ua + "iw_minus.gif";
  ff.nU = H.ua + "stop_icon.png";
  A.xa(ff, Y);
  A.extend(ff.prototype, {
    getBusList: function(a) {
      this.Qa.push({
        method: "getBusList",
        arguments: [a],
      });
    },
    getBusLine: function(a) {
      this.Qa.push({
        method: "getBusLine",
        arguments: [a],
      });
    },
    setGetBusListCompleteCallback: function(a) {
      this.m.eN = a || u();
    },
    setGetBusLineCompleteCallback: function(a) {
      this.m.dN = a || u();
    },
    setBusListHtmlSetCallback: function(a) {
      this.m.bN = a || u();
    },
    setBusLineHtmlSetCallback: function(a) {
      this.m.aN = a || u();
    },
    setPolylinesSetCallback: function(a) {
      this.m.ME = a || u();
    },
  });

  function gf(a) {
    Y.call(this, a);
    a = a || {};
    this.fb = {
      input: a.input || q,
      aC: a.baseDom || q,
      types: a.types || [],
      Lt: a.onSearchComplete || u(),
    };
    this.md.src = a.location || "\u5168\u56fd";
    this.gj = "";
    this.sg = q;
    this.WH = "";
    this.Vi();
    Sa(Ka);
    var b = this;
    Ua.load("autocomplete", function() {
      b.Dd();
    });
  }
  A.xa(gf, Y, "Autocomplete");
  A.extend(gf.prototype, {
    Vi: u(),
    show: u(),
    aa: u(),
    tF: function(a) {
      this.fb.types = a;
    },
    fn: function(a) {
      this.md.src = a;
    },
    search: ca("gj"),
    zy: ca("WH"),
    du: function(a) {
      this.fb.Lt = a;
    },
  });
  var Wa;

  function Qa(a, b) {
    function c() {
      f.m.visible
        ? ("inter" === f.Pe &&
          Xa() &&
          f.m.haveBreakId &&
          f.m.indoorExitControl === p
            ? A.U.show(f.ir)
            : A.U.aa(f.ir),
          this.m.closeControl && this.Gf && this.P && this.P.Ta() === this.R
            ? A.U.show(f.Gf)
            : A.U.aa(f.Gf),
          this.m.forceCloseControl && A.U.show(f.Gf))
        : (A.U.aa(f.Gf), A.U.aa(f.ir));
    }
    this.R = "string" == typeof a ? A.fa(a) : a;
    this.da = hf++;
    this.m = {
      enableScrollWheelZoom: p,
      panoramaRenderer: Pa() ? "javascript" : "flash",
      swfSrc: D.mi("main_domain_nocdn", "res/swf/") + "APILoader.swf",
      visible: p,
      indoorExitControl: p,
      indoorFloorControl: t,
      linksControl: p,
      clickOnRoad: p,
      navigationControl: p,
      closeControl: p,
      indoorSceneSwitchControl: p,
      albumsControl: t,
      albumsControlOptions: {},
      copyrightControlOptions: {},
      forceCloseControl: t,
      haveBreakId: t,
    };
    var b = b || {},
      e;
    for (e in b) this.m[e] = b[e];
    b.closeControl === p && (this.m.forceCloseControl = p);
    b.useWebGL === t && Pa(t);
    this.Oa = {
      heading: 0,
      pitch: 0,
    };
    this.bo = [];
    this.Mb = this.hb = q;
    this.lk = this.fr();
    this.ta = [];
    this.Qc = 1;
    this.Pe = this.VS = this.Wg = "";
    this.Oe = {};
    this.Sf = q;
    this.eh = [];
    this.xr = [];
    "cvsRender" == this.lk || Pa()
      ? ((this.ek = 90), (this.gk = -90))
      : "cssRender" == this.lk && ((this.ek = 45), (this.gk = -45));
    this.Cr = t;
    var f = this;
    this.co = function() {
      this.lk === "flashRender"
        ? Ua.load(
            "panoramaflash",
            function() {
              f.Vi();
            },
            p
          )
        : Ua.load(
            "panorama",
            function() {
              f.ob();
            },
            p
          );
      b.Ye == "api" ? Sa(Fa) : Sa(Ha);
      this.co = u();
    };
    this.m.HS !== p &&
      (this.co(), D.Bq("cus.fire", "count", "z_loadpanoramacount"));
    this.AT(this.R);
    this.addEventListener("id_changed", function() {
      Sa(Ea, {
        from: b.Ye,
      });
    });
    this.QP();
    this.addEventListener("indoorexit_options_changed", c);
    this.addEventListener("scene_type_changed", c);
    this.addEventListener("onclose_options_changed", c);
    this.addEventListener("onvisible_changed", c);
  }
  var jf = 4,
    kf = 1,
    lf = 5,
    hf = 0;
  A.lang.xa(Qa, A.lang.Ja, "Panorama");
  A.extend(Qa.prototype, {
    QP: function() {
      var a = this,
        b = (this.Gf = L("div"));
      b.className = "pano_close";
      b.style.cssText = "z-index: 1201;display: none";
      b.title = "\u9000\u51fa\u5168\u666f";
      b.onclick = function() {
        a.aa();
      };
      this.R.appendChild(b);
      var c = (this.ir = L("a"));
      c.className = "pano_pc_indoor_exit";
      c.style.cssText = "z-index: 1201;display: none";
      c.innerHTML =
        '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
      c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
      c.onclick = function() {
        a.ep();
      };
      this.R.appendChild(c);
      window.ActiveXObject &&
        !document.addEventListener &&
        ((b.style.backgroundColor = "rgb(37,37,37)"),
        (c.style.backgroundColor = "rgb(37,37,37)"));
    },
    ep: u(),
    AT: function(a) {
      var b, c;
      b = a.style;
      c = Ya(a).position;
      "absolute" != c &&
        "relative" != c &&
        ((b.position = "relative"), (b.zIndex = 0));
      if ("absolute" === c || "relative" === c)
        if (((a = Ya(a).zIndex), !a || "auto" === a)) b.zIndex = 0;
    },
    zX: x("bo"),
    Zb: x("hb"),
    ZX: x("gw"),
    eO: x("gw"),
    na: x("Mb"),
    Na: x("Oa"),
    ka: x("Qc"),
    Bg: x("Wg"),
    W3: function() {
      return this.e2 || [];
    },
    P3: x("VS"),
    ct: x("Pe"),
    Cy: function(a) {
      a !== this.Pe &&
        ((this.Pe = a), this.dispatchEvent(new P("onscene_type_changed")));
    },
    dO: function(a) {
      a !== lf && (lf = a);
    },
    ZN: function(a) {
      a !== jf && (jf = a);
    },
    Fc: function(a, b, c) {
      "object" === typeof b && ((c = b), (b = l));
      a != this.hb &&
        ((this.Bl = this.hb),
        (this.Cl = this.Mb),
        (this.hb = a),
        (this.Pe = b || "street"),
        (this.Mb = q),
        c && c.pov && this.xd(c.pov));
    },
    va: function(a) {
      a.Ub(this.Mb) ||
        ((this.Bl = this.hb),
        (this.Cl = this.Mb),
        (this.Mb = a),
        (this.hb = q));
    },
    xd: function(a) {
      if (a) {
        var a = this.Oa.pitch,
          b = this.Oa.heading,
          b = this.AC(b);
        a > this.ek ? (a = this.ek) : a < this.gk && (a = this.gk);
        this.Cr = p;
        this.Oa.pitch = a;
        this.Oa.heading = b;
      }
    },
    I_: function(a, b) {
      this.gk = 0 <= a ? 0 : a;
      this.ek = 0 >= b ? 0 : b;
    },
    AC: function(a) {
      return a - 360 * Math.floor(a / 360);
    },
    Wc: function(a) {
      a != this.Qc &&
        (a > jf && (a = jf),
        a < kf && (a = kf),
        a != this.Qc && (this.Qc = a),
        "cssRender" === this.lk && this.xd(this.Oa));
    },
    uB: function() {
      if (this.P)
        for (var a = this.P.ux(), b = 0; b < a.length; b++)
          (a[b] instanceof W || a[b] instanceof dd) &&
            a[b].point &&
            this.ta.push(a[b]);
    },
    oF: ca("P"),
    cu: function(a) {
      this.Sf = a || "none";
    },
    Fj: function(a) {
      for (var b in a) {
        if ("object" == typeof a[b]) for (var c in a[b]) this.m[b][c] = a[b][c];
        else this.m[b] = a[b];
        a.closeControl === p && (this.m.forceCloseControl = p);
        a.closeControl === t && (this.m.forceCloseControl = t);
        switch (b) {
          case "linksControl":
            this.dispatchEvent(new P("onlinks_visible_changed"));
            break;
          case "clickOnRoad":
            this.dispatchEvent(new P("onclickonroad_changed"));
            break;
          case "navigationControl":
            this.dispatchEvent(new P("onnavigation_visible_changed"));
            break;
          case "indoorSceneSwitchControl":
            this.dispatchEvent(new P("onindoor_default_switch_mode_changed"));
            break;
          case "albumsControl":
            this.dispatchEvent(new P("onalbums_visible_changed"));
            break;
          case "albumsControlOptions":
            this.dispatchEvent(new P("onalbums_options_changed"));
            break;
          case "copyrightControlOptions":
            this.dispatchEvent(new P("oncopyright_options_changed"));
            break;
          case "closeControl":
            this.dispatchEvent(new P("onclose_options_changed"));
            break;
          case "indoorExitControl":
            this.dispatchEvent(new P("onindoorexit_options_changed"));
            break;
          case "indoorFloorControl":
            this.dispatchEvent(new P("onindoorfloor_options_changed"));
        }
      }
    },
    Mk: function() {
      this.Kl.style.visibility = "hidden";
    },
    Gy: function() {
      this.Kl.style.visibility = "visible";
    },
    IW: function() {
      this.m.enableScrollWheelZoom = p;
    },
    iW: function() {
      this.m.enableScrollWheelZoom = t;
    },
    show: function() {
      this.m.visible = p;
    },
    aa: function() {
      this.m.visible = t;
    },
    fr: function() {
      return Xa() && !I() && "javascript" != this.m.panoramaRenderer
        ? "flashRender"
        : !I() && Rb()
        ? "cvsRender"
        : "cssRender";
    },
    Ra: function(a) {
      this.Oe[a.od] = a;
    },
    Jb: function(a) {
      delete this.Oe[a];
    },
    zx: function() {
      return this.m.visible;
    },
    ph: function() {
      return new N(this.R.clientWidth, this.R.clientHeight);
    },
    Ta: x("R"),
    jL: function() {
      var a = D.mi("baidumap", "?"),
        b = this.Zb();
      if (b) {
        var b = {
            panotype: this.ct(),
            heading: this.Na().heading,
            pitch: this.Na().pitch,
            pid: b,
            panoid: b,
            from: "api",
          },
          c;
        for (c in b) a += c + "=" + b[c] + "&";
      }
      return a.slice(0, -1);
    },
    Ex: function() {
      this.Fj({
        copyrightControlOptions: {
          logoVisible: t,
        },
      });
    },
    xF: function() {
      this.Fj({
        copyrightControlOptions: {
          logoVisible: p,
        },
      });
    },
    SB: function(a) {
      function b(a, b) {
        return function() {
          a.xr.push({
            QM: b,
            PM: arguments,
          });
        };
      }
      for (
        var c = a.getPanoMethodList(), e = "", f = 0, g = c.length;
        f < g;
        f++
      )
        (e = c[f]), (this[e] = b(this, e));
      this.eh.push(a);
    },
    ZE: function(a) {
      for (var b = this.eh.length; b--; )
        this.eh[b] === a && this.eh.splice(b, 1);
    },
    mF: u(),
  });
  var mf = Qa.prototype;
  V(mf, {
    setId: mf.Fc,
    setPosition: mf.va,
    setPov: mf.xd,
    setZoom: mf.Wc,
    setOptions: mf.Fj,
    getId: mf.Zb,
    getPosition: mf.na,
    getPov: mf.Na,
    getZoom: mf.ka,
    getLinks: mf.zX,
    getBaiduMapUrl: mf.jL,
    hideMapLogo: mf.Ex,
    showMapLogo: mf.xF,
    enableDoubleClickZoom: mf.f3,
    disableDoubleClickZoom: mf.W2,
    enableScrollWheelZoom: mf.IW,
    disableScrollWheelZoom: mf.iW,
    show: mf.show,
    hide: mf.aa,
    addPlugin: mf.SB,
    removePlugin: mf.ZE,
    getVisible: mf.zx,
    addOverlay: mf.Ra,
    removeOverlay: mf.Jb,
    getSceneType: mf.ct,
    setPanoramaPOIType: mf.cu,
    exitInter: mf.ep,
    setInteractiveState: mf.mF,
  });
  V(window, {
    BMAP_PANORAMA_POI_HOTEL: "hotel",
    BMAP_PANORAMA_POI_CATERING: "catering",
    BMAP_PANORAMA_POI_MOVIE: "movie",
    BMAP_PANORAMA_POI_TRANSIT: "transit",
    BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
    BMAP_PANORAMA_POI_NONE: "none",
    BMAP_PANORAMA_INDOOR_SCENE: "inter",
    BMAP_PANORAMA_STREET_SCENE: "street",
  });

  function nf() {
    A.lang.Ja.call(this);
    this.od = "PanoramaOverlay_" + this.da;
    this.W = q;
    this.Wa = p;
  }
  A.lang.xa(nf, A.lang.Ja, "PanoramaOverlayBase");
  A.extend(nf.prototype, {
    S3: x("od"),
    za: function() {
      ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    remove: function() {
      ba("remove\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    Rf: function() {
      ba("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
  });

  function of(a, b) {
    nf.call(this);
    var c = {
        position: q,
        altitude: 2,
        displayDistance: p,
      },
      b = b || {},
      e;
    for (e in b) c[e] = b[e];
    this.Mb = c.position;
    this.Rj = a;
    this.Cq = c.altitude;
    this.cR = c.displayDistance;
    this.GF = c.color;
    this.XL = c.hoverColor;
    this.backgroundColor = c.backgroundColor;
    this.XJ = c.backgroundHoverColor;
    this.borderColor = c.borderColor;
    this.aK = c.borderHoverColor;
    this.fontSize = c.fontSize;
    this.padding = c.padding;
    this.cE = c.imageUrl;
    this.size = c.size;
    this.Ce = c.image;
    this.width = c.width;
    this.height = c.height;
    this.qY = c.imageData;
    this.borderWidth = c.borderWidth;
  }
  A.lang.xa(of, nf, "PanoramaLabel");
  A.extend(of.prototype, {
    v3: x("borderWidth"),
    getImageData: x("qY"),
    Gm: x("GF"),
    K3: x("XL"),
    r3: x("backgroundColor"),
    s3: x("XJ"),
    t3: x("borderColor"),
    u3: x("aK"),
    I3: x("fontSize"),
    T3: x("padding"),
    L3: x("cE"),
    yb: x("size"),
    nx: x("Ce"),
    va: function(a) {
      this.Mb = a;
      this.Rf("position", a);
    },
    na: x("Mb"),
    Oc: function(a) {
      this.Rj = a;
      this.Rf("content", a);
    },
    Dk: x("Rj"),
    gF: function(a) {
      this.Cq = a;
      this.Rf("altitude", a);
    },
    ip: x("Cq"),
    Na: function() {
      var a = this.na(),
        b = q,
        c = q;
      this.W && (c = this.W.na());
      if (a && c)
        if (a.Ub(c)) b = this.W.Na();
        else {
          b = {};
          b.heading = pf(a.lng - c.lng, a.lat - c.lat) || 0;
          var a = b,
            c = this.ip(),
            e = this.Xn();
          a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0;
        }
      return b;
    },
    Xn: function() {
      var a = 0,
        b,
        c;
      this.W &&
        ((b = this.W.na()), (c = this.na()) && !c.Ub(b) && (a = T.Ek(b, c)));
      return a;
    },
    aa: function() {
      ba("hide\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    show: function() {
      ba("show\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    Rf: u(),
  });
  var qf = of.prototype;
  V(qf, {
    setPosition: qf.va,
    getPosition: qf.na,
    setContent: qf.Oc,
    getContent: qf.Dk,
    setAltitude: qf.gF,
    getAltitude: qf.ip,
    getPov: qf.Na,
    show: qf.show,
    hide: qf.aa,
  });

  function rf(a, b) {
    nf.call(this);
    var c = {
        icon: "",
        title: "",
        panoInfo: q,
        altitude: 2,
      },
      b = b || {},
      e;
    for (e in b) c[e] = b[e];
    this.Mb = a;
    this.TH = c.icon;
    this.qJ = c.title;
    this.Cq = c.altitude;
    this.mT = c.panoInfo;
    this.Oa = {
      heading: 0,
      pitch: 0,
    };
  }
  A.lang.xa(rf, nf, "PanoramaMarker");
  A.extend(rf.prototype, {
    va: function(a) {
      this.Mb = a;
      this.Rf("position", a);
    },
    na: x("Mb"),
    Gc: function(a) {
      this.qJ = a;
      this.Rf("title", a);
    },
    qp: x("qJ"),
    Wb: function(a) {
      this.TH = icon;
      this.Rf("icon", a);
    },
    kp: x("TH"),
    gF: function(a) {
      this.Cq = a;
      this.Rf("altitude", a);
    },
    ip: x("Cq"),
    ND: x("mT"),
    Na: function() {
      var a = q;
      if (this.W) {
        var a = this.W.na(),
          b = this.na(),
          a = pf(b.lng - a.lng, b.lat - a.lat);
        isNaN(a) && (a = 0);
        a = {
          heading: a,
          pitch: 0,
        };
      } else a = this.Oa;
      return a;
    },
    Rf: u(),
  });
  var sf = rf.prototype;
  V(sf, {
    setPosition: sf.va,
    getPosition: sf.na,
    setTitle: sf.Gc,
    getTitle: sf.qp,
    setAltitude: sf.gF,
    getAltitude: sf.ip,
    getPanoInfo: sf.ND,
    getIcon: sf.kp,
    setIcon: sf.Wb,
    getPov: sf.Na,
  });

  function pf(a, b) {
    var c = 0;
    if (0 !== a && 0 !== b) {
      var c = 180 * (Math.atan(a / b) / Math.PI),
        e = 0;
      0 < a && 0 > b && (e = 90);
      0 > a && 0 > b && (e = 180);
      0 > a && 0 < b && (e = 270);
      c = ((c + 90) % 90) + e;
    } else 0 === a ? (c = 0 > b ? 180 : 0) : 0 === b && (c = 0 < a ? 90 : 270);
    return Math.round(c);
  }

  function Pa(a) {
    if ("boolean" === typeof tf) return tf;
    if (a === t || !window.WebGLRenderingContext) return (tf = t);
    if (A.platform.xj) {
      a = 0;
      try {
        var b = q,
          c = navigator.userAgent.toLowerCase();
        0 < c.indexOf("android") &&
          ((b = (c.match(/android [\d._]+/gi) + "")
            .replace(/[^0-9|_.]/gi, "")
            .replace(/_/gi, ".")),
          (b = parseInt(b.split(".")[0], 10)));
        a = b;
      } catch (e) {
        console.error(
          "\u83b7\u53d6\u5b89\u5353\u7248\u672c\u5931\u8d25 => " + e
        );
      }
      if (5 > a) return (tf = t);
    }
    c = document.createElement("canvas");
    a = q;
    try {
      a = c.getContext("webgl");
    } catch (f) {
      tf = t;
    }
    return (tf = a === q ? t : p);
  }
  var tf;

  function uf() {
    if ("boolean" === typeof vf) return vf;
    vf = p;
    if (A.platform.mE) return p;
    var a = navigator.userAgent;
    return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508")
      ? p
      : (vf = t);
  }
  var vf;

  function Nc(a, b) {
    this.W = a || q;
    var c = this;
    c.W && c.ha();
    Ua.load("pservice", function() {
      c.vQ();
    });
    "api" == (b || {}).Ye ? Sa(Ia) : Sa(Ja);
    this.Cd = {
      getPanoramaById: [],
      getPanoramaByLocation: [],
      getVisiblePOIs: [],
      getRecommendPanosById: [],
      getPanoramaVersions: [],
      checkPanoSupportByCityCode: [],
      getPanoramaByPOIId: [],
      getCopyrightProviders: [],
    };
  }
  D.Rk(function(a) {
    "flashRender" !== a.fr() &&
      new Nc(a, {
        Ye: "api",
      });
  });
  A.extend(Nc.prototype, {
    ha: function() {
      function a(a) {
        if (a) {
          if (a.id != b.gw) {
            b.eO(a.id);
            b.ia = a;
            uf() || b.dispatchEvent(new P("onthumbnail_complete"));
            b.hb != q && (b.Cl = b._position);
            for (var c in a)
              if (a.hasOwnProperty(c))
                switch (((b["_" + c] = a[c]), c)) {
                  case "position":
                    b.Mb = a[c];
                    break;
                  case "id":
                    b.hb = a[c];
                    break;
                  case "links":
                    b.bo = a[c];
                    break;
                  case "zoom":
                    b.Qc = a[c];
                }
            if (b.Cl) {
              var g = b.Cl,
                i = b._position;
              c = g.lat;
              var k = i.lat,
                m = U(k - c),
                g = U(i.lng - g.lng);
              c =
                Math.sin(m / 2) * Math.sin(m / 2) +
                Math.cos(U(c)) *
                  Math.cos(U(k)) *
                  Math.sin(g / 2) *
                  Math.sin(g / 2);
              b.lH = 6371e3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
            }
            c = new P("ondataload");
            b.show();
            c.data = a;
            b.dispatchEvent(c);
            b.dispatchEvent(new P("onposition_changed"));
            b.dispatchEvent(new P("onlinks_changed"));
            b.dispatchEvent(new P("oncopyright_changed"), {
              copyright: a.copyright,
            });
            a.jm
              ? (b.Fj({
                  haveBreakId: p,
                }),
                Xa() && b.m.closeControl && A.U.show(b.ir))
              : A.U.aa(b.ir);
          }
        } else
          (b.hb = b.Bl), (b.Mb = b.Cl), b.dispatchEvent(new P("onnoresult"));
      }
      var b = this.W,
        c = this;
      b.addEventListener("id_changed", function() {
        c.op(b.Zb(), a);
      });
      b.addEventListener("iid_changed", function() {
        c.fh(Nc.ml + "qt=idata&iid=" + b.oA + "&fn=", function(b) {
          if (b && b.result && 0 == b.result.error) {
            var b = b.content[0].interinfo,
              f = {};
            f.jm = b.BreakID;
            for (var g = b.Defaultfloor, i = q, k = 0; k < b.Floors.length; k++)
              if (b.Floors[k].Floor == g) {
                i = b.Floors[k];
                break;
              }
            f.id = i.StartID || i.Points[0].PID;
            c.op(f.id, a, f);
          }
        });
      });
      b.addEventListener("position_changed_inner", function() {
        c.sj(b.na(), a);
      });
    },
    op: function(a, b) {
      this.Cd.getPanoramaById.push(arguments);
    },
    sj: function(a, b, c) {
      this.Cd.getPanoramaByLocation.push(arguments);
    },
    XD: function(a, b, c, e) {
      this.Cd.getVisiblePOIs.push(arguments);
    },
    xx: function(a, b) {
      this.Cd.getRecommendPanosById.push(arguments);
    },
    wx: function(a) {
      this.Cd.getPanoramaVersions.push(arguments);
    },
    fC: function(a, b) {
      this.Cd.checkPanoSupportByCityCode.push(arguments);
    },
    vx: function(a, b) {
      this.Cd.getPanoramaByPOIId.push(arguments);
    },
    nL: function(a) {
      this.Cd.getCopyrightProviders.push(arguments);
    },
  });
  var wf = Nc.prototype;
  V(wf, {
    getPanoramaById: wf.op,
    getPanoramaByLocation: wf.sj,
    getPanoramaByPOIId: wf.vx,
  });

  function Mc(a) {
    vd.call(this);
    "api" == (a || {}).Ye ? Sa(Ca) : Sa(Da);
  }
  Mc.FG = D.mi("pano", "tile/");
  Mc.prototype = new vd();
  Mc.prototype.getTilesUrl = function(a, b) {
    var c =
      Mc.FG[(a.x + a.y) % Mc.FG.length] +
      "?udt=20150114&qt=tile&styles=pl&x=" +
      a.x +
      "&y=" +
      a.y +
      "&z=" +
      b;
    A.ga.oa && 6 >= A.ga.oa && (c += "&color_dep=32");
    return c;
  };
  Mc.prototype.zt = ea(p);
  xf.$d = new T();

  function xf() {}
  A.extend(xf, {
    jW: function(a, b, c) {
      c = A.lang.Sc(c);
      b = {
        data: b,
      };
      "position_changed" == a &&
        (b.data = xf.$d.Dj(new R(b.data.mercatorX, b.data.mercatorY)));
      c.dispatchEvent(new P("on" + a), b);
    },
  });
  var yf = xf;
  V(yf, {
    dispatchFlashEvent: yf.jW,
  });
  var zf = {
    sP: 50,
  };
  zf.Lu = D.mi("pano")[0];
  zf.Ju = {
    width: 220,
    height: 60,
  };
  A.extend(zf, {
    fM: function(a, b, c, e) {
      if (!b || !c || !c.lngLat || !c.panoInstance) e();
      else {
        this.lo === l &&
          (this.lo = new Nc(q, {
            Ye: "api",
          }));
        var f = this;
        this.lo.fC(b, function(b) {
          b
            ? f.lo.sj(c.lngLat, zf.sP, function(b) {
                if (b && b.id) {
                  var g = b.id,
                    m = b.zh,
                    b = b.Ah,
                    n = Nc.$d.Hg(c.lngLat),
                    o = f.$R(n, {
                      x: m,
                      y: b,
                    }),
                    m = f.yL(g, o, 0, zf.Ju.width, zf.Ju.height);
                  a.content = f.aS(a.content, m, c.titleTip, c.beforeDomId);
                  a.addEventListener("open", function() {
                    ja.V(A.Hc("infoWndPano"), "click", function() {
                      c.panoInstance.Fc(g);
                      c.panoInstance.show();
                      c.panoInstance.xd({
                        heading: o,
                        pitch: 0,
                      });
                    });
                  });
                }
                e();
              })
            : e();
        });
      }
    },
    aS: function(a, b, c, e) {
      var c = c || "",
        f;
      !e || !a.split(e)[0]
        ? ((e = a), (a = ""))
        : ((e = a.split(e)[0]),
          (f = e.lastIndexOf("<")),
          (e = a.substring(0, f)),
          (a = a.substring(f)));
      f = [];
      var g = zf.Ju.width,
        i = zf.Ju.height;
      f.push(e);
      f.push(
        "<div id='infoWndPano' class='panoInfoBox' style='height:" +
          i +
          "px;width:" +
          g +
          "px; margin-top: -19px;'>"
      );
      f.push(
        "<img class='pano_thumnail_img' width='" +
          g +
          "' height='" +
          i +
          "' border='0' alt='" +
          c +
          "\u5916\u666f' title='" +
          c +
          "\u5916\u666f' src='" +
          b +
          "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " +
          g +
          ", " +
          i +
          ");' />"
      );
      f.push(
        "<div class='panoInfoBoxTitleBg' style='width:" +
          g +
          "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>"
      );
      f.push("</div>");
      f.push(a);
      return f.join("");
    },
    $R: function(a, b) {
      var c = 90 - (180 * Math.atan2(a.y - b.y, a.x - b.x)) / Math.PI;
      0 > c && (c += 360);
      return c;
    },
    yL: function(a, b, c, e, f) {
      var g = {
        panoId: a,
        panoHeading: b || 0,
        panoPitch: c || 0,
        width: e,
        height: f,
      };
      return (
        zf.Lu +
        "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}"
      ).replace(/\{(.*?)\}/g, function(a, b) {
        return g[b];
      });
    },
  });
  var Af = document,
    Bf = Math,
    Cf = Af.createElement("div").style,
    Df;
  a: {
    for (
      var Ef = ["t", "webkitT", "MozT", "msT", "OT"],
        Ff,
        Gf = 0,
        Hf = Ef.length;
      Gf < Hf;
      Gf++
    )
      if (((Ff = Ef[Gf] + "ransform"), Ff in Cf)) {
        Df = Ef[Gf].substr(0, Ef[Gf].length - 1);
        break a;
      }
    Df = t;
  }
  var If = Df ? "-" + Df.toLowerCase() + "-" : "",
    Kf = Jf("transform"),
    Lf = Jf("transitionProperty"),
    Mf = Jf("transitionDuration"),
    Nf = Jf("transformOrigin"),
    Of = Jf("transitionTimingFunction"),
    Pf = Jf("transitionDelay"),
    $e = /android/gi.test(navigator.appVersion),
    Qf = /iphone|ipad/gi.test(navigator.appVersion),
    Rf = /hp-tablet/gi.test(navigator.appVersion),
    Sf = Jf("perspective") in Cf,
    Tf = "ontouchstart" in window && !Rf,
    Uf = Df !== t,
    Vf = Jf("transition") in Cf,
    Wf = "onorientationchange" in window ? "orientationchange" : "resize",
    Xf = Tf ? "touchstart" : "mousedown",
    Yf = Tf ? "touchmove" : "mousemove",
    Zf = Tf ? "touchend" : "mouseup",
    $f = Tf ? "touchcancel" : "mouseup",
    ag =
      Df === t
        ? t
        : {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd",
          }[Df],
    cg =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(a) {
        return setTimeout(a, 1);
      },
    dg =
      window.cancelRequestAnimationFrame ||
      window.E6 ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout,
    eg = Sf ? " translateZ(0)" : "";

  function fg(a, b) {
    var c = this,
      e;
    c.yn = "object" == typeof a ? a : Af.getElementById(a);
    c.yn.style.overflow = "hidden";
    c.Rb = c.yn.children[0];
    c.options = {
      vp: p,
      tn: p,
      x: 0,
      y: 0,
      Lo: p,
      eV: t,
      $x: p,
      AE: p,
      fl: p,
      Fi: t,
      s0: 0,
      Jw: t,
      Bx: p,
      ni: p,
      Gi: p,
      nD: $e,
      Fx: Qf,
      QW: Qf && Sf,
      dF: "",
      zoom: t,
      hl: 1,
      lq: 4,
      lW: 2,
      YO: "scroll",
      ku: t,
      Jy: 1,
      hN: q,
      $M: function(a) {
        a.preventDefault();
      },
      kN: q,
      ZM: q,
      jN: q,
      YM: q,
      ey: q,
      lN: q,
      cN: q,
      Kp: q,
      mN: q,
      Jp: q,
    };
    for (e in b) c.options[e] = b[e];
    c.x = c.options.x;
    c.y = c.options.y;
    c.options.fl = Uf && c.options.fl;
    c.options.ni = c.options.vp && c.options.ni;
    c.options.Gi = c.options.tn && c.options.Gi;
    c.options.zoom = c.options.fl && c.options.zoom;
    c.options.Fi = Vf && c.options.Fi;
    c.options.zoom && $e && (eg = "");
    c.Rb.style[Lf] = c.options.fl ? If + "transform" : "top left";
    c.Rb.style[Mf] = "0";
    c.Rb.style[Nf] = "0 0";
    c.options.Fi && (c.Rb.style[Of] = "cubic-bezier(0.33,0.66,0.66,1)");
    c.options.fl
      ? (c.Rb.style[Kf] = "translate(" + c.x + "px," + c.y + "px)" + eg)
      : (c.Rb.style.cssText +=
          ";position:absolute;top:" + c.y + "px;left:" + c.x + "px");
    c.options.Fi && (c.options.nD = p);
    c.refresh();
    c.ha(Wf, window);
    c.ha(Xf);
    !Tf &&
      "none" != c.options.YO &&
      (c.ha("DOMMouseScroll"), c.ha("mousewheel"));
    c.options.Jw &&
      (c.rV = setInterval(function() {
        c.tQ();
      }, 500));
    this.options.Bx &&
      (Event.prototype.stopImmediatePropagation ||
        ((document.body.removeEventListener = function(a, b, c) {
          var e = Node.prototype.removeEventListener;
          a === "click"
            ? e.call(document.body, a, b.WL || b, c)
            : e.call(document.body, a, b, c);
        }),
        (document.body.addEventListener = function(a, b, c) {
          var e = Node.prototype.addEventListener;
          a === "click"
            ? e.call(
                document.body,
                a,
                b.WL ||
                  (b.WL = function(a) {
                    a.UZ || b(a);
                  }),
                c
              )
            : e.call(document.body, a, b, c);
        })),
      c.ha("click", document.body, p));
  }
  fg.prototype = {
    enabled: p,
    x: 0,
    y: 0,
    Gj: [],
    scale: 1,
    vC: 0,
    wC: 0,
    bf: [],
    xf: [],
    $B: q,
    Ty: 0,
    handleEvent: function(a) {
      switch (a.type) {
        case Xf:
          if (!Tf && 0 !== a.button) break;
          this.Zv(a);
          break;
        case Yf:
          this.XS(a);
          break;
        case Zf:
        case $f:
          this.hv(a);
          break;
        case Wf:
          this.nB();
          break;
        case "DOMMouseScroll":
        case "mousewheel":
          this.yU(a);
          break;
        case ag:
          this.vU(a);
          break;
        case "click":
          this.DQ(a);
      }
    },
    tQ: function() {
      !this.yh &&
        (!this.il &&
          !(
            this.gm ||
            (this.yy == this.Rb.offsetWidth * this.scale &&
              this.Up == this.Rb.offsetHeight * this.scale)
          )) &&
        this.refresh();
    },
    Qv: function(a) {
      var b;
      this[a + "Scrollbar"]
        ? (this[a + "ScrollbarWrapper"] ||
            ((b = Af.createElement("div")),
            this.options.dF
              ? (b.className = this.options.dF + a.toUpperCase())
              : (b.style.cssText =
                  "position:absolute;z-index:100;" +
                  ("h" == a
                    ? "height:7px;bottom:1px;left:2px;right:" +
                      (this.Gi ? "7" : "2") +
                      "px"
                    : "width:7px;bottom:" +
                      (this.ni ? "7" : "2") +
                      "px;top:2px;right:1px")),
            (b.style.cssText +=
              ";pointer-events:none;" +
              If +
              "transition-property:opacity;" +
              If +
              "transition-duration:" +
              (this.options.QW ? "350ms" : "0") +
              ";overflow:hidden;opacity:" +
              (this.options.Fx ? "0" : "1")),
            this.yn.appendChild(b),
            (this[a + "ScrollbarWrapper"] = b),
            (b = Af.createElement("div")),
            this.options.dF ||
              (b.style.cssText =
                "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" +
                If +
                "background-clip:padding-box;" +
                If +
                "box-sizing:border-box;" +
                ("h" == a ? "height:100%" : "width:100%") +
                ";" +
                If +
                "border-radius:3px;border-radius:3px"),
            (b.style.cssText +=
              ";pointer-events:none;" +
              If +
              "transition-property:" +
              If +
              "transform;" +
              If +
              "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" +
              If +
              "transition-duration:0;" +
              If +
              "transform: translate(0,0)" +
              eg),
            this.options.Fi &&
              (b.style.cssText +=
                ";" +
                If +
                "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
            this[a + "ScrollbarWrapper"].appendChild(b),
            (this[a + "ScrollbarIndicator"] = b)),
          "h" == a
            ? ((this.SL = this.TL.clientWidth),
              (this.iY = Bf.max(Bf.round((this.SL * this.SL) / this.yy), 8)),
              (this.hY.style.width = this.iY + "px"))
            : ((this.QO = this.RO.clientHeight),
              (this.P0 = Bf.max(Bf.round((this.QO * this.QO) / this.Up), 8)),
              (this.O0.style.height = this.P0 + "px")),
          this.oB(a, p))
        : this[a + "ScrollbarWrapper"] &&
          (Uf && (this[a + "ScrollbarIndicator"].style[Kf] = ""),
          this[a + "ScrollbarWrapper"].parentNode.removeChild(
            this[a + "ScrollbarWrapper"]
          ),
          (this[a + "ScrollbarWrapper"] = q),
          (this[a + "ScrollbarIndicator"] = q));
    },
    nB: function() {
      var a = this;
      setTimeout(
        function() {
          a.refresh();
        },
        $e ? 200 : 0
      );
    },
    Br: function(a, b) {
      this.il ||
        ((a = this.vp ? a : 0),
        (b = this.tn ? b : 0),
        this.options.fl
          ? (this.Rb.style[Kf] =
              "translate(" +
              a +
              "px," +
              b +
              "px) scale(" +
              this.scale +
              ")" +
              eg)
          : ((a = Bf.round(a)),
            (b = Bf.round(b)),
            (this.Rb.style.left = a + "px"),
            (this.Rb.style.top = b + "px")),
        (this.x = a),
        (this.y = b),
        this.oB("h"),
        this.oB("v"));
    },
    oB: function(a, b) {
      var c = "h" == a ? this.x : this.y;
      this[a + "Scrollbar"] &&
        ((c *= this[a + "ScrollbarProp"]),
        0 > c
          ? (this.options.nD ||
              ((c = this[a + "ScrollbarIndicatorSize"] + Bf.round(3 * c)),
              8 > c && (c = 8),
              (this[a + "ScrollbarIndicator"].style[
                "h" == a ? "width" : "height"
              ] = c + "px")),
            (c = 0))
          : c > this[a + "ScrollbarMaxScroll"] &&
            (this.options.nD
              ? (c = this[a + "ScrollbarMaxScroll"])
              : ((c =
                  this[a + "ScrollbarIndicatorSize"] -
                  Bf.round(3 * (c - this[a + "ScrollbarMaxScroll"]))),
                8 > c && (c = 8),
                (this[a + "ScrollbarIndicator"].style[
                  "h" == a ? "width" : "height"
                ] = c + "px"),
                (c =
                  this[a + "ScrollbarMaxScroll"] +
                  (this[a + "ScrollbarIndicatorSize"] - c)))),
        (this[a + "ScrollbarWrapper"].style[Pf] = "0"),
        (this[a + "ScrollbarWrapper"].style.opacity =
          b && this.options.Fx ? "0" : "1"),
        (this[a + "ScrollbarIndicator"].style[Kf] =
          "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + eg));
    },
    DQ: function(a) {
      if (a.vR === p) return (this.OB = a.target), (this.fx = Date.now()), p;
      if (this.OB && this.fx) {
        if (600 < Date.now() - this.fx) return (this.fx = this.OB = q), p;
      } else {
        for (var b = a.target; b != this.Rb && b != document.body; )
          b = b.parentNode;
        if (b == document.body) return p;
      }
      for (b = a.target; 1 != b.nodeType; ) b = b.parentNode;
      b = b.tagName.toLowerCase();
      if ("select" != b && "input" != b && "textarea" != b)
        return (
          a.stopImmediatePropagation
            ? a.stopImmediatePropagation()
            : (a.UZ = p),
          a.stopPropagation(),
          a.preventDefault(),
          (this.fx = this.OB = q),
          t
        );
    },
    Zv: function(a) {
      var b = Tf ? a.touches[0] : a,
        c,
        e;
      if (this.enabled) {
        this.options.$M && this.options.$M.call(this, a);
        (this.options.Fi || this.options.zoom) && this.uJ(0);
        this.il = this.gm = this.yh = t;
        this.FC = this.EC = this.uw = this.tw = this.KC = this.JC = 0;
        this.options.zoom &&
          (Tf && 1 < a.touches.length) &&
          ((e = Bf.abs(a.touches[0].pageX - a.touches[1].pageX)),
          (c = Bf.abs(a.touches[0].pageY - a.touches[1].pageY)),
          (this.u0 = Bf.sqrt(e * e + c * c)),
          (this.gy =
            Bf.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.YF) / 2 -
            this.x),
          (this.hy =
            Bf.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.ZF) / 2 -
            this.y),
          this.options.Kp && this.options.Kp.call(this, a));
        if (
          this.options.$x &&
          (this.options.fl
            ? ((c = getComputedStyle(this.Rb, q)
                [Kf].replace(/[^0-9\-.,]/g, "")
                .split(",")),
              (e = +(c[12] || c[4])),
              (c = +(c[13] || c[5])))
            : ((e = +getComputedStyle(this.Rb, q).left.replace(/[^0-9-]/g, "")),
              (c = +getComputedStyle(this.Rb, q).top.replace(/[^0-9-]/g, ""))),
          e != this.x || c != this.y)
        )
          this.options.Fi ? this.ee(ag) : dg(this.$B),
            (this.Gj = []),
            this.Br(e, c),
            this.options.ey && this.options.ey.call(this);
        this.vw = this.x;
        this.ww = this.y;
        this.ou = this.x;
        this.pu = this.y;
        this.zh = b.pageX;
        this.Ah = b.pageY;
        this.startTime = a.timeStamp || Date.now();
        this.options.kN && this.options.kN.call(this, a);
        this.ha(Yf, window);
        this.ha(Zf, window);
        this.ha($f, window);
      }
    },
    XS: function(a) {
      var b = Tf ? a.touches[0] : a,
        c = b.pageX - this.zh,
        e = b.pageY - this.Ah,
        f = this.x + c,
        g = this.y + e,
        i = a.timeStamp || Date.now();
      this.options.ZM && this.options.ZM.call(this, a);
      if (this.options.zoom && Tf && 1 < a.touches.length)
        (f = Bf.abs(a.touches[0].pageX - a.touches[1].pageX)),
          (g = Bf.abs(a.touches[0].pageY - a.touches[1].pageY)),
          (this.t0 = Bf.sqrt(f * f + g * g)),
          (this.il = p),
          (b = (1 / this.u0) * this.t0 * this.scale),
          b < this.options.hl
            ? (b = 0.5 * this.options.hl * Math.pow(2, b / this.options.hl))
            : b > this.options.lq &&
              (b = 2 * this.options.lq * Math.pow(0.5, this.options.lq / b)),
          (this.Cp = b / this.scale),
          (f = this.gy - this.gy * this.Cp + this.x),
          (g = this.hy - this.hy * this.Cp + this.y),
          (this.Rb.style[Kf] =
            "translate(" + f + "px," + g + "px) scale(" + b + ")" + eg),
          this.options.mN && this.options.mN.call(this, a);
      else {
        this.zh = b.pageX;
        this.Ah = b.pageY;
        if (0 < f || f < this.pe)
          f = this.options.Lo
            ? this.x + c / 2
            : 0 <= f || 0 <= this.pe
            ? 0
            : this.pe;
        if (g > this.vf || g < this.vd)
          g = this.options.Lo
            ? this.y + e / 2
            : g >= this.vf || 0 <= this.vd
            ? this.vf
            : this.vd;
        this.JC += c;
        this.KC += e;
        this.tw = Bf.abs(this.JC);
        this.uw = Bf.abs(this.KC);
        (6 > this.tw && 6 > this.uw) ||
          (this.options.AE &&
            (this.tw > this.uw + 5
              ? ((g = this.y), (e = 0))
              : this.uw > this.tw + 5 && ((f = this.x), (c = 0))),
          (this.yh = p),
          this.Br(f, g),
          (this.EC = 0 < c ? -1 : 0 > c ? 1 : 0),
          (this.FC = 0 < e ? -1 : 0 > e ? 1 : 0),
          300 < i - this.startTime &&
            ((this.startTime = i), (this.ou = this.x), (this.pu = this.y)),
          this.options.jN && this.options.jN.call(this, a));
      }
    },
    hv: function(a) {
      if (!(Tf && 0 !== a.touches.length)) {
        var b = this,
          c = Tf ? a.changedTouches[0] : a,
          e,
          f,
          g = {
            Ia: 0,
            time: 0,
          },
          i = {
            Ia: 0,
            time: 0,
          },
          k = (a.timeStamp || Date.now()) - b.startTime;
        e = b.x;
        f = b.y;
        b.ee(Yf, window);
        b.ee(Zf, window);
        b.ee($f, window);
        b.options.YM && b.options.YM.call(b, a);
        if (b.il)
          (e = b.scale * b.Cp),
            (e = Math.max(b.options.hl, e)),
            (e = Math.min(b.options.lq, e)),
            (b.Cp = e / b.scale),
            (b.scale = e),
            (b.x = b.gy - b.gy * b.Cp + b.x),
            (b.y = b.hy - b.hy * b.Cp + b.y),
            (b.Rb.style[Mf] = "200ms"),
            (b.Rb.style[Kf] =
              "translate(" +
              b.x +
              "px," +
              b.y +
              "px) scale(" +
              b.scale +
              ")" +
              eg),
            (b.il = t),
            b.refresh(),
            b.options.Jp && b.options.Jp.call(b, a);
        else {
          if (b.yh) {
            if (300 > k && b.options.$x) {
              g = e
                ? b.jI(
                    e - b.ou,
                    k,
                    -b.x,
                    b.yy - b.Cu + b.x,
                    b.options.Lo ? b.Cu : 0
                  )
                : g;
              i = f
                ? b.jI(
                    f - b.pu,
                    k,
                    -b.y,
                    0 > b.vd ? b.Up - b.zn + b.y - b.vf : 0,
                    b.options.Lo ? b.zn : 0
                  )
                : i;
              e = b.x + g.Ia;
              f = b.y + i.Ia;
              if ((0 < b.x && 0 < e) || (b.x < b.pe && e < b.pe))
                g = {
                  Ia: 0,
                  time: 0,
                };
              if ((b.y > b.vf && f > b.vf) || (b.y < b.vd && f < b.vd))
                i = {
                  Ia: 0,
                  time: 0,
                };
            }
            g.Ia || i.Ia
              ? ((c = Bf.max(Bf.max(g.time, i.time), 10)),
                b.options.ku &&
                  ((g = e - b.vw),
                  (i = f - b.ww),
                  Bf.abs(g) < b.options.Jy && Bf.abs(i) < b.options.Jy
                    ? b.scrollTo(b.vw, b.ww, 200)
                    : ((g = b.hJ(e, f)),
                      (e = g.x),
                      (f = g.y),
                      (c = Bf.max(g.time, c)))),
                b.scrollTo(Bf.round(e), Bf.round(f), c))
              : b.options.ku
              ? ((g = e - b.vw),
                (i = f - b.ww),
                Bf.abs(g) < b.options.Jy && Bf.abs(i) < b.options.Jy
                  ? b.scrollTo(b.vw, b.ww, 200)
                  : ((g = b.hJ(b.x, b.y)),
                    (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time)))
              : b.oo(200);
          } else {
            if (Tf)
              if (b.EK && b.options.zoom)
                clearTimeout(b.EK),
                  (b.EK = q),
                  b.options.Kp && b.options.Kp.call(b, a),
                  b.zoom(b.zh, b.Ah, 1 == b.scale ? b.options.lW : 1),
                  b.options.Jp &&
                    setTimeout(function() {
                      b.options.Jp.call(b, a);
                    }, 200);
              else if (this.options.Bx) {
                for (e = c.target; 1 != e.nodeType; ) e = e.parentNode;
                f = e.tagName.toLowerCase();
                "select" != f && "input" != f && "textarea" != f
                  ? ((f = Af.createEvent("MouseEvents")),
                    f.initMouseEvent(
                      "click",
                      p,
                      p,
                      a.view,
                      1,
                      c.screenX,
                      c.screenY,
                      c.clientX,
                      c.clientY,
                      a.ctrlKey,
                      a.altKey,
                      a.shiftKey,
                      a.metaKey,
                      0,
                      q
                    ),
                    (f.vR = p),
                    e.dispatchEvent(f))
                  : e.focus();
              }
            b.oo(400);
          }
          b.options.lN && b.options.lN.call(b, a);
        }
      }
    },
    oo: function(a) {
      var b = 0 <= this.x ? 0 : this.x < this.pe ? this.pe : this.x,
        c =
          this.y >= this.vf || 0 < this.vd
            ? this.vf
            : this.y < this.vd
            ? this.vd
            : this.y;
      if (b == this.x && c == this.y) {
        if (
          (this.yh &&
            ((this.yh = t), this.options.ey && this.options.ey.call(this)),
          this.ni &&
            this.options.Fx &&
            ("webkit" == Df && (this.TL.style[Pf] = "300ms"),
            (this.TL.style.opacity = "0")),
          this.Gi && this.options.Fx)
        )
          "webkit" == Df && (this.RO.style[Pf] = "300ms"),
            (this.RO.style.opacity = "0");
      } else this.scrollTo(b, c, a || 0);
    },
    yU: function(a) {
      var b = this,
        c,
        e;
      if ("wheelDeltaX" in a)
        (c = a.wheelDeltaX / 12), (e = a.wheelDeltaY / 12);
      else if ("wheelDelta" in a) c = e = a.wheelDelta / 12;
      else if ("detail" in a) c = e = 3 * -a.detail;
      else return;
      if ("zoom" == b.options.YO) {
        if (
          ((e = b.scale * Math.pow(2, (1 / 3) * (e ? e / Math.abs(e) : 0))),
          e < b.options.hl && (e = b.options.hl),
          e > b.options.lq && (e = b.options.lq),
          e != b.scale)
        )
          !b.Ty && b.options.Kp && b.options.Kp.call(b, a),
            b.Ty++,
            b.zoom(a.pageX, a.pageY, e, 400),
            setTimeout(function() {
              b.Ty--;
              !b.Ty && b.options.Jp && b.options.Jp.call(b, a);
            }, 400);
      } else
        (c = b.x + c),
          (e = b.y + e),
          0 < c ? (c = 0) : c < b.pe && (c = b.pe),
          e > b.vf ? (e = b.vf) : e < b.vd && (e = b.vd),
          0 > b.vd && b.scrollTo(c, e, 0);
    },
    vU: function(a) {
      a.target == this.Rb && (this.ee(ag), this.AB());
    },
    AB: function() {
      var a = this,
        b = a.x,
        c = a.y,
        e = Date.now(),
        f,
        g,
        i;
      a.gm ||
        (a.Gj.length
          ? ((f = a.Gj.shift()),
            f.x == b && f.y == c && (f.time = 0),
            (a.gm = p),
            (a.yh = p),
            a.options.Fi)
            ? (a.uJ(f.time),
              a.Br(f.x, f.y),
              (a.gm = t),
              f.time ? a.ha(ag) : a.oo(0))
            : ((i = function() {
                var k = Date.now(),
                  m;
                if (k >= e + f.time) {
                  a.Br(f.x, f.y);
                  a.gm = t;
                  a.options.tZ && a.options.tZ.call(a);
                  a.AB();
                } else {
                  k = (k - e) / f.time - 1;
                  g = Bf.sqrt(1 - k * k);
                  k = (f.x - b) * g + b;
                  m = (f.y - c) * g + c;
                  a.Br(k, m);
                  if (a.gm) a.$B = cg(i);
                }
              }),
              i())
          : a.oo(400));
    },
    uJ: function(a) {
      a += "ms";
      this.Rb.style[Mf] = a;
      this.ni && (this.hY.style[Mf] = a);
      this.Gi && (this.O0.style[Mf] = a);
    },
    jI: function(a, b, c, e, f) {
      var b = Bf.abs(a) / b,
        g = (b * b) / 0.0012;
      0 < a && g > c
        ? ((c += f / (6 / (6.0e-4 * (g / b)))), (b = (b * c) / g), (g = c))
        : 0 > a &&
          g > e &&
          ((e += f / (6 / (6.0e-4 * (g / b)))), (b = (b * e) / g), (g = e));
      return {
        Ia: g * (0 > a ? -1 : 1),
        time: Bf.round(b / 6.0e-4),
      };
    },
    ik: function(a) {
      for (var b = -a.offsetLeft, c = -a.offsetTop; (a = a.offsetParent); )
        (b -= a.offsetLeft), (c -= a.offsetTop);
      a != this.yn && ((b *= this.scale), (c *= this.scale));
      return {
        left: b,
        top: c,
      };
    },
    hJ: function(a, b) {
      var c, e, f;
      f = this.bf.length - 1;
      c = 0;
      for (e = this.bf.length; c < e; c++)
        if (a >= this.bf[c]) {
          f = c;
          break;
        }
      f == this.vC && (0 < f && 0 > this.EC) && f--;
      a = this.bf[f];
      e = (e = Bf.abs(a - this.bf[this.vC]))
        ? 500 * (Bf.abs(this.x - a) / e)
        : 0;
      this.vC = f;
      f = this.xf.length - 1;
      for (c = 0; c < f; c++)
        if (b >= this.xf[c]) {
          f = c;
          break;
        }
      f == this.wC && (0 < f && 0 > this.FC) && f--;
      b = this.xf[f];
      c = (c = Bf.abs(b - this.xf[this.wC]))
        ? 500 * (Bf.abs(this.y - b) / c)
        : 0;
      this.wC = f;
      f = Bf.round(Bf.max(e, c)) || 200;
      return {
        x: a,
        y: b,
        time: f,
      };
    },
    ha: function(a, b, c) {
      (b || this.Rb).addEventListener(a, this, !!c);
    },
    ee: function(a, b, c) {
      (b || this.Rb).removeEventListener(a, this, !!c);
    },
    CC: ha(2),
    refresh: function() {
      var a,
        b,
        c,
        e = 0;
      b = 0;
      this.scale < this.options.hl && (this.scale = this.options.hl);
      this.Cu = this.yn.clientWidth || 1;
      this.zn = this.yn.clientHeight || 1;
      this.vf = -this.options.s0 || 0;
      this.yy = Bf.round(this.Rb.offsetWidth * this.scale);
      this.Up = Bf.round((this.Rb.offsetHeight + this.vf) * this.scale);
      this.pe = this.Cu - this.yy;
      this.vd = this.zn - this.Up + this.vf;
      this.FC = this.EC = 0;
      this.options.hN && this.options.hN.call(this);
      this.vp = this.options.vp && 0 > this.pe;
      this.tn =
        this.options.tn &&
        ((!this.options.eV && !this.vp) || this.Up > this.zn);
      this.ni = this.vp && this.options.ni;
      this.Gi = this.tn && this.options.Gi && this.Up > this.zn;
      a = this.ik(this.yn);
      this.YF = -a.left;
      this.ZF = -a.top;
      if ("string" == typeof this.options.ku) {
        this.bf = [];
        this.xf = [];
        c = this.Rb.querySelectorAll(this.options.ku);
        a = 0;
        for (b = c.length; a < b; a++)
          (e = this.ik(c[a])),
            (e.left += this.YF),
            (e.top += this.ZF),
            (this.bf[a] = e.left < this.pe ? this.pe : e.left * this.scale),
            (this.xf[a] = e.top < this.vd ? this.vd : e.top * this.scale);
      } else if (this.options.ku) {
        for (this.bf = []; e >= this.pe; )
          (this.bf[b] = e), (e -= this.Cu), b++;
        this.pe % this.Cu &&
          (this.bf[this.bf.length] =
            this.pe -
            this.bf[this.bf.length - 1] +
            this.bf[this.bf.length - 1]);
        b = e = 0;
        for (this.xf = []; e >= this.vd; )
          (this.xf[b] = e), (e -= this.zn), b++;
        this.vd % this.zn &&
          (this.xf[this.xf.length] =
            this.vd -
            this.xf[this.xf.length - 1] +
            this.xf[this.xf.length - 1]);
      }
      this.Qv("h");
      this.Qv("v");
      this.il || ((this.Rb.style[Mf] = "0"), this.oo(400));
    },
    scrollTo: function(a, b, c, e) {
      var f = a;
      this.stop();
      f.length ||
        (f = [
          {
            x: a,
            y: b,
            time: c,
            WZ: e,
          },
        ]);
      a = 0;
      for (b = f.length; a < b; a++)
        f[a].WZ && ((f[a].x = this.x - f[a].x), (f[a].y = this.y - f[a].y)),
          this.Gj.push({
            x: f[a].x,
            y: f[a].y,
            time: f[a].time || 0,
          });
      this.AB();
    },
    disable: function() {
      this.stop();
      this.oo(0);
      this.enabled = t;
      this.ee(Yf, window);
      this.ee(Zf, window);
      this.ee($f, window);
    },
    enable: function() {
      this.enabled = p;
    },
    stop: function() {
      this.options.Fi ? this.ee(ag) : dg(this.$B);
      this.Gj = [];
      this.gm = this.yh = t;
    },
    zoom: function(a, b, c, e) {
      var f = c / this.scale;
      this.options.fl &&
        ((this.il = p),
        (e = e === l ? 200 : e),
        (a = a - this.YF - this.x),
        (b = b - this.ZF - this.y),
        (this.x = a - a * f + this.x),
        (this.y = b - b * f + this.y),
        (this.scale = c),
        this.refresh(),
        (this.x = 0 < this.x ? 0 : this.x < this.pe ? this.pe : this.x),
        (this.y =
          this.y > this.vf ? this.vf : this.y < this.vd ? this.vd : this.y),
        (this.Rb.style[Mf] = e + "ms"),
        (this.Rb.style[Kf] =
          "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + eg),
        (this.il = t));
    },
  };

  function Jf(a) {
    if ("" === Df) return a;
    a = a.charAt(0).toUpperCase() + a.substr(1);
    return Df + a;
  }
  Cf = q;

  function gg(a) {
    this.m = {
      anchor: Gc,
      offset: new N(0, 0),
      maxWidth: "100%",
      imageHeight: 80,
    };
    var a = a || {},
      b;
    for (b in a) this.m[b] = a[b];
    this.Ul = new Nc(q, {
      Ye: "api",
    });
    this.jk = [];
    this.W = q;
    this.kg = {
      height: this.m.imageHeight,
      width: this.m.imageHeight * hg,
    };
    this.Xc = this.pB = this.jm = this.bd = q;
  }
  var ig = [
      0,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      5,
      5,
      5,
      6,
      6,
      7,
      8,
      8,
      8,
      9,
      10,
    ],
    jg = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(
      " "
    );
  D.Rk(function(a) {
    var b = q;
    a.addEventListener("position_changed", function() {
      a.m.visible &&
        a.m.albumsControl === p &&
        (b ? b.uy(a.Zb()) : ((b = new gg(a.m.albumsControlOptions)), b.za(a)));
    });
    a.addEventListener("albums_visible_changed", function() {
      a.m.albumsControl === p
        ? (b ? b.uy(a.Zb()) : ((b = new gg(a.m.albumsControlOptions)), b.za(a)),
          b.show())
        : b.aa();
    });
    a.addEventListener("albums_options_changed", function() {
      b && b.Fj(a.m.albumsControlOptions);
    });
    a.addEventListener("visible_changed", function() {
      b &&
        (a.zx()
          ? a.m.albumsControl === p && (b.R.style.visibility = "visible")
          : (b.R.style.visibility = "hidden"));
    });
  });
  var hg = 1.8;
  I() && (hg = 1);
  A.extend(gg.prototype, {
    Fj: function(a) {
      for (var b in a) this.m[b] = a[b];
      a = this.m.imageHeight + "px";
      this.uc(this.m.anchor);
      this.R.style.width =
        isNaN(Number(this.m.maxWidth)) === p
          ? this.m.maxWidth
          : this.m.maxWidth + "px";
      this.R.style.height = a;
      this.nk.style.height = a;
      this.Xh.style.height = a;
      this.kg = {
        height: this.m.imageHeight,
        width: this.m.imageHeight * hg,
      };
      this.mk.style.height = this.kg.height - 6 + "px";
      this.mk.style.width = this.kg.width - 6 + "px";
      this.uy(this.W.Zb(), p);
    },
    za: function(a) {
      this.W = a;
      this.os();
      this.bQ();
      this.yY();
      this.uy(a.Zb());
    },
    os: function() {
      var a = this.m.imageHeight + "px";
      this.R = L("div");
      var b = this.R.style;
      b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
      b.position = "absolute";
      b.zIndex = "2000";
      b.width =
        isNaN(Number(this.m.maxWidth)) === p
          ? this.m.maxWidth
          : this.m.maxWidth + "px";
      b.padding = "8px 0";
      b.visibility = "hidden";
      b.height = a;
      this.nk = L("div");
      b = this.nk.style;
      b.position = "absolute";
      b.overflow = "hidden";
      b.width = "100%";
      b.height = a;
      this.Xh = L("div");
      b = this.Xh.style;
      b.height = a;
      this.nk.appendChild(this.Xh);
      this.R.appendChild(this.nk);
      this.W.R.appendChild(this.R);
      this.mk = L("div", {
        class: "pano_photo_item_seleted",
      });
      this.mk.style.height = this.kg.height - 6 + "px";
      this.mk.style.width = this.kg.width - 6 + "px";
      this.uc(this.m.anchor);
    },
    EH: function(a) {
      for (var b = this.jk, c = b.length - 1; 0 <= c; c--)
        if (b[c].panoId == a) return c;
      return -1;
    },
    uy: function(a, b) {
      if (
        b ||
        !this.jk[this.bd] ||
        !(this.jk[this.bd].panoId == a && 3 !== this.jk[this.bd].recoType)
      ) {
        var c = this,
          e = this.EH(a);
        !b && -1 !== e && this.jk[e] && 3 !== this.jk[e].recoType
          ? this.Xp(e)
          : this.OX(function(a) {
              for (
                var b = {}, e, k, m = t, n = [], o = 0, s = a.length;
                o < s;
                o++
              )
                (e = a[o].catlog),
                  (k = a[o].floor),
                  l !== e &&
                    ("" === e && l !== k
                      ? ((m = p), b[k] || (b[k] = []), b[k].push(a[o]))
                      : (b[ig[e]] || (b[ig[e]] = []), b[ig[e]].push(a[o])));
              for (var v in b)
                m
                  ? n.push({
                      data: v + "F",
                      index: v,
                    })
                  : n.push({
                      data: jg[v],
                      index: v,
                    });
              c.$G = b;
              c.Ti = n;
              c.$i(a);
              0 == a.length ? c.aa() : c.show();
            });
      }
    },
    SV: function() {
      if (!this.Qi) {
        var a = this.CX(this.Ti),
          b = L("div");
        b.style.cssText = [
          "width:" + 134 * this.Ti.length + "px;",
          "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;",
        ].join("");
        b.innerHTML = a;
        a = L("div");
        a.appendChild(b);
        a.style.cssText =
          "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
        new fg(a, {
          Lo: t,
          $x: p,
          ni: t,
          Gi: t,
          tn: t,
          AE: p,
          Jw: p,
          Bx: p,
        });
        this.R.appendChild(a);
        for (
          var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length;
          f < g;
          f++
        )
          (b = e[f]),
            A.V(b, "click", function() {
              if (this.getAttribute("dataindex")) {
                c.$i(c.$G[this.getAttribute("dataindex")]);
                for (var a = 0, b = e.length; a < b; a++)
                  e[a].style.color = "#FFFFFF";
                this.style.color = "#3383FF";
              }
            });
        this.Qi = a;
      }
    },
    PV: function() {
      if (this.Qi) (a = this.lL(this.Ti)), (this.rQ.innerHTML = a);
      else {
        var a = this.lL(this.Ti),
          b = L("ul"),
          c = this;
        b.style.cssText =
          "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
        b.innerHTML = a;
        A.V(b, "click", function(a) {
          if ((a = (a.srcElement || a.target).getAttribute("dataindex"))) {
            c.$i(c.$G[a]);
            for (
              var e = b.getElementsByTagName("li"), f = 0, g = e.length;
              f < g;
              f++
            )
              e[f].childNodes[0].getAttribute("dataindex") === a
                ? A.U.ib(e[f], "pano_catlogLiActive")
                : A.U.qc(e[f], "pano_catlogLiActive");
          }
        });
        var a = L("div"),
          e = L("a"),
          f = L("span"),
          g = L("a"),
          i = L("span"),
          k = [
            "background:url(" + H.ua + "panorama/catlog_icon.png) no-repeat;",
            "display:block;width:10px;height:7px;margin:0 auto;",
          ].join("");
        f.style.cssText = k + "background-position:-18px 0;";
        e.style.cssText =
          "background:#1C1C1C;display:block;position:absolute;width:58px;";
        i.style.cssText = k + "background-position:0 0;";
        g.style.cssText =
          "background:#1C1C1C;display:block;position:absolute;width:58px;";
        g.style.top = this.m.imageHeight - 7 + "px";
        a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
        e.appendChild(f);
        g.appendChild(i);
        A.V(e, "mouseover", function() {
          var a = parseInt(b.style.top, 10);
          7 !== a && (f.style.backgroundPosition = "-27px 0");
          new xb({
            Mc: 60,
            dc: yb.Ks,
            duration: 300,
            Ba: function(c) {
              b.style.top = a + (7 - a) * c + "px";
            },
          });
        });
        A.V(e, "mouseout", function() {
          f.style.backgroundPosition = "-18px 0";
        });
        A.V(g, "mouseover", function() {
          var a = parseInt(b.style.top, 10),
            e = c.m.imageHeight - 14;
          if (!(parseInt(b.offsetHeight, 10) < e)) {
            var f = e - parseInt(b.offsetHeight, 10) + 7;
            f !== a && (i.style.backgroundPosition = "-9px 0");
            new xb({
              Mc: 60,
              dc: yb.Ks,
              duration: 300,
              Ba: function(c) {
                b.style.top = a + (f - a) * c + "px";
              },
            });
          }
        });
        A.V(g, "mouseout", function() {
          i.style.backgroundPosition = "0 0";
        });
        a.appendChild(e);
        a.appendChild(g);
        e = L("div");
        e.style.cssText = [
          "position:absolute;z-index:2001;left:20px;",
          "height:" + this.m.imageHeight + "px;",
          "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);",
        ].join("");
        e.appendChild(b);
        e.appendChild(a);
        this.Qi = e;
        this.rQ = b;
        this.R.appendChild(e);
      }
    },
    QV: function() {
      if (this.Ti && !(0 >= this.Ti.length)) {
        var a = L("div");
        a.innerHTML = this.Sz;
        a.style.cssText = "position:absolute;background:#252525";
        this.R.appendChild(a);
        this.Ns = a;
        this.Xc.mg.style.left = this.kg.width + 8 + "px";
        this.Qi &&
          (this.Qi.style.left =
            parseInt(this.Qi.style.left, 10) + this.kg.width + 8 + "px");
        var b = this;
        A.V(a, "click", function() {
          b.W.Fc(b.MW);
        });
      }
    },
    $i: function(a) {
      this.jk = a;
      this.m.showCatalog &&
        (0 < this.Ti.length
          ? (Xa() ? this.PV() : this.SV(), (this.Xc.offsetLeft = 60))
          : (this.Ns &&
              (this.R.removeChild(this.Ns),
              (this.Ns = q),
              (this.Xc.mg.style.left = "0px")),
            this.Qi && (this.R.removeChild(this.Qi), (this.Qi = q)),
            (this.Xc.offsetLeft = 0)));
      var b = this.wX(a);
      Xa() &&
        (this.Ti && 0 < this.Ti.length && this.m.showExit && this.Sz) &&
        ((this.Xc.offsetLeft += this.kg.width + 8),
        this.Ns ? (this.Ns.innerHTML = this.Sz) : this.QV());
      this.Xh.innerHTML = b;
      this.Xh.style.width = (this.kg.width + 8) * a.length + 8 + "px";
      a = this.R.offsetWidth;
      b = this.Xh.offsetWidth;
      this.Xc.Us && (b += this.Xc.Us());
      b < a - 2 * this.Xc.Ji - this.Xc.offsetLeft
        ? (this.R.style.width = b + this.Xc.offsetLeft + "px")
        : ((this.R.style.width =
            isNaN(Number(this.m.maxWidth)) === p
              ? this.m.maxWidth
              : this.m.maxWidth + "px"),
          b < this.R.offsetWidth - 2 * this.Xc.Ji - this.Xc.offsetLeft &&
            (this.R.style.width = b + this.Xc.offsetLeft + "px"));
      this.Xc.refresh();
      this.pB = this.Xh.children;
      this.Xh.appendChild(this.mk);
      this.mk.style.left = "-100000px";
      a = this.EH(this.W.Zb(), this.h2);
      -1 !== a && this.Xp(a);
    },
    CX: function(a) {
      for (var b = "", c, e = 0, f = a.length; e < f; e++)
        (c =
          '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' +
          a[e].index +
          '">' +
          a[e].data +
          "</span></div>"),
          (b += c);
      return b;
    },
    lL: function(a) {
      for (var b = "", c, e = 0, f = a.length; e < f; e++)
        (c =
          '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' +
          a[e].index +
          '">' +
          a[e].data +
          "</span></li>"),
          (b += c);
      return b;
    },
    wX: function(a) {
      for (
        var b, c, e, f, g = [], i = this.kg.height, k = this.kg.width, m = 0;
        m < a.length;
        m++
      )
        (b = a[m]),
          (recoType = b.recoType),
          (e = b.panoId),
          (f = b.name),
          (c = b.heading),
          (b = b.pitch),
          (c = zf.yL(e, c, b, 198, 108)),
          (b =
            '<a href="javascript:void(0);" class="pano_photo_item" data-index="' +
            m +
            '"><img style="width:' +
            (k - 2) +
            "px;height:" +
            (i - 2) +
            'px;" data-index="' +
            m +
            '" name="' +
            f +
            '" src="' +
            c +
            '" alt="' +
            f +
            '"/><span class="pano_photo_decs" data-index="' +
            m +
            '" style="width:' +
            k +
            "px;font-size:" +
            Math.floor(i / 6) +
            "px; line-height:" +
            Math.floor(i / 6) +
            'px;"><em class="pano_poi_' +
            recoType +
            '"></em>' +
            f +
            "</span></a>"),
          3 === recoType
            ? Xa()
              ? ((this.Sz = b), (this.MW = e), a.splice(m, 1), m--)
              : ((b =
                  '<a href="javascript:void(0);" class="pano_photo_item" data-index="' +
                  m +
                  '"><img style="width:' +
                  (k - 2) +
                  "px;height:" +
                  (i - 2) +
                  'px;" data-index="' +
                  m +
                  '" name="' +
                  f +
                  '" src="' +
                  c +
                  '" alt="' +
                  f +
                  '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' +
                  this.m.imageHeight +
                  'px;" data-index="' +
                  m +
                  '"><img src="' +
                  H.ua +
                  'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' +
                  m +
                  '" alt=""/></div></a>'),
                g.push(b))
            : g.push(b);
      return g.join("");
    },
    OX: function(a) {
      var b = this,
        c = this.W.Zb();
      c &&
        this.Ul.xx(c, function(e) {
          b.W.Zb() === c && a(e);
        });
    },
    uc: function(a) {
      if (!$a(a) || isNaN(a) || a < Ec || 3 < a) a = this.defaultAnchor;
      var b = this.R,
        c = this.m.offset.width,
        e = this.m.offset.height;
      b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
      switch (a) {
        case Ec:
          b.style.top = e + "px";
          b.style.left = c + "px";
          break;
        case Fc:
          b.style.top = e + "px";
          b.style.right = c + "px";
          break;
        case Gc:
          b.style.bottom = e + "px";
          b.style.left = c + "px";
          break;
        case 3:
          (b.style.bottom = e + "px"), (b.style.right = c + "px");
      }
    },
    bQ: function() {
      this.$P();
    },
    $P: function() {
      var a = this;
      A.V(this.R, "touchstart", function(a) {
        a.stopPropagation();
      });
      A.V(this.nk, "click", function(b) {
        if (
          (b = (b.srcElement || b.target).getAttribute("data-index")) &&
          b != a.bd
        )
          a.Xp(b), a.W.Fc(a.jk[b].panoId);
      });
      A.V(this.Xh, "mouseover", function(b) {
        b = (b.srcElement || b.target).getAttribute("data-index");
        b !== q && a.oK(b, p);
      });
      this.W.addEventListener("size_changed", function() {
        isNaN(Number(a.m.maxWidth)) &&
          a.Fj({
            maxWidth: a.m.maxWidth,
          });
      });
    },
    Xp: function(a) {
      this.mk.style.left = this.pB[a].offsetLeft + 8 + "px";
      this.mk.setAttribute("data-index", this.pB[a].getAttribute("data-index"));
      this.bd = a;
      this.oK(a);
    },
    oK: function(a, b) {
      var c = this.kg.width + 8,
        e = 0;
      this.Xc.Us && (e = this.Xc.Us() / 2);
      var f = this.nk.offsetWidth - 2 * e,
        g = this.Xh.offsetLeft || this.Xc.x,
        g = g - e,
        i = -a * c;
      i > g && this.Xc.scrollTo(i + e);
      c = i - c;
      g -= f;
      c < g && (!b || (b && 8 < i - g)) && this.Xc.scrollTo(c + f + e);
    },
    yY: function() {
      this.Xc = I()
        ? new fg(this.nk, {
            Lo: t,
            $x: p,
            ni: t,
            Gi: t,
            tn: t,
            AE: p,
            Jw: p,
            Bx: p,
          })
        : new kg(this.nk);
    },
    aa: function() {
      this.R.style.visibility = "hidden";
    },
    show: function() {
      this.R.style.visibility = "visible";
    },
  });

  function kg(a) {
    this.R = a;
    this.hh = a.children[0];
    this.Pr = q;
    this.Ji = 20;
    this.offsetLeft = 0;
    this.za();
  }
  kg.prototype = {
    za: function() {
      this.hh.style.position = "relative";
      this.refresh();
      this.os();
      this.bC();
    },
    refresh: function() {
      this.jo = this.R.offsetWidth - this.Us();
      this.NA = -(this.hh.offsetWidth - this.jo - this.Ji);
      this.Cv = this.Ji + this.offsetLeft;
      this.hh.style.left = this.Cv + "px";
      this.hh.children[0] && (this.Pr = this.hh.children[0].offsetWidth);
      this.mg &&
        (this.mg.children[0].style.marginTop = this.Hr.children[0].style.marginTop =
          this.mg.offsetHeight / 2 -
          this.mg.children[0].offsetHeight / 2 +
          "px");
    },
    Us: function() {
      return 2 * this.Ji;
    },
    os: function() {
      this.Rv = L("div");
      this.Rv.innerHTML =
        '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
      this.mg = this.Rv.children[0];
      this.Hr = this.Rv.children[1];
      this.R.appendChild(this.Rv);
      this.mg.children[0].style.marginTop = this.Hr.children[0].style.marginTop =
        this.mg.offsetHeight / 2 - this.mg.children[0].offsetHeight / 2 + "px";
    },
    bC: function() {
      var a = this;
      A.V(this.mg, "click", function() {
        a.scrollTo(a.hh.offsetLeft + a.jo);
      });
      A.V(this.Hr, "click", function() {
        a.scrollTo(a.hh.offsetLeft - a.jo);
      });
    },
    wU: function() {
      A.U.qc(this.mg, "pano_arrow_disable");
      A.U.qc(this.Hr, "pano_arrow_disable");
      var a = this.hh.offsetLeft;
      a >= this.Cv && A.U.ib(this.mg, "pano_arrow_disable");
      a - this.jo <= this.NA && A.U.ib(this.Hr, "pano_arrow_disable");
    },
    scrollTo: function(a) {
      a =
        a < this.hh.offsetLeft
          ? Math.ceil((a - this.Ji - this.jo) / this.Pr) * this.Pr +
            this.jo +
            this.Ji -
            8
          : Math.ceil((a - this.Ji) / this.Pr) * this.Pr + this.Ji;
      a < this.NA ? (a = this.NA) : a > this.Cv && (a = this.Cv);
      var b = this.hh.offsetLeft,
        c = this;
      new xb({
        Mc: 60,
        dc: yb.Ks,
        duration: 300,
        Ba: function(e) {
          c.hh.style.left = b + (a - b) * e + "px";
        },
        finish: function() {
          c.wU();
        },
      });
    },
  };
  D.Map = Na;
  D.Hotspot = lb;
  D.MapType = le;
  D.Point = Q;
  D.Pixel = R;
  D.Size = N;
  D.Bounds = ib;
  D.TileLayer = vd;
  D.Projection = Sc;
  D.MercatorProjection = T;
  D.PerspectiveProjection = kb;
  D.Copyright = function(a, b, c) {
    this.id = a;
    this.jb = b;
    this.content = c;
  };
  D.Overlay = Vc;
  D.Label = dd;
  D.GroundOverlay = ed;
  D.PointCollection = id;
  D.Marker = W;
  D.CanvasLayer = ld;
  D.Icon = $c;
  D.IconSequence = bd;
  D.Symbol = ad;
  D.Polyline = pd;
  D.Polygon = od;
  D.InfoWindow = cd;
  D.Circle = qd;
  D.Control = Dc;
  D.NavigationControl = nb;
  D.GeolocationControl = Hc;
  D.OverviewMapControl = pb;
  D.CopyrightControl = Ic;
  D.ScaleControl = ob;
  D.MapTypeControl = qb;
  D.CityListControl = Jc;
  D.PanoramaControl = Lc;
  D.TrafficLayer = Cd;
  D.CustomLayer = rb;
  D.ContextMenu = Oc;
  D.MenuItem = Rc;
  D.LocalSearch = gb;
  D.TransitRoute = Re;
  D.DrivingRoute = Ue;
  D.TruckRoute = We;
  D.WalkingRoute = Ve;
  D.RidingRoute = Xe;
  D.Autocomplete = gf;
  D.RouteSearch = af;
  D.Geocoder = bf;
  D.LocalCity = df;
  D.Geolocation = Geolocation;
  D.Convertor = Uc;
  D.BusLineSearch = ff;
  D.Boundary = ef;
  D.Panorama = Qa;
  D.PanoramaLabel = of;
  D.PanoramaService = Nc;
  D.PanoramaCoverageLayer = Mc;
  D.PanoramaFlashInterface = xf;

  function V(a, b) {
    for (var c in b) a[c] = b[c];
  }
  V(window, {
    BMap: D,
    _jsload2: function(a, b) {
      ja.Ky.MY && ja.Ky.set(a, b);
      Ua.qV(a, b);
    },
    BMAP_API_VERSION: "2.0",
  });
  var lg = Na.prototype;
  V(lg, {
    getBounds: lg.ke,
    getCenter: lg.Qb,
    getMapType: lg.ya,
    getSize: lg.yb,
    setSize: lg.He,
    getViewport: lg.gt,
    getZoom: lg.ka,
    centerAndZoom: lg.ud,
    panTo: lg.zi,
    panBy: lg.Kg,
    setCenter: lg.zf,
    setCurrentCity: lg.kF,
    setMapType: lg.Og,
    setViewport: lg.Pg,
    setZoom: lg.Wc,
    highResolutionEnabled: lg.Hx,
    zoomTo: lg.Rg,
    zoomIn: lg.$F,
    zoomOut: lg.aG,
    addHotspot: lg.QB,
    removeHotspot: lg.YZ,
    clearHotspots: lg.Nw,
    checkResize: lg.tV,
    addControl: lg.cs,
    removeControl: lg.DN,
    getContainer: lg.Ta,
    addContextMenu: lg.bm,
    removeContextMenu: lg.Op,
    addOverlay: lg.Ra,
    removeOverlay: lg.Jb,
    clearOverlays: lg.lK,
    openInfoWindow: lg.Uc,
    closeInfoWindow: lg.Lc,
    pointToOverlayPixel: lg.cf,
    overlayPixelToPoint: lg.oN,
    getInfoWindow: lg.qh,
    getOverlays: lg.ux,
    getPanes: function() {
      return {
        floatPane: this.be.oD,
        markerMouseTarget: this.be.DE,
        floatShadow: this.be.bL,
        labelPane: this.be.vE,
        markerPane: this.be.NM,
        markerShadow: this.be.OM,
        mapPane: this.be.Ft,
        vertexPane: this.be.UO,
      };
    },
    addTileLayer: lg.Ue,
    removeTileLayer: lg.cg,
    pixelToPoint: lg.bc,
    pointToPixel: lg.Ac,
    setFeatureStyle: lg.V5,
    selectBaseElement: lg.O5,
    setMapStyle: lg.au,
    enable3DBuilding: lg.$o,
    disable3DBuilding: lg.fW,
    getPanorama: lg.at,
    initIndoorLayer: lg.zY,
    setNormalMapDisplay: lg.Ay,
    setMapStyleV2: lg.C_,
    setBMapCopyrightOffset: lg.jF,
    getVectorContainer: lg.cY,
  });
  V(window, {
    BMAP_COORD_BD09: 5,
    BMAP_COORD_GCJ02: 3,
  });
  var mg = le.prototype;
  V(mg, {
    getTileLayer: mg.XX,
    getMinZoom: mg.rf,
    getMaxZoom: mg.Ze,
    getProjection: mg.tj,
    getTextColor: mg.Gm,
    getTips: mg.dt,
  });
  V(window, {
    BMAP_NORMAL_MAP: Oa,
    BMAP_PERSPECTIVE_MAP: Ra,
    BMAP_SATELLITE_MAP: bb,
    BMAP_HYBRID_MAP: Ta,
  });
  var ng = T.prototype;
  V(ng, {
    lngLatToPoint: ng.Hg,
    pointToLngLat: ng.Dj,
  });
  var og = kb.prototype;
  V(og, {
    lngLatToPoint: og.Hg,
    pointToLngLat: og.Dj,
  });
  var pg = ib.prototype;
  V(pg, {
    equals: pg.Ub,
    containsPoint: pg.ls,
    containsBounds: pg.FV,
    intersects: pg.nt,
    extend: pg.extend,
    getCenter: pg.Qb,
    isEmpty: pg.zj,
    getSouthWest: pg.Ae,
    getNorthEast: pg.sf,
    toSpan: pg.LF,
  });
  var qg = Vc.prototype;
  V(qg, {
    isVisible: qg.Tc,
    show: qg.show,
    hide: qg.aa,
  });
  Vc.getZIndex = Vc.Kk;
  var rg = jb.prototype;
  V(rg, {
    openInfoWindow: rg.Uc,
    closeInfoWindow: rg.Lc,
    enableMassClear: rg.pj,
    disableMassClear: rg.hW,
    show: rg.show,
    hide: rg.aa,
    getMap: rg.qx,
    addContextMenu: rg.bm,
    removeContextMenu: rg.Op,
  });
  var sg = W.prototype;
  V(sg, {
    setIcon: sg.Wb,
    getIcon: sg.kp,
    setPosition: sg.va,
    getPosition: sg.na,
    setOffset: sg.Rd,
    getOffset: sg.rj,
    getLabel: sg.Xs,
    setLabel: sg.Ej,
    setTitle: sg.Gc,
    setTop: sg.Di,
    enableDragging: sg.jc,
    disableDragging: sg.As,
    setZIndex: sg.bq,
    getMap: sg.qx,
    setAnimation: sg.dn,
    setShadow: sg.Dy,
    hide: sg.aa,
    setRotation: sg.Yp,
    getRotation: sg.CL,
  });
  V(window, {
    BMAP_ANIMATION_DROP: 1,
    BMAP_ANIMATION_BOUNCE: 2,
  });
  var tg = dd.prototype;
  V(tg, {
    setStyle: tg.Sd,
    setStyles: tg.Ci,
    setContent: tg.Oc,
    setPosition: tg.va,
    getPosition: tg.na,
    setOffset: tg.Rd,
    getOffset: tg.rj,
    setTitle: tg.Gc,
    setZIndex: tg.bq,
    getMap: tg.qx,
    getContent: tg.Dk,
  });
  var ug = $c.prototype;
  V(ug, {
    setImageUrl: ug.UN,
    setSize: ug.He,
    setAnchor: ug.uc,
    setImageOffset: ug.$t,
    setImageSize: ug.w_,
    setInfoWindowAnchor: ug.z_,
    setPrintImageUrl: ug.L_,
  });
  var vg = cd.prototype;
  V(vg, {
    redraw: vg.qe,
    setTitle: vg.Gc,
    setContent: vg.Oc,
    getContent: vg.Dk,
    getPosition: vg.na,
    enableMaximize: vg.oh,
    disableMaximize: vg.Zw,
    isOpen: vg.eb,
    setMaxContent: vg.bu,
    maximize: vg.Yx,
    enableAutoPan: vg.Ls,
  });
  var wg = Xc.prototype;
  V(wg, {
    getPath: wg.$e,
    setPath: wg.re,
    setPositionAt: wg.jn,
    getStrokeColor: wg.UX,
    setStrokeWeight: wg.aq,
    getStrokeWeight: wg.FL,
    setStrokeOpacity: wg.Zp,
    getStrokeOpacity: wg.VX,
    setFillOpacity: wg.Zt,
    getFillOpacity: wg.pX,
    setStrokeStyle: wg.$p,
    getStrokeStyle: wg.EL,
    getFillColor: wg.oX,
    getBounds: wg.ke,
    enableEditing: wg.pf,
    disableEditing: wg.gW,
    getEditing: wg.lX,
    getGeodesicPath: wg.sX,
  });
  var xg = qd.prototype;
  V(xg, {
    setCenter: xg.zf,
    getCenter: xg.Qb,
    getRadius: xg.AL,
    setRadius: xg.Af,
  });
  var yg = od.prototype;
  V(yg, {
    getPath: yg.$e,
    setPath: yg.re,
    setPositionAt: yg.jn,
  });
  var zg = lb.prototype;
  V(zg, {
    getPosition: zg.na,
    setPosition: zg.va,
    getText: zg.SD,
    setText: zg.eu,
  });
  Q.prototype.equals = Q.prototype.Ub;
  R.prototype.equals = R.prototype.Ub;
  N.prototype.equals = N.prototype.Ub;
  V(window, {
    BMAP_ANCHOR_TOP_LEFT: Ec,
    BMAP_ANCHOR_TOP_RIGHT: Fc,
    BMAP_ANCHOR_BOTTOM_LEFT: Gc,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3,
  });
  var Ag = Dc.prototype;
  V(Ag, {
    setAnchor: Ag.uc,
    getAnchor: Ag.vD,
    setOffset: Ag.Rd,
    getOffset: Ag.rj,
    show: Ag.show,
    hide: Ag.aa,
    isVisible: Ag.Tc,
    toString: Ag.toString,
  });
  var Bg = nb.prototype;
  V(Bg, {
    getType: Bg.sp,
    setType: Bg.kn,
  });
  V(window, {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3,
  });
  var Cg = pb.prototype;
  V(Cg, {
    changeView: Cg.ve,
    setSize: Cg.He,
    getSize: Cg.yb,
  });
  var Dg = ob.prototype;
  V(Dg, {
    getUnit: Dg.bY,
    setUnit: Dg.uF,
  });
  V(window, {
    BMAP_UNIT_METRIC: "metric",
    BMAP_UNIT_IMPERIAL: "us",
  });
  var Eg = Ic.prototype;
  V(Eg, {
    addCopyright: Eg.zw,
    removeCopyright: Eg.XE,
    getCopyright: Eg.xm,
    getCopyrightCollection: Eg.CD,
  });
  V(window, {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL: Kc,
    BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
    BMAP_MAPTYPE_CONTROL_MAP: 2,
  });
  var Fg = vd.prototype;
  V(Fg, {
    getMapType: Fg.ya,
    getCopyright: Fg.xm,
    isTransparentPng: Fg.zt,
  });
  var Gg = Oc.prototype;
  V(Gg, {
    addItem: Gg.ds,
    addSeparator: Gg.TB,
    removeSeparator: Gg.$E,
  });
  var Hg = Rc.prototype;
  V(Hg, {
    setText: Hg.eu,
  });
  var Ig = Y.prototype;
  V(Ig, {
    getStatus: Ig.Em,
    setSearchCompleteCallback: Ig.du,
    getPageCapacity: Ig.tf,
    setPageCapacity: Ig.gn,
    setLocation: Ig.fn,
    disableFirstResultSelection: Ig.HC,
    enableFirstResultSelection: Ig.aD,
    gotoPage: Ig.Hm,
    searchNearby: Ig.Vp,
    searchInBounds: Ig.bn,
    search: Ig.search,
  });
  V(window, {
    BMAP_STATUS_SUCCESS: 0,
    BMAP_STATUS_CITY_LIST: 1,
    BMAP_STATUS_UNKNOWN_LOCATION: we,
    BMAP_STATUS_UNKNOWN_ROUTE: 3,
    BMAP_STATUS_INVALID_KEY: 4,
    BMAP_STATUS_INVALID_REQUEST: 5,
    BMAP_STATUS_PERMISSION_DENIED: xe,
    BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
    BMAP_STATUS_TIMEOUT: ye,
  });
  V(window, {
    BMAP_POI_TYPE_NORMAL: 0,
    BMAP_POI_TYPE_BUSSTOP: 1,
    BMAP_POI_TYPE_BUSLINE: 2,
    BMAP_POI_TYPE_SUBSTOP: 3,
    BMAP_POI_TYPE_SUBLINE: 4,
  });
  V(window, {
    BMAP_TRANSIT_POLICY_RECOMMEND: 0,
    BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
    BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
    BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
    BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
    BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
    BMAP_LINE_TYPE_BUS: 0,
    BMAP_LINE_TYPE_SUBWAY: 1,
    BMAP_LINE_TYPE_FERRY: 2,
    BMAP_LINE_TYPE_TRAIN: 3,
    BMAP_LINE_TYPE_AIRPLANE: 4,
    BMAP_LINE_TYPE_COACH: 5,
  });
  V(window, {
    BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
    BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
    BMAP_TRANSIT_TYPE_POLICY_COACH: 2,
  });
  V(window, {
    BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
    BMAP_INTERCITY_POLICY_EARLY_START: 1,
    BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2,
  });
  V(window, {
    BMAP_TRANSIT_TYPE_IN_CITY: 0,
    BMAP_TRANSIT_TYPE_CROSS_CITY: 1,
  });
  V(window, {
    BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
    BMAP_TRANSIT_PLAN_TYPE_LINE: 1,
  });
  var Jg = Qe.prototype;
  V(Jg, {
    clearResults: Jg.we,
  });
  Se = Re.prototype;
  V(Se, {
    setPolicy: Se.hn,
    toString: Se.toString,
    setPageCapacity: Se.gn,
    setIntercityPolicy: Se.nF,
    setTransitTypePolicy: Se.sF,
  });
  V(We.prototype, {
    setPolicy: We.hn,
    toString: We.toString,
    setPageCapacity: We.gn,
    setIntercityPolicy: We.nF,
    setTransitTypePolicy: We.sF,
  });
  V(window, {
    BMAP_DRIVING_POLICY_DEFAULT: 0,
    BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
    BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
    BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4,
  });
  V(window, {
    BMAP_MODE_DRIVING: "driving",
    BMAP_MODE_TRANSIT: "transit",
    BMAP_MODE_WALKING: "walking",
    BMAP_MODE_NAVIGATION: "navigation",
  });
  var Kg = af.prototype;
  V(Kg, {
    routeCall: Kg.ON,
  });
  V(window, {
    BMAP_HIGHLIGHT_STEP: 1,
    BMAP_HIGHLIGHT_ROUTE: 2,
  });
  V(window, {
    BMAP_ROUTE_TYPE_DRIVING: Ae,
    BMAP_ROUTE_TYPE_WALKING: ze,
    BMAP_ROUTE_TYPE_RIDING: Be,
  });
  V(window, {
    BMAP_ROUTE_STATUS_NORMAL: Ce,
    BMAP_ROUTE_STATUS_EMPTY: 1,
    BMAP_ROUTE_STATUS_ADDRESS: 2,
  });
  var Lg = Ue.prototype;
  V(Lg, {
    setPolicy: Lg.hn,
  });
  var Mg = gf.prototype;
  V(Mg, {
    show: Mg.show,
    hide: Mg.aa,
    setTypes: Mg.tF,
    setLocation: Mg.fn,
    search: Mg.search,
    setInputValue: Mg.zy,
  });
  V(rb.prototype, {});
  var Ng = ef.prototype;
  V(Ng, {
    get: Ng.get,
  });
  V(Mc.prototype, {});
  V(window, {
    BMAP_POINT_DENSITY_HIGH: 200,
    BMAP_POINT_DENSITY_MEDIUM: Fd,
    BMAP_POINT_DENSITY_LOW: 50,
  });
  V(window, {
    BMAP_POINT_SHAPE_STAR: 1,
    BMAP_POINT_SHAPE_WATERDROP: 2,
    BMAP_POINT_SHAPE_CIRCLE: fd,
    BMAP_POINT_SHAPE_SQUARE: 4,
    BMAP_POINT_SHAPE_RHOMBUS: 5,
  });
  V(window, {
    BMAP_POINT_SIZE_TINY: 1,
    BMAP_POINT_SIZE_SMALLER: 2,
    BMAP_POINT_SIZE_SMALL: 3,
    BMAP_POINT_SIZE_NORMAL: gd,
    BMAP_POINT_SIZE_BIG: 5,
    BMAP_POINT_SIZE_BIGGER: 6,
    BMAP_POINT_SIZE_HUGE: 7,
  });
  V(window, {
    BMap_Symbol_SHAPE_CAMERA: 11,
    BMap_Symbol_SHAPE_WARNING: 12,
    BMap_Symbol_SHAPE_SMILE: 13,
    BMap_Symbol_SHAPE_CLOCK: 14,
    BMap_Symbol_SHAPE_POINT: 9,
    BMap_Symbol_SHAPE_PLANE: 10,
    BMap_Symbol_SHAPE_CIRCLE: 1,
    BMap_Symbol_SHAPE_RECTANGLE: 2,
    BMap_Symbol_SHAPE_RHOMBUS: 3,
    BMap_Symbol_SHAPE_STAR: 4,
    BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
    BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
    BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
    BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8,
  });
  V(window, {
    BMAP_CONTEXT_MENU_ICON_ZOOMIN: Pc,
    BMAP_CONTEXT_MENU_ICON_ZOOMOUT: Qc,
  });
  V(window, {
    BMAP_SYS_DRAWER: Ma,
    BMAP_SVG_DRAWER: 1,
    BMAP_VML_DRAWER: 2,
    BMAP_CANVAS_DRAWER: 3,
    BMAP_SVG_DRAWER_FIRST: 4,
  });
  D.NU();
  D.T0();
})();
