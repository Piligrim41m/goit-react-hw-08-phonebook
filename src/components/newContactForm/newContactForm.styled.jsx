import styled from "styled-components";

export const Header = styled.p`
    margin: 0px 0 30px 0;
    font-size: 32px;
    font-weight: 700;
    color: ${p => p.theme.colors.white};
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5)
`
export const PhonebookForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 30px;
    align-items: center;
    justify-content: center;
`
export const Label = styled.label`
    font-weight: 500;
    font-size: 20px;
`

export const TypingField = styled.input`
    font-weight: 500;
    font-size: ${p => p.theme.fontSizes.xs}px;
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    :hover,
    :focus {
        border-color: ${p => p.theme.colors.red};
        outline: none;
  }
` 
export const SubmitButton = styled.button`
    width: 150px;
    border: none;
    color: white;
    display: block;
    font-weight: 500;
    padding: 10px 0;
    font-size: ${p => p.theme.fontSizes.xs}px;
    background-color: ${p => p.theme.colors.headerBgnd};
    border-radius: ${p => p.theme.radii.normal}px;
    :hover,
    :focus {
        text-decoration: underline 1px;
        scale: 105%;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }
`