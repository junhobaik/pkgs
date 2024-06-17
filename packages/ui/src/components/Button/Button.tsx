// Button.tsx

import { forwardRef } from 'react';
import { useButton } from './useButton';
import { type ButtonProps } from './button.type';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { Component, children, domRef, styles, startContent, endContent, isLoading, spinnerPlacement, spinner, getButtonProps } = useButton({ ...props, ref });

  return (
    <Component {...getButtonProps()} className={styles} ref={domRef}>
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
