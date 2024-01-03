import { useMemo } from 'react';
import { additionalStyles, buttonRecipeStyle } from './style.css';
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
   * Full Width
   */
  fullWidth?: boolean;

  /**
   * Color, "blue" | "orange" | ...
   */
  color?: 'gray' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'orange';
}

export const Button = (props: ButtonProps) => {
  const { children = '', unset = false, upperCase = false, fullWidth = false, color = 'blue', ...restProps } = props;

  // children 파싱
  const parsedChildren = useMemo(() => {
    if (toString.call(children) === '[object String]') {
      let text = children as string;

      if (upperCase) text = text.toUpperCase();

      return (
        <p style={{ margin: 0 }} className="bp-button-text">
          {text}
        </p>
      );
    }

    return children;
  }, [children, upperCase]);

  return (
    <button
      className={cn([
        `ui-button`, //
        {
          [buttonRecipeStyle({
            color,
          })]: !unset,
        },
        { [additionalStyles.unset]: unset },
        { [additionalStyles.fullWidth]: fullWidth },
      ])}
      disabled={props.disabled ?? false}
      {...restProps}
    >
      {parsedChildren}
    </button>
  );
};
