import root from 'window-or-global';
import { useState, useCallback } from 'react';

export function useTwitchPlayer(props) {
  const [twitchEmbed, setTwitchEmbed] = useState(null);
  const setFrame = useCallback(() => {
    const embed = new root.Twitch.Embed(props.targetId, {
      ...props,
    });
    setTwitchEmbed(embed);
  }, [props]);
  return [twitchEmbed, setFrame];
}
