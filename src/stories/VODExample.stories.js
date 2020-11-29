import React from 'react';

import TwitchEmbedVideo from '../index.js';

export default {
  title: 'VOD Example',
  component: TwitchEmbedVideo,
  args: {
    video: "462014255",
  },
  argTypes: {
    onPlay: { action: 'Video Playback Started.'},
    onReady: { action: 'Player is ready.' },
  },
  parameters: {
    docs: {
        description: {
          component: "To play a VOD all you have to do is pass the Video ID to the `video` prop."
        }
    },
  }
};

const Template = (args) => <TwitchEmbedVideo {...args} />;

export const VODExample = Template.bind({});
