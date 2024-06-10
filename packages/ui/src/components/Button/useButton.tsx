import React, { ElementType, MouseEventHandler, ReactElement, Ref, RefObject, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { useDOMRef } from '../../shared/hooks';
import { button as buttonStyles } from './button.style';
import { useHover } from '@react-aria/interactions';
import { Spinner } from '../Spinner';

export type ButtonColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ButtonVariants = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type ButtonSize = 'sm' | 'md' | 'lg';

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

export const useButton = <T extends ElementType = 'button'>(props: UseButtonProps<T> & { as?: T }) => {
  const { ref, as, children, onClick, disabled, radius, color, variant, isLoading = false, spinnerPlacement = 'start', spinner, size, className, fullWidth } = props;

  const domRef = useDOMRef(ref);

  const { isHovered } = useHover({ isDisabled: disabled });

  const styles = useMemo(() => buttonStyles({ radius, disabled, variant, color, size, className, fullWidth }), [radius, disabled, color, size, className, fullWidth]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      domRef.current && onClick?.(e);
    },
    [disabled, domRef, onClick]
  );

  const spinnerElement = useMemo(() => {
    if (spinner) return spinner;

    if (size === 'md') return <Spinner size={14} borderWidth={3} />;
    if (size === 'sm') return <Spinner size={12} borderWidth={2} />;
    if (size === 'lg') return <Spinner size={18} borderWidth={4} />;
    return <Spinner />;
  }, [spinner, size]);

  const Component = as || 'button';

  return {
    ...props,
    domRef,
    Component,
    children,
    styles,
    onClick: handleClick,
    'data-hover': isHovered,
    spinner: spinnerElement,
    spinnerPlacement,
    isLoading,
    className: '',
  };
};

export type UseButtonReturn = ReturnType<typeof useButton>;
