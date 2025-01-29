// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import TwitchEmbedVideo from ".."
import type {
  IChannelEmbedParameters,
  IVodCollectionEmbedParameters,
  IVodEmbedParameters,
} from '../useTwitchEmbed'

export default {
  title: 'VOD Example',
  component: TwitchEmbedVideo,
  args: {
    video: '462014255',
  },
  argTypes: {
    onPlay: { action: 'Video Playback Started.' },
    onReady: { action: 'Player is ready.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'To play a VOD all you have to do is pass the Video ID to the `video` prop.',
      },
    },
  },
}

const Template = (
  args:
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters
    | IChannelEmbedParameters,
) => { return <TwitchEmbedVideo {...args} /> }

export const VODExample = Template.bind({})
