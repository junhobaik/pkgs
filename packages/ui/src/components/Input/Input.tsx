import { ElementType, forwardRef, ForwardRefExoticComponent, ForwardRefRenderFunction, ReactElement, Ref, useId, useMemo } from 'react';
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
    type,
    showPassword,
    passwordToggle,
    togglePasswordVisibility,
  } = useInput({
    ...props,
    ref,
  });

  const topLabelView = (
    <div className={containerStyles}>
      {!!label && (
        <label htmlFor={id} className={labelStyles} {...getLabelProps()}>
          {label}
        </label>
      )}
      {!!description && (
        <p className={descriptionStyles} {...getDescriptionProps()}>
          {description}
        </p>
      )}
      <div>
        <Component ref={domRef} className={inputContainerStyles} {...getContainerProps()}>
          {startContent}
          {isLoading && spinnerPlacement === 'start' && spinner}
          <input id={id} className={inputStyles} ref={inputRef} {...getInputProps()} />
          {isLoading && spinnerPlacement === 'end' && spinner}
          {passwordToggle && <PasswordVisibilityIcon isVisible={showPassword} onClick={togglePasswordVisibility} />}
          {endContent}
        </Component>
        {!!message && <p className={messageStyles}>{message}</p>}
      </div>
    </div>
  );

  const leftLabelView = (
    <div className={containerStyles}>
      {!!label && (
        <label htmlFor={id} className={labelStyles} {...getLabelProps()}>
          {label}
        </label>
      )}
      <div>
        <Component ref={domRef} className={inputContainerStyles} {...getContainerProps()}>
          {startContent}
          {isLoading && spinnerPlacement === 'start' && spinner}
          <input id={id} className={inputStyles} ref={inputRef} {...getInputProps()} />
          {isLoading && spinnerPlacement === 'end' && spinner}
          {passwordToggle && <PasswordVisibilityIcon isVisible={showPassword} onClick={togglePasswordVisibility} />}
          {endContent}
        </Component>
        {!!description && (
          <p className={descriptionStyles} {...getDescriptionProps()}>
            {description}
          </p>
        )}
        {!!message && <p className={messageStyles}>{message}</p>}
      </div>
    </div>
  );

  if (labelPlacement === 'left') return leftLabelView;

  return topLabelView;
};

const Input = forwardRef(InputBase) as InputComponent;

Input.displayName = 'BaikUI.Input';

export default Input;
