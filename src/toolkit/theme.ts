import facepaint from 'facepaint';

export const colors = {
  link: '#0099e5',
};

export const mq = facepaint([
  `@media(min-width: 768px)`,
  `@media(min-width: 1440px)`,
]);

export default {
  colors,
  mq,
};
