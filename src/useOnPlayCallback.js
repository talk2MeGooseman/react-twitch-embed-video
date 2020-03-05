import { useState, useCallback } from 'react';

export function useOnPlayCallback(twitchEmbed, { autoplay, onVideoPlay }) {
  const [shouldBePlaying, setShouldBePlaying] = useState(autoplay);
  return useCallback(() => {
    if (shouldBePlaying) {
      setShouldBePlaying(true);
      onVideoPlay();
    }
    else {
      setShouldBePlaying(true);
      const player = twitchEmbed.getPlayer();
      player.pause();
    }
  }, [shouldBePlaying, setShouldBePlaying, onVideoPlay, twitchEmbed]);
}
