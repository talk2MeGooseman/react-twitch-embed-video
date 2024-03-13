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

For full documentation on how to use React Twitch Embed Video visit: https://talk2megooseman.github.io/react-twitch-embed-video/

## Troubleshooting

- Video embed not working in Brave browser
  * By default Brave block all third party cookies which causes issues using the Twitch Embed Player. In order to get the player to work you either have to allow third party cookies `Setting->Additional Settings->Privacy and Security->Site Settings->Cookies` or you can add Twitch to the whitelist so you can still block other third party cookies.

## Development

### Usage

1. Install modules
    > yarn

1. Start storybook and start coding!
    > yarn dev

1. Make project available locally by using `npm link`
1. To test if it works correctly in another project you can use npm `npm link react-twitch-embed-video`
1. Verify all tests are passing
    > yarn test

#### Extra

* If you want to automatically fix lint problems run :
    > yarn lint:fix

Commands
----
- `yarn`
- `yarn build`
- `yarn test`
- `yarn coverage`
- `yarn start`
- `yarn release`
- `yarn lint`
- `yarn lint:fix`
