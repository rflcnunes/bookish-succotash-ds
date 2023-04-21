module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-scss", "@storybook/addon-viewport", "@storybook/addon-measure", "@storybook/addon-outline", "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/vue-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};