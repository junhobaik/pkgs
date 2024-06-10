import type { Preview } from '@storybook/react';

import '../tailwind.css';
import '@junhobaik/ui/css';

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
