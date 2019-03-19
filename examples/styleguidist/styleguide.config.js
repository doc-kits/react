module.exports = {
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Muli:400,600,700',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Inconsolata',
        },
      ],
    },
  },
  sections: [
    {
      name: 'Components',
      content: 'src/index.md',
      components: 'src/components/**/*.js',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
  styles: {
    Para: {
      para: {
        marginBottom: 50,
      },
    },
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
};
