import styled from "styled-components";

export const UserMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const Salutation = styled.p`
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.white}

`

export const UserName = styled.span`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  
`;

export const LogOutButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: ${p => p.theme.radii.normal}px;
  background-color: ${p => p.theme.colors.darkBackground};
  border: none;
  font-weight: 550;
  :hover,
  :focus {
    text-decoration: underline 1px;
    scale: 105%;
    box-shadow: 2px 2px 2px rgba(255, 204, 204, 0.2);
  }
`;