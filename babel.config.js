module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
      }
    ]
  ],
  plugins:
  [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }]
  ],
};
