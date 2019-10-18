import { configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

// Option defaults:
withOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'React Twitch Embed Video',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'https://github.com/talk2MeGooseman/react-twitch-embed-video',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display left panel that shows a list of stories
   * @type {Boolean}
   */
  showStoriesPanel: true,
  /**
   * display horizontal panel that displays addon configurations
   * @type {Boolean}
   */
  showAddonPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight : false,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

configure(loadStories, module);
