import type { IPlayerInterface } from '../useTwitchEmbed'
import { enforceAutoPlay } from './enforceAutoPlay'

describe('enforceAutoPlay', () => {
  const playerMock: Partial<IPlayerInterface> = {
    pause: vi.fn(),
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should call player.pause() when isAutoPlay is false', () => {
    enforceAutoPlay(playerMock as IPlayerInterface, false)

    expect(playerMock.pause).toHaveBeenCalled()
  })

  it('should not call player.pause() when isAutoPlay is true', () => {
    enforceAutoPlay(playerMock as IPlayerInterface, true)

    expect(playerMock.pause).not.toHaveBeenCalled()
  })
})
