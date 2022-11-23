module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport/register",
    "@storybook/addon-docs",
    // '@storybook/addon-storysource',
    'storybook-dark-mode'
  ],
  "framework": "@storybook/react"
}