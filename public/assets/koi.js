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
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _path = __webpack_require__(1);

	var _path2 = _interopRequireDefault(_path);

	var _url = __webpack_require__(2);

	var _url2 = _interopRequireDefault(_url);

	var _electron = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var main = null;

	_electron.app.on('ready', function () {

	    main = new _electron.BrowserWindow({
	        height: 600,
	        width: 800
	    });

	    main.loadURL(_url2.default.format({
	        pathname: _path2.default.join(__dirname, 'index.html'),
	        protocol: 'file:',
	        slashes: true
	    }));

	    main.webContents.openDevTools();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var fs = __webpack_require__(4);
	var path = __webpack_require__(1);

	var pathFile = path.join(__dirname, 'path.txt');

	if (fs.existsSync(pathFile)) {
	  module.exports = path.join(__dirname, fs.readFileSync(pathFile, 'utf-8'));
	} else {
	  throw new Error('Electron failed to install correctly, please delete node_modules/' + path.basename(__dirname) + ' and try installing again');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);