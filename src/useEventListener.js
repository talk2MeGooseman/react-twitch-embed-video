import { useCallback } from "react";

const noop = () => {};

const useEventListener = Embed =>
  useCallback(
    (event, callback) => {
      if (!Embed) return noop;

      Embed.addEventListener(event, callback);

      return () => Embed.removeEventListener(event, callback);
    },
    [Embed]
  );

export { useEventListener };
