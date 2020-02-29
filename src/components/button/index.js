import styled from "styled-components"

const Button = styled.button`
color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fsSmall};
  font-family: ${({ theme }) => theme.primaryFont};
  border: none;
  background-color: inherit;
  cursor: pointer;

    outline: none;
  }

  &:active {
    background-color: none;
  }
`

export default Button
