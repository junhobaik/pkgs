// src/components/Input/useInput.tsx

import { ElementType, useEffect, useMemo, useState, useCallback } from 'react';
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
    variant = 'bordered',
    fullWidth = false,

    spinner,
    spinnerPlacement = 'end',

    startContent,
    endContent,

    className = '',
    containerClassName = '',

    validate,
    onClick,
    value,
    onFocus,
    onBlur,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const domRef = useDOMRef(null);
  const inputRef = useDOMRef(ref as ReactRef<HTMLInputElement>);

  const inputStyles = useMemo(() => _inputStyles({ size, spinnerPlacement, disabled, class: className }), [size, spinnerPlacement, className, disabled]);
  const containerStyles = useMemo(
    () =>
      _containerStyles({
        variant,
        size,
        color,
        radius,
        fullWidth,
        disabled,
        isFocused,
        class: containerClassName,
      }),
    [variant, size, color, radius, fullWidth, disabled, containerClassName, isFocused]
  );

  const handleInputFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus]
  );

  const handleInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleContainerClick = (e: React.MouseEvent<HTMLElementType<T>, MouseEvent>) => {
    inputRef.current?.focus();
    setIsFocused(true);
    onClick?.(e);
  };

  const handleInputClick = (e: React.MouseEvent<HTMLElementType<T>, MouseEvent>) => {
    setIsFocused(true);
  };

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
    return {
      ...filteredProps,
      onClick: handleInputClick,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
    };
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
    isFocused, // 새로 추가된 부분
  };
};
