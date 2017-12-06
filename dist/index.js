(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-twitch-embed-video"] = factory();
	else
		root["react-twitch-embed-video"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpreact_twitch_embed_video([1],{

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Demo component
// this is only example component




var EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

var TwitchEmbedVideo = function (_PureComponent) {
    _inherits(TwitchEmbedVideo, _PureComponent);

    function TwitchEmbedVideo() {
        _classCallCheck(this, TwitchEmbedVideo);

        return _possibleConstructorReturn(this, (TwitchEmbedVideo.__proto__ || Object.getPrototypeOf(TwitchEmbedVideo)).apply(this, arguments));
    }

    _createClass(TwitchEmbedVideo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var embed = void 0;
            if (window.Twitch && window.Twitch.Embed) {
                embed = new window.Twitch.Embed(this.props.targetClass, Object.assign({}, this.props));
                this._addEventListeners(embed);
            } else {
                var script = document.createElement('script');
                script.setAttribute('src', EMBED_URL);
                script.addEventListener('load', function () {
                    embed = new window.Twitch.Embed(_this2.props.targetClass, Object.assign({}, _this2.props));
                    _this2._addEventListeners(embed);
                });

                document.body.appendChild(script);
            }
        }
    }, {
        key: '_addEventListeners',
        value: function _addEventListeners(embed) {
            embed.addEventListener(window.Twitch.Embed.AUTHENTICATE, function (user) {
                if (this.props.onUserLogin) {
                    this.props.onUserLogin(user);
                }
            }.bind(this));

            embed.addEventListener(window.Twitch.Embed.VIDEO_PLAY, function (data) {
                if (this.props.onVideoPlay) {
                    this.props.onVideoPlay(data);
                }
            }.bind(this));

            /** Player ready for programmatic commands */
            embed.addEventListener(window.Twitch.Embed.VIDEO_READY, function () {
                var player = embed.getPlayer();

                if (this.props.onPlayerReady) {
                    this.props.onPlayerReady(player);
                }
            }.bind(this));
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: this.props.targetClass });
        }
    }]);

    return TwitchEmbedVideo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TwitchEmbedVideo.propTypes = {
    /** Custom class name to target */
    targetClass: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    /** Optional for VOD embeds; otherwise, required. Name of the chat room and channel to stream. */
    channel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    /** ID of a VOD to play. Chat replay is not supported. */
    video: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    /** Width of video embed including chat */
    width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
    /** Maximum width of the rendered element, in pixels. This can be expressed as a percentage, by passing a string like 100% */
    height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
    /** If true, the player can go full screen. Default: true. */
    allowfullscreen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    /** If true, the video starts playing automatically, without the user clicking play. The exception is mobile platforms, on which video cannot be played without user interaction. Default: true. */
    autoplay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    /** Specifies the type of chat to use. Valid values:
        * default: Default value, uses full-featured chat.
        * mobile: Uses a read-only version of chat, optimized for mobile devices.
         To omit chat, specify a value of video for the layout option. */
    chat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['default', 'mobile']),
    /** The VOD collection to play. If you use this, you also must specify an initial video in the VOD collection. All VODs are auto-played. Rechat is not supported */
    collection: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    /** Determines the screen layout. Valid values:
        video-and-chat: Default if channel is provided. Shows both video and chat side-by-side. At narrow sizes, chat renders under the video player.
        * video: Default if channel is not provided. Shows only the video player (omits chat). */
    layout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    /** Specifies whether the initial state of the video is muted. Default: false. */
    muted: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    /** If true, the embedded player plays inline for mobile iOS apps. Default: false. */
    playsinline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    /** 	The Twitch embed color theme to use. Valid values: light or dark. Default: light. */
    theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    /** Time in the video where playback starts. Specifies hours, minutes, and seconds. Default: 0h0m0s (the start of the video). */
    time: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    onUserLogin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onVideoPlay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onPlayerReady: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
TwitchEmbedVideo.defaultProps = {
    targetClass: 'twitch-embed',
    width: "940",
    height: "480"
};


/* harmony default export */ __webpack_exports__["default"] = (TwitchEmbedVideo);

/***/ })

},[8]);
});