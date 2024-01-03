import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

type ColorName = 'gray' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'orange';

interface ColorStyle {
  backgroundColor: string;
  ':hover': {
    backgroundColor: string;
  };
  ':active': {
    backgroundColor: string;
  };
}

const createColors = () => {
  const colors: ColorName[] = ['gray', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'orange'];

  const result: Record<ColorName, ColorStyle> = {} as Record<ColorName, ColorStyle>;

  for (const c of colors) {
    result[c] = {
      backgroundColor: `var(--color-${c}-7)`, // Normal state
      ':hover': {
        backgroundColor: `var(--color-${c}-6)`, // On hover
      },
      ':active': {
        backgroundColor: `var(--color-${c}-8)`, // On active or pressed
      },
    };
  }

  return result;
};

export const buttonRecipeStyle = recipe({
  base: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    cursor: 'pointer',
    padding: '11px 21px',
    borderRadius: '980px',
    transition: 'background-color 0.1s',
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-blue-7)',

    ':hover': {
      backgroundColor: 'var(--color-blue-6)',
    },
    ':active': {
      backgroundColor: 'var(--color-blue-7)',
    },
    ':disabled': {
      cursor: 'default',
      opacity: 0.64,
      backgroundColor: 'var(--color-gray-6)',
    },
    selectors: {
      '&:disabled:hover': {
        backgroundColor: 'var(--color-gray-6)',
      },
      '&:disabled:active': {
        backgroundColor: 'var(--color-gray-6)',
      },
    },
  },

  variants: {
    color: {
      ...createColors(),
    },
  },

  defaultVariants: {
    color: 'blue',
  },
});

export const additionalStyles = {
  fullWidth: style({
    width: '100%',
  }),
  unset: style({ all: 'unset' }),
};
