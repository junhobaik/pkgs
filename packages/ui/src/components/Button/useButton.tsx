import React, { ElementType, useMemo } from 'react';
import { useDOMRef } from '../../shared/hooks';
import { button as buttonStyles } from './button.style';
import { Spinner } from '../Spinner';
import { filterDOMProps } from '../../shared/utils';
import { UseButtonProps } from './button.type';
import { debounce as debounceFunc } from 'lodash-es';

export const useButton = <T extends ElementType = 'button'>(props: UseButtonProps<T>) => {
  const {
    ref,
    as,
    children,
    onClick,
    debounce = false,
    disabled = false,
    isLoading = false,

    size = 'md',
    radius = 'lg',
    color = 'default',
    variant = 'solid',
    fullWidth = false,
    scalable = false,

    spinner,
    spinnerPlacement = 'start',

    startContent,
    endContent,

    className = '',
  } = props;

  const domRef = useDOMRef(ref as ReactRef<HTMLElement>);

  const styles = useMemo(
    () => buttonStyles({ radius, disabled, variant, color, size, fullWidth, scalable, class: className }),
    [radius, disabled, variant, color, size, fullWidth, scalable, className]
  );

  const handleClick = (e: React.MouseEvent<HTMLElementType<T>, MouseEvent>) => {
    if (disabled) return;
    onClick?.(e);
  };

  const debouncedClick = debounceFunc(handleClick, typeof debounce === 'number' ? debounce : 300, { leading: true, trailing: false });

  const getButtonProps = () => {
    const filteredProps = filterDOMProps(props as any, { enabled: true });
    return { ...filteredProps, onClick: debounce ? debouncedClick : handleClick };
  };

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
