import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import { withOptions } from '@storybook/addon-options';

// inject custom css to all stories
addDecorator(story => (
  <div
    style={{
      fontFamily: '"Muli", sans-serif',
      fontSize: '16px',
      padding: '2rem',
    }}
  >
    {story()}
  </div>
));

// setup global addons
addDecorator(withKnobs);
addDecorator(withViewport);
addDecorator(
  withOptions({
    name: 'Doc Kits: React',
    url: 'https://github.com/doc-kits/react',
  })
);

// automatically import all storybook files
const req = require.context('../src', true, /.stories.(ts|tsx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
