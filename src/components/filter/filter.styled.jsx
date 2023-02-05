import styled from "styled-components";

export const FilterField = styled.input`
  width: 150px;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.red};
    outline: none;
  }
` 
export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.white};
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`