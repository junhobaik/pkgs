import { forwardRef, useEffect } from 'react';
import { useButton, UseButtonProps } from './useButton';

export interface ButtonProps extends UseButtonProps<'button'> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { Component, children, domRef, styles, startContent, endContent, isLoading, spinnerPlacement, spinner, ...buttonProps } = useButton({ ...props, ref });

  return (
    <Component {...buttonProps} className={styles} ref={domRef}>
      {startContent}
      {isLoading && spinnerPlacement === 'start' && spinner}
      {children}
      {isLoading && spinnerPlacement === 'end' && spinner}
      {endContent}
    </Component>
  );
});

Button.displayName = 'BaikUI.Button';

export default Button;
