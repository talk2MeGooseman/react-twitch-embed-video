// Generate vitest tests for the loadEmbedApi function
import { loadEmbedApi } from './loadEmbedApi'

describe('loadEmbedApi', () => {
  const scriptMock = {
    addEventListener: vi.fn(),
    setAttribute: vi.fn(),
  }

  const querySelectorMock = vi.fn()
  const createElementMock = vi.fn(() => scriptMock)
  const appendMock = vi.fn()

  const documentMock = {
    querySelector: querySelectorMock,
    createElement: createElementMock,
    body: { append: appendMock },
  }

  vi.stubGlobal('document', documentMock)

  describe('when the script tag already exists', () => {
    it('does not inject the Twitch embed script into the dom', async () => {
      querySelectorMock.mockReturnValue(true)
      loadEmbedApi()
      expect(querySelectorMock).toHaveBeenCalledWith(
        "script[src='https://embed.twitch.tv/embed/v1.js']",
      )
      expect(createElementMock).not.toHaveBeenCalled()
      expect(appendMock).not.toHaveBeenCalled()
    })
  })

  describe('when the script tag does not exist', () => {
    it('injects the Twitch embed script into the dom and adds an event listener', async () => {
      querySelectorMock.mockReturnValue(false)

      loadEmbedApi()
      expect(querySelectorMock).toHaveBeenCalledWith(
        "script[src='https://embed.twitch.tv/embed/v1.js']",
      )
      expect(createElementMock).toHaveBeenCalledWith('script')
      expect(scriptMock.setAttribute).toHaveBeenCalledWith(
        'src',
        'https://embed.twitch.tv/embed/v1.js',
      )
      expect(scriptMock.addEventListener).toHaveBeenCalledWith(
        'load',
        expect.any(Function),
      )
      expect(appendMock).toHaveBeenCalledWith(scriptMock)
    })
  })
})
