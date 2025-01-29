import type { IPlayerInterface } from '../useTwitchEmbed'
import { Volume } from './constants'

export const enforceVolume = (
  player: IPlayerInterface,
  isMuted?: boolean,
): void => {
  player.setVolume(isMuted ? Volume.MUTED : Volume.AUDIBLE)
}
