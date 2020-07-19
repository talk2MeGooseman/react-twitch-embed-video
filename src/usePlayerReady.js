import { useCallback } from 'react';

const Volume = {
  MUTED: 0,
  AUDIBLE: 1,
};

const ensureAutoPlay = (player, isAutoPlay) => {
  // If the player should be paused on load then
  // then lets pause the player
  !isAutoPlay && player.pause();
};

const ensureVolume = (player, isMuted) => {
  // If the player was set to be muted on load
  // then lets make sure the volume is set to 0
  player.setVolume(isMuted ? Volume.MUTED : Volume.AUDIBLE);
};

const usePlayerReady = (Embed, { autoplay: isAutoPlay, muted: isMuted, onReady } = {}) =>
  useCallback(() => {
    if (!Embed) {
      // eslint-disable-next-line no-console
      console.warn('Player not provided');

      return;
    }

    const player = Embed.getPlayer();

    ensureVolume(player, isMuted);
    ensureAutoPlay(player, isAutoPlay);

    onReady && onReady(player);
  }, [Embed, isMuted, isAutoPlay, onReady]);

export { usePlayerReady };
