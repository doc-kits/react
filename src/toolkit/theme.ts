export const base = {
  boxSizing: 'border-box',
};

export const colors = {
  blue: '#0099e5',
  green: '#45d29a',
  yellow: '#f4ca3d',
  orange: '#eb742c',
  red: '#d73347',
  gray: '#4a6271',
  grayScale: {
    100: '#f0f0f0',
    200: '#d8d8d8',
    300: '#a8a8a8',
    400: '#989898',
  },
};

export const typography = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Muli',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.5,
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

export const breakpoints = [
  `@media(min-width: 480px)`, // phone large
  `@media(min-width: 600px)`, // tablet small
  `@media(min-width: 768px)`, // tablet medium
  `@media(min-width: 1024px)`, // tablet large
  `@media(min-width: 1280px)`, // desktop small
  `@media(min-width: 1440px)`, // desktop medium
];

export default {
  ...base,
  ...typography,
};
