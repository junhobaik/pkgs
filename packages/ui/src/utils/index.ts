import { css } from "styled-components";

export const camelToKebobCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`);

type StyleObject = Record<string, any>;

export const convertStylesToClassName = (styles: StyleObject) => {
  // JSON.stringify로 객체를 문자열로 변환하고, 불필요한 문자 제거
  return JSON.stringify(styles)
    .replace(/[{}":,&]/g, "") // 중괄호, 따옴표, 콜론, 쉼표, & 제거
    .replace(/\s+/g, ""); // 공백 제거
};

export const createStylesAPI = (props: {
  styles?: StyleObject;
  className?: string;
}) => {
  const { styles, className } = props;

  if (className) {
    console.log("className", className.split(" "));
  }

  if (!styles || !Object.keys(styles).length) return null;

  let resultStyle = "";

  const parsedClassName = className?.split(" ").join(".") ?? "";

  Object.entries(styles).forEach(([key, value]) => {
    const selector =
      key === "root"
        ? `&${parsedClassName ? `.${parsedClassName}` : ""}`
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

  const result = css`
    ${resultStyle}
  `;

  return result;
};
