import React from 'react'

import TwitchEmbedVideo from '../index'
import {
  IChannelEmbedParameters,
  IVodCollectionEmbedParameters,
  IVodEmbedParameters,
} from '../useEmbedApi'

export default {
  title: 'Channel Example',
  component: TwitchEmbedVideo,
  args: {
    channel: 'talk2megooseman',
  },
  argTypes: {
    onPlay: { action: 'Video Playback Started.' },
    onReady: { action: 'Player is ready.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Take control of the Twitch Player component in this example and control all aspects of the player. Choose a channel you want to display or change some of the default configurations.',
      },
    },
  },
}

const Template = (
  args:
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters
    | IChannelEmbedParameters,
) => <TwitchEmbedVideo {...args} />

export const ChannelExample = Template.bind({})
