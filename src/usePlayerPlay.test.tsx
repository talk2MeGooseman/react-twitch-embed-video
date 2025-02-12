/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { act, renderHook } from '@testing-library/react'
import { usePlayerPlay } from './usePlayerPlay'

describe('usePlayerPlay', () => {
  const onPlayMock = vi.fn()
  const pauseMock = vi.fn()
  const playerMock = { pause: pauseMock }
  const getPlayerMock = vi.fn(() => playerMock)

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('when embedObj is defined', () => {
    describe('when shouldForcePlay is true', () => {
      it('calls onPlay', () => {
        const { result } = renderHook(() =>
          usePlayerPlay({ getPlayer: getPlayerMock } as any, {
            autoplay: true,
            onPlay: onPlayMock,
          }),
        )

        act(() => {
          result.current()
        })

        expect(onPlayMock).toHaveBeenCalled()
      })

      describe('when onPlay is not defined', () => {
        it('returns without error', () => {
          const { result } = renderHook(() =>
            usePlayerPlay({ getPlayer: getPlayerMock } as any, {
              autoplay: true,
            }),
          )

          act(() => {
            expect(() => { result.current(); }).not.toThrow()
          })
        })
      })
    })

    describe('when shouldForcePlay is false', () => {
      it('calls onPlay with the player', () => {
        const { result } = renderHook(() =>
          usePlayerPlay({ getPlayer: getPlayerMock } as any, {
            autoplay: false,
            onPlay: onPlayMock,
          }),
        )

        act(() => {
          result.current()
        })

        expect(onPlayMock).toHaveBeenCalledWith(playerMock)
        expect(getPlayerMock).toHaveBeenCalled()
      })
    })
  })

  describe('when embedObj is undefined', () => {
    it('returns without error', () => {
      const { result } = renderHook(() =>
        usePlayerPlay(undefined, { autoplay: false }),
      )

      expect(() => { result.current(); }).not.toThrow()
    })
  })
})
