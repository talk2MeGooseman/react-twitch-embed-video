import { default as React_2 } from 'react';

declare const _default: React_2.MemoExoticComponent<{
    (props: IChannelEmbedParameters | IVodCollectionEmbedParameters | IVodEmbedParameters): JSX.Element;
    defaultProps: {
        targetId: string;
        width: string;
        height: string;
        autoplay: boolean;
        muted: boolean;
    };
}>;
export default _default;

declare interface IBaseEmbedParameters {
    /** If true, the player can go full screen. Default: true. */
    allowfullscreen?: boolean;
    /** If true, the video starts playing automatically, without the user clicking play.
     * The exception is mobile platforms, on which video cannot be played without user
     * interaction. Default: true. */
    autoplay?: boolean;
    /** Specifies the type of chat to use. Valid values:
     *
     * _default: Default value, uses full-featured chat._
     *
     * _mobile: Uses a read-only version of chat, optimized for mobile devices._
     *
     * To omit chat, specify a value of video for the layout option. */
    chat?: 'default' | 'mobile';
    /** Maximum width of the rendered element, in pixels. This can be expressed as a
     * percentage, by passing a string like 100% */
    height?: string | number;
    /** Determines the screen layout. Valid values:
     *
     * _video-with-chat: Default if channel is provided. Shows both video and chat side-by-side.
     * At narrow sizes, chat renders under the video player._
     *
     * _video: Default if channel is not provided. Shows only the video player (omits chat)._ */
    layout?: 'video' | 'video-with-chat';
    /** Specifies whether the initial state of the video is muted. _Default: false._ */
    muted?: boolean;
    /** The video started playing. This callback receives an object with a sessionId property. */
    onPlay?: IVideoPlayEventCallback;
    /** The video player is ready for API commands. This callback receives the player object. */
    onReady?: IVideoReadyEventCallback;
    /** Required if your site is embedded on any domain(s) other than the one that instantiates
     *  the Twitch embed.
     *
     * Example parent parameter: ["streamernews.example.com", "embed.example.com"]. */
    parent?: string[];
    /** Custom class name for div wrapper */
    targetClass?: string;
    /** Custom id to target, used if you're going to have multiple players on the page */
    targetId?: string;
    /** The Twitch embed color theme to use.
     *
     * Valid values: light or dark.
     *
     * _Default: light or the users chosen theme on Twitch._ */
    theme?: 'light' | 'dark';
    /** Time in the video where playback starts. Specifies hours, minutes, and seconds.
     *
     * Default: 0h0m0s (the start of the video). */
    time?: string;
    /** Width of video embed including chat */
    width?: string | number;
}

declare interface IChannelEmbedParameters extends IBaseEmbedParameters {
    /** Optional for VOD embeds; otherwise, required. Name of the chat room and channel to stream. */
    channel: string;
}

declare interface IPlaybackStatsInterface {
    backendVersion: string;
    bufferSize: number;
    codecs: string;
    displayResolution: string;
    fps: number;
    hlsLatencyBroadcaster: number;
    playbackRate: number;
    skippedFrames: number;
    videoResolution: string;
}

declare interface IPlayerInterface {
    /** Disables display of Closed Captions. */
    disableCaptions(): void;
    /**  */
    enableCaptions(): void;
    /**  */
    pause(): void;
    /**  */
    play(): void;
    /**  */
    seek(timestamp: number): void;
    /**  */
    setChannel(channel: string): void;
    /**  */
    setCollection(collection_id: string, video_id: string): void;
    /**  */
    setQuality(quality: string): void;
    /**  */
    setVideo(video_id: string, timestamp: number): void;
    getMuted(): boolean;
    setMuted(muted: boolean): void;
    getVolume(): number;
    setVolume(volumelevel: number): void;
    getPlaybackStats(): IPlaybackStatsInterface;
    getChannel(): string;
    getCurrentTime(): number;
    getDuration(): number;
    getEnded(): boolean;
    getQualities(): string[];
    getQuality(): string;
    getVideo(): string;
    isPaused(): boolean;
}

declare interface IVideoPlayEventCallback {
    (): void;
}

declare interface IVideoReadyEventCallback {
    (player: IPlayerInterface): void;
}

declare interface IVodCollectionEmbedParameters extends IBaseEmbedParameters {
    /** The VOD collection to play. If you use this, you may also specify an initial video
     * in the VOD collection, otherwise playback will begin with the first video in the collection.
     * All VODs are auto-played. Chat replay is not supported.
     *
     * Example parameters object:
     *
     * `"{ video: "124085610", collection: "GMEgKwTQpRQwyA" }"` */
    collection: {
        video: string;
        collection: string;
    };
}

declare interface IVodEmbedParameters extends IBaseEmbedParameters {
    /** ID of a VOD to play. Chat replay is not supported. */
    video: string;
}

export { }
