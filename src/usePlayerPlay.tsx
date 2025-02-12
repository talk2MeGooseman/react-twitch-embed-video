import { useCallback } from 'react'
import type { IBaseEmbedParameters, IPlayAction, ITwitchEmbed } from './@types/types'

const usePlayerPlay = (
  embedObj: ITwitchEmbed | undefined,
  {
    onPlay,
  }: IBaseEmbedParameters,
): IPlayAction => {
  return useCallback(() => {
    if (!embedObj) {
      return
    }
    const player = embedObj.getPlayer()

    onPlay?.(player)
  }, [onPlay, embedObj])
}

export { usePlayerPlay }
