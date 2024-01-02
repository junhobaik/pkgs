import { useMemo } from 'react';
import cn from 'classnames';
import { buttonStyle } from './style.css';

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
  const { children = '', unset = false, upperCase = false, fullWidth = false, ...restProps } = props;

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

  return (
    <button
      className={cn([
        `ui-button--root`, //
        { 'ui-button--unset': unset },
        { 'ui-button--full-width': fullWidth },
        buttonStyle,
      ])}
    >
      {parsedChildren}
    </button>
  );
};

// const ButtonStyled = styled.button.withConfig({
//   shouldForwardProp: (prop) => !['unset', 'styles', 'upperCase'].includes(prop),
// })<ButtonProps>`
//   & {
// all: unset;
// display: flex;
// align-items: center;
// justify-content: center;
// user-select: none;
// cursor: pointer;

//     ${(props: ButtonProps) => {
//       if (props.unset) return '';

//       return css<ButtonProps>`
//         padding: 11px 21px;
//         border-radius: 980px;
//         transition: background-color 0.1s;
//         color: #ffffff;
//         background-color: #0071e3;

//         &:hover {
//           background-color: #0077ed;
//         }

//         &:active {
//           background-color: #006edb;
//         }

//         &:disabled {
//           background-color: #d8d8d8;
//           color: #8d8d8d;
//           cursor: default;
//         }

//         &.bp-button--full-width {
//           width: 100%;
//         }
//       `;
//     }}

//     ${(props: ButtonProps) => {
//       if (!props.styles) return ``;

//       return createStylesAPI(props);
//     }}
//   }
// `;
