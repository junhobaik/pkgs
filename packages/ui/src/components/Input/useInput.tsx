import { ElementType, useMemo, useState, useCallback } from 'react';
import { InputSize, UseInputProps } from './input.type';
import { Spinner } from '../Spinner';
import { useDOMRef } from '../../shared/hooks';
import * as styles from './input.style';
import { filterDOMProps } from '../../shared/utils';

// Constants
const SPINNER_SIZES: Record<InputSize, { size: number; borderWidth: number }> = {
  xs: { size: 10, borderWidth: 2 },
  sm: { size: 12, borderWidth: 2 },
  md: { size: 14, borderWidth: 3 },
  lg: { size: 18, borderWidth: 4 },
  xl: { size: 22, borderWidth: 4 },
};

export const useInput = <T extends ElementType = 'input'>(props: UseInputProps<T> & { as?: T }) => {
  const {
    ref,
    as,
    disabled = false,
    isLoading = false,
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
    type = 'text',
    passwordToggle = false,
    onClick,
    onFocus,
    onBlur,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const domRef = useDOMRef(null);
  const inputRef = useDOMRef(ref as ReactRef<HTMLInputElement>);

  const inputStyles = useMemo(() => styles.input({ size, spinnerPlacement, disabled, class: className }), [size, spinnerPlacement, className, disabled]);
  const inputContainerStyles = useMemo(
    () => styles.inputContainer({ variant, size, color, radius, fullWidth, disabled, isFocused, class: inputContainerClassName }),
    [variant, size, color, radius, fullWidth, disabled, inputContainerClassName, isFocused]
  );
  const labelStyles = useMemo(
    () => styles.label({ size, labelPlacement, isDescription: !!description, class: labelClassName }),
    [size, labelPlacement, labelClassName, description]
  );
  const descriptionStyles = useMemo(() => styles.description({ size, labelPlacement, class: descriptionClassName }), [size, labelPlacement, descriptionClassName]);
  const messageStyles = useMemo(() => styles.message({ size, color, labelPlacement, class: messageClassName }), [size, color, labelPlacement, messageClassName]);
  const containerStyles = useMemo(() => styles.container({ labelPlacement, class: containerClassName }), [labelPlacement, containerClassName]);

  const spinnerElement = useMemo(() => {
    if (spinner) return spinner;
    const { size: spinnerSize, borderWidth } = SPINNER_SIZES[size] || SPINNER_SIZES.md;
    return <Spinner size={spinnerSize} borderWidth={borderWidth} />;
  }, [spinner, size]);

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

  const handleContainerClick = useCallback(
    (e: React.MouseEvent<HTMLElementType<T>, MouseEvent>) => {
      inputRef.current?.focus();
      setIsFocused(true);
      onClick?.(e);
    },
    [onClick]
  );

  const handleDescriptionClick = useCallback(() => {
    inputRef.current?.focus();
    setIsFocused(true);
  }, []);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const getContainerProps = useCallback(() => ({ onClick: handleContainerClick }), [handleContainerClick]);

  const getInputProps = useCallback(() => {
    const filteredProps = filterDOMProps(props as any, { enabled: true });
    return {
      ...filteredProps,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
      type: type === 'password' && showPassword ? 'text' : type,
    };
  }, [props, handleInputFocus, handleInputBlur, type, showPassword]);

  const getLabelProps = useCallback(() => ({}), []);

  const getDescriptionProps = useCallback(() => ({ onClick: handleDescriptionClick }), [handleDescriptionClick]);

  const Component = as || 'div';

  // Return object
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
    description,
    label,
    labelPlacement,
    isFocused,
    message,
    type,
    showPassword,
    passwordToggle: passwordToggle && type === 'password',
    togglePasswordVisibility,
  };
};
