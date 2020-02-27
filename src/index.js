import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import root from 'window-or-global';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

function loadTwitchEmbed(setTwitchEmbed) {
  const script = document.createElement('script');
  script.setAttribute('src', EMBED_URL);
  // Wait for DOM to finishing loading before we try loading embed
  script.addEventListener('load', setTwitchEmbed);
  document.body.appendChild(script);
}

function useTwitchPlayer(props) {
  const [ twitchEmbed, setTwitchEmbed ] = useState(null);

  const setFrame = useCallback(() => {
    const embed = new root.Twitch.Embed(props.targetClass, {
      ...props,
    });
    setTwitchEmbed(embed);
  }, [props]);

  return [twitchEmbed, setFrame]
}

function useTwitchEmbedEvent(twitchEmbed) {
  return useCallback((event, callback) => {
    if(!twitchEmbed) return () => {};

    twitchEmbed.addEventListener(event, callback);

    return (() => { twitchEmbed.removeEventListener(event, callback) });
  }, [twitchEmbed]);
}

function usePlayerReady(twitchEmbed, {onPlayerReady, autoplay, muted}) {
  return useCallback(() => {
    if (!twitchEmbed) return;

    var player = twitchEmbed.getPlayer();

    if (muted) {
      player.setVolume(0);
    } else {
      player.setVolume(1);
    }

    if (autoplay === false) {
      player.pause();
    }

    if (onPlayerReady) {
      onPlayerReady(player);
    }
  }, [twitchEmbed, muted, autoplay, onPlayerReady]);
}

function useOnPlayCallback(shouldBePlaying, setShouldBePlaying, onVideoPlay, twitchEmbed) {
  return useCallback(() => {
    if (shouldBePlaying) {
      setShouldBePlaying(true);
      onVideoPlay();
    }
    else {
      setShouldBePlaying(true);
      const player = twitchEmbed.getPlayer();
      player.pause();
    }
  }, [shouldBePlaying, setShouldBePlaying, onVideoPlay, twitchEmbed]);
}

function TwitchEmbedVideo (props) {
  const { width, height, targetClass, onVideoPlay } = props;
  const conatinerRef = useRef();
  const [shouldBePlaying, setShouldBePlaying] = useState(props.autoplay);
  const [twitchEmbed, setTwitchEmbed] = useTwitchPlayer(props);
  const setTwitchEmbedEvent = useTwitchEmbedEvent(twitchEmbed);
  const playerReadyCallback = usePlayerReady(twitchEmbed, props);
  const videoPlayCallback = useOnPlayCallback(shouldBePlaying, setShouldBePlaying, onVideoPlay, twitchEmbed);

  useEffect(() => {
    if (!root.Twitch) return;

    const removeVideoPlay = setTwitchEmbedEvent(root.Twitch.Embed.VIDEO_PLAY, videoPlayCallback);
    const removePlayerReady = setTwitchEmbedEvent(root.Twitch.Embed.VIDEO_READY, playerReadyCallback);

    return () => {
      removePlayerReady();
      removeVideoPlay();
    };

  }, [playerReadyCallback, setTwitchEmbedEvent, videoPlayCallback]);

  // Builds the Twitch Embed
  useEffect(() => {
    conatinerRef.current.innerHTML = '';

    // Check if we have Twitch in the global space and Embed is available
    if (root.Twitch && root.Twitch.Embed) {
      setTwitchEmbed();
    } else {
      // Initialize the Twitch embed lib if not present
      loadTwitchEmbed(setTwitchEmbed);
    }
  }, [setTwitchEmbed])

  return (
    <div ref={conatinerRef} style={{ width: width, height: height }} id={targetClass}></div>
  );
}

TwitchEmbedVideo.propTypes = {
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

TwitchEmbedVideo.defaultProps = {
  targetClass: 'twitch-embed',
  width: '940',
  height: '480',
  autoplay: true,
  muted: false,
  onVideoPlay: () => {},
  onPlayerReady: () => {},
  onUserLogin: () => {},
};

export default TwitchEmbedVideo;
