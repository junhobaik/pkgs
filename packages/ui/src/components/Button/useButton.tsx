// useButton.tsx

import React, { ElementType, ReactElement, useCallback, useEffect, useMemo } from 'react';
import { useDOMRef } from '../../shared/hooks';
import { button as buttonStyles } from './button.style';
import { Spinner } from '../Spinner';
import { filterDOMProps } from '../../shared/utils';
import { UseButtonProps } from './button.type';

export const useButton = <T extends ElementType = 'button'>(props: UseButtonProps<T> & { as?: T }) => {
  const {
    ref,
    as,
    children,
    onClick,
    disabled,
    radius,
    color,
    variant,
    isLoading = false,
    spinnerPlacement = 'start',
    spinner,
    size,
    className = '',
    fullWidth,
    startContent,
    endContent,
  } = props;

  const domRef = useDOMRef(ref);

  const styles = useMemo(() => buttonStyles({ radius, disabled, variant, color, size, fullWidth, class: className }), [radius, disabled, color, size, className, fullWidth]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      domRef.current && onClick?.(e);
    },
    [disabled, domRef, onClick]
  );

  const getButtonProps = useCallback(() => {
    const filteredProps = filterDOMProps(
      {
        ...props,
        onClick: handleClick,
      },
      { enabled: true }
    );
    return filteredProps;
  }, [isLoading, disabled]);

  const spinnerElement = useMemo(() => {
    if (spinner) return spinner;

    if (size === 'md') return <Spinner size={14} borderWidth={3} />;
    if (size === 'sm') return <Spinner size={12} borderWidth={2} />;
    if (size === 'lg') return <Spinner size={18} borderWidth={4} />;
    return <Spinner />;
  }, [spinner, size]);

  const Component = as || 'button';

  return {
    Component,
    children,
    domRef,
    styles,
    startContent,
    endContent,
    isLoading,
    spinner: spinnerElement,
    spinnerPlacement,
    getButtonProps,
  };
};

export type UseButtonReturn = ReturnType<typeof useButton>;
