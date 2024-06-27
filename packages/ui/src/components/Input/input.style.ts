// src/components/Input/input.style.ts

import { tv } from 'tailwind-variants';
import { colorVariants } from './etc/colorVariants';

export const input = tv({
  base: [
    'w-full',
    'outline-none',
    'bg-transparent',
  ],
});

export const inputContainer = tv({
  base: [
    'relative',
    'inline-flex',
    'items-center',
    'box-border',
    'appearance-none',
    'outline-none',
    'select-none',
    'whitespace-nowrap',
    'min-w-max',
    'cursor-text',
    'transition-all',
    'duration-150',
    'font-normal',
    'subpixel-antialiased',
  ],
  variants: {
    variant: {
      bordered: '',
      flat: '',
      underlined: 'pb-1',
      faded: '',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      danger: '',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    },
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
    isFocused: {
      true: '',
    },
  },
  compoundVariants: [
    // Remove border-radius for underlined variant
    {
      variant: 'underlined',
      class: 'rounded-none',
    },
    // bordered / color
    {
      variant: 'bordered',
      color: 'default',
      class: colorVariants.bordered.default,
    },
    {
      variant: 'bordered',
      color: 'primary',
      class: colorVariants.bordered.primary,
    },
    {
      variant: 'bordered',
      color: 'secondary',
      class: colorVariants.bordered.secondary,
    },
    {
      variant: 'bordered',
      color: 'success',
      class: colorVariants.bordered.success,
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: colorVariants.bordered.warning,
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: colorVariants.bordered.danger,
    },
    // flat / color
    {
      variant: 'flat',
      color: 'default',
      class: colorVariants.flat.default,
    },
    {
      variant: 'flat',
      color: 'primary',
      class: colorVariants.flat.primary,
    },
    {
      variant: 'flat',
      color: 'secondary',
      class: colorVariants.flat.secondary,
    },
    {
      variant: 'flat',
      color: 'success',
      class: colorVariants.flat.success,
    },
    {
      variant: 'flat',
      color: 'warning',
      class: colorVariants.flat.warning,
    },
    {
      variant: 'flat',
      color: 'danger',
      class: colorVariants.flat.danger,
    },
    // underlined / color
    {
      variant: 'underlined',
      color: 'default',
      class: colorVariants.underlined.default,
    },
    {
      variant: 'underlined',
      color: 'primary',
      class: colorVariants.underlined.primary,
    },
    {
      variant: 'underlined',
      color: 'secondary',
      class: colorVariants.underlined.secondary,
    },
    {
      variant: 'underlined',
      color: 'success',
      class: colorVariants.underlined.success,
    },
    {
      variant: 'underlined',
      color: 'warning',
      class: colorVariants.underlined.warning,
    },
    {
      variant: 'underlined',
      color: 'danger',
      class: colorVariants.underlined.danger,
    },
    // faded / color
    {
      variant: 'faded',
      color: 'default',
      class: colorVariants.faded.default,
    },
    {
      variant: 'faded',
      color: 'primary',
      class: colorVariants.faded.primary,
    },
    {
      variant: 'faded',
      color: 'secondary',
      class: colorVariants.faded.secondary,
    },
    {
      variant: 'faded',
      color: 'success',
      class: colorVariants.faded.success,
    },
    {
      variant: 'faded',
      color: 'warning',
      class: colorVariants.faded.warning,
    },
    {
      variant: 'faded',
      color: 'danger',
      class: colorVariants.faded.danger,
    },
    // size variants
    {
      size: 'xs',
      class: 'px-2 py-1',
    },
    {
      size: 'sm',
      class: 'px-3 py-1.5',
    },
    {
      size: 'md',
      class: 'px-3 py-2',
    },
    {
      size: 'lg',
      class: 'px-4 py-2.5',
    },
    {
      size: 'xl',
      class: 'px-5 py-3',
    },
    // Focus styles for each variant and color
    {
      variant: 'bordered',
      color: 'default',
      isFocused: true,
      class: 'border-gray-500',
    },
    {
      variant: 'bordered',
      color: 'primary',
      isFocused: true,
      class: 'border-blue-600',
    },
    {
      variant: 'bordered',
      color: 'secondary',
      isFocused: true,
      class: 'border-purple-600',
    },
    {
      variant: 'bordered',
      color: 'success',
      isFocused: true,
      class: 'border-green-600',
    },
    {
      variant: 'bordered',
      color: 'warning',
      isFocused: true,
      class: 'border-yellow-600',
    },
    {
      variant: 'bordered',
      color: 'danger',
      isFocused: true,
      class: 'border-red-600',
    },
    {
      variant: 'flat',
      color: 'default',
      isFocused: true,
      class: 'bg-gray-200',
    },
    {
      variant: 'flat',
      color: 'primary',
      isFocused: true,
      class: 'bg-blue-200',
    },
    {
      variant: 'flat',
      color: 'secondary',
      isFocused: true,
      class: 'bg-purple-200',
    },
    {
      variant: 'flat',
      color: 'success',
      isFocused: true,
      class: 'bg-green-200',
    },
    {
      variant: 'flat',
      color: 'warning',
      isFocused: true,
      class: 'bg-yellow-200',
    },
    {
      variant: 'flat',
      color: 'danger',
      isFocused: true,
      class: 'bg-red-200',
    },
    {
      variant: 'underlined',
      color: 'default',
      isFocused: true,
      class: 'border-gray-500',
    },
    {
      variant: 'underlined',
      color: 'primary',
      isFocused: true,
      class: 'border-blue-600',
    },
    {
      variant: 'underlined',
      color: 'secondary',
      isFocused: true,
      class: 'border-purple-600',
    },
    {
      variant: 'underlined',
      color: 'success',
      isFocused: true,
      class: 'border-green-600',
    },
    {
      variant: 'underlined',
      color: 'warning',
      isFocused: true,
      class: 'border-yellow-600',
    },
    {
      variant: 'underlined',
      color: 'danger',
      isFocused: true,
      class: 'border-red-600',
    },
    {
      variant: 'faded',
      color: 'default',
      isFocused: true,
      class: 'bg-gray-100 border-gray-300',
    },
    {
      variant: 'faded',
      color: 'primary',
      isFocused: true,
      class: 'bg-blue-100 border-blue-300',
    },
    {
      variant: 'faded',
      color: 'secondary',
      isFocused: true,
      class: 'bg-purple-100 border-purple-300',
    },
    {
      variant: 'faded',
      color: 'success',
      isFocused: true,
      class: 'bg-green-100 border-green-300',
    },
    {
      variant: 'faded',
      color: 'warning',
      isFocused: true,
      class: 'bg-yellow-100 border-yellow-300',
    },
    {
      variant: 'faded',
      color: 'danger',
      isFocused: true,
      class: 'bg-red-100 border-red-300',
    },
  ],
  defaultVariants: {
    variant: 'bordered',
    size: 'md',
    color: 'default',
    radius: 'lg',
    fullWidth: false,
  },
});
