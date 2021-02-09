import { useCallback, useState } from 'react'

import {
  IChannelEmbedParameters,
  ITwitchEmbed,
  IVodCollectionEmbedParameters,
  IVodEmbedParameters,
} from './useEmbedApi'

interface IPlayAction {
  (): void
}

const usePlayerPlay = (
  Embed: ITwitchEmbed | undefined,
  {
    autoplay,
    onPlay,
  }:
    | IChannelEmbedParameters
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters,
): IPlayAction => {
  const [shouldForcePlay, setForcePlay] = useState<boolean | undefined>(
    autoplay,
  )

  return useCallback(() => {
    if (!Embed) return null

    if (shouldForcePlay) return onPlay && onPlay()

    const player = Embed.getPlayer()

    player.pause()
    setForcePlay(true)
  }, [onPlay, Embed, setForcePlay, shouldForcePlay])
}

export { usePlayerPlay }
