import { useCallback, useState } from 'react'
import type { IBaseEmbedParameters, IPlayAction, ITwitchEmbed } from './@types/types'

const usePlayerPlay = (
  embedObj: ITwitchEmbed | undefined,
  {
    autoplay = true,
    onPlay,
  }: IBaseEmbedParameters,
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
