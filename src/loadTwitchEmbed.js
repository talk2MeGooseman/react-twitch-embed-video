import { EMBED_URL } from './index';

export function loadTwitchEmbed(setTwitchEmbed) {
  const script = document.createElement('script');
  script.setAttribute('src', EMBED_URL);
  // Wait for DOM to finishing loading before we try loading embed
  script.addEventListener('load', setTwitchEmbed);
  document.body.appendChild(script);
}
