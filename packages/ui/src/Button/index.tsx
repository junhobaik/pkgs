import { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { convertStylesToClassName, createStylesAPI } from '../utils';
import cn from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * children
   */
  children?: React.ReactNode;

  /**
   * 모든 스타일을 제거
   * @default false
   */
  unset?: boolean;

  /**
   * 버튼 내부 텍스트를 대문자로 표기합니다.
   * @default false
   */
  upperCase?: boolean;

  /**
   * 커스텀 스타일
   */
  styles?: Record<string, any>;

  /**
   * Full Width
   */
  fullWidth?: boolean;

  /**
   * TODO
   * Color
   */
  color?: string;
}

export const Button = (props: ButtonProps) => {
  const { children = '', unset = false, upperCase = false, fullWidth = false, styles = {}, ...restProps } = props;

  // children 파싱
  const parsedChildren = useMemo(() => {
    if (toString.call(children) === '[object String]') {
      let text = children as string;

      if (upperCase) text = text.toUpperCase();

      return (
        <>
          <p style={{ margin: 0 }} className="bp-button-text">
            {text}
          </p>
        </>
      );
    }

    return children;
  }, [children, upperCase]);

  const parsedStylesClassName = useMemo(() => {
    return Object.keys(styles).length ? convertStylesToClassName(styles) : '';
  }, [styles]);

  return (
    <ButtonStyled
      className={cn([`bp-button--root`, parsedStylesClassName, { 'bp-button--unset': unset }, { 'bp-button--full-width': fullWidth }])}
      {...restProps}
      unset={unset}
      styles={styles}
    >
      {parsedChildren}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button.withConfig({
  shouldForwardProp: (prop) => !['unset', 'styles', 'upperCase'].includes(prop),
})<ButtonProps>`
  & {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;

    ${(props: ButtonProps) => {
      if (props.unset) return '';

      return css<ButtonProps>`
        padding: 11px 21px;
        border-radius: 980px;
        transition: background-color 0.1s;
        color: #ffffff;
        background-color: #0071e3;

        &:hover {
          background-color: #0077ed;
        }

        &:active {
          background-color: #006edb;
        }

        &:disabled {
          background-color: #d8d8d8;
          color: #8d8d8d;
          cursor: default;
        }

        &.bp-button--full-width {
          width: 100%;
        }
      `;
    }}

    ${(props: ButtonProps) => {
      if (!props.styles) return ``;

      return createStylesAPI(props);
    }}
  }
`;
