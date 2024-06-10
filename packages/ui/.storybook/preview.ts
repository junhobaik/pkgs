import type { Preview } from '@storybook/react';
import '../src/styles/global.css';
import '../src/styles/color.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    tags: ['autodocs'],
    docs: {
      toc: true,
    },
  },
};

export default preview;
