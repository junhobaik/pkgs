import { ElementType, ReactElement } from 'react';

export type ButtonColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ButtonVariants = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type UseButtonProps<T extends ElementType = 'button'> = {
  ref?: ReactRef<HTMLButtonElement | null>;
  /**
   * full width button
   * @default false
   */
  fullWidth?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean;
  spinner?: ReactElement;
  spinnerPlacement?: 'start' | 'end';
  /**
   * Button size
   */
  size?: ButtonSize;
  radius?: ButtonRadius;
  color?: ButtonColors;
  variant?: ButtonVariants;
} & React.ComponentPropsWithRef<T>;

export interface ButtonProps extends UseButtonProps<'button'> {}
