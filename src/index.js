// Demo component
// this is only example component

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import root from 'window-or-global';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class TwitchEmbedVideo extends PureComponent {
  static propTypes = {
    /** Custom class name to target */
    targetClass: PropTypes.string,
    /** Optional for VOD embeds; otherwise, required. Name of the chat room and channel to stream. */
    channel: PropTypes.string.isRequired,
    /** ID of a VOD to play. Chat replay is not supported. */
    video: PropTypes.string.isRequired,
    /** Width of video embed including chat */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Maximum width of the rendered element, in pixels. This can be expressed as a percentage, by passing a string like 100% */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** If true, the player can go full screen. Default: true. */
    allowfullscreen: PropTypes.bool,
    /** If true, the video starts playing automatically, without the user clicking play. The exception is mobile platforms, on which video cannot be played without user interaction. Default: true. */
    autoplay: PropTypes.bool,
    /** Specifies the type of chat to use. Valid values:
            * default: Default value, uses full-featured chat.
            * mobile: Uses a read-only version of chat, optimized for mobile devices.

            To omit chat, specify a value of video for the layout option. */
    chat: PropTypes.oneOf(['default', 'mobile']),
    /** The VOD collection to play. If you use this, you also must specify an initial video in the VOD collection. All VODs are auto-played. Rechat is not supported */
    collection: PropTypes.string,
    /** Determines the screen layout. Valid values:
            video-and-chat: Default if channel is provided. Shows both video and chat side-by-side. At narrow sizes, chat renders under the video player.
            * video: Default if channel is not provided. Shows only the video player (omits chat). */
    layout: PropTypes.string,
    /** Specifies whether the initial state of the video is muted. Default: false. */
    muted: PropTypes.bool,
    /** The Twitch embed color theme to use. Valid values: light or dark. Default: light. */
    theme: PropTypes.string,
    /** User has logged in callback */
    onUserLogin: PropTypes.func,
    /** The video started playing. This callback receives an object with a sessionId property. */
    onVideoPlay: PropTypes.func,
    /** The video player is ready for API commands. This callback receives the player object. */
    onPlayerReady: PropTypes.func,
  };

  static defaultProps = {
    targetClass: 'twitch-embed',
    width: '940',
    height: '480',
    autoplay: true,
    muted: false,
  };

  _initPlayer() {
    this.embed = new root.Twitch.Embed(this.props.targetClass, {
      ...this.props,
    });
    this._addEventListeners();
  }

  componentDidMount() {
    // Check if we have Twitch in the global space and Embed is available
    if (root.Twitch && root.Twitch.Embed) {
      this._initPlayer();
    } else {
      // Initialize the Twitch embed lib if not present
      const script = document.createElement('script');
      script.setAttribute('src', EMBED_URL);

      // Wait for DOM to finishing loading before we try loading embed
      script.addEventListener('load', () => {
        this._initPlayer();
      });

      document.body.appendChild(script);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const channelChanged = this.props.channel !== nextProps.channel;
    const chatChanged = this.props.layout !== nextProps.layout;
    const heightChanged = this.props.height !== nextProps.height;
    const widthChanged = this.props.width !== nextProps.width;

    if (channelChanged || chatChanged || heightChanged || widthChanged) {
      var myNode = document.getElementById(nextProps.targetClass);
      myNode.innerHTML = '';

      this.embed = null;
      this.embed = new window.Twitch.Embed(this.props.targetClass, {
        ...nextProps,
      });
    }
  }

  _addEventListeners() {
    this.embed.addEventListener(root.Twitch.Embed.AUTHENTICATE, user => {
      if (this.props.onUserLogin) {
        this.props.onUserLogin(user);
      }
    });

    this.embed.addEventListener(root.Twitch.Embed.VIDEO_PLAY, data => {
      if (this.props.onVideoPlay) {
        this.props.onVideoPlay(data);
      }
    });

    /** Player ready for programmatic commands */
    this.embed.addEventListener(root.Twitch.Embed.VIDEO_READY, () => {
      const { autoplay, muted } = this.props;

      var player = this.embed.getPlayer();

      if (muted) {
        player.setVolume(0);
      }
      if (autoplay === false) {
        player.pause();
      }

      if (this.props.onPlayerReady) {
        this.props.onPlayerReady(player);
      }
    });
  }

  render() {
    const { width, height, targetClass } = this.props;
    return (
      <div style={{ width: width, height: height }} id={targetClass}></div>
    );
  }
}

export default TwitchEmbedVideo;
