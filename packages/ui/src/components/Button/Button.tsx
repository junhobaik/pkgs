import { forwardRef, ReactElement, useMemo, Ref, ElementType, ForwardRefRenderFunction, ForwardRefExoticComponent } from 'react';
import { useButton } from './useButton';
import { ButtonProps } from './button.type';

type ButtonComponent = ForwardRefExoticComponent<ButtonProps<any>> & {
  <T extends ElementType = 'button'>(props: ButtonProps<T> & { ref?: Ref<any> }): ReactElement;
  displayName?: string;
};

const ButtonBase: ForwardRefRenderFunction<unknown, ButtonProps<any>> = (props, ref) => {
  const { Component, children, domRef, styles, startContent, endContent, isLoading, spinnerPlacement, spinner, getButtonProps } = useButton({ ...props, ref });

  const buttonContent = useMemo(
    () => (
      <>
        {startContent}
        {isLoading && spinnerPlacement === 'start' && spinner}
        {children}
        {isLoading && spinnerPlacement === 'end' && spinner}
        {endContent}
      </>
    ),
    [startContent, isLoading, spinnerPlacement, spinner, children, endContent]
  );

  return (
    <Component {...getButtonProps()} className={styles} ref={domRef} aria-busy={isLoading}>
      {buttonContent}
    </Component>
  );
};

const Button = forwardRef(ButtonBase) as ButtonComponent;

Button.displayName = 'BaikUI.Button';

export default Button;
