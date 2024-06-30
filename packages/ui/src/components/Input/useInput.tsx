// src/components/Input/useInput.tsx

import { ElementType, useEffect, useMemo, useState, useCallback } from 'react';
import { UseInputProps } from './input.type';
import { Spinner } from '../Spinner';
import { useDOMRef } from '../../shared/hooks';
import * as styles from './input.style';
import { filterDOMProps } from '../../shared/utils';

export const useInput = <T extends ElementType = 'input'>(props: UseInputProps<T> & { as?: T }) => {
  const {
    ref,
    as,
    disabled = false,
    isLoading = false,

    value,

    label,
    labelPlacement = 'top',

    message,
    description,

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

    inputContainerClassName = '',
    containerClassName = '',
    labelClassName = '',
    descriptionClassName = '',
    messageClassName = '',

    onClick,
    onFocus,
    onBlur,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const domRef = useDOMRef(null);
  const inputRef = useDOMRef(ref as ReactRef<HTMLInputElement>);

  const inputStyles = useMemo(() => styles.input({ size, spinnerPlacement, disabled, class: className }), [size, spinnerPlacement, className, disabled]);
  const inputContainerStyles = useMemo(
    () =>
      styles.inputContainer({
        variant,
        size,
        color,
        radius,
        fullWidth,
        disabled,
        isFocused,
        class: inputContainerClassName,
      }),
    [variant, size, color, radius, fullWidth, disabled, inputContainerClassName, isFocused]
  );
  const labelStyles = useMemo(
    () => styles.label({ size, labelPlacement, isDescription: !!description, class: labelClassName }),
    [size, labelPlacement, labelClassName, description]
  );
  const descriptionStyles = useMemo(() => styles.description({ size, labelPlacement, class: descriptionClassName }), [size, labelPlacement, descriptionClassName]);
  const messageStyles = useMemo(() => styles.message({ size, color, labelPlacement, class: messageClassName }), [size, color, labelPlacement, messageClassName]);
  const containerStyles = useMemo(() => styles.container({ labelPlacement, class: containerClassName }), [labelPlacement, containerClassName]);

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

  const handleDescriptionClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

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
    const filteredProps = filterDOMProps({ ...(props as any) }, { enabled: true });
    return {
      ...filteredProps,
      onClick: handleInputClick,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
    };
  };

  const getLabelProps = () => {
    return {};
  };
  const getDescriptionProps = () => {
    return { onClick: handleDescriptionClick };
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
    getLabelProps,
    getDescriptionProps,
    inputStyles,
    inputContainerStyles,
    labelStyles,
    descriptionStyles,
    containerStyles,
    messageStyles,
    onClickContainer: handleContainerClick,
    onClickInput: handleInputClick,
    description,
    label,
    labelPlacement,
    isFocused,
    message,
  };
};
