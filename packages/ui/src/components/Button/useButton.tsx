// useButton.tsx

import React, { ElementType, ReactElement, useCallback, useEffect, useMemo } from 'react';
import { useDOMRef } from '../../shared/hooks';
import { button as buttonStyles } from './button.style';
import { Spinner } from '../Spinner';
import { filterDOMProps } from '../../shared/utils';
import { UseButtonProps } from './button.type';
import { debounce as debounceFunc } from 'lodash-es';

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
    startContent,
    endContent,
    fullWidth = false,
    debounce = false,
    scalable = false,
    className = '',
  } = props;

  const domRef = useDOMRef(ref);

  const styles = useMemo(
    () => buttonStyles({ radius, disabled, variant, color, size, fullWidth, scalable, class: className }),
    [radius, disabled, color, size, className, fullWidth, scalable]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      domRef.current && onClick?.(e);
    },
    [disabled, domRef, onClick]
  );

  const debouncedClick = useMemo(() => debounceFunc(handleClick, typeof debounce === 'number' ? debounce : 300, { leading: true, trailing: false }), [handleClick, debounce]);

  const getButtonProps = useCallback(() => {
    const filteredProps = filterDOMProps(
      {
        ...props,
        onClick: debounce ? debouncedClick : handleClick,
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
