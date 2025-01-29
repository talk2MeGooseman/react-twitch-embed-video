import { useCallback, useState } from 'react'
import type {
  IChannelEmbedParameters,
  ITwitchEmbed,
  IVodCollectionEmbedParameters,
  IVodEmbedParameters,
} from './useTwitchEmbed'

type IPlayAction = () => void

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
  const [shouldForcePlay, setShouldForcePlay] = useState<boolean | undefined>(
    autoplay,
  )

  return useCallback(() => {
    if (!embedObj) {return}

    if (shouldForcePlay) {
      onPlay && onPlay();

      return
    }

    const player = embedObj.getPlayer()

    player.pause()
    setShouldForcePlay(true)
  }, [onPlay, embedObj, setShouldForcePlay, shouldForcePlay])
}

export { usePlayerPlay }
