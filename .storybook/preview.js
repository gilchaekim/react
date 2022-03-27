import 'antd/dist/antd.css';
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    // defaultViewport: "iphonex",
  },
  // addons: [
  //   {
  //     name: '@storybook/addon-docs',
  //     options: {
  //       sourceLoaderOptions: {
  //         injectStoryParameters: false,
  //       },
  //     },
  //   },
  // ],
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' }
  }
}