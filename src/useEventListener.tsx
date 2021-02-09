import { useCallback } from 'react'

import { ITwitchEmbed } from './useEmbedApi'

interface IAddEventListener {
  (event: string, callback: () => void): () => void
}

const noop = (): void => {}

const useEventListener = (
  embedObj: ITwitchEmbed | undefined,
): IAddEventListener =>
  useCallback(
    (event, callback) => {
      if (!embedObj) return noop

      embedObj.addEventListener(event, callback)

      return () => embedObj.removeEventListener(event, callback)
    },
    [embedObj],
  )

export { useEventListener }
