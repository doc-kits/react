module.exports = (baseConfig, env, config) => {
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loaders: [
      require.resolve('babel-loader'),
      require.resolve('awesome-typescript-loader'),
    ],
  });

  return config;
};
