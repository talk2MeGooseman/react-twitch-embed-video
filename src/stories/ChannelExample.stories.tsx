// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import TwitchEmbedVideo from ".."
import type { IChannelEmbedParameters, IVodCollectionEmbedParameters, IVodEmbedParameters } from '../@types/types'
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '../utils'

export default {
  title: 'Channel Example',
  component: TwitchEmbedVideo,
  args: {
    channel: 'talk2megooseman',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    autoplay: true,
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
) => { return <TwitchEmbedVideo {...args} /> }

export const ChannelExample = Template.bind({})
