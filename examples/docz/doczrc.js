import { css } from 'docz-plugin-css';

export default {
  indexHtml: './index.html',
  plugins: [
    css({
      preprocessor: 'postcss',
    }),
  ],
};
