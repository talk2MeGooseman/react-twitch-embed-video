import React, { useEffect, useRef } from 'react'
// import { bool, func, number, oneOf, oneOfType, string, arrayOf } from 'prop-types'
import root from 'window-or-global'
import { IChannelEmbedParameters, ITwitchWindow, IVodCollectionEmbedParameters, IVodEmbedParameters, useTwitchEmbed } from './useEmbedApi'
import { useEventListener } from './useEventListener'
import { usePlayerReady } from './usePlayerReady'
import { usePlayerPlay } from './usePlayerPlay'
import { loadEmbedApi } from './loadEmbedApi'
import { DEFAULT_HEIGHT, DEFAULT_TARGET_ID, DEFAULT_WIDTH } from './utils'

const hasTwitchApiLoaded = () => Boolean((root as unknown as ITwitchWindow)?.Twitch?.Embed)

const TwitchEmbedVideo = (props: IChannelEmbedParameters | IVodCollectionEmbedParameters | IVodEmbedParameters  ) => {
  const { width, height, targetId, targetClass } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const [embed, initializeEmbed] = useTwitchEmbed(props)

  const eventListenerFactory = useEventListener(embed)
  const onPlayerReady = usePlayerReady(embed, props)
  const onPlayerPlay = usePlayerPlay(embed, props)

  useEffect(() => {
    if (!hasTwitchApiLoaded()) return

    const { VIDEO_PLAY, VIDEO_READY } = (root as unknown as ITwitchWindow).Twitch.Embed

    const removeVideoPlayListener = eventListenerFactory(
      VIDEO_PLAY,
      onPlayerPlay
    )

    const removePlayerReadyEventListener = eventListenerFactory(
      VIDEO_READY,
      onPlayerReady
    )

    return () => {
      removePlayerReadyEventListener()
      removeVideoPlayListener()
    }
  }, [onPlayerReady, eventListenerFactory, onPlayerPlay])

  // Builds the Twitch Embed
  useEffect(() => {
    if (containerRef && containerRef.current) containerRef.current.innerHTML = ''

    // Check if we have Twitch in the global space and Embed is available
    if (hasTwitchApiLoaded()) {
      initializeEmbed()

      return
    }

    // Initialize the Twitch embed lib if not present
    loadEmbedApi(initializeEmbed)
  }, [initializeEmbed])

  return (
    <div
      ref={containerRef}
      style={{ width: width, height: height }}
      className={targetClass}
      id={targetId}
    ></div>
  )
}

TwitchEmbedVideo.defaultProps = {
  targetId: DEFAULT_TARGET_ID,
  width: DEFAULT_HEIGHT,
  height: DEFAULT_WIDTH,
  autoplay: true,
  muted: false
}

export default React.memo(TwitchEmbedVideo)
