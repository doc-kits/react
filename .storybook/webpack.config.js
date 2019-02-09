module.exports = (baseConfig, env, config) => {
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: ['emotion'],
        },
      },
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
    ],
  });

  return config;
};
