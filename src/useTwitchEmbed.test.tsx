import { act, renderHook } from '@testing-library/react'

import { useTwitchEmbed } from './useTwitchEmbed'

const mocks = vi.hoisted(() => {
  const mockCallback = vi.fn()

  class MockEmbed {
    constructor(targetId: any, props: any) {
      mockCallback(targetId, props)
    }
  }

  return {
    embedMock: MockEmbed,
    mockCallback,
  }
})

vi.mock('window-or-global', async () => ({
  default: {
    Twitch: {
      Embed: mocks.embedMock,
    },
  },
}))

describe('useTwitchEmbed', () => {
  describe('if targetId is provided', () => {
    it('returns the embed object', () => {
      const { result } = renderHook(() =>
        useTwitchEmbed({
          targetId: 'twitch-embed',
          anotherKey: 'value',
        } as any),
      )

      const [embed, initialize] = result.current

      act(() => {
        initialize()
      })

      expect(embed).toBeUndefined()
      expect(mocks.mockCallback).toHaveBeenCalled()

      const [updatedEmbed] = result.current

      expect(updatedEmbed).toBeInstanceOf(mocks.embedMock)
      expect(mocks.mockCallback).toHaveBeenCalledWith('twitch-embed', {
        targetId: 'twitch-embed',
        anotherKey: 'value',
      })
    })
  })

  describe('if targetId is not provided', () => {
    it('returns the embed object, with default props', () => {
      const { result } = renderHook(() =>
        useTwitchEmbed({
          anotherKey: 'value',
        } as any),
      )

      const [embed, initialize] = result.current

      act(() => {
        initialize()
      })

      expect(embed).toBeUndefined()
      expect(mocks.mockCallback).toHaveBeenCalled()

      const [updatedEmbed] = result.current

      expect(updatedEmbed).toBeInstanceOf(mocks.embedMock)
      expect(mocks.mockCallback).toHaveBeenCalledWith('', {
        anotherKey: 'value',
      })
    })
  })
})
