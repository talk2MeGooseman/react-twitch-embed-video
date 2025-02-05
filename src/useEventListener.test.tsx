import { renderHook } from '@testing-library/react'
import type { ITwitchEmbed } from './@types/types'
import { useEventListener } from './useEventListener'

describe('useEventListener', () => {
  const addEventListenerMock = vi.fn()
  const removeEventListenerMock = vi.fn()
  const embedObj: Partial<ITwitchEmbed> = {
    addEventListener: addEventListenerMock,
    removeEventListener: removeEventListenerMock,
  }

  const EVENT = 'load'
  const callback = vi.fn()

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('adds an event listener to the embed object', () => {
    const { result } = renderHook(() =>
      useEventListener(embedObj as ITwitchEmbed),
    )

    result.current(EVENT, callback)

    expect(addEventListenerMock).toHaveBeenCalledWith(EVENT, callback)
  })

  it('removes the event listener from the embed object', () => {
    const { result } = renderHook(() =>
      useEventListener(embedObj as ITwitchEmbed),
    )

    const cleanUpFunc = result.current(EVENT, callback)

    cleanUpFunc()

    expect(addEventListenerMock).toHaveBeenCalledWith(EVENT, callback)
    expect(removeEventListenerMock).toHaveBeenCalledWith(EVENT, callback)
  })

  it('returns a noop function when the embed object is undefined', () => {

    const { result } = renderHook(() => useEventListener(undefined))

    const cleanUpFunc = result.current(EVENT, callback)

    cleanUpFunc()

    expect(addEventListenerMock).not.toHaveBeenCalled()
    expect(removeEventListenerMock).not.toHaveBeenCalled()
  })
})
