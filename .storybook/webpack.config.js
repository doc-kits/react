const path = require('path');

module.exports = (baseConfig, env, config) => {
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: require.resolve('awesome-typescript-loader'),
  });

  return config;
};
