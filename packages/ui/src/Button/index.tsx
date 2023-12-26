import styled, { css } from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * children
   */
  children?: React.ReactNode;
  /**
   * 모든 스타일을 제거합니다.
   * @default false
   */
  unset?: boolean;
  styles?: Record<string, unknown>;
}

const Button = ({
  children = "",
  unset = false,
  styles = {},
  ...restProps
}: ButtonProps) => {
  // const { children = "", unset = false, styles = {}, ...restProps } = props;

  return (
    <ButtonStyled unset={unset} styles={styles} {...restProps}>
      {children}?
    </ButtonStyled>
  );
};

export { Button };

const ButtonStyled = styled.button.withConfig({
  shouldForwardProp: (prop) => !["unset", "styles"].includes(prop),
})<ButtonProps>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;

  ${(props: ButtonProps) => {
    if (props.unset) return "";

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
    `;
  }}

  ${(props: ButtonProps) => {
    if (!props.styles) return ``;

    return createStylesAPI(props.styles);
  }}
`;

const camelToKebobCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StyleObject = Record<string, any>;

const createStylesAPI = (props: {
  styles?: StyleObject;
  className?: string;
}) => {
  const { styles, className } = props;
  if (!styles || !Object.keys(styles).length) return null;

  let resultStyle = "";

  Object.entries(styles).forEach(([key, value]) => {
    const selector =
      key === "root"
        ? "&"
        : `.${camelToKebobCase(
            className?.split(" ")[0] ?? ""
          )}-${camelToKebobCase(key)}`;
    const cssContent = Object.entries(value).map(([styleKey, styleValue]) => {
      if (styleKey[0] === "&") {
        const nestedStyles = Object.entries(styleValue as StyleObject).map(
          ([nestedKey, nestedValue]) =>
            `${camelToKebobCase(nestedKey)}: ${nestedValue} !important;`
        );
        return `${styleKey} { ${nestedStyles.join(" ")} }`;
      }
      return `${camelToKebobCase(styleKey)}: ${styleValue} !important;`;
    });

    resultStyle += `${selector} { ${cssContent.join(" ")} }\n`;
  });

  return css`
    ${resultStyle}
  `;
};
