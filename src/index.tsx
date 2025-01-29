import React, { useEffect, useRef } from 'react'
import root from 'window-or-global'
import { loadEmbedApi } from './loadEmbedApi'
import { useEventListener } from './useEventListener'
import { usePlayerPlay } from './usePlayerPlay'
import { usePlayerReady } from './usePlayerReady'
import {
  type IChannelEmbedParameters,
  type ITwitchWindow,
  type IVodCollectionEmbedParameters,
  type IVodEmbedParameters,
  useTwitchEmbed,
} from './useTwitchEmbed'
import { DEFAULT_HEIGHT, DEFAULT_TARGET_ID, DEFAULT_WIDTH } from './utils'

const TwitchEmbedVideo = (
  props:
    | IChannelEmbedParameters
    | IVodCollectionEmbedParameters
    | IVodEmbedParameters,
) => {
  const { width, height, targetId, targetClass } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const [embed, initializeEmbed] = useTwitchEmbed(props)

  const eventListenerFactory = useEventListener(embed)
  const onPlayerReady = usePlayerReady(embed, props)
  const onPlayerPlay = usePlayerPlay(embed, props)

  useEffect(() => {
    const rootWindow = root as unknown as ITwitchWindow

    if (rootWindow.Twitch?.Embed === undefined) {return}

    const { VIDEO_PLAY, VIDEO_READY } = rootWindow.Twitch.Embed

    const removeVideoPlayListener = eventListenerFactory(
      VIDEO_PLAY,
      onPlayerPlay,
    )

    const removePlayerReadyEventListener = eventListenerFactory(
      VIDEO_READY,
      onPlayerReady,
    )

    return () => {
      removePlayerReadyEventListener()
      removeVideoPlayListener()
    }
  }, [onPlayerReady, eventListenerFactory, onPlayerPlay])

  // Builds the Twitch Embed
  useEffect(() => {
    const rootWindow = root as unknown as ITwitchWindow

    if (containerRef.current)
      {containerRef.current.innerHTML = ''}

    // Check if we have Twitch in the global space and Embed is available
    if (rootWindow.Twitch?.Embed) {
      initializeEmbed()

      return
    }

    // Initialize the Twitch embed lib if not present
    loadEmbedApi(initializeEmbed)
  }, [initializeEmbed])

  return (
    <div
      ref={containerRef}
      style={{ width, height }}
      className={targetClass}
      id={targetId}
    />
  )
}

TwitchEmbedVideo.defaultProps = {
  targetId: DEFAULT_TARGET_ID,
  width: DEFAULT_HEIGHT,
  height: DEFAULT_WIDTH,
  autoplay: true,
  muted: false,
}

// eslint-disable-next-line import/no-default-export
export default React.memo(TwitchEmbedVideo)
