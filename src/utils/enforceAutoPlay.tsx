import type { IPlayerInterface } from '../useTwitchEmbed'

const enforceAutoPlay = (
  player: IPlayerInterface,
  isAutoPlay?: boolean,
): void => { !isAutoPlay && player.pause() }

export { enforceAutoPlay }
