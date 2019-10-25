import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import TwitchEmbedVideo from "../src/index";

const ignoreArgsAction = decorateAction([
    args => ['callback triggered']
]);

storiesOf('React Twitch Embed Video', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('with channel', () => (
        <TwitchEmbedVideo channel='talk2megooseman' />
    ))
    .add('with vod', () => (
        <TwitchEmbedVideo video='207270826' />
    ))
    .add('with custom width and height', () => (
        <TwitchEmbedVideo channel="talk2megooseman" height="400" width="800" />
    ))
    .add('with dark theme', () => (
        <TwitchEmbedVideo channel="talk2megooseman" theme='dark' />
    ))
    .add('with no chat', () => (
        <TwitchEmbedVideo channel="talk2megooseman" layout='video' />
    ))
    .add('with video play callback', () => (
        <TwitchEmbedVideo channel="talk2megooseman" onVideoPlay={ action('onVideoPlay') } />
    ))
    .add('with player ready callback', () => (
        <TwitchEmbedVideo channel="talk2megooseman" onPlayerReady={ ignoreArgsAction('onPlayerReady') } />
    ))
    .add('with user login callback', () => (
        <TwitchEmbedVideo channel="talk2megooseman" onUserLogin={ ignoreArgsAction('onUserLogin') } />
    ))
    .add('2 twitch streams and dynamic update knob', () => (
        <div style={ {height: "900px"} }>
            <TwitchEmbedVideo width="500px" height="400px" channel="talk2megooseman"/>
            <TwitchEmbedVideo width="100%" height="100%" channel={text('Second Embed Channel', 'lana_lux')} targetClass='second'/>
        </div>
    ))
    .add('with autoplay false', () => (
        <TwitchEmbedVideo video='207270826' autoplay={false} />
    ))
    .add('with muted true', () => (
        <TwitchEmbedVideo video='207270826' muted={true} />
    ))
