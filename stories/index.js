import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import TwitchEmbedVideo from "../src/index";

const ignoreArgsAction = decorateAction([
    args => ['callback triggered']
]);

storiesOf('React Twitch Embed Video', module)
    .addDecorator((story, context) => withInfo('Info')(story)(context))
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
        <TwitchEmbedVideo channel="talk2megooseman" onUserLogin={  ignoreArgsAction('onUserLogin') } />
    ))
    .add('2 twitch streams at the same time', () => (
        <div>
          <TwitchEmbedVideo channel="talk2megooseman"/>
          <TwitchEmbedVideo channel="lana_lux" targetClass='second'/>
        </div>
    ))
