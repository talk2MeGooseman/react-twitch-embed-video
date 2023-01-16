(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-twitch-embed-video"] = factory(require("react"));
	else
		root["react-twitch-embed-video"] = factory(root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var window_or_global_1 = __importDefault(__webpack_require__(/*! window-or-global */ "./node_modules/window-or-global/lib/index.js"));
var loadEmbedApi_1 = __webpack_require__(/*! ./loadEmbedApi */ "./src/loadEmbedApi.tsx");
var useEmbedApi_1 = __webpack_require__(/*! ./useEmbedApi */ "./src/useEmbedApi.tsx");
var useEventListener_1 = __webpack_require__(/*! ./useEventListener */ "./src/useEventListener.tsx");
var usePlayerPlay_1 = __webpack_require__(/*! ./usePlayerPlay */ "./src/usePlayerPlay.tsx");
var usePlayerReady_1 = __webpack_require__(/*! ./usePlayerReady */ "./src/usePlayerReady.tsx");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
var hasTwitchApiLoaded = function () { var _a, _b; return Boolean((_b = (_a = window_or_global_1.default) === null || _a === void 0 ? void 0 : _a.Twitch) === null || _b === void 0 ? void 0 : _b.Embed); };
var TwitchEmbedVideo = function (props) {
    var width = props.width, height = props.height, targetId = props.targetId, targetClass = props.targetClass;
    var containerRef = react_1.useRef(null);
    var _a = useEmbedApi_1.useTwitchEmbed(props), embed = _a[0], initializeEmbed = _a[1];
    var eventListenerFactory = useEventListener_1.useEventListener(embed);
    var onPlayerReady = usePlayerReady_1.usePlayerReady(embed, props);
    var onPlayerPlay = usePlayerPlay_1.usePlayerPlay(embed, props);
    react_1.useEffect(function () {
        if (!hasTwitchApiLoaded())
            return;
        var _a = window_or_global_1.default
            .Twitch.Embed, VIDEO_PLAY = _a.VIDEO_PLAY, VIDEO_READY = _a.VIDEO_READY;
        var removeVideoPlayListener = eventListenerFactory(VIDEO_PLAY, onPlayerPlay);
        var removePlayerReadyEventListener = eventListenerFactory(VIDEO_READY, onPlayerReady);
        return function () {
            removePlayerReadyEventListener();
            removeVideoPlayListener();
        };
    }, [onPlayerReady, eventListenerFactory, onPlayerPlay]);
    // Builds the Twitch Embed
    react_1.useEffect(function () {
        if (containerRef && containerRef.current)
            containerRef.current.innerHTML = '';
        // Check if we have Twitch in the global space and Embed is available
        if (hasTwitchApiLoaded()) {
            initializeEmbed();
            return;
        }
        // Initialize the Twitch embed lib if not present
        loadEmbedApi_1.loadEmbedApi(initializeEmbed);
    }, [initializeEmbed]);
    return (react_1.default.createElement("div", { ref: containerRef, style: { width: width, height: height }, className: targetClass, id: targetId }));
};
TwitchEmbedVideo.defaultProps = {
    targetId: utils_1.DEFAULT_TARGET_ID,
    width: utils_1.DEFAULT_HEIGHT,
    height: utils_1.DEFAULT_WIDTH,
    autoplay: true,
    muted: false,
};
exports.default = react_1.default.memo(TwitchEmbedVideo);


/***/ }),

/***/ "./src/loadEmbedApi.tsx":
/*!******************************!*\
  !*** ./src/loadEmbedApi.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadEmbedApi = exports.EMBED_URL = void 0;
exports.EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';
var func = function () { };
var loadEmbedApi = function (callback) {
    if (callback === void 0) { callback = func; }
    // Check if the script tag already exists
    if (document.querySelector("script[src='https://embed.twitch.tv/embed/v1.js']"))
        return;
    var script = document.createElement('script');
    script.setAttribute('src', exports.EMBED_URL);
    // Wait for DOM to finishing loading before we try loading embed
    script.addEventListener('load', callback);
    document.body.append(script);
};
exports.loadEmbedApi = loadEmbedApi;


/***/ }),

