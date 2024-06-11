import { tv } from 'tailwind-variants';
import { colorVariants } from '../../shared/styles';

export const button = tv({
  base: [
    'z-0',
    'group',
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'box-border',
    'appearance-none',
    'outline-none',
    'select-none',
    'whitespace-nowrap',
    'min-w-max',
    'font-normal',
    'subpixel-antialiased',
    'overflow-hidden',
    'tap-highlight-transparent',
    'outline-none',
    'hover:opacity-90',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      solid: '',
      bordered: '',
      light: '',
      flat: '',
      faded: '',
      shadow: '',
      ghost: '',
    },
    size: {
      xs: 'px-[12px] min-w-12 h-[32px] text-[0.8rem] gap-2',
      sm: 'px-[16px] min-w-16 h-[36px] text-[0.9rem] gap-2',
      md: 'px-[16px] min-w-20 h-[40px] text-[1rem] gap-2',
      lg: 'px-[18px] min-w-24 h-[44px] text-[1.1rem] gap-3',
      xl: 'px-[20px] min-w-24 h-[48px] text-[1.2rem] gap-3',
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
      true: 'opacity-disabled pointer-events-none',
    },
    disableAnimation: {
      true: '!transition-none',
      false: 'transition-transform-colors-opacity motion-reduce:transition-none',
    },
  },
  compoundVariants: [
    // horizontal padding / radius / size
    {
      radius: 'full',
      size: 'xs',
      class: 'px-[14px]',
    },
    {
      radius: 'full',
      size: 'sm',
      class: 'px-[18px]',
    },
    {
      radius: 'full',
      size: 'md',
      class: 'px-[18px]',
    },
    {
      radius: 'full',
      size: 'lg',
      class: 'px-[20px]',
    },
    {
      radius: 'full',
      size: 'xl',
      class: 'px-[22px]',
    },

    // solid / color
    {
      variant: 'solid',
      color: 'default',
      class: colorVariants.solid.default,
    },
    {
      variant: 'solid',
      color: 'primary',
      class: colorVariants.solid.primary,
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: colorVariants.solid.secondary,
    },
    {
      variant: 'solid',
      color: 'success',
      class: colorVariants.solid.success,
    },
    {
      variant: 'solid',
      color: 'warning',
      class: colorVariants.solid.warning,
    },
    {
      variant: 'solid',
      color: 'danger',
      class: colorVariants.solid.danger,
    },
    // shadow / color
    {
      variant: 'shadow',
      color: 'default',
      class: colorVariants.shadow.default,
    },
    {
      variant: 'shadow',
      color: 'primary',
      class: colorVariants.shadow.primary,
    },
    {
      variant: 'shadow',
      color: 'secondary',
      class: colorVariants.shadow.secondary,
    },
    {
      variant: 'shadow',
      color: 'success',
      class: colorVariants.shadow.success,
    },
    {
      variant: 'shadow',
      color: 'warning',
      class: colorVariants.shadow.warning,
    },
    {
      variant: 'shadow',
      color: 'danger',
      class: colorVariants.shadow.danger,
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
    // light / color
    {
      variant: 'light',
      color: 'default',
      class: [colorVariants.light.default, 'data-[hover=true]:bg-default/40'],
    },
    {
      variant: 'light',
      color: 'primary',
      class: [colorVariants.light.primary, 'data-[hover=true]:bg-primary/20'],
    },
    {
      variant: 'light',
      color: 'secondary',
      class: [colorVariants.light.secondary, 'data-[hover=true]:bg-secondary/20'],
    },
    {
      variant: 'light',
      color: 'success',
      class: [colorVariants.light.success, 'data-[hover=true]:bg-success/20'],
    },
    {
      variant: 'light',
      color: 'warning',
      class: [colorVariants.light.warning, 'data-[hover=true]:bg-warning/20'],
    },
    {
      variant: 'light',
      color: 'danger',
      class: [colorVariants.light.danger, 'data-[hover=true]:bg-danger/20'],
    },
    // ghost / color
    {
      variant: 'ghost',
      color: 'default',
      class: colorVariants.ghost.default,
    },
    {
      variant: 'ghost',
      color: 'primary',
      class: colorVariants.ghost.primary,
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: colorVariants.ghost.secondary,
    },
    {
      variant: 'ghost',
      color: 'success',
      class: colorVariants.ghost.success,
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: colorVariants.ghost.warning,
    },
    {
      variant: 'ghost',
      color: 'danger',
      class: colorVariants.ghost.danger,
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'default',
    radius: 'lg',
    fullWidth: false,
    disabled: false,
  },
});
