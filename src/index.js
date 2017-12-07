// Demo component
// this is only example component

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
        /** If true, the embedded player plays inline for mobile iOS apps. Default: false. */
        playsinline: PropTypes.bool,
        /** The Twitch embed color theme to use. Valid values: light or dark. Default: light. */
        theme: PropTypes.string,
        /** Time in the video where playback starts. Specifies hours, minutes, and seconds. Default: 0h0m0s (the start of the video). */
        time: PropTypes.string,
        /** User has logged in callback */
        onUserLogin: PropTypes.func,
        /** The video started playing. This callback receives an object with a sessionId property. */
        onVideoPlay: PropTypes.func,
        /** The video player is ready for API commands. This callback receives the player object. */
        onPlayerReady: PropTypes.func,
    };

    static defaultProps = {
        targetClass: 'twitch-embed',
        width: "940",
        height: "480"
    };

    componentDidMount() {
        let embed;
        if (window.Twitch && window.Twitch.Embed) {
            embed = new window.Twitch.Embed(this.props.targetClass, { ...this.props });
            this._addEventListeners(embed);
        } else {
            const script = document.createElement('script');
            script.setAttribute(
                'src',
                EMBED_URL
            );
            script.addEventListener('load', () => {
                embed = new window.Twitch.Embed(this.props.targetClass, { ...this.props });
                this._addEventListeners(embed);
            });

            document.body.appendChild(script);
        }
    }

    _addEventListeners(embed) {
        embed.addEventListener(window.Twitch.Embed.AUTHENTICATE, function(user) {
            if (this.props.onUserLogin) {
                this.props.onUserLogin(user);
            }
        }.bind(this));        

        embed.addEventListener(window.Twitch.Embed.VIDEO_PLAY, function(data) {
            if (this.props.onVideoPlay) {
                this.props.onVideoPlay(data);
            }
        }.bind(this));

        /** Player ready for programmatic commands */     
        embed.addEventListener(window.Twitch.Embed.VIDEO_READY, function() {
            var player = embed.getPlayer();

            if (this.props.onPlayerReady) {
                this.props.onPlayerReady(player);
            }
        }.bind(this));        
    }

    render() {
        return (
            <div id={this.props.targetClass}></div>
        );
    }
}

export default TwitchEmbedVideo;