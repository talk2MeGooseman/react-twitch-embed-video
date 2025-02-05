import { useCallback, useState } from 'react'
import root from 'window-or-global'
import type { IChannelEmbedParameters, ITwitchEmbed, ITwitchWindow,IVodCollectionEmbedParameters, IVodEmbedParameters } from './@types/types'
import { DEFAULT_TARGET_ID, tuplify } from './utils'

const useTwitchEmbed = (
  props:
    | IChannelEmbedParameters
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters,
) => {
  const [embed, setEmbed] = useState<ITwitchEmbed>()

  const initialize = useCallback(() => {
    const { targetId = DEFAULT_TARGET_ID, ...otherProps } = props
    const rootWindow = root as unknown as ITwitchWindow | null

    if (rootWindow?.Twitch?.Embed === undefined) {
      return
    }

    const twitchEmbed = new rootWindow.Twitch.Embed(
      targetId,
      {
        ...otherProps,
      },
    )

    setEmbed(twitchEmbed)
  }, [props])

  return tuplify(embed, initialize)
}

export { useTwitchEmbed }
