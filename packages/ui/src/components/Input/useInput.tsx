import { ElementType, useEffect, useMemo, useState } from 'react';
import { UseInputProps } from './input.type';
import { Spinner } from '../Spinner';
import { useDOMRef } from '../../shared/hooks';
import { input as _inputStyles, inputContainer as _containerStyles } from './input.style';
import { filterDOMProps } from '../../shared/utils';

export const useInput = <T extends ElementType = 'input'>(props: UseInputProps<T> & { as?: T }) => {
  const {
    ref,
    as,
    disabled = false,
    isLoading = false,

    size = 'md',
    radius = 'lg',
    color = 'default',
    variant = 'solid',
    fullWidth = false,

    spinner,
    spinnerPlacement = 'end',

    startContent,
    endContent,

    className = '',

    validate,
    onClick,
    value,
  } = props;

  const domRef = useDOMRef(null);
  const inputRef = useDOMRef(ref as ReactRef<HTMLInputElement>);

  const inputStyles = useMemo(() => _inputStyles({ class: className }), [className]);
  const containerStyles = useMemo(() => _containerStyles({ class: '' }), []);

  const handleContainerClick = (e: React.MouseEvent<HTMLElementType<T>, MouseEvent>) => {
    inputRef.current?.focus();
    onClick?.(e);
  };

  const handleInputClick = (e: React.MouseEvent<HTMLElementType<T>, MouseEvent>) => {};

  const parsedValue = useMemo(() => {
    // TODO: validate

    return value;
  }, [value, validate]);

  const spinnerElement = useMemo(() => {
    if (spinner) return spinner;
    if (size === 'md') return <Spinner size={14} borderWidth={3} />;
    if (size === 'sm') return <Spinner size={12} borderWidth={2} />;
    if (size === 'lg') return <Spinner size={18} borderWidth={4} />;
    return <Spinner />;
  }, [spinner, size]);

  const getContainerProps = () => {
    return { onClick: handleContainerClick };
  };

  const getInputProps = () => {
    const filteredProps = filterDOMProps({ ...(props as any), value: parsedValue }, { enabled: true });
    return { ...filteredProps, onClick: handleInputClick };
  };

  const Component = as || 'div';

  return {
    Component,
    domRef,
    inputRef,
    startContent,
    endContent,
    isLoading,
    spinner: spinnerElement,
    spinnerPlacement,
    getInputProps,
    getContainerProps,
    inputStyles,
    containerStyles,
    onClickContainer: handleContainerClick,
    onClickInput: handleInputClick,
  };
};
