import { useCallback } from 'react';

export function usePlayerReady(twitchEmbed, { onPlayerReady, autoplay, muted }) {
  return useCallback(() => {
    if (!twitchEmbed)
      return;
    var player = twitchEmbed.getPlayer();
    // If the player was set to be muted on load
    // then lets make sure the volume is set to 0
    if (muted) {
      player.setVolume(0);
    }
    else {
      player.setVolume(1);
    }
    // If the player should be paused on load then
    // then lets pause the player
    if (autoplay === false) {
      player.pause();
    }
    // If callback in provided then trigger callback
    if (onPlayerReady) {
      onPlayerReady(player);
    }
  }, [twitchEmbed, muted, autoplay, onPlayerReady]);
}
