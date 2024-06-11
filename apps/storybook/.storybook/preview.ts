import type { Preview } from '@storybook/react';

import '../tailwind.css';

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

    options: {
      storySort: {
        order: ['ui', 'editor', '*'],
      },
    },
  },
};

export default preview;
