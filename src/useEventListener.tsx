import { useCallback } from 'react'
import type { ITwitchEmbed } from './useTwitchEmbed'

type IAddEventListener = (event: string, callback: () => void) => () => void

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (): void => {}

const useEventListener = (
  embedObj: ITwitchEmbed | undefined,
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
