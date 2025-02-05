import { useCallback } from 'react'
import type { IChannelEmbedParameters, IReadyAction, ITwitchEmbed, IVodCollectionEmbedParameters, IVodEmbedParameters } from './@types/types'
import { enforceAutoPlay, enforceVolume } from './utils'

const usePlayerReady = (
  embedObj: ITwitchEmbed | undefined,
  {
    autoplay: isAutoPlay,
    muted: isMuted = false,
    onReady,
  }: Partial<
    | IChannelEmbedParameters
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters
  >,
): IReadyAction => {
  return useCallback(() => {
    if (!embedObj) { return }

    const player = embedObj.getPlayer()

    enforceVolume(player, isMuted)
    enforceAutoPlay(player, isAutoPlay)

    if (onReady) {onReady(player)}

  }, [embedObj, isMuted, isAutoPlay, onReady])
}

export { usePlayerReady }
