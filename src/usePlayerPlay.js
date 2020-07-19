import { useState, useCallback } from "react";

const usePlayerPlay = (Embed, { autoplay, onPlay }) => {
  const [shouldForcePlay, setForcePlay] = useState(autoplay);

  return useCallback(() => {
    if (shouldForcePlay) return onPlay && onPlay();

    const player = Embed.getPlayer();

    player.pause();
    setForcePlay(true);
  }, [onPlay, Embed, setForcePlay, shouldForcePlay]);
};

export { usePlayerPlay };
