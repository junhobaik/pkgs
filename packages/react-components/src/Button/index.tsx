import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children } = props;
  return <ButtonStyled>{children}</ButtonStyled>;
};

export { Button };

const ButtonStyled = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
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
`;
