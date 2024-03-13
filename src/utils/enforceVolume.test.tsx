import type { IPlayerInterface } from '../useTwitchEmbed'
import { enforceVolume, Volume } from './enforceVolume'

describe('enforceVolume', () => {
  const playerMock: Partial<IPlayerInterface> = {
    setVolume: vi.fn(),
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should set volume to MUTED when isMuted is true', () => {
    enforceVolume(playerMock as IPlayerInterface, true)

    expect(playerMock.setVolume).toHaveBeenCalledWith(Volume.MUTED)
  })

  it('should set volume to AUDIBLE when isMuted is false', () => {
    enforceVolume(playerMock as IPlayerInterface, false)

    expect(playerMock.setVolume).toHaveBeenCalledWith(Volume.AUDIBLE)
  })
})
