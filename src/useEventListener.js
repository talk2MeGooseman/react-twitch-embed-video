import { useCallback } from "react";

const noop = () => {};

const useEventListener = EmbedApi =>
  useCallback(
    (event, callback) => {
      if (!EmbedApi) return noop;

      EmbedApi.addEventListener(event, callback);

      return () => EmbedApi.removeEventListener(event, callback);
    },
    [EmbedApi]
  );

export { useEventListener };
