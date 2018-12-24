import facepaint from 'facepaint';
import { breakpoints } from './settings';

export const mq = facepaint([
  `@media(min-width: ${breakpoints.tablet})`,
  `@media(min-width: ${breakpoints.desktop})`,
]);
