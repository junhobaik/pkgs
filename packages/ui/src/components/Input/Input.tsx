import { ElementType, forwardRef, ForwardRefExoticComponent, ForwardRefRenderFunction, ReactElement, Ref, useId } from 'react';
import { InputProps } from './input.type';
import { useInput } from './useInput';
import PasswordVisibilityIcon from './etc/PasswordVisibilityIcon';

type InputComponent = ForwardRefExoticComponent<InputProps<any>> & {
  <T extends ElementType = 'div'>(props: InputProps<T> & { ref?: Ref<any> }): ReactElement;
  displayName?: string;
};

const InputBase: ForwardRefRenderFunction<unknown, InputProps<any>> = (props, ref) => {
  const id = useId();
  const {
    Component,
    label,
    labelPlacement,
    labelStyles,
    description,
    descriptionStyles,
    containerStyles,
    message,
    domRef,
    inputRef,
    inputStyles,
    messageStyles,
    inputContainerStyles,
    startContent,
    endContent,
    isLoading,
    spinnerPlacement,
    spinner,
    getInputProps,
    getLabelProps,
    getDescriptionProps,
    getContainerProps,
    passwordToggle,
    showPassword,
    togglePasswordVisibility,
  } = useInput({
    ...props,
    ref,
  });

  const labelEl = label && (
    <label htmlFor={id} className={labelStyles} {...getLabelProps()}>
      {label}
    </label>
  );

  const descriptionEl = description && (
    <p className={descriptionStyles} {...getDescriptionProps()}>
      {description}
    </p>
  );

  const messageEl = message && <p className={messageStyles}>{message}</p>;

  const inputContainerEl = (
    <Component ref={domRef} className={inputContainerStyles} {...getContainerProps()}>
      {startContent}
      {isLoading && spinnerPlacement === 'start' && spinner}
      <input id={id} className={inputStyles} ref={inputRef} {...getInputProps()} />
      {isLoading && spinnerPlacement === 'end' && spinner}
      {passwordToggle && <PasswordVisibilityIcon isVisible={showPassword} onClick={togglePasswordVisibility} />}
      {endContent}
    </Component>
  );

  return (
    <div className={containerStyles}>
      {labelEl}
      {labelPlacement === 'top' && descriptionEl}
      <div>
        {inputContainerEl}
        {labelPlacement === 'left' && descriptionEl}
        {messageEl}
      </div>
    </div>
  );
};

const Input = forwardRef(InputBase) as InputComponent;

Input.displayName = 'BaikUI.Input';

export default Input;
