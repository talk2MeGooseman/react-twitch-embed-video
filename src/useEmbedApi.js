import root from "window-or-global";
import { useState, useCallback } from "react";

const useEmbedApi = props => {
  const [api, setApi] = useState();

  const initialize = useCallback(() => {
    const EmbedApi = new root.Twitch.Embed(props.targetId, {
      ...props
    });

    setApi(EmbedApi);
  }, [props]);

  return [api, initialize];
};

export { useEmbedApi };
