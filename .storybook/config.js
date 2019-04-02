import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withConsole } from '@storybook/addon-console';
import { create } from '@storybook/theming';

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
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sortStoriesByKind: false,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: create({
      base: 'light',
      brandTitle: 'Doc Kits: React',
      brandUrl: 'https://github.com/doc-kits/react',
      brandImage:
        'https://raw.githubusercontent.com/doc-kits/react/master/images/storybook-logo.png?raw=true',
      gridCellSize: 8,
    }),
  },
});

// automatically import all storybook files
const req = require.context('../src', true, /.stories.(ts|tsx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
