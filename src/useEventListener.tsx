import { useCallback } from 'react'
import type { IAddEventListener, ITwitchEmbed } from './@types/types'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (): void => {}

const useEventListener = (
  embedObj?: ITwitchEmbed,
): IAddEventListener =>
  { return useCallback(
    (event, callback) => {
      if (!embedObj) {return noop}

      embedObj.addEventListener(event, callback)

      return () => { embedObj.removeEventListener(event, callback); }
    },
    [embedObj],
  ) }

export { useEventListener }
