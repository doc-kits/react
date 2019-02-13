import facepaint from 'facepaint';

export const mq = facepaint([
  `@media(min-width: 600px)`,
  `@media(min-width: 1280px)`,
]);

export const colors = {
  primary: {
    blue: '#0099e5',
    green: '#45d29a',
    yellow: '#f4ca3d',
    orange: '#eb742c',
    red: '#d73347',
    gray: '#4a6271',
  },
  grayScale: {
    100: '#f0f0f0',
    200: '#d8d8d8',
    300: '#a8a8a8',
    400: '#989898',
  },
};

export const ui = {
  text: { color: colors.primary.gray },
  link: { color: colors.primary.blue },
};

export default {
  mq,
  colors,
  ui,
};
