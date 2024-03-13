import { useCallback, useState } from 'react'

import {
  IChannelEmbedParameters,
  ITwitchEmbed,
  IVodCollectionEmbedParameters,
  IVodEmbedParameters,
} from './useTwitchEmbed'

interface IPlayAction {
  (): void
}

const usePlayerPlay = (
  embedObj: ITwitchEmbed | undefined,
  {
    autoplay,
    onPlay,
  }: Partial<
    | IChannelEmbedParameters
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters
  >,
): IPlayAction => {
  const [shouldForcePlay, setForcePlay] = useState<boolean | undefined>(
    autoplay,
  )

  return useCallback(() => {
    if (!embedObj) return

    if (shouldForcePlay) return onPlay && onPlay()

    const player = embedObj.getPlayer()

    player.pause()
    setForcePlay(true)
  }, [onPlay, embedObj, setForcePlay, shouldForcePlay])
}

export { usePlayerPlay }