/***/ "./src/useEmbedApi.tsx":
/*!*****************************!*\
  !*** ./src/useEmbedApi.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTwitchEmbed = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var window_or_global_1 = __importDefault(__webpack_require__(/*! window-or-global */ "./node_modules/window-or-global/lib/index.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
var useTwitchEmbed = function (props) {
    var _a = react_1.useState(), embed = _a[0], setEmbed = _a[1];
    var initialize = react_1.useCallback(function () {
        var _a;
        var twitchEmbed = new window_or_global_1.default.Twitch.Embed((_a = props.targetId) !== null && _a !== void 0 ? _a : '', __assign({}, props));
        setEmbed(twitchEmbed);
    }, [props]);
    return utils_1.tuplify(embed, initialize);
};
exports.useTwitchEmbed = useTwitchEmbed;


/***/ }),

/***/ "./src/useEventListener.tsx":
/*!**********************************!*\
  !*** ./src/useEventListener.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useEventListener = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var noop = function () { };
var useEventListener = function (embedObj) {
    return react_1.useCallback(function (event, callback) {
        if (!embedObj)
            return noop;
        embedObj.addEventListener(event, callback);
        return function () { return embedObj.removeEventListener(event, callback); };
    }, [embedObj]);
};
exports.useEventListener = useEventListener;


/***/ }),

/***/ "./src/usePlayerPlay.tsx":
/*!*******************************!*\
  !*** ./src/usePlayerPlay.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usePlayerPlay = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var usePlayerPlay = function (Embed, _a) {
    var autoplay = _a.autoplay, onPlay = _a.onPlay;
    var _b = react_1.useState(autoplay), shouldForcePlay = _b[0], setForcePlay = _b[1];
    return react_1.useCallback(function () {
        if (!Embed)
            return null;
        if (shouldForcePlay)
            return onPlay && onPlay();
        var player = Embed.getPlayer();
        player.pause();
        setForcePlay(true);
    }, [onPlay, Embed, setForcePlay, shouldForcePlay]);
};
exports.usePlayerPlay = usePlayerPlay;


/***/ }),

/***/ "./src/usePlayerReady.tsx":
/*!********************************!*\
  !*** ./src/usePlayerReady.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usePlayerReady = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var Volume = {
    MUTED: 0,
    AUDIBLE: 1,
};
var ensureAutoPlay = function (player, isAutoPlay) { return !isAutoPlay && player.pause(); };
var ensureVolume = function (player, isMuted) {
    player.setVolume(isMuted ? Volume.MUTED : Volume.AUDIBLE);
};
var usePlayerReady = function (Embed, _a) {
    var isAutoPlay = _a.autoplay, isMuted = _a.muted, onReady = _a.onReady;
    return react_1.useCallback(function () {
        if (!Embed) {
            // eslint-disable-next-line no-console
            console.warn('Player not provided');
            return;
        }
        var player = Embed.getPlayer();
        ensureVolume(player, isMuted);
        ensureAutoPlay(player, isAutoPlay);
        onReady && onReady(player);
    }, [Embed, isMuted, isAutoPlay, onReady]);
};
exports.usePlayerReady = usePlayerReady;


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_HEIGHT = exports.DEFAULT_WIDTH = exports.DEFAULT_TARGET_ID = void 0;
exports.DEFAULT_TARGET_ID = 'twitch-embed';
exports.DEFAULT_WIDTH = '940';
exports.DEFAULT_HEIGHT = '480';


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./constants */ "./src/utils/constants.ts"), exports);
__exportStar(__webpack_require__(/*! ./tuplify */ "./src/utils/tuplify.ts"), exports);


/***/ }),

/***/ "./src/utils/tuplify.ts":
/*!******************************!*\
  !*** ./src/utils/tuplify.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tuplify = void 0;
function tuplify() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return elements;
}
exports.tuplify = tuplify;


/***/ }),

/***/ "./node_modules/window-or-global/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/window-or-global/lib/index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


module.exports = (typeof self === 'object' && self.self === self && self) ||
  (typeof __webpack_require__.g === 'object' && __webpack_require__.g.global === __webpack_require__.g && __webpack_require__.g) ||
  this


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map