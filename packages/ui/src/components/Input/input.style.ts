// src/components/Input/input.style.ts

import { tv } from 'tailwind-variants';
import { colorVariants } from './etc/colorVariants';

export const input = tv({
  base: ['w-full', 'outline-none', 'bg-transparent'],
  variants: {
    spinnerPlacement: {
      start: '',
      end: '',
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
    disabled: {
      true: '!cursor-not-allowed',
    },
  },
  compoundVariants: [
    // spinnerPlacement / size
    {
      spinnerPlacement: 'start',
      size: 'xs',
      class: 'ml-[2px]',
    },
    {
      spinnerPlacement: 'start',
      size: 'sm',
      class: 'ml-[4px]',
    },
    {
      spinnerPlacement: 'start',
      size: 'md',
      class: 'ml-[6px]',
    },
    {
      spinnerPlacement: 'start',
      size: 'lg',
      class: 'ml-[8px]',
    },
    {
      spinnerPlacement: 'start',
      size: 'xl',
      class: 'ml-[10px]',
    },
    {
      spinnerPlacement: 'end',
      size: 'xs',
      class: 'mr-[2px]',
    },
    {
      spinnerPlacement: 'end',
      size: 'sm',
      class: 'mr-[4px]',
    },
    {
      spinnerPlacement: 'end',
      size: 'md',
      class: 'mr-[6px]',
    },
    {
      spinnerPlacement: 'end',
      size: 'lg',
      class: 'mr-[8px]',
    },
    {
      spinnerPlacement: 'end',
      size: 'xl',
      class: 'mr-[10px]',
    },
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

export const label = tv({
  base: ['font-semibold', 'text-gray-900'],
  variants: {
    size: {
      xs: 'text-xs leading-tight',
      sm: 'text-sm leading-tight',
      md: 'text-md leading-tight',
      lg: 'text-lg leading-tight',
      xl: 'text-xl leading-tight',
    },
    isDescription: {
      true: '',
      false: 'pb-1',
    },
    labelPlacement: {
      top: '',
      left: '',
    },
  },
  compoundVariants: [
    {
      labelPlacement: 'left',
      size: 'xs',
      class: 'pt-[0.35rem] pr-2',
    },
    {
      labelPlacement: 'left',
      size: 'sm',
      class: 'pt-[0.42rem] pr-2',
    },
    {
      labelPlacement: 'left',
      size: 'md',
      class: 'pt-[0.6rem] pr-3',
    },
    {
      labelPlacement: 'left',
      size: 'lg',
      class: 'pt-[0.72rem] pr-4',
    },
    {
      labelPlacement: 'left',
      size: 'xl',
      class: 'pt-[0.8rem] pr-4',
    },
  ],
});

export const description = tv({
  base: ['font-normal', 'text-gray-500'],
  variants: {
    size: {
      xs: 'text-[0.6rem] leading-tight',
      sm: 'text-xs leading-tight pb-[2px]',
      md: 'text-sm leading-tight pb-[2px]',
      lg: 'text-md leading-tight pb-[4px]',
      xl: 'text-lg leading-tight pb-[4px]',
    },
    labelPlacement: {
      top: '',
      left: 'pt-1 pl-[2px]',
    },
  },
  compoundVariants: [],
});

export const message = tv({
  base: ['font-normal', 'text-gray-500', 'pl-[2px]'],
  variants: {
    size: {
      xs: 'text-[0.6rem] leading-tight',
      sm: 'text-xs leading-tight',
      md: 'text-sm leading-tight',
      lg: 'text-md leading-tight',
      xl: 'text-lg leading-tight',
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      danger: '',
    },
    labelPlacement: {
      top: 'mt-[2px]',
      left: '',
    },
  },
  compoundVariants: [
    {
      color: 'default',
      class: 'text-gray-500',
    },
    {
      color: 'primary',
      class: 'text-blue-500',
    },
    {
      color: 'secondary',
      class: 'text-purple-500',
    },
    {
      color: 'success',
      class: 'text-green-500',
    },
    {
      color: 'warning',
      class: 'text-yellow-600',
    },
    {
      color: 'danger',
      class: 'text-red-500',
    },
  ],
});

export const container = tv({
  base: ['inline-flex'],
  variants: {
    labelPlacement: {
      top: 'flex-col',
      left: 'flex-row',
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
    disabled: {
      true: '',
    },
  },
  compoundVariants: [],
});
