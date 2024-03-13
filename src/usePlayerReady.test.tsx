import { act, renderHook } from '@testing-library/react'

import { usePlayerReady } from './usePlayerReady'

describe('usePlayerReady', () => {
  const setVolumeMock = vi.fn()
  const pauseMock = vi.fn()
  const getPlayerMock = vi.fn(() => ({
    setVolume: setVolumeMock,
    pause: pauseMock,
  }))
  const onReadyMock = vi.fn()

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('when embedObj is defined', () => {
    it('calls the onReady callback with the player', () => {
      const { result } = renderHook(() =>
        usePlayerReady({ getPlayer: getPlayerMock } as any, {
          onReady: onReadyMock,
        }),
      )

      act(() => {
        result.current()
      })

      expect(onReadyMock).toHaveBeenCalledWith(getPlayerMock())
    })

    describe('when autoplay is true', () => {
      it('does not call player.pause', () => {
        const { result } = renderHook(() =>
          usePlayerReady({ getPlayer: getPlayerMock } as any, {
            autoplay: true,
          }),
        )

        act(() => {
          result.current()
        })

        expect(pauseMock).not.toHaveBeenCalled()
      })
    })

    describe('when autoplay is false', () => {
      it('does call player.pause', () => {
        const { result } = renderHook(() =>
          usePlayerReady({ getPlayer: getPlayerMock } as any, {
            autoplay: false,
          }),
        )

        act(() => {
          result.current()
        })

        expect(pauseMock).toHaveBeenCalled()
      })
    })

    describe('when muted is true', () => {
      it('calls player.setVolume with 0', () => {
        const { result } = renderHook(() =>
          usePlayerReady({ getPlayer: getPlayerMock } as any, {
            muted: true,
          }),
        )

        act(() => {
          result.current()
        })

        expect(setVolumeMock).toHaveBeenCalledWith(0)
      })
    })

    describe('when muted is false', () => {
      it('calls player.setVolume with 1', () => {
        const { result } = renderHook(() =>
          usePlayerReady({ getPlayer: getPlayerMock } as any, {
            muted: false,
          }),
        )

        act(() => {
          result.current()
        })

        expect(setVolumeMock).toHaveBeenCalledWith(1)
      })
    })

    describe('when onReady is not defined', () => {
      it('returns with out error', () => {
        const { result } = renderHook(() =>
          usePlayerReady({ getPlayer: getPlayerMock } as any, {}),
        )

        expect(() => result.current()).not.toThrow()
      })
    })
  })

  describe('when embedObj is undefined', () => {
    it('returns with out error', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      const { result } = renderHook(() => usePlayerReady(undefined, {}))

      expect(() => result.current()).not.toThrow()
    })
  })
})
