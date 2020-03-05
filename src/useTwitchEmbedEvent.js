import { useCallback } from 'react';

export function useTwitchEmbedEvent(twitchEmbed) {
  return useCallback((event, callback) => {
    if (!twitchEmbed)
      return () => { };
    twitchEmbed.addEventListener(event, callback);
    return (() => { twitchEmbed.removeEventListener(event, callback); });
  }, [twitchEmbed]);
}
