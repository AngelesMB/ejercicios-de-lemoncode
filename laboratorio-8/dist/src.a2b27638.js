// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/data-business.js":[function(require,module,exports) {
function getClients() {
  return [{
    id: 1,
    avatar: "https://robohash.org/harumundedeleniti.jpg?size=50x50&set=set1",
    first_name: "Javier",
    last_name: "Lamey",
    email: "jlamey0@discuz.net"
  }, {
    id: 2,
    avatar: "https://robohash.org/fugitvoluptatesenim.png?size=50x50&set=set1",
    first_name: "Crin",
    last_name: "Siberry",
    email: "csiberry1@lycos.com"
  }, {
    id: 3,
    avatar: "https://robohash.org/quodquidemvero.jpg?size=50x50&set=set1",
    first_name: "Belva",
    last_name: "Dumbleton",
    email: "bdumbleton2@bloomberg.com"
  }, {
    id: 4,
    avatar: "https://robohash.org/evenietanimimaxime.jpg?size=50x50&set=set1",
    first_name: "Natal",
    last_name: "Achromov",
    email: "nachromov3@hatena.ne.jp"
  }, {
    id: 5,
    avatar: "https://robohash.org/eositaqueexplicabo.bmp?size=50x50&set=set1",
    first_name: "Brandy",
    last_name: "Iwaszkiewicz",
    email: "biwaszkiewicz4@goodreads.com"
  }, {
    id: 6,
    avatar: "https://robohash.org/veritatisaliasminima.jpg?size=50x50&set=set1",
    first_name: "Rudolfo",
    last_name: "Squelch",
    email: "rsquelch5@stanford.edu"
  }, {
    id: 7,
    avatar: "https://robohash.org/asperioresomnissoluta.bmp?size=50x50&set=set1",
    first_name: "Aurelie",
    last_name: "Flye",
    email: "aflye6@amazon.de"
  }, {
    id: 8,
    avatar: "https://robohash.org/veritatisfacereeligendi.png?size=50x50&set=set1",
    first_name: "Dollie",
    last_name: "Durdy",
    email: "ddurdy7@privacy.gov.au"
  }, {
    id: 9,
    avatar: "https://robohash.org/molestiaeutaliquam.jpg?size=50x50&set=set1",
    first_name: "Sadie",
    last_name: "Carsey",
    email: "scarsey8@free.fr"
  }, {
    id: 10,
    avatar: "https://robohash.org/asperioresdolorsit.png?size=50x50&set=set1",
    first_name: "Franny",
    last_name: "Breazeall",
    email: "fbreazeall9@msu.edu"
  }];
}

function getAccounts() {
  return [{
    id: 1,
    clientId: 1,
    iban: "CZ93 1843 7812 7148 7249 2819",
    money: "-1345.10"
  }, {
    id: 2,
    clientId: 1,
    iban: "FR39 8986 1940 69E5 IPIX 74QN G61",
    money: "-1418.10"
  }, {
    id: 3,
    clientId: 2,
    iban: "TN31 0683 5990 1113 0051 7844",
    money: "23109.78"
  }, {
    id: 4,
    clientId: 3,
    iban: "GB98 UTTC 8356 6258 9439 93",
    money: "15721.47"
  }, {
    id: 5,
    clientId: 4,
    iban: "BG17 VAKO 7833 79Q7 HK7H K3",
    money: "24458.62"
  }, {
    id: 6,
    clientId: 5,
    iban: "MU93 QUGI 8684 7689 7519 5635 274U LC",
    money: "23677.60"
  }, {
    id: 7,
    clientId: 5,
    iban: "FR43 9528 3177 35O3 AC2V 6VNU V38",
    money: "11117.60"
  }, {
    id: 8,
    clientId: 6,
    iban: "NL35 BLZT 2522 8993 25",
    money: "207.32"
  }, {
    id: 9,
    clientId: 7,
    iban: "AZ25 TSQE CULI 0YGX AJK3 RCHX DSZ2",
    money: "23980.98"
  }, {
    id: 10,
    clientId: 8,
    iban: "FR16 3581 3360 133P CCCZ EW3E A20",
    money: "15230.37"
  }, {
    id: 11,
    clientId: 8,
    iban: "MK98 081B IAUU CTEF 308",
    money: "19166.62"
  }, {
    id: 12,
    clientId: 8,
    iban: "LB91 1234 KKW8 W2EY 972B EXVO YKN0",
    money: "-2396.78"
  }, {
    id: 13,
    clientId: 9,
    iban: "BG83 RKKJ 5762 9795 AH74 9Y",
    money: "11837.06"
  }, {
    id: 14,
    clientId: 9,
    iban: "HU46 6405 3103 5188 8345 6947 6173",
    money: "-6081.25"
  }, {
    id: 15,
    clientId: 10,
    iban: "FR59 2396 3586 44UT 2E5F DQAB P15",
    money: "24426.40"
  }];
} // ES6
// export { getClients, getAccounts };
// COMMON JS


