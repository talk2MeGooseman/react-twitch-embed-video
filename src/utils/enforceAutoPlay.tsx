import type { IPlayerInterface } from "../@types/types"

const enforceAutoPlay = (
  player: IPlayerInterface,
  isAutoPlay?: boolean,
): void => { !isAutoPlay && player.pause() }

export { enforceAutoPlay }
