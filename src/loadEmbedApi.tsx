export const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js'

const func: () => unknown = () => {}

const loadEmbedApi = (callback = func): void => {
  // Check if the script tag already exists
  if(document.querySelector("script[src='https://embed.twitch.tv/embed/v1.js']"))
    return

  const script = document.createElement('script')

  script.setAttribute('src', EMBED_URL)
  // Wait for DOM to finishing loading before we try loading embed
  script.addEventListener('load', callback)
  document.body.append(script)
}

export { loadEmbedApi }
