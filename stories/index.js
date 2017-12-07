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
        <TwitchEmbedVideo channel='nyixxs' />
    ))
    .add('with vod', () => (
        <TwitchEmbedVideo video='205214058' />
    ))
    .add('with custom width and height', () => (
        <TwitchEmbedVideo channel="nyixxs" height="400" width="800" />
    ))
    .add('with dark theme', () => (
        <TwitchEmbedVideo channel="sneakiiii" theme='dark' />
    ))
    .add('with no chat', () => (
        <TwitchEmbedVideo channel="sneakiiii" layout='video' />
    ))
    .add('with video play callback', () => (
        <TwitchEmbedVideo channel="sneakiiii" onVideoPlay={ action('onVideoPlay') } />
    ))
    .add('with player ready callback', () => (
        <TwitchEmbedVideo channel="sneakiiii" onPlayerReady={ ignoreArgsAction('onPlayerReady') } />
    ))
    .add('with user login callback', () => (
        <TwitchEmbedVideo channel="sneakiiii" onUserLogin={  ignoreArgsAction('onUserLogin') } />
    ))