import type { IPlayerInterface } from '../useTwitchEmbed'

export const Volume = {
  MUTED: 0,
  AUDIBLE: 1,
} as const

export function enforceVolume(
  player: IPlayerInterface,
  isMuted?: boolean,
): void {
  player.setVolume(isMuted ? Volume.MUTED : Volume.AUDIBLE)
}
