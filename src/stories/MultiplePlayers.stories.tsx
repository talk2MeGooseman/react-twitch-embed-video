import React from 'react'

import TwitchEmbedVideo from '../index'

export default {
  title: 'Multiple Players',
  component: TwitchEmbedVideo,
  parameters: {
    docs: {
      description: {
        component:
          'If you are attempting to have multiple Twitch Video Players on the page at the same time. It is required that you give each additional player a unique **_targetId_** or else each player will attempt use the same iFrame container.',
      },
    },
  },
  argTypes: {
    player1Channel: {
      description:
        'Property to change the channel for the first player, this is only for demo purposes.',
    },
    player2Channel: {
      description:
        'Property to change the channel for the second player, this is only for demo purposes.',
    },
  },
}

export const MultiplePlayers = ({
  player1Channel,
  player2Channel,
}: {
  player1Channel: string
  player2Channel: string
}) => (
  <>
    <TwitchEmbedVideo width="500px" height="400px" channel={player1Channel} />
    <TwitchEmbedVideo
      width="500px"
      height="400px"
      channel={player2Channel}
      targetId="second"
    />
  </>
)

MultiplePlayers.args = {
  player1Channel: 'talk2megooseman',
  player2Channel: 'lana_lux',
}
