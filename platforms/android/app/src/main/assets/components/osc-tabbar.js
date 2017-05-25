// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * @author walid
	 * @date 2016/03/20
	 * @description 程序入口启动配置
	 */

	const App = __webpack_require__(63)

	// 全局注册组件
	Vue.component('osc-root', __webpack_require__(51))
	Vue.component('osc-navpage', __webpack_require__(55))
	Vue.component('osc-navbar', __webpack_require__(59))
	Vue.component('osc-tabbar', __webpack_require__(63))
	Vue.component('osc-list', __webpack_require__(71))
	Vue.component('osc-scroller', __webpack_require__(75))

	App.el = '#root'
	new Vue(App)


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author walid
	 * @date 2017/3/4
	 * @description 路由名字配置
	 */

	exports.default = {
	  home: {
	    title: '首页',
	    path: '/home',
	    jsPath: 'views/home/app',
	    component: __webpack_require__(4)
	  },
	  launch: {
	    title: '发起筹款',
	    path: '/launch',
	    jsPath: 'views/launch/app',
	    component: __webpack_require__(22)
	  },
	  mine: {
	    title: '我的',
	    path: '/mine',
	    jsPath: 'views/mine/app',
	    component: __webpack_require__(26)
	  },
	  web: {
	    title: 'syswin web',
	    path: '/web',
	    jsPath: 'views/web/app',
	    component: __webpack_require__(30)
	  },
	  userInfo: {
	    title: '个人资料',
	    path: '/userinfo',
	    jsPath: 'views/userinfo/app',
	    component: __webpack_require__(34)
	  },
	  personal: {
	    title: '个人中心',
	    path: '/personal',
	    jsPath: 'views/personal/app',
	    component: __webpack_require__(38)
	  },
	  list: {
	    title: 'List 组件',
	    path: '/list',
	    jsPath: 'views/list/app',
	    component: __webpack_require__(42)
	  },
	  scroller: {
	    title: 'Scroller 组件',
	    path: '/scroller',
	    jsPath: 'views/scroller/app',
	    component: __webpack_require__(46)
	  }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(5)
	)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(21)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\views\\home\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-035bd5aa"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "height": 1334
	  },
	  "div-cell": {
	    "display": "flex",
	    "marginTop": 20,
	    "flexDirection": "column",
	    "alignItems": "flex-start",
	    "padding": 20,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#dadada",
	    "backgroundColor": "#ffffff"
	  },
	  "title": {
	    "fontSize": 60,
	    "color": "#333333",
	    "lineHeight": 100
	  },
	  "img-case": {
	    "width": 710,
	    "height": 300
	  },
	  "div-content": {
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "flex-start",
	    "marginTop": 30
	  },
	  "p-title": {
	    "fontSize": 36,
	    "textAlign": "left",
	    "color": "#333333",
	    "lineHeight": 80
	  },
	  "p-desc": {
	    "fontSize": 30,
	    "textAlign": "left",
	    "color": "#666666",
	    "lineHeight": 40
	  }
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dream = __webpack_require__(7);

	var _dream2 = _interopRequireDefault(_dream);

	var _mixins = __webpack_require__(15);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//

	exports.default = {
	  mixins: [_mixins2.default],

	  data: function data() {
	    return {
	      feeds: []
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    _dream2.default.dreamFeeds({
	      anchorId: -1,
	      size: 20
	    }).then(function (res) {
	      _this.feeds = res.data.feeds;
	      console.log('请求成功~', res.data.feeds);
	    }).catch(function (res) {
	      console.log('请求失败~');
	    });
	  },


	  methods: {
	    toDetail: function toDetail(infoUuid) {
	      this.router.push({
	        page: this.routerPage.web,
	        query: {
	          url: 'http://www.shuidichou.com/cf/dream/contribute/' + infoUuid
	        }
	      });
	    }
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(8);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 获取梦想筹案例
	function dreamFeeds(body) {
	  return _api2.default.get('api/cf/v4/dream/feeds', body);
	} /**
	   * @author walid
	   * @date 2017/3/5
	   * @description 梦想相关API
	   */

	exports.default = {
	  dreamFeeds: dreamFeeds
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _qs = __webpack_require__(9);

	var _qs2 = _interopRequireDefault(_qs);

	var _string = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author walid
	 * @date 2017/3/5
	 * @description API 封装工具类
	 */

	var stream = weex.requireModule('stream');

	// http base url
	var baseUrl = 'http://api.shuidichou.com/';

	function get(url, params) {
	  return new Promise(function (resolve, reject) {
	    console.log('request:', baseUrl + url + '?' + _qs2.default.stringify(params));
	    stream.fetch({
	      method: 'GET',
	      url: baseUrl + url + '?' + _qs2.default.stringify(params),
	      type: 'json'
	    }, function (res) {
	      console.log('GET res :' + res);
	      if (res.ok && res.data && res.data.code === 0) {
	        resolve(res.data);
	      } else {
	        reject(res.data);
	      }
	    }, function (progress) {
	      console.log('get in progress:' + progress.length);
	    });
	  });
	}

	function post(url, body) {
	  return new Promise(function (resolve, reject) {
	    stream.fetch({
	      method: 'POST',
	      url: baseUrl + url,
	      type: 'json',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(body)
	    }, function (res) {
	      if (res.ok && res.data && res.data.code === 0) {
	        resolve(res.data);
	      } else {
	        reject(res.data);
	      }
	    }, function (progress) {
	      console.log('get in progress:' + progress.length);
	    });
	  });
	}

	function del(url) {
	  return new Promise(function (resolve, reject) {
	    stream.fetch({
	      method: 'DELETE',
	      url: baseUrl + url,
	      type: 'json'
	    }, function (res) {
	      if (res.ok && res.data && res.data.code === 0) {
	        resolve(res.data);
	      } else {
	        reject(res.data);
	      }
	    }, function (progress) {
	      console.log('get in progress:' + progress.length);
	    });
	  });
	}

	function put(url, body) {
	  return new Promise(function (resolve, reject) {
	    stream.fetch({
	      method: 'PUT',
	      url: baseUrl + url,
	      type: 'json',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(body)
	    }, function (res) {
	      if (res.ok && res.data && res.data.code === 0) {
	        resolve(res.data);
	      } else {
	        reject(res.data);
	      }
	    }, function (progress) {
	      console.log('get in progress:' + progress.length);
	    });
	  });
	}

	exports.default = {
	  get: get, post: post, del: del, put: put
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var stringify = __webpack_require__(10);
	var parse = __webpack_require__(13);
	var formats = __webpack_require__(12);

	module.exports = {
	    formats: formats,
	    parse: parse,
	    stringify: stringify
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(11);
	var formats = __webpack_require__(12);

	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
	        return prefix;
	    }
	};

	var toISO = Date.prototype.toISOString;

	var defaults = {
	    delimiter: '&',
	    encode: true,
	    encoder: utils.encode,
	    encodeValuesOnly: false,
	    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
	        return toISO.call(date);
	    },
	    skipNulls: false,
	    strictNullHandling: false
	};

	var stringify = function stringify( // eslint-disable-line func-name-matching
	    object,
	    prefix,
	    generateArrayPrefix,
	    strictNullHandling,
	    skipNulls,
	    encoder,
	    filter,
	    sort,
	    allowDots,
	    serializeDate,
	    formatter,
	    encodeValuesOnly
	) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = serializeDate(obj);
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder && !encodeValuesOnly ? encoder(prefix) : prefix;
	        }

	        obj = '';
	    }

	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
	        if (encoder) {
	            var keyValue = encodeValuesOnly ? prefix : encoder(prefix);
	            return [formatter(keyValue) + '=' + formatter(encoder(obj))];
	        }
	        return [formatter(prefix) + '=' + formatter(String(obj))];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(
	                obj[key],
	                generateArrayPrefix(prefix, key),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter,
	                encodeValuesOnly
	            ));
	        } else {
	            values = values.concat(stringify(
	                obj[key],
	                prefix + (allowDots ? '.' + key : '[' + key + ']'),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter,
	                encodeValuesOnly
	            ));
	        }
	    }

	    return values;
	};

	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};

	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }

	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
	    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
	    if (typeof options.format === 'undefined') {
	        options.format = formats.default;
	    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
	        throw new TypeError('Unknown format option provided.');
	    }
	    var formatter = formats.formatters[options.format];
	    var objKeys;
	    var filter;

	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        filter = options.filter;
	        objKeys = filter;
	    }

	    var keys = [];

	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }

	    if (sort) {
	        objKeys.sort(sort);
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        keys = keys.concat(stringify(
	            obj[key],
	            key,
	            generateArrayPrefix,
	            strictNullHandling,
	            skipNulls,
	            encode ? encoder : null,
	            filter,
	            sort,
	            allowDots,
	            serializeDate,
	            formatter,
	            encodeValuesOnly
	        ));
	    }

	    return keys.join(delimiter);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	var hexTable = (function () {
	    var array = [];
	    for (var i = 0; i < 256; ++i) {
	        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
	    }

	    return array;
	}());

	exports.arrayToObject = function (source, options) {
	    var obj = options && options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};

	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
	                target[source] = true;
	            }
	        } else {
	            return [target, source];
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }

	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }

	    if (Array.isArray(target) && Array.isArray(source)) {
	        source.forEach(function (item, i) {
	            if (has.call(target, i)) {
	                if (target[i] && typeof target[i] === 'object') {
	                    target[i] = exports.merge(target[i], item, options);
	                } else {
	                    target.push(item);
	                }
	            } else {
	                target[i] = item;
	            }
	        });
	        return target;
	    }

	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];

	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};

	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};

	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    var string = typeof str === 'string' ? str : String(str);

	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);

	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }

	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }

	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
	    }

	    return out;
	};

	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }

	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    keys.forEach(function (key) {
	        obj[key] = exports.compact(obj[key], refs);
	    });

	    return obj;
	};

	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};

	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }

	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;

	module.exports = {
	    'default': 'RFC3986',
	    formatters: {
	        RFC1738: function (value) {
	            return replace.call(value, percentTwenties, '+');
	        },
	        RFC3986: function (value) {
	            return value;
	        }
	    },
	    RFC1738: 'RFC1738',
	    RFC3986: 'RFC3986'
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(11);

	var has = Object.prototype.hasOwnProperty;

	var defaults = {
	    allowDots: false,
	    allowPrototypes: false,
	    arrayLimit: 20,
	    decoder: utils.decode,
	    delimiter: '&',
	    depth: 5,
	    parameterLimit: 1000,
	    plainObjects: false,
	    strictNullHandling: false
	};

	var parseValues = function parseQueryStringValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        var key, val;
	        if (pos === -1) {
	            key = options.decoder(part);
	            val = options.strictNullHandling ? null : '';
	        } else {
	            key = options.decoder(part.slice(0, pos));
	            val = options.decoder(part.slice(pos + 1));
	        }
	        if (has.call(obj, key)) {
	            obj[key] = [].concat(obj[key]).concat(val);
	        } else {
	            obj[key] = val;
	        }
	    }

	    return obj;
	};

	var parseObject = function parseObjectRecursive(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};

	var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }

	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

	    // The regex chunks

	    var brackets = /(\[[^[\]]*])/;
	    var child = /(\[[^[\]]*])/g;

	    // Get the parent

	    var segment = brackets.exec(key);
	    var parent = segment ? key.slice(0, segment.index) : key;

	    // Stash the parent if it exists

	    var keys = [];
	    if (parent) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && has.call(Object.prototype, parent)) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }

	        keys.push(parent);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	        keys.push(segment[1]);
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return parseObject(keys, val, options);
	};

	module.exports = function (str, opts) {
	    var options = opts || {};

	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }

	    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }

	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = utils.merge(obj, newObj, options);
	    }

	    return utils.compact(obj);
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.trim = trim;
	exports.urlEncode = urlEncode;
	exports.getQueryString = getQueryString;
	exports.getQueryStringByName = getQueryStringByName;
	exports.getQueryStringByIndex = getQueryStringByIndex;
	/**
	 * @author walid
	 * @date 2017/02/21
	 * @description 字符串操作
	 */

	/* eslint linebreak-style: [0] */
	function trim(str, isGlobal) {
	  var result = str.replace(/(^\s+)|(\s+$)/g, '');
	  if (isGlobal) {
	    result = result.replace(/\s/g, '');
	  }
	  return result;
	}

	/**
	 * param 将要转为URL参数字符串的对象
	 * key URL参数字符串的前缀
	 * encode true/false 是否进行URL编码,默认为true
	 *
	 * return URL参数字符串
	 */
	function urlEncode(param, key, encode) {
	  if (param == null) {
	    return '';
	  }
	  var paramStr = '';
	  var t = typeof param === 'undefined' ? 'undefined' : _typeof(param);
	  if (t == 'string' || t == 'number' || t == 'boolean') {
	    paramStr += '&' + key + '=' + (encode == null || encode ? encodeURIComponent(param) : param);
	  } else {
	    for (var i in param) {
	      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
	      paramStr += urlEncode(param[i], k, encode);
	    }
	  }
	  return paramStr;
	}

	/**
	 * 获取QueryString的数组
	 * @returns {Array|{index: number, input: string}}
	 */
	function getQueryString() {
	  var result = weex.config.bundleUrl.match(new RegExp('[\?\&][^\?\&]+=[^\?\&]+', 'g'));
	  for (var i = 0; i < result.length; i++) {
	    result[i] = result[i].substring(1);
	  }
	  return result;
	}

	/**
	 * 根据QueryString参数名称获取值
	 * @param name
	 * @returns {string}
	 */
	function getQueryStringByName(name) {
	  name = name.replace(/[\[\]]/g, '\\$&');
	  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	  var results = regex.exec(weex.config.bundleUrl);
	  if (!results || !results[2]) {
	    console.log('empty');
	    return '';
	  }
	  console.log(name, decodeURIComponent(results[2].replace(/\+/g, ' ')));
	  return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	/**
	 * 根据QueryString参数索引获取值
	 * @param index
	 * @returns {*}
	 */
	function getQueryStringByIndex(index) {
	  if (!index) {
	    return '';
	  }
	  var queryStringList = getQueryString();
	  if (index >= queryStringList.length) {
	    return '';
	  }
	  var result = queryStringList[index];
	  var startIndex = result.indexOf('=') + 1;
	  return result.substring(startIndex);
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navigator = __webpack_require__(16);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _model = __webpack_require__(19);

	var _model2 = _interopRequireDefault(_model);

	var _page = __webpack_require__(3);

	var _page2 = _interopRequireDefault(_page);

	var _imgurl = __webpack_require__(20);

	var _imgurl2 = _interopRequireDefault(_imgurl);

	var _string = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      model: _model2.default,
	      routerPage: _page2.default,
	      router: {},
	      imgUrl: _imgurl2.default,
	      platform: weex.config.env.platform.toLowerCase()
	    };
	  },
	  created: function created() {
	    var self = this;
	    this.router.push = function (_ref) {
	      var page = _ref.page,
	          params = _ref.params,
	          query = _ref.query;

	      if (self.platform === 'web') {
	        if (page === self.routerPage.web) {
	          _navigator2.default.pushByUrl(query.url);
	          return;
	        }
	        self.$router.push({
	          path: page.path,
	          params: params,
	          query: query
	        });
	        return;
	      }
	      _navigator2.default.push(page, query);
	    };

	    this.router.replace = function (_ref2) {
	      var page = _ref2.page,
	          params = _ref2.params,
	          query = _ref2.query;

	      if (self.platform === 'web') {
	        self.$router.replace({
	          path: page.path,
	          params: params,
	          query: query
	        });
	        return;
	      }
	      _navigator2.default.push(page, query);
	      _navigator2.default.pop();
	    };

	    this.router.pop = function () {
	      if (self.platform === 'web') {
	        self.$router.back();
	        return;
	      }
	      _navigator2.default.pop();
	    };
	  },


	  methods: {
	    getQuery: function getQuery(key) {
	      return this.platform === 'web' ? this.$route.query[key] : (0, _string.getQueryStringByName)(key);
	    }
	  }
	}; /**
	    * @Author   : walid
	    * @Data     : 2017-03-26  16:46
	    * @Describe : 全局mixins参数配置
	    */

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * @author walid
	                                                                                                                                                                                                                                                                               * @date 2017/3/4
	                                                                                                                                                                                                                                                                               * @description 界面跳转工具类
	                                                                                                                                                                                                                                                                               */

	var _qs = __webpack_require__(9);

	var _qs2 = _interopRequireDefault(_qs);

	var _config = __webpack_require__(17);

	var _config2 = _interopRequireDefault(_config);

	var _instance = __webpack_require__(18);

	var _instance2 = _interopRequireDefault(_instance);

	var _page = __webpack_require__(3);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator');

	function getBaseUrl() {
	  var bundleUrl = weex.config.bundleUrl;
	  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFrame.app') > 0;
	  var nativeBase = '';
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/dist/weex/';
	  } else if (isiOSAssets) {
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('weex/') + 5);
	  } else {
	    var host = _config2.default + ':8080';
	    var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    nativeBase = 'http://' + host + '/dist/weex/';
	  }
	  var h5Base = '?page=../dist/web/';
	  // // in Browser or WebView
	  var inBrowserOrWebView = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';
	  return inBrowserOrWebView ? h5Base : nativeBase;
	}

	function pushWeb(url, query) {
	  if (_instance2.default.isWeb()) {
	    window.location.href = url;
	    return;
	  }
	  query = query ? query : {};
	  query.url = url;
	  push(_page2.default.web, query);
	}

	function pushByUrl(url, query) {
	  navigator.push({
	    url: query ? url + '?' + _qs2.default.stringify(query) : url,
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	function push(routePage) {
	  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  query.title = routePage.title;
	  var url = query ? '' + getBaseUrl() + routePage.jsPath + '.js?' + _qs2.default.stringify(query) : '' + getBaseUrl() + routePage + '.js';
	  navigator.push({
	    url: url,
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	function pop() {
	  navigator.pop({
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	exports.default = {
	  push: push, pushByUrl: pushByUrl, getBaseUrl: getBaseUrl, pushWeb: pushWeb, pop: pop
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = '192.168.4.55';

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @Author   : walid
	 * @Data     : 2017-03-20  18:32
	 * @Describe : 封装weex实例对象
	 */

	function isIOS() {
	  return weex.config.env ? weex.config.env.platform === 'iOS' : false;
	}

	function isWeb() {
	  return weex.config.env.platform === 'Web';
	}

	function getDeviceInfo() {
	  var env = weex.config.env;
	  var deviceWidth = env.deviceWidth;
	  var deviceHeight = env.deviceHeight;
	  return {
	    deviceWidth: deviceWidth,
	    deviceHeight: deviceHeight
	  };
	}

	exports.default = {
	  isIOS: isIOS, isWeb: isWeb, getDeviceInfo: getDeviceInfo
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author walid
	 * @date 2017/3/4
	 * @description weex modal 工具类
	 */

	var modal = weex.requireModule('modal');

	function toast(_ref) {
	  var message = _ref.message,
	      duration = _ref.duration;

	  return new Promise(function (resolve, reject) {
	    if (!message) {
	      reject('message is invalue !!!');
	      return;
	    }
	    modal.toast({
	      message: message,
	      duration: duration || 2.0
	    });
	    resolve();
	  });
	}

	function alert(_ref2) {
	  var message = _ref2.message,
	      _ref2$okTitle = _ref2.okTitle,
	      okTitle = _ref2$okTitle === undefined ? '确定' : _ref2$okTitle;

	  return new Promise(function (resolve, reject) {
	    if (!message) {
	      reject('message is invalue !!!');
	      return;
	    }
	    modal.alert({
	      message: message, okTitle: okTitle
	    }, function (res) {
	      console.log('alert callback', res);
	      resolve(res);
	    });
	  });
	}

	function confirm(_ref3) {
	  var message = _ref3.message,
	      _ref3$okTitle = _ref3.okTitle,
	      okTitle = _ref3$okTitle === undefined ? '确定' : _ref3$okTitle,
	      _ref3$cancelTitle = _ref3.cancelTitle,
	      cancelTitle = _ref3$cancelTitle === undefined ? '取消' : _ref3$cancelTitle;

	  return new Promise(function (resolve, reject) {
	    if (!message) {
	      reject('message is invalue !!!');
	      return;
	    }
	    modal.confirm({
	      message: message, okTitle: okTitle, cancelTitle: cancelTitle
	    }, function (res) {
	      res === okTitle ? resolve(res) : reject(res);
	      console.log('confirm callback', res);
	    });
	  });
	}

	function prompt(_ref4) {
	  var message = _ref4.message,
	      _ref4$okTitle = _ref4.okTitle,
	      okTitle = _ref4$okTitle === undefined ? '确定' : _ref4$okTitle,
	      _ref4$cancelTitle = _ref4.cancelTitle,
	      cancelTitle = _ref4$cancelTitle === undefined ? '取消' : _ref4$cancelTitle;

	  return new Promise(function (resolve, reject) {
	    if (!message) {
	      reject('message is invalue !!!');
	      return;
	    }
	    modal.prompt({
	      message: message, okTitle: okTitle, cancelTitle: cancelTitle
	    }, function (value) {
	      res === okTitle ? resolve(res) : reject(res);
	      console.log('confirm callback', value);
	    });
	  });
	}

	exports.default = {
	  toast: toast, alert: alert, confirm: confirm, prompt: prompt
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author walid
	 * @date 2017/03/30
	 * @description 图片常量定义
	 */

	var baseUrl = 'https://github.com/SyswinAE/assets/blob/master/toon/';
	var suffix = '?raw=true';

	var collect = {
	  video: baseUrl + 'collect/ic-video.png' + suffix,
	  audio: baseUrl + 'collect/ic-audio.png' + suffix,
	  location: baseUrl + 'collect/ic-location.png' + suffix,
	  playBule: baseUrl + 'collect/ic-play-bule.png' + suffix,
	  playBlack: baseUrl + 'collect/ic-play-black.png' + suffix
	};

	exports.default = {
	  collect: collect
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [_c('list', {
	    staticClass: ["list"]
	  }, _vm._l((_vm.feeds), function(item, index) {
	    return _c('cell', {
	      staticClass: ["cell"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      },
	      on: {
	        "click": function($event) {
	          _vm.toDetail(item.uuid)
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["div-cell"]
	    }, [_c('text', {
	      staticClass: ["title"]
	    }, [_vm._v("案例" + _vm._s(index + 1))]), _c('image', {
	      staticClass: ["img-case"],
	      attrs: {
	        "src": item.coverImg
	      }
	    }), _c('div', {
	      staticClass: ["div-content"]
	    }, [_c('text', {
	      staticClass: ["p-title"]
	    }, [_vm._v(_vm._s(item.title))]), _c('text', {
	      staticClass: ["p-desc"]
	    }, [_vm._v(_vm._s(item.description))])])])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(23)
	)

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(25)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\views\\launch\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c6059f82"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "height": 1334,
	    "backgroundColor": "#f8f8f8"
	  },
	  "div-header": {
	    "position": "relative",
	    "width": 750,
	    "height": 1334
	  },
	  "img-top": {
	    "width": 750,
	    "height": 1334
	  },
	  "div-content": {
	    "position": "absolute",
	    "top": 0,
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "width": 750,
	    "height": 1334
	  },
	  "p-title": {
	    "marginTop": 300,
	    "color": "#ffffff",
	    "fontSize": 72
	  },
	  "p-description": {
	    "marginTop": 40,
	    "color": "#ffffff",
	    "fontSize": 24
	  },
	  "btn-action": {
	    "marginTop": 70,
	    "width": 367,
	    "height": 77,
	    "borderWidth": 3,
	    "borderColor": "#ffffff",
	    "borderStyle": "solid",
	    "borderRadius": 8,
	    "background": "rgba(0, 0, 0, .17)",
	    "color": "#ffffff",
	    "textAlign": "center",
	    "fontSize": 36,
	    "lineHeight": 77
	  }
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(15);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_mixins2.default],

	  methods: {
	    toLaunch: function toLaunch(event) {
	      this.router.push({
	        page: this.routerPage.web,
	        query: {
	          url: 'http://www.jianshu.com/u/a279a2f8ed63'
	        }
	      });
	    }
	  }
	}; //
	//
	//
	//

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [_c('div', {
	    staticClass: ["div-header"]
	  }, [_c('image', {
	    staticClass: ["img-top"],
	    attrs: {
	      "src": "https://github.com/osmartian/weex-frame/blob/master/src/views/launch/imgs/ic-top.png?raw=true"
	    }
	  }), _c('div', {
	    staticClass: ["div-content"]
	  }, [_c('text', {
	    staticClass: ["p-title"]
	  }, [_vm._v("为梦想发起筹款"), _c('br'), _vm._v("让生活更多可能")], 1), _c('text', {
	    staticClass: ["p-description"]
	  }, [_vm._v("想为村民修条路！想建个流浪狗之家！想拍个小视频！")]), _c('text', {
	    staticClass: ["btn-action"],
	    on: {
	      "click": _vm.toLaunch
	    }
	  }, [_vm._v("立即发起筹款")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(27)
	)

	/* script */
	__vue_exports__ = __webpack_require__(28)

	/* template */
	var __vue_template__ = __webpack_require__(29)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\views\\mine\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c890dec2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = {
	  "mine-root": {
	    "width": 750,
	    "height": 1334
	  },
	  "img-bg-mine": {
	    "width": 750,
	    "height": 1334
	  },
	  "div-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "width": 750,
	    "height": 1334,
	    "flexDirection": "column"
	  },
	  "div-top-link": {
	    "width": 750,
	    "height": 320,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "padding": 30
	  },
	  "div-card": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start"
	  },
	  "p-card": {
	    "color": "#ffffff",
	    "marginRight": 5,
	    "fontSize": 24,
	    "fontWeight": "300"
	  },
	  "img-triangle": {
	    "width": 40,
	    "height": 50,
	    "marginTop": -8
	  },
	  "p-person-center": {
	    "color": "#ffffff",
	    "fontSize": 24,
	    "fontWeight": "300"
	  },
	  "div-work-content": {
	    "flex": 1,
	    "backgroundColor": "#eeeeee"
	  },
	  "img-person": {
	    "width": 150,
	    "height": 150,
	    "position": "absolute",
	    "left": 300,
	    "top": 210
	  },
	  "div-person-info": {
	    "width": 750,
	    "backgroundColor": "#ffffff",
	    "paddingTop": 60,
	    "paddingBottom": 20
	  },
	  "div-person-info-top": {
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "p-person-name": {
	    "marginRight": 10,
	    "fontWeight": "700",
	    "fontSize": 32
	  },
	  "p-work-position": {
	    "fontWeight": "800",
	    "fontSize": 28
	  },
	  "p-work-department": {
	    "textAlign": "center",
	    "marginTop": 12,
	    "fontSize": 26,
	    "color": "#666666"
	  },
	  "div-person-list": {
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "justifyContent": "space-between",
	    "flexDirection": "row",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#dddddd",
	    "borderBottomStyle": "solid",
	    "paddingTop": 20,
	    "paddingRight": 50,
	    "paddingLeft": 50
	  },
	  "div-list-item": {
	    "alignItems": "center"
	  },
	  "img-item": {
	    "width": 50,
	    "height": 50
	  },
	  "p-item": {
	    "marginTop": 12,
	    "marginBottom": 20,
	    "fontSize": 24
	  },
	  "div-group-list": {
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "flexDirection": "row",
	    "paddingTop": 20
	  },
	  "div-add-list": {
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "flexDirection": "row",
	    "paddingTop": 20,
	    "marginTop": 24
	  },
	  "div-group-item": {
	    "width": 188
	  },
	  "img-add-item": {
	    "width": 36,
	    "height": 36
	  }
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(15);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_mixins2.default],

	  data: function data() {
	    return {
	      personName: '张小凡',
	      workPosition: 'web前端工程师',
	      workDepartment: '思源总部/互联集团/应用引擎部',
	      personInfoList: [{
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/workbench_friends.png?raw=true',
	        name: '个人动态'
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/person-data.png?raw=true',
	        name: '个人资料'
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/workbench_card_setting.png?raw=true',
	        name: '名片设置'
	      }],
	      groupInfoList: [{
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/wallet_trade_data.png?raw=true',
	        name: '我的公司'
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/group_icon.png?raw=true',
	        name: '群组'
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/person-dynamic.png?raw=true',
	        name: '审批'
	      }]
	    };
	  },


	  methods: {
	    onPersonList: function onPersonList(index) {
	      switch (index) {
	        case 1:
	          this.router.push({
	            page: this.routerPage.userInfo
	          });
	          break;
	        case 2:
	          break;
	        default:
	          this.router.push({
	            page: this.routerPage.collect
	          });
	          break;
	      }
	    },
	    toPersonal: function toPersonal(event) {
	      this.router.push({
	        page: this.routerPage.personal
	      });
	    },
	    toBlog: function toBlog(event) {
	      this.router.push({
	        page: this.routerPage.web,
	        query: {
	          url: 'http://www.jianshu.com/u/a279a2f8ed63'
	        }
	      });
	    }
	  }
	}; //
	//
	//
	//

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-root', {
	    staticClass: ["mine-root"]
	  }, [_c('image', {
	    staticClass: ["img-bg-mine"],
	    attrs: {
	      "resize": "cover",
	      "src": "https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/bg_basic_info_default.png?raw=true"
	    }
	  }), _c('div', {
	    staticClass: ["div-content"]
	  }, [_c('div', {
	    staticClass: ["div-top-link"]
	  }, [_c('div', {
	    staticClass: ["div-card"]
	  }, [_c('text', {
	    staticClass: ["p-card"]
	  }, [_vm._v("名片")]), _c('image', {
	    staticClass: ["img-triangle"],
	    attrs: {
	      "src": "https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/triangle.png?raw=true"
	    }
	  })]), _c('text', {
	    staticClass: ["p-person-center"],
	    on: {
	      "click": _vm.toPersonal
	    }
	  }, [_vm._v("个人中心")])]), _c('div', {
	    staticClass: ["div-work-content"]
	  }, [_c('div', {
	    staticClass: ["div-person-info"]
	  }, [_c('div', {
	    staticClass: ["div-person-info-top"]
	  }, [_c('text', {
	    staticClass: ["p-person-name"]
	  }, [_vm._v(_vm._s(_vm.personName))]), _c('text', {
	    staticClass: ["p-work-position"]
	  }, [_vm._v(_vm._s(_vm.workPosition))])]), _c('text', {
	    staticClass: ["p-work-department"]
	  }, [_vm._v(_vm._s(_vm.workDepartment))])]), _c('div', {
	    staticClass: ["div-person-list"]
	  }, _vm._l((_vm.personInfoList), function(item, index) {
	    return _c('div', {
	      staticClass: ["div-list-item"],
	      on: {
	        "click": function($event) {
	          _vm.onPersonList(index)
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["img-item"],
	      attrs: {
	        "src": item.iconUrl
	      }
	    }), _c('text', {
	      staticClass: ["p-item"]
	    }, [_vm._v(_vm._s(item.name))])])
	  })), _c('div', {
	    staticClass: ["div-group-list"]
	  }, _vm._l((_vm.groupInfoList), function(item) {
	    return _c('div', {
	      staticClass: ["div-list-item", "div-group-item"]
	    }, [_c('image', {
	      staticClass: ["img-item"],
	      attrs: {
	        "src": item.iconUrl
	      }
	    }), _c('text', {
	      staticClass: ["p-item"]
	    }, [_vm._v(_vm._s(item.name))])])
	  })), _c('div', {
	    staticClass: ["div-add-list"]
	  }, [_c('div', {
	    staticClass: ["div-list-item", "div-group-item"],
	    on: {
	      "click": _vm.toBlog
	    }
	  }, [_c('image', {
	    staticClass: ["img-add-item"],
	    attrs: {
	      "src": "https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/apply-blog.png?raw=true"
	    }
	  }), _c('text', {
	    staticClass: ["p-item"]
	  }, [_vm._v("博客")])]), _c('div', {
	    staticClass: ["div-list-item", "div-group-item"]
	  }, [_c('image', {
	    staticClass: ["img-add-item"],
	    attrs: {
	      "src": "https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/beacon_add_key.png?raw=true"
	    }
	  }), _c('text', {
	    staticClass: ["p-item"]
	  }, [_vm._v("添加")])])])])]), _c('image', {
	    staticClass: ["img-person"],
	    attrs: {
	      "src": "https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/person-img.jpg?raw=true"
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(31)
	)

	/* script */
	__vue_exports__ = __webpack_require__(32)

	/* template */
	var __vue_template__ = __webpack_require__(33)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\views\\web\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5206523c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = {
	  "web": {
	    "width": 750,
	    "height": 1334,
	    "backgroundColor": "#f8f8f8"
	  }
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(15);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var webview = weex.requireModule('webview'); //
	//
	//
	//

	exports.default = {
	  mixins: [_mixins2.default],

	  data: function data() {
	    return {
	      title: 'OsMartian - WebView',
	      canGoBack: false,
	      url: 'https://weex-project.io/cn/'
	    };
	  },
	  mounted: function mounted() {
	    this.url = this.getQuery('url') || 'https://weex-project.io/cn/';
	  },


	  methods: {
	    onReload: function onReload(event) {
	      webview.reload(this.$refs.webview);
	    },
	    onBack: function onBack() {
	      this.canGoBack ? webview.goBack(this.$refs.webview) : this.router.pop();
	    },
	    start: function start(event) {
	      console.log('pagestart', event);
	    },
	    finish: function finish(event) {
	      console.log('event', event);
	      this.canGoBack = event.canGoBack;
	      this.title = event.title || 'OsMartian - WebView';
	    }
	  }
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-navpage', {
	    attrs: {
	      "title": _vm.title,
	      "leftItemSrc": "https://github.com/osmartian/weex-frame/blob/master/src/views/userinfo/imgs/back.png?raw=true",
	      "rightItemSrc": "http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
	    },
	    on: {
	      "naviBarLeftItemClick": _vm.onBack,
	      "naviBarRightItemClick": _vm.onReload
	    }
	  }, [_c('web', {
	    ref: "webview",
	    staticClass: ["web"],
	    attrs: {
	      "src": _vm.url
	    },
	    on: {
	      "pagestart": _vm.start,
	      "pagefinish": _vm.finish
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(35)
	)

	/* script */
	__vue_exports__ = __webpack_require__(36)

	/* template */
	var __vue_template__ = __webpack_require__(37)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\views\\userinfo\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8d2e6c76"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = {
	  "root": {
	    "backgroundColor": "#eeeeee"
	  },
	  "div-main-info": {
	    "backgroundColor": "#ffffff",
	    "paddingTop": 20,
	    "paddingLeft": 20
	  },
	  "div-main-info-content": {
	    "flexDirection": "row",
	    "paddingBottom": 10,
	    "paddingRight": 15,
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc"
	  },
	  "img-person": {
	    "width": 130,
	    "height": 130,
	    "marginRight": 30
	  },
	  "div-main-word": {
	    "justifyContent": "center"
	  },
	  "div-person-job": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "p-person-name": {
	    "marginRight": 15,
	    "fontSize": 32,
	    "color": "#000000"
	  },
	  "p-work-position": {
	    "fontSize": 32,
	    "color": "#000000"
	  },
	  "p-work-department": {
	    "color": "#666666",
	    "fontSize": 28
	  },
	  "div-qr-code-name": {
	    "color": "#666666",
	    "fontSize": 28
	  },
	  "p-social-word": {
	    "color": "#666666",
	    "fontSize": 28,
	    "paddingTop": 20,
	    "paddingLeft": 20,
	    "paddingBottom": 12
	  },
	  "p-list-name": {
	    "color": "#666666",
	    "fontSize": 28,
	    "alignSelf": "center",
	    "width": 180
	  },
	  "div-qr-code": {
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc",
	    "paddingTop": 15,
	    "paddingLeft": 20,
	    "paddingBottom": 15,
	    "paddingRight": 20
	  },
	  "img-qr-code-icon": {
	    "width": 28,
	    "height": 28,
	    "alignSelf": "center"
	  },
	  "cell-list-item": {
	    "flexDirection": "row",
	    "backgroundColor": "#ffffff",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc",
	    "borderTopStyle": "solid",
	    "borderTopWidth": 1,
	    "borderTopColor": "#cccccc",
	    "marginBottom": 20
	  },
	  "list": {
	    "backgroundColor": "#eeeeee"
	  },
	  "weex-list-inner": {
	    "backgroundColor": "#eeeeee"
	  }
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(15);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_mixins2.default],

	  data: function data() {
	    return {
	      title: '个人资料',
	      personName: '张小凡',
	      workPosition: 'web前端工程师',
	      workDepartment: '思源总部/互联集团/应用引擎部',
	      socialInfo: [{
	        tag: '位置',
	        data: '实时位置'
	      }, {
	        tag: '名片号',
	        data: 's253585'
	      }]
	    };
	  },

	  methods: {
	    naviBarLeftItemClick: function naviBarLeftItemClick() {
	      this.router.pop();
	    }
	  }
	}; //
	//
	//
	//

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-navpage', {
	    staticClass: ["root"],
	    attrs: {
	      "title": _vm.title,
	      "titleColor": "white",
	      "leftItemSrc": "https://github.com/osmartian/weex-frame/blob/master/src/views/userinfo/imgs/back.png?raw=true"
	    },
	    on: {
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }, [_c('div', {
	    staticClass: ["div-main-info"]
	  }, [_c('div', {
	    staticClass: ["div-main-info-content"]
	  }, [_c('image', {
	    staticClass: ["img-person"],
	    attrs: {
	      "src": "https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/person-img.jpg?raw=true"
	    }
	  }), _c('div', {
	    staticClass: ["div-main-word"]
	  }, [_c('div', {
	    staticClass: ["div-person-job"]
	  }, [_c('text', {
	    staticClass: ["p-person-name"]
	  }, [_vm._v(_vm._s(_vm.personName))]), _c('text', {
	    staticClass: ["p-work-position"]
	  }, [_vm._v(_vm._s(_vm.workPosition))])]), _c('text', {
	    staticClass: ["p-work-department"]
	  }, [_vm._v(_vm._s(_vm.workDepartment))])])])]), _c('div', {
	    staticClass: ["div-qr-code"]
	  }, [_c('text', {
	    staticClass: ["div-qr-code-name"]
	  }, [_vm._v("二维码")]), _c('image', {
	    staticClass: ["img-qr-code-icon"],
	    attrs: {
	      "src": "https://github.com/osmartian/weex-frame/blob/master/src/views/userinfo/imgs/move_btn.png?raw=true"
	    }
	  })]), _c('div', {
	    staticClass: ["div-social-info"]
	  }, [_c('text', {
	    staticClass: ["p-social-word"]
	  }, [_vm._v("社交信息")]), _c('div', {
	    staticClass: ["list"]
	  }, _vm._l((_vm.socialInfo), function(item) {
	    return _c('div', {
	      key: item.name,
	      staticClass: ["cell-list-item"]
	    }, [_c('text', {
	      staticClass: ["p-list-name"]
	    }, [_vm._v(_vm._s(item.tag))]), _c('text', {
	      staticClass: ["p-list-content"]
	    }, [_vm._v(_vm._s(item.data))])])
	  }))]), _vm._l((_vm.scrollList), function(item) {
	    return _c('text', {
	      staticClass: ["scroller-item"]
	    }, [_vm._v("scroller" + _vm._s(item))])
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(39)
	)

	/* script */
	__vue_exports__ = __webpack_require__(40)

	/* template */
	var __vue_template__ = __webpack_require__(41)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\views\\personal\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7a43460c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = {
	  "div-scroller": {
	    "width": 750,
	    "height": 1334,
	    "position": "absolute",
	    "bottom": 0,
	    "top": 0
	  },
	  "div-scroll-inner": {
	    "backgroundColor": "#eff3f2",
	    "bottom": 0
	  },
	  "mine-personal-div": {
	    "position": "relative",
	    "height": 110,
	    "paddingTop": 30,
	    "backgroundColor": "#ffffff"
	  },
	  "mine-personal-img": {
	    "position": "absolute",
	    "left": 35,
	    "width": 52,
	    "height": 52
	  },
	  "mine-personal-text": {
	    "position": "absolute",
	    "left": 115,
	    "marginTop": 4,
	    "fontSize": 30
	  },
	  "mine-personal-go": {
	    "position": "absolute",
	    "right": 25,
	    "top": 35,
	    "width": 15,
	    "height": 24
	  },
	  "personal-logOut-wrap": {
	    "height": 100,
	    "marginTop": 30,
	    "marginBottom": 40,
	    "lineHeight": 80,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "personal-logOut-text": {
	    "color": "#FF0000",
	    "fontSize": 32
	  }
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(15);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_mixins2.default],

	  data: function data() {
	    return {
	      funcList: [{
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_company.png?raw=true',
	        name: '公司管理',
	        attr: {
	          marginTop: '17px',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_wallet.png?raw=true',
	        name: '钱包',
	        attr: {
	          marginTop: '17px',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_collection.png?raw=true',
	        name: '收藏',
	        attr: {
	          marginTop: '',
	          marginBottom: '17px',
	          borderTopWidth: '0',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_door_guard.png?raw=true',
	        name: '门禁',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_beacon.png?raw=true',
	        name: '闪通',
	        attr: {
	          marginTop: '',
	          marginBottom: '17px',
	          borderTopWidth: '0',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_skin.png?raw=true',
	        name: '更换皮肤',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '0',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_consult.png?raw=true',
	        name: '常用信息管理',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '0',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_address.png?raw=true',
	        name: '常用地址管理',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '0',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_feedback.png?raw=true',
	        name: '帮助与反馈',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_account.png?raw=true',
	        name: '账户设置',
	        attr: {
	          marginTop: '17px',
	          marginBottom: '17px',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_common.png?raw=true',
	        name: '通用设置',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }],
	      goIconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/jump_arrow_next.png?raw=true'
	    };
	  },

	  methods: {
	    toMine: function toMine(event) {
	      this.router.push({
	        page: this.routerPage.mine
	      });
	    },
	    naviBarLeftItemClick: function naviBarLeftItemClick() {
	      this.router.pop();
	    }
	  }
	}; //
	//
	//
	//

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-navpage', {
	    staticClass: ["personal-root"],
	    attrs: {
	      "title": "个人中心",
	      "height": "100",
	      "titleColor": "#000",
	      "backgroundColor": "#eff3f2",
	      "leftItemSrc": "https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/common_goback.png?raw=true"
	    },
	    on: {
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }, [_c('scroller', {
	    staticClass: ["div-scroller"]
	  }, [_c('div', {
	    staticClass: ["div-scroll-inner"]
	  }, [_vm._l((_vm.funcList), function(item, index) {
	    return _c('div', {
	      staticClass: ["cell"]
	    }, [_c('div', {
	      staticClass: ["mine-personal-div"],
	      style: item.attr
	    }, [_c('image', {
	      staticClass: ["mine-personal-img"],
	      attrs: {
	        "src": item.iconUrl
	      }
	    }), _c('text', {
	      staticClass: ["mine-personal-text"]
	    }, [_vm._v(_vm._s(item.name))]), _c('image', {
	      staticClass: ["mine-personal-go"],
	      attrs: {
	        "src": _vm.goIconUrl
	      }
	    })])])
	  }), _c('div', {
	    staticClass: ["personal-logOut-wrap"]
	  }, [_c('text', {
	    staticClass: ["personal-logOut-text"]
	  }, [_vm._v("退出登录")])])], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(43)
	)

	/* script */
	__vue_exports__ = __webpack_require__(44)

	/* template */
	var __vue_template__ = __webpack_require__(45)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\views\\list\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0977a1ea"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = {
	  "list": {
	    "height": 850
	  },
	  "row": {
	    "width": 750
	  },
	  "item": {
	    "justifyContent": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#c0c0c0",
	    "height": 100,
	    "padding": 20
	  }
	}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    rows: {
	      default: function _default() {
	        return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 }];
	      }
	    },
	    moreRows: {
	      default: function _default() {
	        return [{ id: 30 }, { id: 31 }, { id: 32 }, { id: 33 }];
	      }
	    }
	  },

	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this = this;

	      console.log('onRefresh');
	      setTimeout(function () {
	        _this.$refs.list.$emit('refreshDone');
	      }, 2000);
	    },
	    onLoading: function onLoading() {
	      var _this2 = this;

	      console.log('onLoading');
	      if (this.rows.length <= 33) {
	        this.rows.push(this.moreRows[this.rows.length - 29]);
	        setTimeout(function () {
	          _this2.$refs.list.$emit('loadingDone');
	        }, 2000);
	      }
	    }
	  }
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('osc-list', {
	    ref: "list",
	    staticClass: ["list"],
	    on: {
	      "refresh": _vm.onRefresh,
	      "loading": _vm.onLoading
	    }
	  }, _vm._l((_vm.rows), function(i, row) {
	    return _c('cell', {
	      staticClass: ["row"],
	      appendAsTree: true,
	      attrs: {
	        "index": i,
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["item"]
	    }, [_c('text', {
	      staticClass: ["item-title"]
	    }, [_vm._v("row " + _vm._s(row.id))])])])
	  }))], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(47)
	)

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\views\\scroller\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-89d00bf4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = {
	  "list": {
	    "width": 750,
	    "height": 1334
	  }
	}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this = this;

	      console.log('onRefresh');
	      setTimeout(function () {
	        _this.$refs.list.$emit('refreshDone');
	      }, 2000);
	    },
	    onLoading: function onLoading() {
	      var _this2 = this;

	      console.log('onLoading');
	      setTimeout(function () {
	        _this2.$refs.list.$emit('loadingDone');
	      }, 2000);
	    }
	  }
	};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-scroller', {
	    ref: "list",
	    staticClass: ["list"],
	    on: {
	      "refresh": _vm.onRefresh,
	      "loading": _vm.onLoading
	    }
	  }, [_c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(52)
	)

	/* script */
	__vue_exports__ = __webpack_require__(53)

	/* template */
	var __vue_template__ = __webpack_require__(54)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\components\\osc-root.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0ddc7e26"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "height": 1334,
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "wrapper": {
	    "width": 750
	  }
	}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      ios: weex.config.env.platform === 'ios'
	    };
	  },


	  props: {
	    backgroundColor: { default: '#eeeeee' }
	  }
	};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [(_vm.ios) ? _c('div', {
	    style: {
	      width: '750px',
	      height: '40px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: ["wrapper"],
	    style: {
	      width: '750px',
	      height: _vm.ios ? '1294px' : '1334px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(56)
	)

	/* script */
	__vue_exports__ = __webpack_require__(57)

	/* template */
	var __vue_template__ = __webpack_require__(58)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\components\\osc-navpage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-b1dc7712"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 100,
	    "bottom": 0
	  }
	}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(15);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_mixins2.default],

	  props: {
	    dataRole: { default: 'none' },
	    backgroundColor: { default: '#0099FF' },
	    height: { default: 88 },
	    title: { default: '' },
	    titleColor: { default: 'white' },
	    rightItemSrc: { default: '' },
	    rightItemTitle: { default: '' },
	    rightItemColor: { default: 'white' },
	    leftItemSrc: { default: '' },
	    leftItemTitle: { default: '' },
	    leftItemColor: { default: 'white' }
	  },

	  methods: {
	    naviBarRightItemClick: function naviBarRightItemClick(e) {
	      this.$emit('naviBarRightItemClick', e);
	    },
	    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
	      this.$emit('naviBarLeftItemClick', e);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [(_vm.platform === 'ios') ? _c('div', {
	    style: {
	      width: '750px',
	      height: '40px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }) : _vm._e(), _c('osc-navbar', {
	    attrs: {
	      "dataRole": _vm.dataRole,
	      "height": _vm.height,
	      "backgroundColor": _vm.backgroundColor,
	      "title": _vm.title,
	      "titleColor": _vm.titleColor,
	      "leftItemSrc": _vm.leftItemSrc,
	      "leftItemTitle": _vm.leftItemTitle,
	      "leftItemColor": _vm.leftItemColor,
	      "rightItemSrc": _vm.rightItemSrc,
	      "rightItemTitle": _vm.rightItemTitle,
	      "rightItemColor": _vm.rightItemColor
	    },
	    on: {
	      "naviBarRightItemClick": _vm.naviBarRightItemClick,
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }), _c('div', {
	    staticClass: ["wrapper"],
	    style: {
	      top: _vm.platform === 'ios' ? (40 + _vm.height) : _vm.height
	    }
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(60)
	)

	/* script */
	__vue_exports__ = __webpack_require__(61)

	/* template */
	var __vue_template__ = __webpack_require__(62)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\components\\osc-navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-f72f774a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = {
	  "root": {
	    "flexDirection": "row",
	    "width": 750,
	    "padding": 20,
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  "text": {
	    "fontSize": 32
	  },
	  "img": {
	    "width": 50,
	    "height": 50
	  },
	  "title": {
	    "fontSize": 30,
	    "fontWeight": "bold",
	    "maxWidth": 360,
	    "textOverflow": "ellipsis"
	  }
	}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    // navbar
	    dataRole: { default: 'none' },
	    //导航条背景色
	    backgroundColor: { default: '#0099FF' },
	    //导航条高度
	    height: { default: 88 },
	    //导航条标题 
	    title: { default: '' },
	    //导航条标题颜色
	    titleColor: { default: 'white' },
	    //右侧按钮图片
	    rightItemSrc: { default: '' },
	    //右侧按钮标题
	    rightItemTitle: { default: '' },
	    //右侧按钮标题颜色
	    rightItemColor: { default: 'white' },
	    //左侧按钮图片
	    leftItemSrc: { default: '' },
	    //左侧按钮标题
	    leftItemTitle: { default: '' },
	    //左侧按钮颜色
	    leftItemColor: { default: 'white' }
	  },
	  methods: {
	    onClickRight: function onClickRight(e) {
	      this.$emit('naviBarRightItemClick');
	    },
	    onClickLeft: function onClickLeft(e) {
	      console.log('height', this.height);
	      this.$emit('naviBarLeftItemClick');
	    }
	  }
	};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"],
	    style: {
	      height: _vm.height + 'px',
	      backgroundColor: _vm.backgroundColor
	    },
	    attrs: {
	      "dataRole": _vm.dataRole
	    }
	  }, [_c('div', {
	    staticClass: ["div-wrap"]
	  }, [(!_vm.leftItemSrc) ? _c('text', {
	    staticClass: ["text"],
	    style: {
	      color: _vm.leftItemColor
	    },
	    attrs: {
	      "naviItemPosition": "left"
	    },
	    on: {
	      "click": _vm.onClickLeft
	    }
	  }, [_vm._v(_vm._s(_vm.leftItemTitle) + "\n\n    ")]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "naviItemPosition": "left",
	      "src": _vm.leftItemSrc
	    },
	    on: {
	      "click": _vm.onClickLeft
	    }
	  }) : _vm._e()]), _c('div', {
	    staticClass: ["div-wrap"]
	  }, [_c('text', {
	    staticClass: ["title"],
	    style: {
	      color: _vm.titleColor
	    },
	    attrs: {
	      "naviItemPosition": "center"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["div-wrap"]
	  }, [(!_vm.rightItemSrc) ? _c('text', {
	    staticClass: ["text"],
	    style: {
	      color: _vm.rightItemColor
	    },
	    attrs: {
	      "naviItemPosition": "right"
	    },
	    on: {
	      "click": _vm.onClickRight
	    }
	  }, [_vm._v(_vm._s(_vm.rightItemTitle) + "\n    ")]) : _vm._e(), (_vm.rightItemSrc) ? _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "naviItemPosition": "right",
	      "src": _vm.rightItemSrc
	    },
	    on: {
	      "click": _vm.onClickRight
	    }
	  }) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(64)
	)

	/* script */
	__vue_exports__ = __webpack_require__(65)

	/* template */
	var __vue_template__ = __webpack_require__(70)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\components\\osc-tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-208969a9"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    tabItems: { default: [] },
	    selectedColor: { default: '#ff0000' },
	    unselectedColor: { default: '#000000' }
	  },
	  data: function data() {
	    return {
	      selectedIndex: 0
	    };
	  },

	  components: {
	    tabitem: __webpack_require__(66)
	  },
	  created: function created() {
	    this.select(this.selectedIndex);
	  },

	  methods: {
	    tabItemOnClick: function tabItemOnClick(e) {
	      this.selectedIndex = e.index;
	      this.select(e.index);
	      this.$emit('tabBarOnClick', e);
	    },
	    select: function select(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(67)
	)

	/* script */
	__vue_exports__ = __webpack_require__(68)

	/* template */
	var __vue_template__ = __webpack_require__(69)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\components\\osc-tabitem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-bbeb0126"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    index: { default: 0 },
	    title: { default: '' },
	    titleColor: { default: '#000000' },
	    icon: { default: '' },
	    backgroundColor: { default: '#ffffff' }
	  },
	  methods: {
	    onclickitem: function onclickitem(e) {
	      this.$emit('tabItemOnClick', {
	        index: this.index
	      });
	    }
	  }
	};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"],
	    style: {
	      backgroundColor: _vm.backgroundColor
	    },
	    on: {
	      "click": _vm.onclickitem
	    }
	  }, [_c('image', {
	    staticClass: ["top-line"],
	    attrs: {
	      "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	    }
	  }), _c('image', {
	    staticClass: ["tab-icon"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _c('text', {
	    staticClass: ["tab-text"],
	    style: {
	      color: _vm.titleColor
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._l((_vm.tabItems), function(item, index) {
	    return _c('embed', {
	      key: index,
	      staticClass: ["content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  }), _c('div', {
	    staticClass: ["tabbar"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, _vm._l((_vm.tabItems), function(item, index) {
	    return _c('tabitem', {
	      key: index,
	      attrs: {
	        "index": item.index,
	        "icon": item.icon,
	        "title": item.title,
	        "titleColor": item.titleColor
	      },
	      on: {
	        "tabItemOnClick": _vm.tabItemOnClick
	      }
	    })
	  }))], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(72)
	)

	/* script */
	__vue_exports__ = __webpack_require__(73)

	/* template */
	var __vue_template__ = __webpack_require__(74)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\components\\osc-list\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0f1db8df"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750
	  },
	  "div-refresh": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "div-loading": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text-tip": {
	    "fontSize": 30,
	    "color": "#333333"
	  },
	  "indicator": {
	    "width": 40,
	    "height": 40,
	    "color": "#45b5f0"
	  }
	}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _model = __webpack_require__(19);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      refreshDisplay: 'hide',
	      loadingDisplay: 'hide',
	      refreshPause: false,
	      loadingPause: false
	    };
	  },

	  props: {
	    refreshTip: {
	      type: String,
	      default: '↓ 下拉刷新'
	    },
	    loadingTip: {
	      type: String,
	      default: '↑ 上拉加载'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.$on('refreshDone', function (e) {
	      _this.refreshDisplay = 'hide';
	      _model2.default.toast({
	        message: '刷新数据成功~'
	      });
	    });

	    this.$on('loadingDone', function (e) {
	      _this.loadingDisplay = 'hide';
	      _model2.default.toast({
	        message: '刷新数据成功~'
	      });
	    });
	  },


	  methods: {
	    onReset: function onReset() {
	      var _this2 = this;

	      setTimeout(function () {
	        _this2.refreshPause = false;
	        _this2.refreshDisplay = 'hide';
	        _this2.loadingPause = false;
	        _this2.loadingDisplay = 'hide';
	      }, 1000);
	    },
	    onRefresh: function onRefresh(e) {
	      var _this3 = this;

	      this.refreshDisplay = 'show';
	      if (this.refreshPause) {
	        this.onReset();
	        return;
	      }
	      this.refreshPause = true;
	      this.$emit('refresh', e);
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this3.refreshPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this3.refreshDisplay === 'show') {
	          _this3.onReset();
	          _model2.default.toast({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    },
	    onLoading: function onLoading(e) {
	      var _this4 = this;

	      this.loadingDisplay = 'show';
	      if (this.loadingPause) {
	        this.onReset();
	        return;
	      }
	      this.loadingPause = true;
	      this.$emit('loading', e);
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this4.loadingPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this4.loadingDisplay === 'show') {
	          _this4.onReset();
	          _model2.default.toast({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    staticClass: ["root"]
	  }, [_c('refresh', {
	    staticClass: ["div-refresh"],
	    attrs: {
	      "display": _vm.refreshDisplay
	    },
	    on: {
	      "refresh": _vm.onRefresh
	    }
	  }, [(_vm.refreshDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.refreshTip))]) : _vm._e(), _c('loading-indicator', {
	    staticClass: ["indicator"]
	  })], 1), _vm._t("default"), _c('loading', {
	    staticClass: ["div-loading"],
	    attrs: {
	      "display": _vm.loadingDisplay
	    },
	    on: {
	      "loading": _vm.onLoading
	    }
	  }, [(_vm.loadingDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.loadingTip))]) : _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v("加载中...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(76)
	)

	/* script */
	__vue_exports__ = __webpack_require__(77)

	/* template */
	var __vue_template__ = __webpack_require__(78)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\project\\weex-frame\\src\\components\\osc-scroller\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-321f500a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750
	  },
	  "div-refresh": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "div-loading": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text-tip": {
	    "fontSize": 30,
	    "color": "#333333"
	  },
	  "indicator": {
	    "width": 40,
	    "height": 40,
	    "color": "#45b5f0"
	  }
	}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _model = __webpack_require__(19);

	var _model2 = _interopRequireDefault(_model);

	var _instance = __webpack_require__(18);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      refreshDisplay: 'hide',
	      loadingDisplay: 'hide',
	      refreshPause: false,
	      loadingPause: false
	    };
	  },

	  props: {
	    refreshTip: {
	      type: String,
	      default: '↓ 下拉刷新'
	    },
	    loadingTip: {
	      type: String,
	      default: '↑ 上拉加载'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.$on('refreshDone', function (e) {
	      _this.refreshDisplay = 'hide';
	      _model2.default.toast({
	        message: '刷新数据成功~'
	      });
	    });

	    this.$on('loadingDone', function (e) {
	      _this.loadingDisplay = 'hide';
	      _model2.default.toast({
	        message: '刷新数据成功~'
	      });
	    });
	  },


	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this2 = this;

	      if (this.refreshPause) {
	        return;
	      }
	      this.$emit('refresh', e);
	      this.refreshPause = true;
	      this.refreshDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this2.refreshPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this2.refreshDisplay = 'show') {
	          _this2.refreshDisplay = 'hide';
	          _this2.refreshPause = true;
	          _model2.default.toast({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    },
	    onLoading: function onLoading(e) {
	      var _this3 = this;

	      if (this.loadingPause) {
	        return;
	      }
	      this.$emit('loading', e);
	      this.loadingPause = true;
	      this.loadingDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this3.loadingPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this3.loadingDisplay === 'show') {
	          _this3.loadingPause = true;
	          _this3.loadingDisplay = 'hide';
	          _model2.default.toast({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    }
	  }
	};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["root"]
	  }, [_c('refresh', {
	    staticClass: ["div-refresh"],
	    attrs: {
	      "display": _vm.refreshDisplay
	    },
	    on: {
	      "refresh": _vm.onRefresh
	    }
	  }, [(_vm.refreshDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.refreshTip))]) : _vm._e(), _c('loading-indicator', {
	    staticClass: ["indicator"]
	  })], 1), _vm._t("default"), _c('loading', {
	    staticClass: ["div-loading"],
	    attrs: {
	      "display": _vm.loadingDisplay
	    },
	    on: {
	      "loading": _vm.onLoading
	    }
	  }, [(_vm.loadingDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.loadingTip))]) : _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v("加载中...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);