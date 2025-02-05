import type { IPlayerInterface } from '../@types/types'
import { Volume } from './constants'

export const enforceVolume = (
  player: IPlayerInterface,
  isMuted?: boolean,
): void => {
  player.setVolume(isMuted ? Volume.MUTED : Volume.AUDIBLE)
}
