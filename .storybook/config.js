import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import { withOptions } from '@storybook/addon-options';

// inject custom css to all stories
addDecorator(story => (
  <div style={{ fontFamily: '"Muli", sans-serif' }}>{story()}</div>
));

// setup global addons
addDecorator(withKnobs);
addDecorator(withViewport);
addDecorator(
  withOptions({
    name: 'Doc UI',
    url: 'https://github.com/shockits/doc-ui',
  })
);

// automatically import all storybook files
const req = require.context('../src', true, /.stories.(ts|tsx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
