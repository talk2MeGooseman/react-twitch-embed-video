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
    autoplay = true,
    onPlay,
  }: Partial<
    | IChannelEmbedParameters
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters
  >,
): IPlayAction => {
  const [shouldForcePlay, setShouldForcePlay] = useState(
    autoplay,
  )

  return useCallback(() => {
    if (!embedObj) {return}
    const player = embedObj.getPlayer()

    if (shouldForcePlay) {
      onPlay && onPlay();

      return
    }

    player.pause()
    setShouldForcePlay(true)
  }, [onPlay, embedObj, setShouldForcePlay, shouldForcePlay])
}

export { usePlayerPlay }
