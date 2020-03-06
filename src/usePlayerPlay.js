import { useState, useCallback } from "react";

const usePlayerPlay = (EmbedApi, options) => {
  const { autoplay, onPlay } = options;
  const [shouldForcePlay, setForcePlay] = useState(autoplay);

  return useCallback(() => {
    if (shouldForcePlay) return onPlay && onPlay();

    const player = EmbedApi.getPlayer();

    player.pause();
    setForcePlay(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, EmbedApi, setForcePlay, shouldForcePlay]);
};

export { usePlayerPlay };
