import React,{ useEffect, useRef } from "react";
import { bool, func, number, oneOf, oneOfType, string } from "prop-types";
import root from "window-or-global";
import { useEmbedApi } from "./useEmbedApi";
import { useEventListener } from "./useEventListener";
import { usePlayerReady } from "./usePlayerReady";
import { usePlayerPlay } from "./usePlayerPlay";
import { loadEmbedApi } from "./loadEmbedApi";

const hasTwitchApiLoaded = () => Boolean(root?.Twitch?.Embed);

const TwitchEmbedVideo = props => {
  const { width, height, targetId, targetClass } = props;
  const containerRef = useRef();
  const [EmbedApi, initializeEmbedApi] = useEmbedApi(props);
  const eventListenerFactory = useEventListener(EmbedApi);
  const onPlayerReady = usePlayerReady(EmbedApi, props);
  const onPlayerPlay = usePlayerPlay(EmbedApi, props);

  useEffect(() => {
    if (!hasTwitchApiLoaded()) return;

    const { VIDEO_PLAY, VIDEO_READY } = root.Twitch.Embed;

    const removeVideoPlayListener = eventListenerFactory(
      VIDEO_PLAY,
      onPlayerPlay
    );

    const removePlayerReadyEventListener = eventListenerFactory(
      VIDEO_READY,
      onPlayerReady
    );

    return () => {
      removePlayerReadyEventListener();
      removeVideoPlayListener();
    };
  }, [onPlayerReady, eventListenerFactory, onPlayerPlay]);

  // Builds the Twitch Embed
  useEffect(() => {
    containerRef.current.innerHTML = "";

    // Check if we have Twitch in the global space and Embed is available
    if (hasTwitchApiLoaded()) {
      initializeEmbedApi();

      return;
    }

    // Initialize the Twitch embed lib if not present
    loadEmbedApi(initializeEmbedApi);
  }, [initializeEmbedApi]);

  return (
    <div
      ref={containerRef}
      style={{ width: width, height: height }}
      className={targetClass}
      id={targetId}
    ></div>
  );
};

TwitchEmbedVideo.propTypes = {
  /** If true, the player can go full screen. Default: true. */
  allowfullscreen: bool,
  /** If true, the video starts playing automatically, without the user clicking play. The exception is mobile platforms, on which video cannot be played without user interaction. Default: true. */
  autoplay: bool,
  /** Optional for VOD embeds; otherwise, required. Name of the chat room and channel to stream. */
  channel: string.isRequired,
  /** Specifies the type of chat to use. Valid values:
          * default: Default value, uses full-featured chat.
          * mobile: Uses a read-only version of chat, optimized for mobile devices.

          To omit chat, specify a value of video for the layout option. */
  chat: oneOf(["default", "mobile"]),
  /** The VOD collection to play. If you use this, you also must specify an initial video in the VOD collection. All VODs are auto-played. Rechat is not supported */
  collection: string,
  /** Maximum width of the rendered element, in pixels. This can be expressed as a percentage, by passing a string like 100% */
  height: oneOfType([string, number]),
  /** Determines the screen layout. Valid values:
          video-with-chat: Default if channel is provided. Shows both video and chat side-by-side. At narrow sizes, chat renders under the video player.
          * video: Default if channel is not provided. Shows only the video player (omits chat). */
  layout: oneOf(["video", "video-with-chat"]),
  /** Specifies whether the initial state of the video is muted. Default: false. */
  muted: bool,
  /** The video started playing. This callback receives an object with a sessionId property. */
  onPlay: func,
  /** The video player is ready for API commands. This callback receives the player object. */
  onReady: func,
  /** Custom class name to target */
  targetClass: string,
  /** Custom id to target */
  targetId: string,
  /** The Twitch embed color theme to use. Valid values: light or dark. Default: light. */
  theme: string,
  /** ID of a VOD to play. Chat replay is not supported. */
  video: string.isRequired,
  /** Width of video embed including chat */
  width: oneOfType([string, number])
};

TwitchEmbedVideo.defaultProps = {
  targetId: "twitch-embed",
  width: "940",
  height: "480",
  autoplay: true,
  muted: false
};

export default TwitchEmbedVideo;
