import { useCallback, useState } from 'react'
import type { IChannelEmbedParameters, IPlayAction, ITwitchEmbed, IVodCollectionEmbedParameters, IVodEmbedParameters } from './@types/types'

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
