import { useCallback } from 'react'

import {
  IChannelEmbedParameters,
  IPlayerInterface,
  ITwitchEmbed,
  IVodCollectionEmbedParameters,
  IVodEmbedParameters,
} from './useEmbedApi'

const Volume = {
  MUTED: 0,
  AUDIBLE: 1,
}

const ensureAutoPlay = (
  player: IPlayerInterface,
  isAutoPlay?: boolean,
): unknown => !isAutoPlay && player.pause()

const ensureVolume = (player: IPlayerInterface, isMuted?: boolean): void => {
  player.setVolume(isMuted ? Volume.MUTED : Volume.AUDIBLE)
}

interface IReadyAction {
  (): void
}

const usePlayerReady = (
  Embed: ITwitchEmbed | undefined,
  {
    autoplay: isAutoPlay,
    muted: isMuted,
    onReady,
  }:
    | IChannelEmbedParameters
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters,
): IReadyAction =>
  useCallback(() => {
    if (!Embed) {
      // eslint-disable-next-line no-console
      console.warn('Player not provided')

      return
    }

    const player = Embed.getPlayer()

    ensureVolume(player, isMuted)
    ensureAutoPlay(player, isAutoPlay)

    if (onReady) {
      return onReady(player)
    }
    return null
  }, [Embed, isMuted, isAutoPlay, onReady])

export { usePlayerReady }
