import { ElementType, forwardRef, ForwardRefExoticComponent, ForwardRefRenderFunction, ReactElement, Ref, useMemo } from 'react';
import { InputProps } from './input.type';
import { useInput } from './useInput';

type InputComponent = ForwardRefExoticComponent<InputProps<any>> & {
  <T extends ElementType = 'div'>(props: InputProps<T> & { ref?: Ref<any> }): ReactElement;
  displayName?: string;
};

const InputBase: ForwardRefRenderFunction<unknown, InputProps<any>> = (props, ref) => {
  const { Component, domRef, inputRef, inputStyles, containerStyles, startContent, endContent, isLoading, spinnerPlacement, spinner, getInputProps, getContainerProps } = useInput({
    ...props,
    ref,
  });

  return (
    <Component className={containerStyles} ref={domRef} {...getContainerProps()}>
      {startContent}
      {isLoading && spinnerPlacement === 'start' && spinner}
      <input className={inputStyles} ref={inputRef} {...getInputProps()} />
      {isLoading && spinnerPlacement === 'end' && spinner}
      {endContent}
    </Component>
  );
};

const Input = forwardRef(InputBase) as InputComponent;

Input.displayName = 'BaikUI.Input';

export default Input;
