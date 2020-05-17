import { useState, useCallback } from "react";

const usePlayerPlay = (Embed, options) => {
  const { autoplay, onPlay } = options;
  const [shouldForcePlay, setForcePlay] = useState(autoplay);

  return useCallback(() => {
    if (shouldForcePlay) return onPlay && onPlay();

    const player = Embed.getPlayer();

    player.pause();
    setForcePlay(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, Embed, setForcePlay, shouldForcePlay]);
};

export { usePlayerPlay };
