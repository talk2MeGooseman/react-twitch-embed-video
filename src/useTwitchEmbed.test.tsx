import { act, renderHook } from '@testing-library/react'
import { useTwitchEmbed } from './useTwitchEmbed'

const mocks = vi.hoisted(() => {
  const mockCallback = vi.fn()

  class MockEmbed {
    constructor(targetId: string, props: unknown) {
      mockCallback(targetId, props)
    }
  }

  return {
    embedMock: MockEmbed,
    mockCallback,
  }
})

vi.mock('window-or-global', () => { return {
  default: {
    Twitch: {
      Embed: mocks.embedMock,
    },
  },
} })

describe('useTwitchEmbed', () => {
  describe('if targetId is provided', () => {
    it('returns the embed object', () => {
      const { result } = renderHook(() =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        { return useTwitchEmbed({
          targetId: 'some-id',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any) },
      )

      const [embed, initialize] = result.current

      act(() => {
        initialize()
      })

      expect(embed).toBeUndefined()
      expect(mocks.mockCallback).toHaveBeenCalled()

      const [updatedEmbed] = result.current

      expect(updatedEmbed).toBeInstanceOf(mocks.embedMock)
      expect(mocks.mockCallback).toHaveBeenCalledWith('some-id', {})
    })
  })

  describe('if targetId is not provided', () => {
    it('returns the embed object, with default props', () => {
      const { result } = renderHook(() =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        { return useTwitchEmbed({
          anotherKey: 'value',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any) },
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
        anotherKey: 'value',
      })
    })
  })
})
