(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".container-main {\n  background-color: #202124;\n  color: white;\n  height: 100vh;\n}\n\n.animated-title {\n  color: #fff;\n  font-family: Roboto, Arial, sans-serif;\n  width: 90%;\n  height: 100vh;\n  left: 50%;\n  margin-left: 50px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.animated-title>div {\n  overflow: hidden;\n  position: absolute;\n  width: 50%;\n}\n\n.animated-title>div div {\n  /* border: solid white; */\n  padding: 20px 0;\n  position: absolute;\n}\n\n.animated-title>div div span {\n  display: block;\n}\n\n.animated-title>div.text-top {\n  border-bottom: 1vmin solid #000;\n  top: 0;\n}\n\n.animated-title>div.text-top div {\n  -webkit-animation: showTopText 0.5s;\n          animation: showTopText 0.5s;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  bottom: 0;\n  transform: translate(0, 100%);\n}\n\n.animated-title>div.text-top {\n  height: 40%;\n  color: white;\n  font-size: 10vmin;\n}\n\n.animated-title>div.text-bottom {\n  height: 60%;\n  color: white;\n  font-size: 2.5vmin;\n}\n\n.animated-title>div.text-bottom {\n  bottom: 0;\n}\n\n.animated-title>div.text-bottom div {\n  -webkit-animation: showBottomText 0.7s;\n          animation: showBottomText 0.7s;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 0;\n  transform: translate(0, -100%);\n}\n\n@media (max-width: 600px) {\n  .animated-title {\n    left: calc(50% - 25px);\n    width: calc(100% - 50px);\n    top: 50%;\n  }\n  .animated-title>div {\n    position: absolute;\n    overflow: auto;\n    padding-right: 50px;\n    width: 100%;\n    height: 50%;\n  }\n  .animated-title>div div {\n    padding: 2vmin 0;\n    padding-left: 15px;\n    padding-right: 15px;\n    position: absolute;\n  }\n\n  .animated-title>div.text-top {\n    height: 30%;\n    color: white;\n    font-size: 10vmin;\n  }\n\n  .animated-title>div.text-bottom {\n    height: 40%;\n    color: white;\n    font-size: 4vmin;\n  }\n\n  .animated-title>div.text-bottom {\n    bottom: 30%;\n  }\n\n}\n\n@-webkit-keyframes showTopText {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes showTopText {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@-webkit-keyframes showBottomText {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes showBottomText {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes downSwing {\n  0% {\n    bottom: 60px;\n  }\n\n  30% {\n    bottom: 60px;\n  }\n\n  100% {\n    bottom: 30px;\n  }\n}\n\n@keyframes downSwing {\n  0% {\n    bottom: 60px;\n  }\n\n  30% {\n    bottom: 60px;\n  }\n\n  100% {\n    bottom: 30px;\n  }\n}\n\n@-webkit-keyframes topSwing {\n  0% {\n    top: 60px;\n  }\n\n  30% {\n    top: 60px;\n  }\n\n  100% {\n    top: 30px;\n  }\n}\n\n@keyframes topSwing {\n  0% {\n    top: 60px;\n  }\n\n  30% {\n    top: 60px;\n  }\n\n  100% {\n    top: 30px;\n  }\n}\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;AACf;;AAIA;EACE,WAAW;EACX,sCAAsC;EACtC,UAAU;EACV,aAAa;EACb,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;EACR,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,+BAA+B;EAC/B,MAAM;AACR;;AAEA;EACE,mCAA2B;UAA3B,2BAA2B;EAC3B,6BAAqB;UAArB,qBAAqB;EACrB,qCAA6B;UAA7B,6BAA6B;EAC7B,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,sCAA8B;UAA9B,8BAA8B;EAC9B,6BAAqB;UAArB,qBAAqB;EACrB,qCAA6B;UAA7B,6BAA6B;EAC7B,MAAM;EACN,8BAA8B;AAChC;;AAEA;EACE;IACE,sBAAsB;IACtB,wBAAwB;IACxB,QAAQ;EACV;EACA;IACE,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,WAAW;IACX,WAAW;EACb;EACA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,gBAAgB;EAClB;;EAEA;IACE,WAAW;EACb;;AAEF;;AAEA;EACE;IACE,kCAAkC;EACpC;;EAEA;IACE,+BAA+B;EACjC;AACF;;AARA;EACE;IACE,kCAAkC;EACpC;;EAEA;IACE,+BAA+B;EACjC;AACF;;AAEA;EACE;IACE,mCAAmC;EACrC;;EAEA;IACE,+BAA+B;EACjC;AACF;;AARA;EACE;IACE,mCAAmC;EACrC;;EAEA;IACE,+BAA+B;EACjC;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AARA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;AACF;;AAZA;EACE;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,SAAS;EACX;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,SAAS;EACX;AACF;;AAZA;EACE;IACE,SAAS;EACX;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,SAAS;EACX;AACF","file":"styles.css","sourcesContent":[".container-main {\n  background-color: #202124;\n  color: white;\n  height: 100vh;\n}\n\n@import url('https://fonts.googleapis.com/css?family=Roboto:700');\n\n.animated-title {\n  color: #fff;\n  font-family: Roboto, Arial, sans-serif;\n  width: 90%;\n  height: 100vh;\n  left: 50%;\n  margin-left: 50px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.animated-title>div {\n  overflow: hidden;\n  position: absolute;\n  width: 50%;\n}\n\n.animated-title>div div {\n  /* border: solid white; */\n  padding: 20px 0;\n  position: absolute;\n}\n\n.animated-title>div div span {\n  display: block;\n}\n\n.animated-title>div.text-top {\n  border-bottom: 1vmin solid #000;\n  top: 0;\n}\n\n.animated-title>div.text-top div {\n  animation: showTopText 0.5s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n  bottom: 0;\n  transform: translate(0, 100%);\n}\n\n.animated-title>div.text-top {\n  height: 40%;\n  color: white;\n  font-size: 10vmin;\n}\n\n.animated-title>div.text-bottom {\n  height: 60%;\n  color: white;\n  font-size: 2.5vmin;\n}\n\n.animated-title>div.text-bottom {\n  bottom: 0;\n}\n\n.animated-title>div.text-bottom div {\n  animation: showBottomText 0.7s;\n  animation-delay: 1.2s;\n  animation-fill-mode: forwards;\n  top: 0;\n  transform: translate(0, -100%);\n}\n\n@media (max-width: 600px) {\n  .animated-title {\n    left: calc(50% - 25px);\n    width: calc(100% - 50px);\n    top: 50%;\n  }\n  .animated-title>div {\n    position: absolute;\n    overflow: auto;\n    padding-right: 50px;\n    width: 100%;\n    height: 50%;\n  }\n  .animated-title>div div {\n    padding: 2vmin 0;\n    padding-left: 15px;\n    padding-right: 15px;\n    position: absolute;\n  }\n\n  .animated-title>div.text-top {\n    height: 30%;\n    color: white;\n    font-size: 10vmin;\n  }\n\n  .animated-title>div.text-bottom {\n    height: 40%;\n    color: white;\n    font-size: 4vmin;\n  }\n\n  .animated-title>div.text-bottom {\n    bottom: 30%;\n  }\n\n}\n\n@keyframes showTopText {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes showBottomText {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes downSwing {\n  0% {\n    bottom: 60px;\n  }\n\n  30% {\n    bottom: 60px;\n  }\n\n  100% {\n    bottom: 30px;\n  }\n}\n\n@keyframes topSwing {\n  0% {\n    top: 60px;\n  }\n\n  30% {\n    top: 60px;\n  }\n\n  100% {\n    top: 30px;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/apoorv/dev/portfolio/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map