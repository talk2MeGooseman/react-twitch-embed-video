import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import TwitchEmbedVideo from "../src/index";

const ignoreArgsAction = decorateAction([
    args => ['callback triggered']
]);

storiesOf('React Twitch Embed Video', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Choose channel', () => (
        <TwitchEmbedVideo channel={text('Channel', 'talk2megooseman')} />
    ))
    .add('Choose VOD to play', () => (
        <TwitchEmbedVideo video={text('VOD ID', '462014255')} />
    ))
    .add('Custom width and height', () => (
        <TwitchEmbedVideo channel="talk2megooseman" height={text('Height', '400')} width={text('Width', '800')} />
    ))
    .add('Theme: light or dark', () => (
        <TwitchEmbedVideo channel="talk2megooseman" theme={select('Theme', ['dark', 'light'], 'dark')} />
    ))
    .add('Layout: with or without chat', () => (
        <TwitchEmbedVideo channel="talk2megooseman" layout={select('Layout', ['video-with-chat', 'video'], 'video')} />
    ))
    .add('Choose autoplay', () => (
        <TwitchEmbedVideo video='462014255' autoplay={select('Autoplay', [true, false], false)} />
    ))
    .add('Choose auto mute', () => (
        <TwitchEmbedVideo video='462014255' muted={select('Muted', [true, false], true)} />
    ))
    .add('2 twitch streams and dynamic update knob', () => (
        <div style={ {height: "900px"} }>
            <TwitchEmbedVideo width="500px" height="400px" channel="talk2megooseman"/>
            <TwitchEmbedVideo width="100%" height="100%" channel={text('Second Embed Channel', 'lana_lux')} targetId='second'/>
        </div>
    ))
    .add('with video play callback', () => (
        <TwitchEmbedVideo channel="talk2megooseman" onVideoPlay={ action('onVideoPlay') } />
    ))
    .add('with player ready callback', () => (
        <TwitchEmbedVideo channel="talk2megooseman" onPlayerReady={ ignoreArgsAction('onPlayerReady') } />
    ))