module.exports = {
  getClients: getClients,
  getAccounts: getAccounts
};
},{}],"src/style-business.js":[function(require,module,exports) {
function getNodeStyle(account) {
  if (account.money < 0) {
    return "color: red";
  }

  return "color: blue";
} // ES6
// export { getNodeStyle };
// COMMON JS


module.exports = {
  getNodeStyle: getNodeStyle
};
},{}],"src/account-business.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ES6
// import * as StyleBusiness from "./style-business";
// COMMON JS
var StyleBusiness = require("./style-business");

function getClientAccountsElement(accounts) {
  var ul = document.createElement("ul");

  var _iterator = _createForOfIteratorHelper(accounts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var account = _step.value;
      ul.append(getAccountElement(account));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return ul;
}

function getAccountElement(account) {
  var li = document.createElement("li");
  li.style = StyleBusiness.getNodeStyle(account);
  li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
  return li;
} // ES6
// export { getClientAccountsElement };
// COMMON JS


module.exports = {
  getClientAccountsElement: getClientAccountsElement
};
},{"./style-business":"src/style-business.js"}],"src/client-business.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ES6
// import * as AccountBusiness from "./account-business";
// import * as DataBusiness from "./data-business";
// COMMON JS
var AccountBusiness = require("./account-business");

var DataBusiness = require("./data-business");

function getClientElement(client) {
  var allAccounts = DataBusiness.getAccounts();
  var clientAccounts = [];

  var _iterator = _createForOfIteratorHelper(allAccounts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var account = _step.value;

      if (account.clientId === client.id) {
        clientAccounts.push(account);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var node = getClientNode(client);
  var ul = AccountBusiness.getClientAccountsElement(clientAccounts);
  node.appendChild(ul);
  return node;
}

function getClientNode(client) {
  var li = document.createElement("li");
  li.append(getFullName(client));
  return li;
}

function getFullName(client) {
  return client.first_name + " " + client.last_name;
} // ES6
// export { getClientElement };
// COMMON JS


module.exports = {
  getClientElement: getClientElement
};
},{"./account-business":"src/account-business.js","./data-business":"src/data-business.js"}],"src/client-list-business.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ES6
// import * as DataBusiness from "./data-business";
// import * as ClientBusiness from "./client-business";
// COMMON JS
var DataBusiness = require("./data-business");

var ClientBusiness = require("./client-business");

function printClientsAccounts() {
  var clients = DataBusiness.getClients();
  var ul = document.createElement("ul");

  var _iterator = _createForOfIteratorHelper(clients),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var client = _step.value;
      var element = ClientBusiness.getClientElement(client);
      ul.appendChild(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  document.getElementById("root").appendChild(ul);
} // ES6
// export { printClientsAccounts };
// COMMON JS


module.exports = {
  printClientsAccounts: printClientsAccounts
};
},{"./data-business":"src/data-business.js","./client-business":"src/client-business.js"}],"src/index.js":[function(require,module,exports) {
// ES6
// import * as ClientListBusiness from "./client-list-business";
// COMMON JS
var ClientListBusiness = require("./client-list-business");

window.onload = function () {
  ClientListBusiness.printClientsAccounts();
};
},{"./client-list-business":"src/client-list-business.js"}],"../../../../Users/Angeles/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59231" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Users/Angeles/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map