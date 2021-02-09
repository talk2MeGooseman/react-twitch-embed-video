# React Twitch Embed Video

[![npm version](https://badge.fury.io/js/react-twitch-embed-video.svg)](https://badge.fury.io/js/react-twitch-embed-video)

Your solution to embedding the Twitch video player in your ReactJS application

https://talk2megooseman.github.io/react-twitch-embed-video/

## Installation

yarn | npm
---- | ---
`yarn add react-twitch-embed-video` | `npm install react-twitch-embed-video`

## Usage

Visit the github page for lives examples and documentation: https://talk2megooseman.github.io/react-twitch-embed-video/


```
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
.
.
.

<ReactTwitchEmbedVideo channel="talk2megooseman" />
```

## Version 2 Notes

### Updates/Changes
- Refactor all code to use React Hooks instead of a class based component.
- Lowest version of React supported is now 16.8 (version React Hooks was introduced in)
- Removed onUserLogin, it appears Twitch stopped supporting this all together based off the docs
- Added targetId property for defining mutiple video players
- `onPlayerReady` renamed to `onReady`
- `onVideoPlay` renamed to `onPlay`

### Breaking Changes
In version one I was mistakenly using `targetClass` prop for populating the `id` attribute for the Twitch Player. So I created a new prop called `targetId` to use to define more then one Twitch Player on your page. `targetClass` now properly sets the class for the player for proper styling.
If you were one of the users the was creating more then on Twitch player on your page, just switch from using `targetClass` to `targetId` and things should still work properly.
If you're using `onPlayerReady` or `onVideoPlay`, make sure to rename them to the new prop names.

## Troubleshooting

- Video embed not working in Brave browser
  * By default Brave block all third party cookies which causes issues using the Twitch Embed Player. In order to get the player to work you either have to allow third party cookies `Setting->Additional Settings->Privacy and Security->Site Settings->Cookies` or you can add Twitch to the whitelist so you can still block other third party cookies.

## Development

### Usage

1. Install modules
    > yarn

2. Check **_package.json_** so that the information is correct.
3. Start stroybook and start coding!
    > yarn start

4. Bundle with `yarn build`
5. To test if it works correctly in another project you can use npm `npm install -S ../react-twitch-embed-video` Note the relative path

#### Extra
* If you want to run eslint:
    > yarn lint

* If you want to automatically fix lint problems run :
    > yarn lint-fix

Commands
----
- `yarn`
- `yarn build`
- `yarn start`
- `yarn release`
- `yarn lint`
- `yarn lint-fix`
