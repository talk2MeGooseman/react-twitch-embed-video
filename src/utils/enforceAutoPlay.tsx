import type { IPlayerInterface } from '../useTwitchEmbed'

const enforceAutoPlay = (
  player: IPlayerInterface,
  isAutoPlay?: boolean,
): unknown => !isAutoPlay && player.pause()

export { enforceAutoPlay }
