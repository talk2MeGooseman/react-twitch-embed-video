import type { IPlayerInterface } from '../@types/types'
import { Volume } from './constants'

export const enforceVolume = (
  player: IPlayerInterface,
  isMuted?: boolean,
): void => {
  player.setMuted(Boolean(isMuted))
  player.setVolume(isMuted ? Volume.MUTED : Volume.AUDIBLE)
}
