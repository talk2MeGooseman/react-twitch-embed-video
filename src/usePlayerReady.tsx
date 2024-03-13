import { useCallback } from 'react'

import type {
  IChannelEmbedParameters,
  ITwitchEmbed,
  IVodCollectionEmbedParameters,
  IVodEmbedParameters,
} from './useTwitchEmbed'
import { enforceAutoPlay, enforceVolume } from './utils'

interface IReadyAction {
  (): void
}

const usePlayerReady = (
  embedObj: ITwitchEmbed | undefined,
  {
    autoplay: isAutoPlay,
    muted: isMuted,
    onReady,
  }: Partial<
    | IChannelEmbedParameters
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters
  >,
): IReadyAction =>
  useCallback(() => {
    if (!embedObj) return

    const player = embedObj.getPlayer()

    enforceVolume(player, isMuted)
    enforceAutoPlay(player, isAutoPlay)

    if (onReady) {
      return onReady(player)
    }
  }, [embedObj, isMuted, isAutoPlay, onReady])

export { usePlayerReady }
