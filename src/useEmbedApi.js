import root from "window-or-global";
import { useState, useCallback } from "react";

const useTwitchEmbed = props => {
  const [embed, setEmbed] = useState();

  const initialize = useCallback(() => {
    const TwitchEmbed = new root.Twitch.Embed(props.targetId, {
      ...props
    });

    setEmbed(TwitchEmbed);
  }, [props]);

  return [embed, initialize];
};

export { useTwitchEmbed };
